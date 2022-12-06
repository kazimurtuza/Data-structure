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
}

let link = new SinglyLinkedList();
let link1 = link.push("kazi");
let link2 = link.push("kazi 1");
let link3 = link.push("kazi 2");

console.log(link3);
