//Node
class Node {
  constructor(data) {
    this.next = null;
    this.prev = null;
    this.data = data;
  }
}
//DoublyLinkedList
class LinkedList {
  constructor(data) {
    this.head = new Node(data)
  }
  
  append(data) {
    let node = this.head;
    let newNode = new Node(data);
    while(node.next !== null) {
      node = node.next;
    }
    node.next = newNode;
    newNode.prev = node;
  }
  
  remove(data) {
    let node = this.head;
    while(node !== null && node.data !== data) {
      node = node.next;
    }
    if(node === null) return false;
    if(!node.prev && !node.next) return false;
    if(node === this.head) {
      this.head = this.head.next;
      this.head.prev = null;
    }
    if(node.prev) node.prev.next = node.next;
    if(node.next) node.next.prev = node.prev;
  }
}

//2.1 //O(N^2)
function removeDups(linkedList) {
  let seen = {};
  let dups = [];
  let node = linkedList.head;
  while(node.next !== null) {
    if(seen[node.data]) {
      dups.push(node.data);
      seen[node.data] += 1;
    }
    else {
      seen[node.data] = 1;
    }
    node = node.next;
  }
  dups.forEach(dup => {
    linkedList.remove(dup);
  });
}

//2.2 O(N)
function kthToLast(k, linkedList) {
  let node = linkedList.head;
  let runner = linkedList.head;
  let length = 0;
  let count = 0;
  while(runner.next !== null) {
    runner = runner.next;
    length += 1;
  }
  while(count !== length - 1 - k) {
    node = node.next;
    counts += 1;
  }
  linkedList.remove(node);
}

//2.3 O(N)
function deleteMiddleNode(linkedList) {
  let node = linkedList.head;
  let runner = linkedList.head;
  let length = 0;
  let count = 0;
  while(runner.next !== null) {
    runner = runner.next;
    length += 1;
  }
  while(count !== Math.floor(length/2)) {
    node = node.next;
    counts += 1;
  }
  linkedList.remove(node);
}

//2.4
function partition(linkedList, n) {
  
}

//2.5 O(N + M)
function sumLists(list1, list2) {
  let node1 = list1.head, node2 = list2.head, digitsPlace = 1;
  let sum = 0;
  while(node1.next !== null) {
    sum += digitPlace*node1.data;
    node1 = node1.next;
    digitsPlace *= 10;
  }
  digitsPlace = 1;
  while(node2.next !== null) {
    sum += digitPlace*node2.data;
    node2 = node2.next;
    digitsPlace *= 10; 
  }
  return sum;
} 

//2.6 O(N)
function palidrome(linkedList) {
  let runner = linkedList.head, node = linkedList.head, length = 0, count = 0;
  while(runner.next !== null) {
    runner = runner.next;
    length += 1;
  }
  while(count !== Math.floor(length/2)) {
    if(node.data !== runner.data) return false;
    node = node.next;
    runner = runner.prev;
    count += 1;
  }
  return true;
}

//2.7 O(N + M)
function intersection(list1, list2) {
  let node1 = list1.head, node2 = list2.head, seen1 = {}, seen2 = {} intersection = [];
  while(node1.next !== null) {
    seen1[node1] = true;
    node1 = node1.next;
  }
  while(node2.next !== null) {
    if(!seen2[node2] && seen1[node2]) {
      intersection.push(node2);
      seen2[node2] = true;
    }
    node2 = node2.next;
  }
  return intersection
}

//2.8 O(N)
function loopDetection(list) {
  let seen = {}, node = list.head;
  while(node.next !== null) {
    if(seen[node]) return true;
    seen[node] = true;
    node = node.next;
  }
  return false;
}