class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinklist {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var node = new Node(val);
    var tail = this.tail;
    var head = this.head;
    if (this.length == 0) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    if (this.length <= 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
    }
    this.length--;

    return this;
  }

  shift() {
    if (!this.head) return undefined;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      var next = this.head.next;
      this.head.prev = null;
      this.head = next;
    }
    this.length--;
    return this;
  }
  unshift(val) {
    var newNode = new Node(val);
    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    var length = this.length;
    var mid = Math.round(length / 2);
    var head = this.head;
    var tail = this.tail;
    var node = null;
    if (index < 0 || index > length - 1) return undefined;
    if (index == 0) {
      return head;
    }
    if (index <= mid) {
      var i = 0;
      while (i < index) {
        node = head.next;
        head = node;
        i++;
      }
    }
    if (length - 1 == index) return tail;
    if (index > mid) {
      var i = length - 1;
      while (i > index) {
        node = tail.prev;
        tail = node;
        // console.log(tail);
        i--;
      }
    }

    return node;
  }

  set(index, val) {
    var findNode = this.get(index);
    if (findNode != null) {
      findNode.val = val;
      return true;
    } else {
      return false;
    }
  }

  insert(index, val) {
    var newNode = new Node(val);
    var findnode = this.get(index);
    if (index == 0) return this.unshift(val);
    if (index == this.length) return this.unshift(val);
    if (findnode != null) {
      newNode.next = findnode;
      newNode.prev = findnode.prev;
      findnode.prev.next = newNode;
    } else {
      return false;
    }

    this.length++;

    return this;
  }

  headnode() {
    return this;
  }
}

var dubly_list = new DoublyLinklist();

dubly_list.push(10);
dubly_list.push(11);
dubly_list.push(12);
dubly_list.push(13);
dubly_list.push(14);
dubly_list.push(15);
dubly_list.push(16);
dubly_list.push(17);
dubly_list.push(18);
// let list = dubly_list.push(15);
// dubly_list.pop();
// let pop = dubly_list.pop();
// dubly_list.shift();
// let shift = dubly_list.shift();
// dubly_list.unshift(444);
// dubly_list.unshift(449);
// let unshift = dubly_list.unshift(99);

// // console.log(unshift);
// console.log(dubly_list.headnode());

// console.log(dubly_list.get(5));
dubly_list.insert(7, "jim");
console.log(dubly_list.get(8));
