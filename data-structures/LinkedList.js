//
// LINKED LIST
//

function Node(data, next = null) {
  this.data = data;
  this.next = next;
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

    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  prepend(data) {
    let newHead = new Node(data);
    newHead.next = this.head;
    this.head = newHead;
  }

  insert(head, position, data) {
    const newNode = new Node(data);

    if (!head) {
      head = newNode;
      return head;
    }
    else if (position === 0) {
      newNode.next = head;
      head = newNode;
      return head;
    }

    let distanceFromHead = 1;
    let current = head;

    while (current) {
      if (distanceFromHead === position) {
        newNode.next = current.next;
        current.next = newNode;
        return head;
      }

      current = current.next;
      distanceFromHead++;
    }
  }

  deleteElements(head, data) {
    if (!head) return head;
    while (head && head.val === val) head = head.next;

    let current = head;

    while (current && current.next) {
      if (current.next.val === val) {
        current.next = current.next.next;
      }
      else current = current.next;
    }

    return head;
  }

  print() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  printLinks() {
    let current = this.head;
    let elements = [];

    while (current) {
      elements.push(current.data);
      current = current.next;
    }

    console.log(elements.join(' -> '));
  }

}

function reversePrint(node) {
  if (!node) return;

  reversePrint(node.next);

  console.log(node.data);
}

function removeDuplicates(head) {
  let current = head;

  while (current && current.next) {
    if (current.data === current.next.data) {
      current.next = current.next.next;
    }
    else current = current.next;
  }

  return head;
}

function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}

function mergeSortedLists(l1, l2) {
  let merged = new Node(0);
  let copy = merged;

  while (l1 && l2) {
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

  if (l1) merged.next = l1;
  if (l2) merged.next = l2;

  return copy.next;
}

function appendList(listA, listB) {
  if (!listA && !listB) return null;
  else if (listA && !listB) return listA;
  else if (listB && !listA) return listB;

  let current = listA;

  while (current.next) {
    current = current.next;
  }

  current.next = listB;

  return listA;
}

function reverseList(head) {
  let current = head;
  let prev = null;
  let next = null;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  head = prev;

  return head;
}

let cities = new LinkedList();
cities.append("Jersey City");
cities.append("NYC");
cities.append("Miami");
cities.append("LA");
reversePrint(cities.head);

let numbers = new LinkedList();
numbers.append(1);
numbers.append(1);
numbers.append(2);
numbers.append(3);
numbers.append(3);
removeDuplicates(numbers.head);
// numbers.insert(numbers.head, 0, 7);
reverseList(numbers.head);
