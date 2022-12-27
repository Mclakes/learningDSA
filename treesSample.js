// function BinaryTreeNode (values) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
// }

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode; 
        } else {
            let currentNode = this.root;
            while(true) {
                if (value < currentNode.value) {
                    // left
                    if(!currentNode.left) {
                        currentNode.left = newNode;
                        return this
                    }
                    currentNode = currentNode.left
                } else {
                    //right
                    if(!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right
                }
            }
        }
    }
    lookup (value) {
      if (!this.root)  {
        return false;
      }
      let currentNode = this.root;
      while(currentNode) {
        if (value < currentNode.value) {
            currentNode = currentNode.left
        } else if (value > currentNode.value) {
            currentNode = currentNode.right;
        } else if (currentNode.value === value) {
            return currentNode;
        }
      }
      return false;
    }
    remove(value) {
        if(!this.root) {
            return false;
        }
        let currentNode = this.root;
        let parentNode = null;
        while(currentNode) {
            if (value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left; 
            } else if (value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right; 
            }  else if (currentNode.value === value) {
                if (currentNode.right === null) {
                    if(parentNode === null) {
                        this.root = currentNode.left;
                    } else {
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.left;
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.left
                        }
                    }
                } else if(currentNode.right.left === null){
                    if (parentNode == null) {
                        this.root = currentNode.left
                    } else {
                        currentNode.right.left = currentNode.left;
                        if (currentNode.value <parentNode.value) {
                            parentNode.left = currentNode.right;
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.right;
                        }
                    }
                } else {
                    let leftmost = curentNode.right.left;
                    let leftmostParent = curentNode.right;
                    while(leftmost.left !== null) {
                        leftmostParent =leftmost;
                        leftmost = leftmost.left
                    }
                    leftmost.left = leftmost.right;
                    leftmost.left = currentNode.left;
                    leftmost.right = currentNode.right;

                    if (parentNode === null) {
                        this.root = leftmost;
                    } else {
                        if(currentNode.value < parentNode.value) {
                            parent.left = leftmost;
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = leftmost
                        }
                    }
                }
                return true; 
            }
        }
    }
    breadthFirstSearch() {
        let currentNode = this.root;
        let list = [];
        let queue = [];
        queue.push(currentNode);

        while(queue.length) {
            currentNode = queue.shift();
            console.log(currentNode.value)
            list.push(currentNode.value);
            if(currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right){
                queue.push(currentNode.right);
            }
        }
    }

}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
// console.log(tree.lookup(2));
// console.log(tree.remove(170));
console.log( JSON.stringify(traverse(tree.root))); 
console.log(tree.breadthFirstSearch())

function traverse(node) {
    const tree = {value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}
