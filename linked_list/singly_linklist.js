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
  node() {
    return this;
  }
}

let link = new SinglyLinkedList();
let link1 = link.push("kazi");
let link2 = link.push("kazi 1");
let link3 = link.push("kazi 2");
let pop1 = link.pop();

console.log(pop1);
console.log("---------------");
console.log(link.pop());
link.shift();

console.log(link.node());
