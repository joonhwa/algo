// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  //always push new item to the bottom of the stack
  add(item) {
    //move everything in main stack to temp stack
    while(this.stack1.peek() !== undefined)
      this.stack2.push(this.stack1.pop());

    //add new item
    this.stack1.push(item);
    
    //get everything back from temp into main stack
    while(this.stack2.peek() !== undefined)
      this.stack1.push(this.stack2.pop());
  }

  peek() {
    const item = this.stack1.pop();
    this.stack1.push(item);
    return item;
  }

  remove() {
    return this.stack1.pop();
  }
}

module.exports = Queue;
