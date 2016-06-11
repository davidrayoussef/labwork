// 
// LISTS
//

function List() {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = [];
  this.clear = clear;
  this.find = find;
  this.toString = toString;
  this.insert = insert;
  this.append = append;
  this.remove = remove;
  this.front = front;
  this.end = end;
  this.prev = prev;
  this.next = next;
  this.length = length;
  this.currPos = currPos;
  this.moveTo = moveTo;
  this.getElement = getElement;
  this.contains = contains;
}

function append(element) {
  this.dataStore[this.listSize++] = element;
}

function find(element) {
  for (var i = 0; i < this.dataStore.length; ++i) {
    if(this.dataStore[i] == element) {
      return i;
    }
  }
  return -1;
}

function remove(element) {
  var foundAt = this.find(element);
  if(foundAt > -1) {
    this.dataStore.splice(foundAt, 1);
    --this.listSize;
    return true;
  }
  return false;
}

function length() {
  return this.listSize;
}

function toString() {
  return JSON.stringify(this.dataStore);
}

function insert(element, after) {
  var insertPos = this.find(after);

  if(insertPos > -1) {
      this.dataStore.shift(insertPos+1, 0, element);
      ++this.listSize;
      return true;
  }
  return false;
}

function clear() {
  delete this.dataStore;
  this.dataStore = [];
  this.listSize = this.pos = 0;
}

function contains(element) {
  return this.dataStore.filter(function(x) {
    return x == element;
  })
}

function front() {
  this.pos = 0;
}

function end() {
  this.pos = this.listSize-1;
}

function prev() {
  if(this.pos > 0) {
    --this.pos;
  }
}

function next() {
  if(this.pos < this.listSize-1) {
    ++this.pos;
  }
}

function currPos() {
  return this.pos;
}

function moveTo(position) {
  this.pos = position;
}

function getElement() {
  return this.dataStore[this.pos];
}

var names = new List();
names.append("Clayton");
names.append("Raymond");
names.append("Cynthia");
names.append("Jennifer");
names.append("Bryan");
names.append("Danny");

names.front();
console.log(names.getElement());



//
// ARRAYS in ES6 (SAME AS LIST ABOVE?)
// 

class Array {
  constructor(){
    this.array = [];
  }

  add(data) {
    this.array.push(data);
  }

  remove(data) {
    this.array = this.array.filter(v => v !== data);
  }

  search(data) {
    // tilde operator runs this algo -(N+1) which converts -1 to 0
    var foundIndex = ~this.array.indexOf(data);
    return foundIndex ? foundIndex : null;
  }

  find(index) {
    return this.array[index];
  }

  length() {
    return this.array.length;
  }
}

var myArray = new Array();

myArray.add('David');
myArray.add('Bill');
myArray.add('Jenny');
myArray.search('Bill');
myArray.find(2);
myArray.length();






// 
// STACKS
//

function Stack() {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.clear = clear;
  this.length = length;
}

function push(element) {
  this.dataStore[this.top++] = element;
}

function pop() {
  return this.dataStore[--this.top];
}

function peek() {
  return this.dataStore[this.top - 1];
}

function clear() {
  this.top = 0;
}

function length() {
  return this.top;
}

var s = new Stack();
s.push('David');
s.push('Raymond');
s.push('Bryan');
console.log('length: ' + s.length());
console.log(s.peek());
var popped = s.pop();
console.log('The popped element is: ' + popped);
console.log(s.peek());
s.push('Cynthia');
console.log(s.peek());
s.clear();
console.log('length: ' + s.length());
console.log(s.peek());
s.push('Clayton');
console.log(s.peek());


// STACK EXAMPLE 2

function Stack() {
  this.size = 0;
  this.storage = {};
}

Stack.prototype = {
  push: function(data) {
    this.storage[this.size++] = data; 
  },
  pop: function() {
    if(size) {
      var newData = this.storage[this.size - 1];
      delete this.storage[this.size - 1];
      this.size--;
      return newData;
    }
  }
};
var s = new Stack();

s.push('David');
s.push('Michael');
s.push('Dawn');



// 
// QUEUES
//

function Queue() {
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;
}

function enqueue(element) {
  this.dataStore.push(element);
}

function dequeue() {
  return this.dataStore.shift();
}

function front() {
  return this.dataStore[0];
}

function back() {
  return this.dataStore[this.dataStore.length-1];
}

function toString() {
  return this.dataStore.map(function(V) {
    return V;
  }).join('\n');
}

function empty() {
  return this.dataStore.length == 0;
}

var q = new Queue();
q.enqueue("Meredith");
q.enqueue("Cynthia");
q.enqueue("Jennifer");
console.log(q.toString());
q.dequeue();
console.log(q.toString());
console.log("Front of queue: " + q.front());
console.log("Back of queue: " + q.back());



// 
// LINKED LISTS
//

function Node(element) {
  this.element = element;
  this.next = null;
}

function LList() {
  this.head = new Node('head');
  this.find = find;
  this.insert = insert;
  this.display = display;
  this.findPrevious = findPrevious;
  this.remove = remove;
}

function find(item) {
  var currNode = this.head;
  while(currNode.element != item) {
    currNode = currNode.next;
  }
  return currNode;
}

function insert(newElement, item) {
  var newNode = new Node(newElement);
  var current = this.find(item);
  newNode.next = current.next;
  current.next = newNode;
}

function display() {
  var currNode = this.head;
  while(!(currNode.next == null)) {
    console.log(currNode.next.element);
    currNode = currNode.next;
  }
}

function findPrevious(item) {
  var currNode = this.head;
  while(!(currNode.next == null) && (currNode.next.element != item)) { 
    currNode = currNode.next;
  }
  return currNode;
}

function remove(item) {
  var prevNode = this.findPrevious(item);
  if(!(prevNode.next == null)) {
    prevNode.next = prevNode.next.next;
  }
}

var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.display();
console.log(cities);
cities.remove("Carlisle");
cities.display();



// 
// DICTIONARIES
//


function Dictionary() {
  this.add = add;
  this.dataStore = new Array();
  this.find = find;
  this.remove = remove;
  this.showAll = showAll;
  this.count = count;
  this.clear = clear;
}

function add(key, value) {
  this.dataStore[key] = value;
}

function find(key) {
  return this.dataStore[key];
}

function remove(key) {
  delete this.dataStore[key];
}

function showAll() {
  return Object.keys(this.dataStore).map(function(key) {
    return key + ' - ' + this.dataStore[key];
  });
}

function count() {
  return Object.keys(this.dataStore).map(function(x) {
    return x;
  }).length;
}

function clear() {
  return Object.keys(this.dataStore).map(function(x) {
    delete this.dataStore[x];
  })
}

var pbook = new Dictionary();
pbook.add("Raymond", "123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
console.log("Number of entries: " + pbook.count());
console.log("David's extension: " + pbook.find("David"));
// pbook.showAll();
pbook.clear();
console.log("Number of entries: " + pbook.count());



// 
// HASHES
//

function HashTable() {
  this.table = new Array(137);
  this.betterHash = betterHash;
  this.showDistro = showDistro;
  this.put = put;
  // this.get = get;
}

function betterHash(data) {
  const H = 37;
  return data.split('').map(function(v,i) {
    return data.charCodeAt(i);
  }).reduce(function(acc,curr) {
    console.log('data is: ' + data);
    return (acc + curr) * H;
  }, 0) % this.table.length;
}

function showDistro() {
  return this.table.map(function(v,i) {
    if(v!=undefined) console.log(i + ': ' + v);
  })
}

function put(data) {
  var pos = this.betterHash(data);
  this.table[pos] = data;
}

var someNames = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];

var hTable = new HashTable();

someNames.map(function(v) { hTable.put(v); })

hTable.showDistro();



// 
// HASHTABLE IN ES6
//

class HashTable {
  constructor(size) {
    this.values = {};
    this.numberOfValues = 0;
    this.size = size;
  }

  calculateHash(key) {
    return key.toString().length % this.size;
  }

  add(key, value) {
    var hash = this.calculateHash(key);
    if (!this.values.hasOwnProperty(hash)) {
      this.values[hash] = {};
    }
    if (!this.values[hash].hasOwnProperty(key)) {
      this.numberOfValues++;
    }
    this.values[hash][key] = value;
  }

  remove(key) {
    var hash = this.calculateHash(key);
    if (this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
      delete this.values[hash][key];
      this.numberOfValues--;
    }
  }

  search(key) {
    var hash = this.calculateHash(key);
    if (this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
      return this.values[hash][key];
    } else {
      return null;
    }
  }

  length() {
    return this.numberOfValues;
  }

  print() {
    var string = '';
    for (var value in this.values) {
      for (var key in this.values[value]) {
        string += this.values[value][key] + ' ';
      }
    }
    console.log(string.trim());
  }
}
var hashTable = new HashTable(3);
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
// SETS
//

function Set() {
  this.dataStore = [];
  this.add = add;
  this.remove = remove;
  this.size = size;
  this.contains = contains;
  this.union = union;
  this.intersect = intersect;
  this.subset = subset;
  this.difference = difference;
  this.show = show;
}

function add(data) {
  if(this.dataStore.indexOf(data) < 0) {
      this.dataStore.push(data);
      return true;
  }
  else return false;
}

function remove(data) {
  var pos = this.dataStore.indexOf(data);
  if(pos > -1) {
      this.dataStore.splice(pos, 1);
      return true;
  }
  else return false;
}

function size() {
  return this.dataStore.length;
}

function show() {
  return this.dataStore;
}

function contains(data) {
  if(this.dataStore.indexOf(data) > -1) {
      return true;
  }
  else return false;
}

function union(set) {
  var tempSet = new Set();

  this.dataStore.map(function(v) {
    tempSet.add(v);
  })

  set.dataStore.map(function(v) {
    if(!tempSet.contains(v)) {
      tempSet.dataStore.push(v);
    }
  })
  return tempSet;
}

function intersect(set) {
  var tempSet = new Set();

  this.dataStore.map(function(v) {
    if(set.contains(v)) tempSet.add(v);
  })

  return tempSet;
}

function subset(set) {
  if (this.size() > set.size()) { return false; }
  else {
    return this.dataStore.every(function(v) {
      return set.contains(v);
    })
  }
  // return true;
}

function difference(set) {
  var tempSet = new Set();
  this.dataStore.map(function(v) {
    if(!set.contains(v)) { tempSet.add(v); }
  })

  return tempSet;
}

var names = new Set();
names.add("David");
names.add("Jennifer");
names.add("Cynthia");
names.add("Mike");
names.add("Raymond");
if (names.add("Mike")) { console.log("Mike added"); } 
else { console.log("Can't add Mike, must already be in set"); }
console.log(names.show());

// Computing the union of two sets
var cis = new Set();
cis.add("Mike");
cis.add("Clayton");
cis.add("Jennifer");
cis.add("Raymond");
var dmp = new Set();
dmp.add("Raymond");
dmp.add("Cynthia");
dmp.add("Jonathan");
var it = new Set();
it = cis.union(dmp);
console.log(it.show());

// Computing the intersection of two sets
var cis = new Set();
cis.add("Mike");
cis.add("Clayton");
cis.add("Jennifer");
cis.add("Raymond");
var dmp = new Set();
dmp.add("Raymond");
dmp.add("Cynthia");
dmp.add("Bryan");
var inter = cis.intersect(dmp);
console.log(inter.show());

// Computing the subset of two sets
var it = new Set();
it.add("Cynthia");
it.add("Clayton");
it.add("Jennifer");
it.add("Danny");
it.add("Jonathan");
it.add("Terrill");
it.add("Raymond");
it.add("Mike");
var dmp = new Set();
dmp.add("Cynthia");
dmp.add("Raymond");
dmp.add("Jonathan");

if (dmp.subset(it)) { console.log("DMP is a subset of IT."); }
else { console.log("DMP is not a subset of IT."); }

// Computing the difference of two sets
var cis = new Set();
var it = new Set();
cis.add("Clayton");
cis.add("Jennifer");
cis.add("Danny");
it.add("Bryan");
it.add("Clayton");
it.add("Jennifer");
var diff = new Set();
diff = cis.difference(it);
console.log("[" + cis.show() + "] difference [" + it.show() + "] -> [" + diff.show() + "]");


// 
// SET IN ES6
//

class Set {
  constructor() {
    this.values = [];
    this.numberOfValues = 0;
  }

  add(value) {
    // tilde operator runs this algo -(N+1) which converts -1 to 0 (because negative 1 is truthy)
    if (!~this.values.indexOf(value)) {
      this.values.push(value);
      this.numberOfValues++;
    }
  }

  remove(value) {
    var index = this.values.indexOf(value);
    if (~index) {
      this.values.splice(index, 1);
      this.numberOfValues--;
    }
  }

  contains(value) {
    return this.values.indexOf(value) !== -1;
  }

  union(set) {
    var newSet = new Set();
    set.values.forEach(value => newSet.add(value));
    this.values.forEach(value => newSet.add(value));
    return newSet;
  }

  intersect(set) {
    // intersection of two sets A and B is the set that contains all elements of A that also belong to B
    // (or equivalently, all elements of B that also belong to A
    var newSet = new Set();
    this.values.forEach(value => {
      if (set.contains(value)) {
        newSet.add(value);
      }
    });
    return newSet;
  }

  difference(set) {
    var newSet = new Set();
    this.values.forEach(value => {
      if (!set.contains(value)) {
        newSet.add(value);
      }
    });
    return newSet;
  }

  isSubset(set) {
    return set.values.every(value => this.contains(value));
  }

  length() {
    return this.numberOfValues;
  }

  print() {
    console.log(this.values.join(' '));
  }
}

var set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(4);
set.print(); // => 1 2 3 4
set.remove(3);
set.print(); // => 1 2 4
console.log('contains 4 is true:', set.contains(4)); // => true
console.log('contains 3 is false:', set.contains(3)); // => false
var set1 = new Set();
set1.add(1);
set1.add(2);
var set2 = new Set();
set2.add(2);
set2.add(3);
var set3 = set2.union(set1);
set3.print(); // => 1 2 3
var set4 = set2.intersect(set1);
set4.print(); // => 2
var set5 = set.difference(set3);
set5.print(); // => 4
var set6 = set3.difference(set); // 1 2 3 diff 1 2 4
set6.print(); // => 3
console.log('set1 subset of set is true:', set.isSubset(set1)); // => true
console.log('set2 subset of set is false:', set.isSubset(set2)); // => false
console.log('set1 length gives 2:', set1.length()); // => 2
console.log('set3 length gives 3:', set3.length()); // => 3




//
// BINARY SEARCH TREE
//

function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
}

function show() {
  return this.data;
}

function BST() {
  this.root = null;
  this.insert = insert;
  this.inOrder = inOrder;
  this.getMin = getMin;
  this.getMax = getMax;
  this.find = find;
}

function insert(data) {
  var n = new Node(data, null, null);
  if(this.root == null) {
      this.root = n;
  }
  else {
    var current = this.root;
    var parent;
    while(true) {
      parent = current;
      if(data < current.data) {
        current = current.left;
        if(current == null) {
          parent.left = n;
          break;
        }
      }
      else {
        current = current.right;
        if(current == null) {
          parent.right = n;
          break;
        }
      }
    }
  }
}

function inOrder(node) {
  if(!(node == null)) {
    inOrder(node.left);
    console.log(node.show() + ' ');
    inOrder(node.right);
  }
}

function preOrder(node) {
  if(!(node == null)) {
      console.log(node.show() + ' ');
      preOrder(node.left);
      preOrder(node.right);
  }
}

function postOrder(node) {
  if(!(node == null)) {
      postOrder(node.left);
      postOrder(node.right);
      console.log(node.show() + ' ');
  }
}

function getMin() {
  var current = this.root;
  while(!(current.left == null)) {
    current = current.left;
  }
  return current.data;
}

function getMax() {
  var current = this.root;
  while(!(current.right == null)) {
    current = current.right;
  }
  return current.data;
}

function find(data) {
  var current = this.root;
  while(current.data != data) {
    current = data < current.data ? current.left : current.right;
    if(current == null) return null;
  }
  return current;
}


var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
console.log("inorder traversal: ");
inOrder(nums.root);
console.log("preorder traversal: ");
preOrder(nums.root);
console.log("postorder traversal: ");
postOrder(nums.root);
var min = nums.getMin();
console.log("The minimum value of the BST is: " + min);
var max = nums.getMax();
console.log("The maximum value of the BST is: " + max);



//
// GRAPHS
//

function Vertex(label) {
  this.label = label;
}

function Graph(v) {
  this.vertices = v;
  this.edges = 0;
  this.adj = [];
  for(var i = 0; i < this.vertices; ++i) {
    this.adj[i] = [];
    this.adj[i].push("");
  }
  this.addEdge = addEdge;
  this.showGraph = showGraph;
  this.dfs = dfs;
  this.marked = [];
  for (var i = 0; i < this.vertices; ++i) {
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
  if(this.adj[v] != undefined) {
    console.log('Visited vertex: ' + v);
  }
  // Object.keys(this.adj[v]).map(function(w) {
  //   if(!this.marked[w]) {
  //     this.dfs(w);
  //   }
  // })
}

function showGraph() {
  var str = '';
  for (var i = 0; i < this.vertices; ++i) {
    str += i + ' -> ';
    for (var j = 0; j < this.vertices; ++j) {
      if(this.adj[i][j] != undefined) {
        str += this.adj[i][j] + ' ';
      }
    }
  }
  console.log(str);
}

g = new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
g.showGraph();
g.dfs(0);