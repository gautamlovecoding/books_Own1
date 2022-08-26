// data structures are two types 1. Linear data structure  2. non linear data structure
// array, stack, queue, linked lis and strings are linear data structure 
// tree and graph are non-linear data structure
// singaly linked list


class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList{

    constructor() {
        this.firstNode = null;
        this.lastNode = null
    }

    insertInFrontOfList(data) {
        // node is created
        // does not linked with any list
        const node = new Node(data);

        // if list is empty
        if(!this.firstNode) {
            this.firstNode = node;
            this.tail = node;
        }
        else {
            const temp = this.firstNode;
            this.firstNode = node;
            node.next = temp;
        }
    }

    insertInLastOfList(data) {
        const node = new Node(data);

        if(!this.firstNode) {
            this.firstNode = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }

    printList() {
        let curr = this.firstNode;
        while(curr) {
            console.log(curr.data);
            curr = curr.next;
        }
    }

    insertAfterKthPosition(data, k) {

        let count = 1;
        let curr = this.firstNode;
        while(curr && count !== k) {
            curr = curr.next;
            count++
        }
        if(!curr && count !== k){
            console.log("Invalid position");
            throw Error("Invalid position")
        } else if(!curr && count == k) {
            this.insertInLastOfList(data)
        } else {
            const node = new Node(data);
            node.next = curr.next;
            curr.next = node
        }
    }

    deleteFromFront() {
        if(!this.firstNode) {
            throw Error("We can't delete from empty list")
        }

        let temp = this.firstNode;
        this.firstNode = this.firstNode.next;
        temp.next = null;
        if(!this.firstNode) {
            this.lastNode = null
        }
    }

    deleteFromLast() {
        let curr = this.firstNode;
        while(curr.next !== this.lastNode) {
            curr = curr.next;
        }
        curr.next = null;
        this.lastNode = curr;
    }

    deleteFromKthPosition(k) {
        let count = 1;
        if(k === 1) {
            this.deleteFromFront();
        }
        while(curr && count !==k-1) {
            curr = curr.next;
            count++;
        }
        if(!curr && count !== k){
            console.log("Invalid position");
            throw Error("Invalid position")
        } else if(!curr && count == k) {
            this.insertInLastOfList(data)
        } else {
            let targetNode = curr.next;
            curr.next = targetNode.next;
            targetNode.next = null

            // if we remove last node
            if(!curr.next) {
                this.lastNode = curr;
            }
        }
    }

}

const list = new LinkedList();

list.insertInFrontOfList(10);
list.insertInFrontOfList(9);
list.insertInFrontOfList(8);
list.insertInFrontOfList(15);
list.insertInFrontOfList(65);
list.insertInFrontOfList(25);
list.printList();


// list.insertInLastOfList(10);
// list.insertInLastOfList(9);
// list.insertInLastOfList(8);
// list.printList()

console.log("==========")
//list.insertAfterKthPosition(3, 3)
list.deleteFromKthPosition(3)
list.deleteFromLast()
list.printList();