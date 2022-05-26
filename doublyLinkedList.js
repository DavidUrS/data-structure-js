class Node {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.size = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.size === 0) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.size++;
  }

  pop() {
    if (this.size === 0) return undefined;
    const temp = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
    temp.prev = null;
    this.size--;
    if (this.size === 0) {
      this.tail = null;
      this.head = null;
    }
    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size++;
  }

  shift() {
    if (this.size === 0) return undefined;
    let temp = this.head;
    this.head = this.head.next;
    this.head.prev = null;
    temp.next = null;
    this.size--;
    if (this.size === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.size) return undefined;
    let temp = this.head;
    if (index < this.size / 2) {
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
    } else {
      for (let i = this.size - 1; i > index; i--) {
        temp = temp.prev;
      }
    }
  }

  set(index, value) {
    if (index < 0 || index >= this.size) return undefined;
    let temp = this.get(index - 1);
    temp.value = value;
    return temp;
  }

  insert(index, value) {
    if (index < 0 || index >= this.size) return undefined;
    if (index === 0) return this.unshift(value);
    if (index === this.size) return this.push(value);
    const newNode = new Node(value);
    let before = this.get(index - 1);
    let after = before.next;
    before.next = newNode;
    after.prev = newNode;
    newNode.next = after;
    newNode.prev = before;
    temp;
  }

  remove(index) {
    if (index < 0 || index >= this.size) return undefined;
    if (index === 0) return this.shift();
    if (index === this.size - 1) return this.pop();
    let temp = this.get(index);
    let before = temp.prev;
    let after = temp.next;
    before.next = after;
    after.prev = before;
    temp.next = null;
    temp.prev = null;
  }
}

const doublyLinkedList = new DoublyLinkedList(1);
console.log(doublyLinkedList);
