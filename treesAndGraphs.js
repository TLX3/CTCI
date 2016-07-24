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

/**
4.1
O(E) time O(V) space
Use BFS if nodes don't have a high degree or paths between nodes are not exceedingly deep.
Use DFs if nodes have long paths.
 */
function routeBetweenNodes(node1, node2) {
  return node1.bfs(node2.value);
}

function routeBetweenNodes2(node1, node2) {
  return node1.dfs(node2.value);
}

/**
4.2
O(NlgN) time O(N) space
*/
function minimalTree(arr) {
  let mid = Math.floor(arr.length/2);
  let tree = new BST();
  if(arr.length > 0) {
    add(tree, arr, 0, arr.length - 1);
  }
  return tree;
}

function add(tree, arr, start, end) {
  if(start === end) {
    tree.add(arr[start]);
  }
  else {
    let mid = start + Math.floor((end - start)/2);
    tree.add(arr[mid]);
    add(tree, arr, start, mid - 1);
    add(tree, arr, mid + 1, end);
  }
}

/**
4.3
O(N) time O(N) space
*/
function listByDepth(binaryTree) {
  let depths = [];
  addToLists(depths, binaryTree.root, 0);
  return depths;
}

function addToLists(list, node, depth) {
  if(!list[depth]) {
    list[depth] = new LinkedList();
  }
  list[depth].append(node);
  addToLists(list, node.left, depth + 1);
  addToLists(list, node.right, depth + 1);
}

/**
4.4
O(N) time O(H) space
*/
function checkBalanced(binaryTree) {
  let pathsToLeaf = {min: Number.MAX_SAFE_INTEGER, max: 0};
  findDepth(pathsToLeaf, binaryTree.root, 0);
  return pathsToLeaf.max - pathsToLeaf.min <= 1;
}

function findDepth(cache, node, depth) {
  if(!node) {
    if(depth < cache.min) {
      cache.min = depth;
    }
    if(depth > cache.max) {
      cache.max = depth;
    }
  }
  else {
    findDepth(cache, node.left, depth + 1);
    findDepth(cache, node.right, depth + 1);
  }
}

/**
4.5
O(N) time O(lgN) space
*/
function validateBST(binaryTree) {
  return checkBST(tree.root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
}

function checkBST(node, min, max) {
  if(node) {
    if(node.value < min || node.value > max) {
      return false;
    }
    return checkBST(node.left, min, node.value) &&
           checkBST(node.right, node.value, max);
  }
  return true;
}

/**
4.6
O(lgN) time O(1) space
*/
function inorderSuccessor(node) {
  let current = node;
  if(current.right) {
    current = current.right;
    while(current.left) {
      current = current.left;
    }
    return current.value;
  }
  else {
    while(current.parent && current !== current.parent.left) {
      current = current.parent;
    }
    return current.parent ? current.parent.value : undefined;
  }
}

/**
4.7
O(N + M) time O(N) space
*/
function buildOrder(projects, dependencies) {
  let adjacencyM = {}, finished = [], seen = {}, path = {};
  projects.forEach(p => adjacencyM[p] = []);
  dependencies.forEach(edge => adj[edge[1]].push(edge[0]));
  projects.forEach(p => topologicalSort(adjacencyM, seen, finished, path, p));
  return finished.reverse();
}

function topologicalSort(adjacencyM, seen, finished, path, project) {
  if(seen[project]) return;
  seen[project] = true;
  path[project] = true;
  for(let neighbor of adjacencyM[project]) {
  if(path[neighbor]) {
    throw "cyclic dependency";
  }
  topologicalSort(adjacencyM, seen, finished, path, neighbor);
  }
  delete path[project];
  finished.push(project);
}

/**
4.8
O(lgN) time O(1) space
*/
function firstCommonAncestor(node1, node2) {
  let depth1 = distFromRoot(node1), depth2 = distFromRoot(node2);
  node1 = moveUp(node1, depth1 - depth2);
  node2 = moveUp(node2, depth2 - depth1);
  while(node1 !== node2) {
    node1 = node1.parent;
    node2 = node2.parent;
  }
  return node1;
}

function distFromRoot(node) {
  let count = 0;
  while(node) {
    node = node.parent;
    count += 1;
  }
  return count;
}

function moveUp(node, amount) {
  for(let i = 0; i < amount; i++) {
    node = node.parent;
  }
  return node;
}

/**
4.9

*/
function treeSequences(binaryTree) {
  let sequences = [];
  createPaths(sequences, binaryTree.root);
  return sequences;
}

function createPaths(sequences, node) {
  let seq = [];
  if(!node) {
    sequences.push(seq);
  }
  else {
    seq.push()
  }
}

/**
4.10
O(N*M) time
*/
function isSubstree(tree1, tree2) {
  let node = tree2.root;
  let possibleRoot = tree1.findNode(node);
  if(possibleRoot) {
    return sameTree(possibleRoot);
  }
  return false;
}

/**
4.11
*/
function randomNode(tree) {

}

/**
4.12
O(NlgN) time O(N) space
*/
function findPathsWithSum(binaryTree, value) {
  return pathSums([], binaryTree.root, value);
}

function pathSums(path, node, value) {
  let count = 0;
  if(node) {
    path.push(node.value);
    let sum = 0;
    for(let i = path.length - 1; i >= 0; i--) {
      sum += path[i];
      if(sum === value) {
        count += 1;
      }
    }
    count += pathSums(path, node.left, value)
           + pathSums(path, node.right, value);
    path.pop();
  }
  return count;
}
