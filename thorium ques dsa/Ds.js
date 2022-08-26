// Design a DS with below mentioned operation:-
// 1) Insert a element in DS(if not present)
// 2)Search a element in DS.(get)
// 3)Remove last element in DS.
// 4)return a random element from DS.(get)
// 5)reverse the ll.

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class linkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
            
        }
        this.length++;
        return this;
    }

    get(index){
        if(index < 0 || index>= this.length) return null;

        let count = 0, curr = this.head;
        while(count !== index){
            curr = curr.next;
            count++;
        }
        return curr;
    }

    pop(){
        if(!this.head) return null;

        let curr = this.head, newTail = curr;

        while(curr.next){
            newTail = curr;
            curr = curr.next
        }
        this.tail = newTail;
        newTail.next = null;

        this.length--;
        return curr;
    }
    print(){
        let arr=[];
        let curr = this.head;

        while(curr){
            arr.push(curr.val);
            curr = curr.next;
        }
        console.log(arr);
    }

    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next, prev = null;

        for(let i=0; i<this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }

}

let list = new linkedList();

list.push(5);
list.push(15);
list.push(23);
list.push(51);
list.pop();
list.reverse();

// console.log(list.get(3));

list.print();