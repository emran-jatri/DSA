// Circular Queue implementation in Python

class CircularQueue {
  constructor(length) {
    this.length = length;
    this.queue = new Array(length).fill(null);
    this.head = this.tail = -1;
  }

  // Insert an element into the circular queue
  enqueue(data) {
    if ((this.tail + 1) % this.length === this.head) {
      console.log("The circular queue is full");
    } else if (this.head == -1) { // initial
      this.head = 0;
      this.tail = 0;
      this.queue[this.tail] = data;
		} else {
      this.tail = (this.tail + 1) % this.length; // tail value will be between 0 and length
      this.queue[this.tail] = data;
    }
  }

  // Delete an element from the circular queue
  dequeue() {
    if (this.head == -1) {
      console.log("The circular queue is empty");
    } else if (this.head === this.tail) { // for 0 index
      let temp = this.queue[this.head];
      this.head = -1;
      this.tail = -1;
      return temp;
    } else {
      let temp = this.queue[this.head];
      this.head = (this.head + 1) % this.length; // head is going to next index
      return temp;
    }
  }

  printCQueue() {
    if (this.head === -1) {
      console.log("No element in the circular queue");
    } else if (this.tail >= this.head) {
      for (let i = this.head; i <= this.tail; i++) {
        process.stdout.write(this.queue[i] + " ");
      }
      console.log();
    } else {
      for (let i = this.head; i < this.length; i++) {
        process.stdout.write(this.queue[i] + " ");
      }
      for (let i = 0; i <= this.tail; i++) {
        process.stdout.write(this.queue[i] + " ");
      }
      console.log();
    }
  }
}

// Your MyCircularQueue object will be instantiated and called as such{}
const cq = new CircularQueue(5);
cq.enqueue(1);
cq.enqueue(2);
cq.enqueue(3);
cq.enqueue(4);
cq.enqueue(5);
// cq.enqueue(6);
console.log("Initial queue");
cq.printCQueue();

cq.dequeue();
console.log("After removing an element from the queue");
cq.printCQueue();
