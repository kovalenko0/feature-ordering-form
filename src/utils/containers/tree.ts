class TreeNode<Content> {
  protected readonly _canHaveChildren: boolean = false

  public canHaveChildren(): this is TreeBranch<Content> {
    return this._canHaveChildren
  }

  constructor(
    public content?: Content
  ) {}
}

class TreeBranch<Content> extends TreeNode<Content> {
  protected readonly _canHaveChildren = true

  private children = new Set<TreeNode<Content>>()

  public getChildrenIterator() {
    return this.children.entries()
  }

  public addBranch(content?: Content): TreeBranch<Content> {
    const child = new TreeBranch<Content>(content)

    this.children.add(child)

    return child
  }

  public addLeaf(content?: Content): TreeNode<Content> {
    const child = new TreeNode<Content>(content)

    this.children.add(child)

    return child
  }
}

export class TreeIterator<Content> {
  constructor(
    public tree: TreeNode<Content>
  ) {
    if (tree.canHaveChildren()) {
      this.currentNode = tree
      this.currentNodeIterator = tree.getChildrenIterator()
      this.currentIndex = 0
    } else {
      throw new Error('TreeIterator can only be created for nodes, that can have children')
    }
  }

  private currentNode: TreeNode<Content>
  
  private currentIndex: number

  private currentNodeIterator: IterableIterator<[TreeNode<Content>, TreeNode<Content>]>

  public getIndex() {
    return this.currentIndex
  }

  public getNode() {
    return this.currentNode
  }

  public next() {
    const result = this.currentNodeIterator.next()
  }
}

export function createTreeRoot<Content>(content?: Content) {
  return new TreeBranch<Content>(content)
}

const myTree = createTreeRoot<string>('0')

myTree.addBranch('0.0').addLeaf('0.0.0')
