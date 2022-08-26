// queue linear data structure FIFO(first in first out)
// use in railway ticket booking, sliding window, graph BFS, tree in order traversal, in priority queue
// in event loop

// linked list based implementation

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
    appendElement(data) {
      const node = new Node(data);
      if (!this.head) {
        this.head = node;
        this.tail = node;
      } else {
        this.tail.next = node;
        this.tail = node;
      }
      this.size++;
    }
  
    removeElement() {
      if (this.size === 0) {
        throw Error("Queue is empty");
      }
      let curr = this.head;
      this.head = curr.next;
  
      curr.next = null;
      this.size--;
      return curr.data;
    }
  }
  class Queue {
    constructor() {
      this.list = new LinkedList();
    }
  
    enQueue(data) {
      // adding element in a queue
      this.list.appendElement(data);
    }
  
    deQueue() {
      // removing element in a queue
      return this.list.removeElement();
    }
  
    get getSize() {
      return this.list.size;
    }
  
    frontElement() {
      return this.list.head.data;
    }
    isEmpty() {
      return this.list.size === 0;
    }
  }
  const que = new Queue();
  
  que.enQueue(10);
  que.enQueue(20);
  que.enQueue(30);
  que.enQueue(40);
  
  // while(!que.isEmpty()){
  //     console.log(que.getSize,"====",que.deQueue())
  // }
  // console.log(que.getSize)
  
  // implement stack using queue
  
  class StackUsingQueue {
    constructor() {
      this.q1 = new Queue();
      this.q2 = new Queue();
      this.size = 0;
    }
    push(data) {
      if (this.q1.isEmpty()) {
        this.q2.enQueue(data);
      } else {
        this.q1.enQueue(data);
      }
      this.size++;
    }
    pop() {
      this.size = Math.max(0, this.size - 1);
      if (this.q1.isEmpty()) {
        while (this.q2.getSize !== 1) {
          this.q1.enQueue(this.q2.deQueue());
        }
        return this.q2.deQueue();
      } else {
        while (this.q1.getSize !== 1) {
          this.q2.enQueue(this.q1.deQueue());
        }
        return this.q1.deQueue();
      }
    }
    isEmpty() {
      return this.size === 0;
    }
    get getSize() {
      return this.size;
    }
  }
  
  const st = new StackUsingQueue();
  st.push(10);
  st.push(20);
  st.push(30);
  st.push(40);
  
  //   st.pop()
  //   st.getTop()
  while (!st.isEmpty()) {
    // console.log(st.pop(),"=====",st.getSize)
    console.log(st.getSize, "=====", st.pop());
  }

  module.exports = Queue