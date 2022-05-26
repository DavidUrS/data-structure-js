class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.size = 1;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (this.size === 0) return undefined;
    let temp = this.first;
    this.first = this.first.next;
    temp.next = null;
    this.size--;
    if (this.size === 0) {
      this.first = null;
      this.last = null;
    }
    return temp;
  }
}

const queue = new Queue(1);
queue.enqueue(2);
queue.dequeue();
console.log(queue);
