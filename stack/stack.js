class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (this.size == 0) {
      this.first = newNode;
      this.last = newNode;
      this.size++;
    } else {
      let temp = this.first;
      newNode.next = temp;
      this.first = newNode;
      this.size++;
    }

    return this;
  }
  pop() {
    if (this.size == 0) return null;
    let temp = this.first;
    if (this.first == this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.val;
  }
}

let stackdata = new Stack();

stackdata.push("kazi");
stackdata.push("kkr");
console.log(stackdata.push("jim"));
stackdata.pop();
stackdata.pop();
console.log(stackdata.pop());
