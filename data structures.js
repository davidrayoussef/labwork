//
// LIST
//

class List {
  constructor() {
    this.size = 0;
    this.position = 0;
    this.store = [];
  }

  append(element) {
    this.store[this.size] = element;
    this.size++;
  }

  find(element) {
    for (let i = 0; i < this.store.length; i++) {
      if (this.store[i] === element) {
        return i;
      }
    }
    return -1;
  }

  remove(element) {
    const index = this.find(element);

    if (index > -1) {
      this.store.splice(index, 1);
      this.size--;

      return true;
    }

    return false;
  }

  length() {
    return this.size;
  }

  toString() {
    return JSON.stringify(this.store);
  }

  insert(element, after) {
    const insertPosition = this.find(after);

    if (insertPosition > -1) {
      this.store.shift(insertPosition + 1, 0, element);
      this.size++;

      return true;
    }

    return false;
  }

  clear() {
    delete this.store;
    this.store = [];
    this.size = this.position = 0;
  }

  contains(element) {
    return this.store.includes(element);
  }

  front() {
    this.position = 0;
  }

  end() {
    this.position = this.size - 1;
  }

  prev() {
    if (this.position > 0) {
      this.position--;
    }
  }

  next() {
    if (this.position < this.size - 1) {
      this.position++;
    }
  }

  currentPos() {
    return this.position;
  }

  moveTo(position) {
    this.position = position;
  }

  getElement() {
    return this.store[this.position];
  }
}

let names = new List();
names.append("Clayton");
names.append("Raymond");
names.append("Cynthia");
names.append("Jennifer");
names.append("Bryan");
names.append("Danny");
names.front();
names.getElement();



//
// ARRAYS in ES6
//

class Array {
  constructor(){
    this.store = [];
  }

  add(data) {
    this.store.push(data);
  }

  remove(data) {
    this.store = this.store.filter(v => v !== data);
  }

  search(data) {
    // tilde operator runs this algo -(N+1) which converts -1 to 0
    let foundIndex = ~this.store.indexOf(data);

    return foundIndex ? foundIndex : null;
  }

  find(index) {
    return this.store[index];
  }

  length() {
    return this.store.length;
  }
}

let myArray = new Array();
myArray.add('David');
myArray.add('Bill');
myArray.add('Jenny');
myArray.search('Bill');
myArray.find(2);
myArray.length();



//
// STACK
//

class Stack {
  constructor() {
    this.store = [];
    this.top = 0;
  }

  push(element) {
    this.store[this.top++] = element;
  }

  pop() {
    return this.store[--this.top];
  }

  peek() {
    return this.store[this.top - 1];
  }

  clear() {
    this.top = 0;
  }

  length() {
    return this.top;
  }
}

let s = new Stack();
s.push('David');
s.push('Raymond');
s.push('Bryan');
console.log('length: ' + s.length());
console.log(s.peek());
let popped = s.pop();
console.log('The popped element is: ' + popped);
console.log(s.peek());
s.push('Cynthia');
console.log(s.peek());
s.clear();
console.log('length: ' + s.length());
console.log(s.peek());
s.push('Clayton');
console.log(s.peek());



//
// QUEUE
//

class Queue {
  constructor() {
    this.store = [];
  }

  enqueue(element) {
    this.store.push(element);
  }

  dequeue() {
    return this.store.shift();
  }

  front() {
    return this.store[0];
  }

  back() {
    return this.store[this.store.length - 1];
  }

  toString() {
    return this.store.map(v => v).join('\n');
  }

  empty() {
    return this.store.length === 0;
  }
}

let q = new Queue();
q.enqueue("Meredith");
q.enqueue("Cynthia");
q.enqueue("Jennifer");
console.log(q.toString());
q.dequeue();
console.log(q.toString());
console.log("Front of queue: " + q.front());
console.log("Back of queue: " + q.back());



//
// LINKED LIST
//

function Node(data) {
  this.data = data;
  this.next = null;
}

class LinkedList {
  constructor() {
    this.head = null
  }

  find(item) {
    let current = this.head;

    while (current.data !== item) {
      current = current.next;
    }

   return current;
  }

  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;

    while (current.next !== null) {
      current = current.next;
    }

    current.next = newNode;
  }

  prepend(data) {
   let newHead = new Node(data);
   newHead.next = this.head;
   this.head = newHead;
  }

  print() {
    let current = this.head;

    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }

  printLinks() {
    let current = this.head;
    let elements = [];

    while (current !== null) {
      elements.push(current.data);
      current = current.next;
    }

    console.log(elements.join(' -> '));
  }

  reversePrint(node) {
    if (node === null) return;

    this.reversePrint(node.next);

    console.log(node.data);
  }
}

function mergeSortedLists(l1, l2) {
  let copy = merged = new Node(0);

  while (l1 !== null && l2 !== null) {
    if (l1.data < l2.data) {
      merged.next = l1;
      l1 = l1.next;
      merged = merged.next;
    }
    else {
      merged.next = l2;
      l2 = l2.next;
      merged = merged.next;
    }
  }

  if (l1 !== null) merged.next = l1;
  if (l2 !== null) merged.next = l2;

  return copy.next;
}

let cities = new LinkedList();
cities.append("Jersey City");
cities.append("NYC");
cities.append("Miami");
cities.append("LA");
cities.reversePrint(cities.head);



//
// DICTIONARY
//

class Dictionary {
  constructor() {
    this.store = {};
  }

  add(key, value) {
    this.store[key] = value;
  }

  find(key) {
    return this.store[key];
  }

  remove(key) {
    delete this.store[key];
  }

  showAll() {
    return Object.keys(this.store).map(key => `${key} - ${this.store[key]}`).join('\n');
  }

  count() {
    return Object.keys(this.store).length;
  }

  clear() {
    this.store = {};
  }
}

let pbook = new Dictionary();
pbook.add("Raymond", "123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
console.log("Number of entries: " + pbook.count());
console.log("David's extension: " + pbook.find("David"));
console.log(pbook.showAll());
pbook.clear();
console.log("Number of entries: " + pbook.count());



//
// HASHTABLE
//

class HashTable {
  constructor(size) {
    this.size = size;
    this.store = {};
    this.numberOfValues = 0;
  }

  calculateHash(key) {
    return key.toString().length % this.size;
  }

  add(key, value) {
    let hash = this.calculateHash(key);
    if (!this.store.hasOwnProperty(hash)) {
      this.store[hash] = {};
    }
    if (!this.store[hash].hasOwnProperty(key)) {
      this.numberOfValues++;
    }
    this.store[hash][key] = value;
  }

  remove(key) {
    let hash = this.calculateHash(key);
    if (this.store.hasOwnProperty(hash) && this.store[hash].hasOwnProperty(key)) {
      delete this.store[hash][key];
      this.numberOfValues--;
    }
  }

  search(key) {
    let hash = this.calculateHash(key);
    if (this.store.hasOwnProperty(hash) && this.store[hash].hasOwnProperty(key)) {
      return this.store[hash][key];
    } else {
      return null;
    }
  }

  length() {
    return this.numberOfValues;
  }

  print() {
    let string = '';
    for (let value in this.store) {
      for (let key in this.store[value]) {
        string += this.store[value][key] + ' ';
      }
    }
    console.log(string.trim());
  }
}
let hashTable = new HashTable(3);
hashTable.add('first', 1);
hashTable.add('second', 2);
hashTable.add('third', 3);
hashTable.add('fourth', 4);
hashTable.add('fifth', 5);
hashTable.print(); // => 2 4 1 3 5
console.log('length gives 5:', hashTable.length()); // => 5
console.log('search second gives 2:', hashTable.search('second')); // => 2
hashTable.remove('fourth');
hashTable.remove('first');
hashTable.print(); // => 2 3 5
console.log('length gives 3:', hashTable.length()); // => 3



//
// SET
//

class Set {
  constructor() {
    this.store = [];
    this.numberOfValues = 0;
  }

  add(value) {
    if (!this.store.includes(value)) {
      this.store.push(value);
      this.numberOfValues++;
    }
  }

  remove(value) {
    let index = this.store.indexOf(value);
    if (~index) {
      this.store.splice(index, 1);
      this.numberOfValues--;
    }
  }

  contains(value) {
    return this.store.includes(value);
  }

  union(set) {
    let newSet = new Set();

    set.store.forEach(value => newSet.add(value));
    this.store.forEach(value => newSet.add(value));

    return newSet;
  }

  intersect(set) {
    // intersection of two sets A and B is the set that contains all elements of A that also belong to B
    // (or equivalently, all elements of B that also belong to A
    let newSet = new Set();

    this.store.forEach(value => {
      if (set.contains(value)) {
        newSet.add(value);
      }
    });

    return newSet;
  }

  difference(set) {
    let newSet = new Set();

    this.store.forEach(value => {
      if (!set.contains(value)) {
        newSet.add(value);
      }
    });

    return newSet;
  }

  isSubset(set) {
    return set.store.every(value => this.contains(value));
  }

  length() {
    return this.numberOfValues;
  }

  print() {
    console.log(this.store.join(' '));
  }
}

let set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(4);
set.print(); // => 1 2 3 4
set.remove(3);
set.print(); // => 1 2 4
console.log('contains 4 is true:', set.contains(4)); // => true
console.log('contains 3 is false:', set.contains(3)); // => false
let set1 = new Set();
set1.add(1);
set1.add(2);
let set2 = new Set();
set2.add(2);
set2.add(3);
let set3 = set2.union(set1);
set3.print(); // => 1 2 3
let set4 = set2.intersect(set1);
set4.print(); // => 2
let set5 = set.difference(set3);
set5.print(); // => 4
let set6 = set3.difference(set); // 1 2 3 diff 1 2 4
set6.print(); // => 3
console.log('set1 subset of set is true:', set.isSubset(set1)); // => true
console.log('set2 subset of set is false:', set.isSubset(set2)); // => false
console.log('set1 length gives 2:', set1.length()); // => 2
console.log('set3 length gives 3:', set3.length()); // => 3



//
// BINARY SEARCH TREE
//

class Node {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  show() {
    return this.val;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val, null, null);

    if (this.root === null) {
      this.root = newNode;
    }
    else {
      let current = this.root;
      let parent;

      while (true) {
        parent = current;

        if (val < current.val) {
          current = current.left;

          if (current === null) {
            parent.left = newNode;
            break;
          }
        }
        else {
          current = current.right;

          if (current === null) {
            parent.right = newNode;
            break;
          }
        }
      }
    }
  }

  inOrder(node) {
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node.show() + ' ');
      this.inOrder(node.right);
    }
  }

  preOrder(node) {
    if (node !== null) {
      console.log(node.show() + ' ');
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  postOrder(node) {
    if (node !== null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.show() + ' ');
    }
  }

  getMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.val;
  }

  getMax() {
    let current = this.root;
    while (current.right === !null) {
      current = current.right;
    }
    return current.val;
  }

  find(val) {
    let current = this.root;
    while (current.val !== val) {
      current = val < current.val ? current.left : current.right;
      if (current === null) return null;
    }
    return current;
  }

  invert(node) {
    if (!node) return node;

    let temp = node.left;
    node.left = node.right;
    node.right = temp;

    this.invert(node.left);
    this.invert(node.right);

    return node;
  }

  findLCA(node, n1, n2) {
    if (node.val > Math.max(n1.val, n2.val)) {
      return this.findLCA(node.left, n1, n2);
    }
    else if (node.val < Math.min(n1.val, n2.val)) {
      return this.findLCA(node.right, n1, n2);
    }
    else return node.val;
  }

  printPaths(node, path = [], pathLength = 0, paths = []) {
    if (node === null) return [];

    path[pathLength] = node.val;
    pathLength++;

    if (node.left === null && node.right === null) {
      paths.push(Array.from({length: pathLength}, (v,i) => path[i]).join('->'));
    }
    else {
      this.printPaths(node.left, path, pathLength, paths);
      this.printPaths(node.right, path, pathLength, paths);
    }

    return paths;
  }

  pathSum(node, sum) {
    // let vals = [];
    //
    // const traverse = (node) => {
    //   if (node === null) return;
    //
    //   if (node.left === null && node.right === null) {
    //     vals.push(node.val);
    //   }
    //
    //   traverse(node.left);
    //   traverse(node.right);
    // }
    //
    // traverse(node);
    //
    // return vals;
  }

  sumOfLeftLeaves(node) {
    let sum = 0;

    const traverse = (node, isLeftChild) => {
      if (node === null) return;

      if (isLeftChild) {
        if (node.left === null && node.right === null) {
          sum += node.val;
        }
      }

      traverse(node.left, true);
      traverse(node.right, false);
    }

    traverse(node);

    return sum;
  }

  areIdentical(a, b) {
    if (a === null && b === null) return true;

    if (a !== null && b !== null) {
      return a. val === b. val &&
        this.areIdentical(a.left, b.left) &&
        this.areIdentical(a.right, b.right);
    }

    return false;
  }

  isSymmetric(node) {
    const isMirror = (node1, node2) => {
      if (node1 === null && node2 === null) return true;
      else if (node1 !== null && node2 !== null && node1.val === node2.val) {
        return isMirror(node1.left, node2.right) && isMirror(node2.left, node1.right);
      }

      return false;
    };

    return isMirror(node, node);
  }

  maxDepth(node) {
    if (node === null) return 0;

    let leftHeight = this.maxDepth(node.left);
    let rightHeight = this.maxDepth(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }

  convertSortedArray(nums, start = 0, end = nums.length - 1) {
    if (start > end) return null;

    let mid = Math.round((start + end) / 2);
    let node = new TreeNode(nums[mid]);

    node.left = this.convertSortedArray(nums, start, mid - 1);
    node.right = this.convertSortedArray(nums, mid + 1, end);

    return node;
  }
}

let nums = new BinarySearchTree();
nums.insert(3);
nums.insert(9);
nums.insert(20);
nums.insert(null);
nums.insert(null);
nums.insert(15);
nums.insert(7);
nums.maxDepth(nums.root);
nums.sumOfLeftLeaves(nums.root);
nums.invert(nums.root);
let n1 = new Node(1);
let n2 = new Node(4);
nums.findLCA(nums.root, n1, n2);
console.log("inorder traversal: ");
nums.inOrder(nums.root);
console.log("preorder traversal: ");
nums.preOrder(nums.root);
console.log("postorder traversal: ");
nums.postOrder(nums.root);
let min = nums.getMin();
console.log("The minimum value of the BinarySearchTree is: " + min);
let max = nums.getMax();
console.log("The maximum value of the BinarySearchTree is: " + max);



//
// GRAPH
//

function Vertex(label) {
  this.label = label;
}

function Graph(v) {
  this.vertices = v;
  this.edges = 0;
  this.adj = [];
  for(let i = 0; i < this.vertices; ++i) {
    this.adj[i] = [];
    this.adj[i].push("");
  }
  this.addEdge = addEdge;
  this.showGraph = showGraph;
  this.dfs = dfs;
  this.marked = [];
  for (let i = 0; i < this.vertices; ++i) {
    this.marked[i] = false;
  }
}

function addEdge(v, w) {
  this.adj[v].push(w);
  this.adj[w].push(v);
  this.edges++;
}

function dfs(v) {
  this.marked[v] = true;
  if (this.adj[v] !== undefined) {
    console.log('Visited vertex: ' + v);
  }
  // Object.keys(this.adj[v]).map(function(w) {
  //   if (!this.marked[w]) {
  //     this.dfs(w);
  //   }
  // })
}

function showGraph() {
  let str = '';
  for (let i = 0; i < this.vertices; ++i) {
    str += i + ' -> ';
    for (let j = 0; j < this.vertices; ++j) {
      if (this.adj[i][j] !== undefined) {
        str += this.adj[i][j] + ' ';
      }
    }
  }
  console.log(str);
}

let g = new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
g.showGraph();
g.dfs(0);
