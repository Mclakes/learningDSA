class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(value) {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek()  {
        return this.first;
    }
    enqueue (value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
       
    }
    dequeue () {
        if (!this.first) {
            return null;
        }
        if (this.first === this.last) {
            this.last = null;
        }
        const holdingPointer = this.first;
        this.first = this.first.next;
        this.length--;
        return this;
    }
}

const myQueue = new Queue;
myQueue.enqueue('lekan');
myQueue.enqueue('bankole');
myQueue.enqueue('rasheed');
console.log(myQueue.dequeue());
console.log(myQueue.peek());
console.log(myQueue.dequeue());
// console.log(myQueue.dequeue());
