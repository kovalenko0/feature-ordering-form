import { addIfMissing, contains, remove } from '../array-utils'
import { traverseTree } from '../traverse-tree';
import { ObservableOutput, ObservableValue, Emitter } from '../observable-value';

export class TreeNode<BranchContent, LeafContent> {
  constructor (private parent: TreeNode<BranchContent, LeafContent> | null) {
    this._stateUpdated = new ObservableValue<TreeNode<BranchContent, LeafContent>>(this)
  }

  protected dispatchUpdate() {
    if (this.parent) {
      this.parent.dispatchUpdate()
    }
    this._stateUpdated.set(this)
  }

  protected canHaveChildren: boolean

  protected _content: BranchContent | LeafContent

  private _stateUpdated: ObservableValue<TreeNode<BranchContent, LeafContent>>

  public get stateUpdated(): Emitter<TreeNode<BranchContent, LeafContent>> {
    return this._stateUpdated
  }

  public get content(): BranchContent | LeafContent {
    return this._content
  }
  public set content(newContent: BranchContent | LeafContent) {
    this._content = newContent
    this.dispatchUpdate()
  }

  public isBranch(): this is TreeBranch<BranchContent, LeafContent> {
    return this.canHaveChildren
  }
  public isLeaf(): this is TreeLeaf<BranchContent, LeafContent> {
    return !this.canHaveChildren
  }
}

export class TreeBranch<BranchContent, LeafContent> extends TreeNode<BranchContent, LeafContent> {
  constructor(content: BranchContent, parent: TreeNode<BranchContent, LeafContent> | null) {
    super(parent)
    this.canHaveChildren = true
    this.content = content
  }

  public content: BranchContent

  private children: TreeNode<BranchContent, LeafContent>[] = []

  public getChildren() {
    return this.children.slice()
  }

  public getChildrenIterator() {
    return this.children.entries()
  }

  public addBranch(content: BranchContent): TreeBranch<BranchContent, LeafContent> {
    const child = new TreeBranch<BranchContent, LeafContent>(content, this)
    this.children.push(child)
    this.dispatchUpdate()
    return child
  }

  public addLeaf(content: LeafContent): TreeNode<BranchContent, LeafContent> {
    const child = new TreeLeaf<BranchContent, LeafContent>(content, this)
    this.children.push(child)
    this.dispatchUpdate()
    return child
  }

  public removeChild(node: TreeNode<BranchContent, LeafContent>) {
    remove(this.children, node)
    this.dispatchUpdate()
  }
}

export class TreeLeaf<BranchContent, LeafContent> extends TreeNode<BranchContent, LeafContent> {
  constructor(content: LeafContent, parent: TreeNode<BranchContent, LeafContent> | null) {
    super(parent)
    this.content = content
  }

  public content: LeafContent
}

export function createTreeRoot<BranchContent, LeafContent>(content: BranchContent) {
  return new TreeBranch<BranchContent, LeafContent>(content, null)
}

export function findParent<BranchContent, LeafContent>(root: TreeNode<BranchContent, LeafContent>, node: TreeNode<BranchContent, LeafContent>): TreeBranch<BranchContent, LeafContent> {
  if (root == node) {
    throw new Error(`Root node can't be a child`)
  }

  let result = null

  traverseTree(root, possibleParent => {
    if (possibleParent.isBranch() && contains(possibleParent.getChildren(), node)) {
      result = possibleParent
    }
  })

  if (result == null) {
    throw new Error(`Node doesn't belong to specified tree`)
  }

  return result
}

interface PlainTree {
  content: string,
  children?: PlainTree[]
}

export function serializeTree<BranchContent, LeafContent>(
  root: TreeNode<BranchContent, LeafContent>,
  branchContentSerializer: (content: BranchContent) => string,
  leafContentSerializer: (content: LeafContent) => string
) {
  return JSON.stringify(convertToPlainTree(root, branchContentSerializer, leafContentSerializer))
}

function convertToPlainTree<BranchContent, LeafContent>(
  root: TreeNode<BranchContent, LeafContent>,
  branchContentSerializer: (content: BranchContent) => string,
  leafContentSerializer: (content: LeafContent) => string,
  plainTree = {} as PlainTree
) {
  if (root.isBranch()) {
    plainTree.content = branchContentSerializer(root.content)
    plainTree.children = root.getChildren().map(child => convertToPlainTree(child, branchContentSerializer, leafContentSerializer))
  }
  if (root.isLeaf()) {
    plainTree.content = leafContentSerializer(root.content)
  }
  return plainTree
}

export function deserializeTree<BranchContent, LeafContent>(
  serialized: string,
  branchContentDeserializer: (content: string) => BranchContent,
  leafContentDeserializer: (content: string) => LeafContent
) {
  const plainTree = JSON.parse(serialized) as PlainTree

  try {
    return convertFromPlainTree(null, branchContentDeserializer, leafContentDeserializer, plainTree)
  } catch(e) {
    throw new Error('Unable to parse serialized tree')
  }
}

function convertFromPlainTree<BranchContent, LeafContent>(
  root: TreeBranch<BranchContent, LeafContent> | null,
  branchContentDeserializer: (content: string) => BranchContent,
  leafContentDeserializer: (content: string) => LeafContent,
  plainTree: PlainTree
) {
  if (root == null) {
    root = createTreeRoot<BranchContent, LeafContent>(branchContentDeserializer(plainTree.content))
    if (plainTree.children) {
      plainTree.children.forEach(child => convertFromPlainTree(root, branchContentDeserializer, leafContentDeserializer, child))
    }
  } else if (plainTree.children) {
    const branch = root.addBranch(branchContentDeserializer(plainTree.content))
    plainTree.children.forEach(child => convertFromPlainTree(branch, branchContentDeserializer, leafContentDeserializer, child))
  } else {
    root.addLeaf(leafContentDeserializer(plainTree.content))
  }
  return root
}