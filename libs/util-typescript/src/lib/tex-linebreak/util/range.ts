declare global {
  interface Range {
    intersectsNode(node: Node): boolean;
  }
}

/**
 * Return a list of `Text` nodes in `range`.
 *
 * `filter` is called with each node in document order in the subtree rooted
 * at `range.commonAncestorContainer`. If it returns false, that node and its
 * children are skipped.
 */
export const textNodesInRange = (
  range: Range,
  filter: (n: Node) => boolean
): Text[] => {
  const root = range.commonAncestorContainer;
  const nodeIter = root.ownerDocument?.createTreeWalker(
    root,
    NodeFilter.SHOW_ALL,
    {
      acceptNode(node: Node) {
        if (filter(node)) {
          return NodeFilter.FILTER_ACCEPT;
        }

        return NodeFilter.FILTER_REJECT;
      },
    }
  );

  const nodes: Text[] = [];
  if (typeof nodeIter !== 'undefined') {
    let { currentNode } = nodeIter;

    while (typeof currentNode !== 'undefined') {
      if (range.intersectsNode(currentNode) && currentNode instanceof Text) {
        nodes.push(currentNode);
      }

      currentNode = nodeIter.nextNode() ?? undefined;
    }
  }

  return nodes;
};
