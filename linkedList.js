class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.size = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
    return newNode;
  }

  pop() {
    if (this.size === 0) return undefined;
    let temp = this.head;
    let prev = temp;
    while (temp.next) {
      prev = temp;
      temp = temp.next;
    }
    prev.next = null;
    this.tail = prev;
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
      this.tail = newNode;
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
    return newNode;
  }

  shift() {
    if (this.size === 0) return undefined;
    this.head = this.head.next;
    this.size--;
    if (this.size === 0) {
      this.tail = null;
      this.head = null;
    }
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.size) return undefined;
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  set(index, value) {
    if (index < 0 || index >= this.size) return undefined;
    let temp = this.get(index);
    temp.value = value;
  }

  insert(index, value) {
    if (index < 0 || index > this.size) return undefined;
    if (index === 0) return this.unshift(value);
    if (index === this.size) return this.push(value);
    const newNode = new Node(value);
    const prev = this.get(index - 1);
    newNode.next = prev.next;
    prev.next = newNode;
    this.size++;
    return newNode;
  }

  remove(index) {
    if (index < 0 || index > this.size) return undefined;
    if (index === 0) return this.unshift();
    if (index === this.size) return this.pop();

    let prev = this.get(index - 1);
    prev.next = prev.next.next;
    this.size--;
    if (this.size === 0) {
      this.tail = null;
      this.head = null;
    }
  }

  reverse() {
    let prev = null;
    let temp = this.head;
    let next = temp.next;
    for (let i = 0; i < this.size; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
  }
}

const linkedList = new LinkedList(1);
linkedList.push(2);
linkedList.push(3);
linkedList.push(5);
linkedList.push(6);
linkedList.pop();
linkedList.unshift(0);
linkedList.shift();
linkedList.set(3, 4);
linkedList.insert(1, 1.5);
linkedList.remove(1);
linkedList.reverse();
console.log(JSON.stringify(linkedList, null, 5));
