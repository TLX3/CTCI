//Node
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
//Stack
class Stack {
  constructor(capacity) {
    this.top == null;
    this.capacity = capacity;
    this.length;
  }
  
  pop() {
    if(this.top === null) return false;
    item = top.data;
    top = top.next;
    this.length -= 1;
    return item;
  }
  
  push(data) {
    if(this.length === this.capacity) return false;
    let node = new Node(data);
    node.next = this.top;
    this.top = node;
    this.length += 1;
  }
  
  peek() {
    if(this.top === null) return false;
    return this.top.data;
  }
  
  isEmpty() {
    return this.top === null;
  }
}

//Queue
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  
  enqueue(data) {
    let node = new Node(data);
    if(this.last !== null) this.last.next = node;
    this.last = node;
    if(this.first == null) this.first = this.last;
  }
  
  dequeue() {
    if(this.first === null) return false;
    let data = this.first.data;
    this.first = this.first.next;
    if(this.first === null) this.last = this.null;
    return data;
  }
  
  peek() {
    if(this.first === null) return false;
    return this.first;
  }
  
  isEmpty() {
    return this.first === null;
  }
}

//3.1 Create an array with length 3. When pushing specify array num 1 || 2 || 3 then iterate by -(num + 3) until finding a null entry 
//or append 3 more null values to the array

//3.2 Keep track of min in an instance variable. Update while inserting or removing data.

//3.3 O(1) pop/insert
class StackOfStack {
  constructor(capacity) {
    this.stacks = [];
    this.capacity = capacity;
  }
  
  push(data) {
    if(!this.stacks[this.stacks.length - 1].push(data)) {
      this.stacks.push(new Stack(this.capacity))
      this.stacks[this.stacks.length - 1].push(data);
    }
  }
  
  pop() {
    return this.stacks[this.stacks.length - 1].pop();
  }
  
  popAt(idx) {
    return this.stacks[idx].pop();
  }
}

//3.4
class StackQueue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }
  
  enqueue(data) {
    this.stack1.push(data);
  }
  
  dequeue() {
    while(!this.stack1.isEmpty()) {
      this.stack2.push(this.stack1.pop());
    }
    let data = this.stack2.pop();
    while(!this.stack2.isEmpty()) {
      this.stack1.push(this.stack2.pop());
    }
    return data;
  }
  
  peek() {
    return stack1.slice(-1);
  }
  
  isEmpty() {
    return stack1.length !== 0;
  }
}

//3.5 O(N^2)
function sortStack(stack) {
  let tempStack = [];
  let count = 0;
  let sortedLength = stack.length;
  let min = stack.top;
  while(count !== sortedLength) {
    for(var i = 0; i < count; i++) {
      stack.pop();
    }
    while(stack.length !== 0) {
      let current = stack.pop();
      tempStack.push(current);
      if(current < min) {
        min = current;
        tempStack.pop();
      }
    }
    while(tempStack.length !== 0) {
      stack.push(tempStack.pop());
    }
    stack.push(min);
    count += 1;
  }
}

//3.6
class Animal {
  constructor(type, arrival) {
    this.type = type;
    this.arrival = arrival;
  }
}

class AnimalQueue {
  constructor() {
    this.dogs = [];
    this.cats = [];
  }
  
  enqueue(animal) {
    if(animal.type === "Cat") {
      this.cats.push(animal);
    }
    else if(animal.type === "Dog") {
      this.dogs.push(animal);
    }
    else {
      throw "Must be either a Cat or Dog";
    }
  }
  
  dequeueAny() {
    if(this.dogs.length > 0 && this.cats.length > 0) {
      if(this.dogs.slice(-1)[0].arrival > this.cats.slice(-1)[0].arrival) {
        this.dogs.pop();
      }
      else {
        this.cats.pop();
      }
    }
    else if(this.dogs.length === 0 && this.cats.length === 0) {
      throw "Must have an animal enqueue to dequeue";
    }
    else if(this.dogs.length === 0) {
      this.cats.pop();
    }
    else {
      this.dogs.pop();
    }
  }
  
  dequeueDog() {
    if(this.dogs.length === 0) throw "No dogs in queue";
    this.dogs.pop();
  }
  
  dequeueCat() {
    if(this.cats.length === 0) throw "No cats in queue";
    this.cats.pop();
  }
}