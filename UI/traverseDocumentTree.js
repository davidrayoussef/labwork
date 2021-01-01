function traverseDocumentTree(tree, fn) {
  let queue = [];
  queue.push(tree);
  while (queue.length !== 0) {
    let currentNode = queue.shift();
    fn(currentNode);
    if (currentNode?.childNodes) {
      currentNode.childNodes.forEach(child => {
        queue.push(child);
      });
    }
  }
}

traverseDocumentTree(document.documentElement, node => console.log(node));

// Or use document.createTreeWalker()
const treeWalker = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_ELEMENT);

let currentNode = treeWalker.currentNode;

while (currentNode) {
  console.log(currentNode);
  currentNode = treeWalker.nextNode();
}
