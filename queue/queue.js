class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    }
    this.last.next = newNode;
    this.last = newNode;

    this.size++;

    return this;
  }
  dequeue() {
    if (!this.first) return null;
    if (this.size == 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    this.size--;
    return this;
  }
}

let queue = new Queue();
queue.enqueue("kazi");
queue.enqueue("kazi 1");
queue.enqueue("kazi 2");
console.log(queue.enqueue("343"));
queue.dequeue();
queue.dequeue();
console.log(queue.dequeue());
