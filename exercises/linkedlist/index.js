// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  insertFirst(item) {
    this.head = new Node(item, this.head);
  }

  insertLast(item) {
    const newNode = new Node(item);
    const node = this.getLast();

    if(node) {
      node.next = newNode;
      node.n
    } else {
      this.head = newNode;
    }
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;

    while (node) {
      if(node.next === null)
        return node;
      
      node = node.next;
    }
  }

  getAt(index) {
    let node = this.head;
    let counter = 0;

    while (node) {
      if(index === counter)
        break;
      
      counter++;
      node = node.next;
    }

    return node;
  }

  removeAt(index) {
    let prevNode = this.getAt(index - 1);
    let nextNode = this.getAt(index + 1);

    if(prevNode && nextNode) //if deleting item in the middle of the list
      prevNode.next = nextNode;
    else if(prevNode && !nextNode) //if deleting last item in the list
      prevNode.next = null;
    else if(!prevNode && nextNode) //if deleting first item in the list
      this.head = nextNode;  
    else if(!prevNode && !nextNode) //if there is only one item in the list
      this.head = null;
  }

  insertAt(item, index) {
    let prevNode = this.getAt(index - 1);
    let nextNode = this.getAt(index);

    if(index > this.size()-1) //if inserting at index beyond last item in list
      this.insertLast(item);
    else if(prevNode && nextNode) //if inserting item in the middle of the list
      prevNode.next = new Node(item, nextNode);
    else if(prevNode && !nextNode) //if inserting last item in the list
      prevNode.next = new Node(item);
    else if(!prevNode && nextNode) //if inserting first item in the list
      this.head = new Node(item, nextNode);
    else if(!prevNode && !nextNode) //if inserting into empty list
      this.head = new Node(item);
  }

  size() {
    let size = 0;
    let node = this.head;

    while (node) {
      size++;
      node = node.next;
    }

    return size;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    let node = this.head;
    this.head = node.next;
    return node;
  }

  removeLast() {
    let node = this.head;
    let prevNode = undefined;

    while (node) {
      if(node.next === null) {
        if(prevNode)
          prevNode.next = null;
        else
          this.head = null;
        return node;
      }
        
      prevNode = node;
      node = node.next;
    }
  }

  forEach(fn) {
    let node = this.head;

    while (node) {
      fn(node);     
      node = node.next;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;

    while (node) {
      yield node;     
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
