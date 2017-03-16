// https://github.com/davidrayoussef/data-structures-in-es6


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
