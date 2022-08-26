/*
🧩🧩🧩🧩🧩🧩🧩🧩LINKED LISTS🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩
🔏To store the data in structured form is called dataSructure.
⭕➡ 1. linear DS - Array, stack, queu, linklist etc...
⭕➡ 2. Non-linear - tree, graph etc
⭕➡ 3. userDefined - j.s-object, j.s- class..

Linked list - it is an linear Data structure that contains nodes.
it is used for storing collections of data.

🔑🔑🔑🔑🔑🔑🔑🔑🔑🔑Properties:-)🔑🔑🔑🔑🔑🔑🔑🔑🔑🔑
➡Nodes has two attributes --> Data and reference(Information) of the next node.
➡Last element points to the node.
➡In array the element is in contiguous form but not in linked list.
➡In this there is no any indexing concept (we are not able to access directly).

*/

//💭💭💭💭💭Implementation:-)💭💭💭💭💭

class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }
  
  class LinkedList {
    constructor() {
      this.firstNode = null;
      this.lastNode = null;
    }
  
  /* 🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈 */
    //Append data in front.
    insertInfrontOfList(data) {
      //Node is created(doesn't linked with any list)
      const node = new Node(data);
  
      //If list is empty.
      if (!this.firstNode) {
        this.firstNode = node;
        this.lastNode = node;
      } else {
        const temp = this.firstNode;
        this.firstNode = node;
        node.next = temp;
      }
    }
  
  /*🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈*/
   //Insert in last of list.
    insertInLastOfList(data) {
      const node = new Node(data);
  
      if (!this.firstNode) {
        this.firstNode = node;
        this.lastNode = node;
      } else {
        this.lastNode.next = node;
        this.lastNode = node;
      }
    }
  
  /*🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈*/
    printList(){
      let curr = this.firstNode;
      while(curr){
          console.log(curr.data);
          curr = curr.next;
      }
    }
  
  /*🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈*/
    insertAfterKthPosition(data, k){
      let count = 1;
      let curr = this.firstNode;
      while(curr && count !== k){
          curr = curr.next;
          count++;
      }
      if(!curr && count !== k){
          console.log("invalid position");
          throw Error("invalid position");
      }else if(!curr && count==k){
          this.insertInLastOfList(data);
      }else{
          const node = new Node(data);
          node.next = curr.next;
          curr.next = node;
      }
    }
  
  /*🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈*/
    deleteFromFront(){
      if(!this.firstNode){
        throw Error("We can't be delete from empty list");
      }
      let temp = this.firstNode;
      this.firstNode = this.firstNode.next;
      temp.next = null;
  
      if(!this.firstNode){
        this.lastNode = null;
      }
    }
  
  /*🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈*/
    deleteFromLast(){
      let curr = this.firstNode;
  
      while(curr.next !== this.lastNode){
        curr = curr.next;
      }
      curr.next = null;
      this.lastNode = curr;
    }
  
  /*🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈*/
    deleteFromKthPosition(k){
      let count = 1, curr = this.firstNode
      if(k==1){
        this.deleteFromFront();
      }
      while(curr && count !== k-1){
        curr = curr.next;
        count++;
      }
      if(!curr){
        console.log("Invalid Position")
        throw Error("Invalid Position")
      }else{
        let targetNode = curr.next;
        curr.next = targetNode.next;
        targetNode.next = null;
  
        //if we remove last node
        if(!curr.next){
          this.lastNode = curr;
        }
      }
    }
  
  /*🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈*/
    reverseList(){
      let curr = null;
      while(this.firstNode){
  
        //For updation last node.
        if(!curr){
          this.lastNode = this.firstNode;
        }
        let nextNode = this.firstNode.next;
        this.firstNode.next = curr;
        curr = this.firstNode;
        this.firstNode = nextNode;
      }
      this.firstNode = curr;
    }
  
   /*🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈*/
    /*💭💭💭Write a program to detect loop in linked list.💭💭💭 */
  
    loopStartNodeHashinhTechnique(){
      let isLoopStarted = false;
      let set = new Set();
  
      let curr = this.firstNode;
      while(curr && !isLoopStarted){
        if(set.has(curr)){
          isLoopStarted = true;
        }else{
          set.add(curr);
          curr = curr.next;
        }
      }
      if(isLoopStarted){
        return curr;
      }
      return null;
    }
  
  /*🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈*/
    loopDetectionWithSlowPtr(){
      let slowPointer = this.firstNode;
      let fastPointer = slowPointer;
  
      while(slowPointer && fastPointer && fastPointer.next){
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
        if(slowPointer === fastPointer){
          return true;
        }
      }
      return false;
    }
  }
  
  /*🧲☑☑☑☑☑☑👌☑☑☑☑☑☑☑☑🧲 */
  const list = new LinkedList();
  // console.log(list)
  
  /*👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨 */
  list.insertInfrontOfList(10)
  list.insertInfrontOfList(9)
  list.insertInfrontOfList(8)
  
  /*👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨 */
  //last
  list.insertInLastOfList(65);
  list.insertInLastOfList(29)
  list.insertInLastOfList(55)
  
  /*👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨 */
  //append  after kth position
  // list.insertAfterKthPosition(33,3)
  list.printList();
  
  console.log("🤶🤶🤶🤶🤶🤶🤶🤶🤶🤶🤶")
  
  /*👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨 */
  // list.deleteFromFront();
  // list.deleteFromLast();
  // list.deleteFromKthPosition(3);
  
  /*👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨 */
  // list.reverseList();
  // list.printList();
  
  /*👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨 */
  list.lastNode.next = list.firstNode.next.next.next;
  
  /*👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨 */
  console.log(list.loopStartNodeHashinhTechnique);
  
  /*👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨👁‍🗨 */
  // console.log(list.loopDetectionWithSlowPtr());
  // console.log(list.lastNode);
  
  
  /**
   ➡🎈❤🤶🆗➡🕕💭🗯👁‍🗨
   👁‍🗨👁‍🗨👁‍🗨🕕🕕🕕Time Complexity🕕🕕🕕👁‍🗨👁‍🗨👁‍🗨
   🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯
  ➡ Insertion T.C;
  ➡ Insertion in front = O(1)
  ➡ Insertion in last = O(1)
  ➡ Insertion in between = O(n) // we need to traverse the list
  
   🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯
  ➡ deletion T.C;
  ➡ deletion in front = O(1)
  ➡ deletion in last = O👎
  ➡ deletion in between = O(n) // we need to traverse the list
  
   🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯
  ➡ Array insertion T.C.
  ➡ last O(1)
  ➡ middle O👎
  ➡ front O👎
  
   🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯🗯
  ➡ delete in Array T.C.
  ➡ last O(1)
  ➡ middle O👎
  ➡ front O👎
  
   */