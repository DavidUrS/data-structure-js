class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.top = newNode;
    this.size = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.size === 0) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.size++;
    return this;
  }

  pop() {
    if (this.size === 0) return undefined;
    let temp = this.top;
    this.top = this.top.next;
    this.size--;
    if (this.size === 0) {
      this.top = null;
    }
    temp.next = null;
    return temp;
  }
}

const stack = new Stack("a");
stack.push("b");
stack.push("c");
stack.pop();
console.log(stack);
