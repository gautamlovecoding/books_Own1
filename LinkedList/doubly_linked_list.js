class DNode{
    constructor(data, prev = null, next = null) {
        this.data = data;
        this.prev = prev;
        this.next = next;
    }
}

class DoublyLinkedList{

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insertAtBeginning(data) {

        const dNode = new DNode(data); // it reside in memory no link with any list
        // if list is empty
        if(!this.head) {
            this.head = dNode;
            this.tail = dNode;
        } else {
            dNode.next = this.head;
            this.head.prev = dNode;
            this.head = dNode;
        }

        this.size += 1;
    }

        insertAtEnd(data) {

            const dNode = new DNode(data);
            if(!this.tail) {
                this.head = dNode;
                this.tail = dNode;
            }

            this.tail.next = dNode;
            dNode.prev = this.tail;
            this.tail = dNode;

            this.size += 1
        }

        insertAtKthPosition(data, k) {
            if(this.size < k) {
                throw Error("Invalid position")
            }
            if(this.size == k) {
                this.insertAtEnd(data);
            } else {

                const dNode = new DNode(data);

                let count = 1;
                let curr = this.head;

                while(count !== k) {
                    curr = curr.next;
                    count++;
                }
                let nextNode = curr.next;
                curr.next = dNode;
                dNode.prev = curr;
                dNode.next = nextNode;
                nextNode.prev = dNode;

                this.size += 1;
            }
        }

        printDList() {
            let curr = this.head;
            while(curr) {
                console.log(curr.data);
                curr = curr.next;
            }
        }

        deletionFromBeginning() {

            if(!this.head) {
                throw Error("List is empty can't delete")
            }

            let temp = this.head;
            this.head = this.head.next;

            this.head.prv = null;
            temp.next = null;

            this.size -= 1;
        }

        deletionFromEnd(){

            if(!this.head) {
                throw Error("List is empty can't delete")
            }

            let secondLast = this.tail.prev;
            secondLast.next = null;
            this.tail.prev = null;
            this.tail = secondLast;

            this.size -= 1
        }

        deletionFromKthPosition(k) {
            if(this.size < k) {
                throw Error("Invalid position")
            } else if(this.size === k) {
                this.deletionFromEnd();
            } else{
                let count = 1;
                let curr = this.head;
                while(count !== k) {
                   curr = curr.next;
                   count++;
                }
                curr.prev.next = curr.next;
                curr.next.prev = curr.prev;
                curr.next = null; 
                curr.prev = null;
            }
        }
}

const dlist = new DoublyLinkedList();

dlist.insertAtBeginning(4);
dlist.insertAtBeginning(3);
dlist.insertAtBeginning(2);
dlist.insertAtEnd(5);
dlist.insertAtEnd(7);
dlist.insertAtKthPosition(6,4)
dlist.printDList();

console.log("**********")

//dlist.deletionFromBeginning()
//dlist.deletionFromEnd()
dlist.deletionFromKthPosition(4)

dlist.printDList();

/**
  insertion doubly list TC=>
  Insertion in front = O(1),
  Insertion in last  = O(1),
  Insertion in between = O(n) 

  deletion TC
  deletion in front = O(1),
  deletion in last = O(1)
  deletion in between = O(n)
 */

