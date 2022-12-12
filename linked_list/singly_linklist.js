class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      //   {val:'kazi',next:{val:'kazi',next:new obj()}}
      this.tail = newNode;
      // last added new object
    }
    this.length++;

    return this;
  }

  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.length--;
    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }
    newTail.next = null;
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length == 0) {
      this.tail = null;
    }
  }
  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index > this.length) {
      return null;
    } else {
      var i = 0;
      var current = this.head;
      while (i < index) {
        current = current.next;
        i++;
      }
      return current;
    }
  }
  set(index, val) {
    var target = this.get(index);
    if (target) {
      target.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    var newNode = new Node(val);
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === 0) {
      this.unshift(val);
    } else if (index === this.length) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      let target = this.get(index);
      if (target) {
        let previousNode = this.get(index - 1);
        newNode.next = target;
        previousNode.next = newNode;
      }
    }
    this.length++;
  }
  remove(index) {
    if (index < 0 || index > this.length) {
      return false;
    } else if (index === 0) {
      this.shift();
    } else if (index === this.length) {
      this.pop();
    } else {
      let target = this.get(index);
      if (target) {
        let firstpart = this.get(index - 1);
        let secondpart = this.get(index + 1);
        firstpart.next = secondpart;
      }
    }
    this.length--;
  }

  revers() {
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    var next;
    var previous = null;

    var i = 1;
    for (i; i < this.length; i++) {
      next = node.next;
      node.next = previous;
      previous = node;
      node = next;
    }
    return this;
  }

  node() {
    return this;
  }
}

let link = new SinglyLinkedList();
link.push("name 1");
link.push("name 2");
link.push("name 3");
link.push("name 4");
link.push("name 5");

// console.log(link.node());
// console.log(link.get(4));
// console.log(link.set(10, 7777));

// console.log(link.node(0));
// link.insert(4, 30);
// console.log(link.node());
// console.log(link.get(4));
// link.remove(0);
// console.log(link.node());

link.revers();
