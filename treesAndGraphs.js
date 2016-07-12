//Nodes
class PolyNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class BNode {
  constructor(value) {
    this.value = value;
    this.left;
    this.right;
  }
}

//Binary Tree
class BinaryTree {
  constructor() {
    this.root = null;
  }
  
  find(value) {
    let node = this.root;
    while(node !== null) {
      if(node.value === value) {
        return true;
      }
      else if(value < node.value) {
        node = node.left;
      }
      else {
        node = node.right;
      }
    }
    return false;
  }
  
  insert(value) {
    if(this.find(value)) throw "Value already inserted";
    let newNode = new BNode(value);
    if(this.root === null) {
      this.root = newNode;
    }
    else {
      let current = this.root;
      while(current !== null) {
        if(value < current.value) {
          if(current.left === null) {
            current.left = newNode;
            break;
          }
          current = current.left;
        }
        if(value > current.value) {
          if(current.right === null) {
            current.right = newNode;
            break;
          }
          current = current.right;
        }
      }
    }
  }
  
  remove(value) {
    if(!this.find(value)) throw "Value is not in tree";
    let current = this.root;
    let parent;
    while(current !== null) {
      if(value < current.value) {
        if(current.left !== null && current.left.value === value) {
          
          break;
        }
        current = current.left;
      }
      if(value > current.value) {
        if(current.right !== null && current.right.value === value) {
          
          break;
        }
        current = current.right;
      }
    }
  }

  //Binary Tree traversals
  function inorder(node) {
    if(node !== null) {
      inorder(node.left);
      console.log(node);
      inorder(node.right);
    }
  }

  function preorder(node) {
    if(node !== null) {
      console.log(node);
      preorder(node.left);
      preorder(node.right);
    }
  }

  function postorder(node) {
    if(node !== null) {
      postorder(node.left);
      postorder(node.right);
      console.log(node);
    }
  }

}
//Binary Heap
class MinHeap {
  constructor() {
    this.content = [];
  }
  
  insert(element) {
    this.content.push(element);
    this.bubbleUp(this.content.length - 1);
  }
  
  pop() {
    let min = this.content[0];
    let end = this.content.pop();
    if(this.content.length > 0) {
      this.content[0] = end;
      this.sinkDown(0);
    }
    return min;
  }
  
  bubbleUp(idx) {
    let element = this.content[idx];
    while(idx !== 0) {
      let parentIdx = Math.floor((idx + 1)/2) - 1, parent = this.content[parentIdx];
      if(parent < element) {
        break;
      }
      this.content[idx] = parent;
      this.content[parentIdx] = element;
      idx = parentIdx;
    }
  }
  
  sinkDown(idx) {
    let element = this.content[idx];
    let length = this.content.length;
    while(true) {
      let child2Idx = 2*(idx + 1), child1Idx = child2Idx - 1, swapIdx = null;
      if(child1Idx < length) {
        if(this.content[child1Idx] < element) swapIdx = child1Idx;
      }
      if(child2Idx < length) {
        if(this.content[child2Idx] < (swapIdx === null ? element : this.content[swapIdx])) swapIdx = child2Idx;
      }
      if(swap === null) break;
      this.content[idx] = this.content[swapIdx];
      this.content[swapIdx] = element;
      idx = swapIdx;
    }
  }
  
  extractMin() {
    if(this.content.length == 0) throw "Heap is empty";
    return this.content[0];
  }
}

//Trie
class Trie {
  constructor() {
    this.root = {};
  }
  
  insert(string) {
    if(typeof string !== "string") throw "Argument is not a string";
    let current = this.root;
    for(let i  = 0; i < string.length; i++) {
      if(!current[string[i]]) {
        current[string[i]] = {};
      }
      current = current[string[i]];
    }
    current.* = true;
  }
  
  hasWord(string) {
    if(typeof string !== "string") throw "Argument is not a string";
    let current = this.root;
    for(let i = 0; i < string.length; i++) {
      if(!current[string[i]]) {
        return false;
      }
      current = current[string[i]];
    }
    return current.* === true;
  }
  
  remove(string) {
    if(typeof string !== "string") throw "Argument is not a string";
    if(!this.hasWord(string)) throw "Word is not in the trie";
    let current = this.root, nodes = [];
    for(let i  = 0; i < string.length; i++) {
      nodes.push([string[i], current]);
      current = current[string[i]];
    }
    nodes = nodes.reverse();
    current = nodes[0][1].nodes[0][0];
    delete current.*
    while(!current.*) {
      let node = nodes.shift();
      current = node[0][1].nodes[0][0]
    }
  }
}

//Graph Nodes + DFS + BFS
class Node {
  constructor(value) {
    this.value = value;
    this.parent = null;
    this.children = [];
  }

  setParent(node) {
    let oldParent = this.parent;
    this.parent = node;
    if(node) node.children.push(this);
    if(oldParent) oldParent.children.splice(oldParent.children.indexOf(this), 1);
  }

  addChild(node) {
    node.setParent(this);
  }

  removeChild(node) {
    node.setParent(null);
  }

  dfs(value) {
    let visited = {};
    if(this.value === value) {
      return true;
    }
    else {
      for(var i = 0; i < this.children.length; i++) {
        if(!visited[this.children[i]]) {
          visited[this.children[i]] = true;
          this.children[i].dfs(value);
        }
      }
    }
  }

  bfs(value) {
    let nodes = [this];
    while(nodes.length > 0) {
      let currentNode = nodes.shift();
      if(currentNode.value === value) return true;
      nodes = nodes.concat(currentNode.children);
    }
    return false
  }
}

//4.1 O(N + M) time checks if route between 2 node of a directed graph
function routeBetweenNodes(node1, node2) {
  return node1.bfs(node2.value) || node2.bfs(node1.value);
}

//4.2 
function minimalTree(arr) {
  let mid = Math.floor(arr.length/2);
  let tree = new BST();
  tree.root = new Node(arr[mid]);
  let left = arr.slice(0, mid), right = arr.slice(mid + 1);
  while(left.length > 0 || right.length > 0) {
    let leftMid = Math.floor(left.length/2), rightMid = Math.floor(right.length/2);
    if(left.length > 0) {
      tree.insert(left[leftMid]);
      left.splice(leftMid, 1);
    }
    if(right.length > 0) {
      tree.insert(right[rightMid]);
      right.splice(rightMid, 1);
    }
  }
  return tree;
}

//4.3
function listOfDepths(binaryTree) {

}