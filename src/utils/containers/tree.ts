import { addIfMissing } from '../array-utils'

export class TreeNode<BranchContent, LeafContent> {
  protected canHaveChildren: boolean

  public content: BranchContent | LeafContent

  public isBranch(): this is TreeBranch<BranchContent, LeafContent> {
    return this.canHaveChildren
  }
  public isLeaf(): this is TreeLeaf<BranchContent, LeafContent> {
    return !this.canHaveChildren
  }
}

export class TreeBranch<BranchContent, LeafContent> extends TreeNode<BranchContent, LeafContent> {
  constructor(content: BranchContent) {
    super()
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
    const child = new TreeBranch<BranchContent, LeafContent>(content)
    this.children.push(child)
    return child
  }

  public addLeaf(content: LeafContent): TreeNode<BranchContent, LeafContent> {
    const child = new TreeLeaf<BranchContent, LeafContent>(content)
    this.children.push(child)
    return child
  }
}

export class TreeLeaf<BranchContent, LeafContent> extends TreeNode<BranchContent, LeafContent> {
  constructor(content: LeafContent) {
    super()
    this.content = content
  }

  public content: LeafContent
}

export function createTreeRoot<BranchContent, LeafContent>(content: BranchContent) {
  return new TreeBranch<BranchContent, LeafContent>(content)
}

const myTree = createTreeRoot<string, string>('0  ')

myTree.addBranch('0.0').addLeaf('0.0.0')
