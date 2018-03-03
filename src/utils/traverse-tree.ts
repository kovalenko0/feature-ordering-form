import { TreeNode, TreeBranch } from "./containers/tree";
import { lastItem } from "./array-utils";

export type ItemVisitor<BranchContent, LeafContent> =
  (
    node: TreeNode<BranchContent, LeafContent>,
    indexInBranch: number,
    branchItems: TreeNode<BranchContent, LeafContent>[],
    pathFromRoot: number[]
  ) => void

export function traverseTree<BranchContent, LeafContent>(tree: TreeNode<BranchContent, LeafContent>, itemVisitor: ItemVisitor<BranchContent, LeafContent>) {
  itemVisitor(tree, 0, [tree], [0])

  if (tree.isBranch()) {
    traverse(tree, itemVisitor, [0])
  }
}

function traverse<BranchContent, LeafContent>(node: TreeBranch<BranchContent, LeafContent>, itemVisitor: ItemVisitor<BranchContent, LeafContent>, path: number[]) {
  node
    .getChildren()
    .forEach((child, index, items) => {
      const newPath = [...path, index]
      
      itemVisitor(child, index, items, newPath)

      if (child.isBranch()) {
        traverse(child, itemVisitor, newPath)
      }
    })
}