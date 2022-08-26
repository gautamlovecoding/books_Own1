// linked list, doubly linked list
// stack linear data structure insertion at the end and removal from the end(LIFO)
// use in bracket balancing  [()()], function call(callback stack), infix to postfix

//Implementaion = we can implement using array or linked list
// arr.push() // insertion
// arr.pop()  // removal

// bracket balancing [, {, (

// logic => [, {, ( push  ),},]  => if top match pop

// function isBalance(str) {

//     let stack = [];
//     for(let i = 0; i<str.length; i++) {

//         if(str[i] === '(' || str[i] === '[' || str[i] === '{') {
//             stack.push(str[i]);
//         }

//         if(str[i] === '}') {
//             if(stack[stack.length-1] === '{') 
//               stack.pop();
//             else{
//                 return false
//             }
//         }

//         if(str[i] === ']') {
//             if(stack[stack.length-1] === '[') 
//               stack.pop();
//             else{
//                 return false
//             }
//         }

//         if(str[i] === ')') {
//             if(stack[stack.length-1] === '(') 
//               stack.pop();
//             else{
//                 return false
//             }
//         }
//     }
//     return stack.length === 0
// }

//console.log(isBalance("[{}({}[]())()(){}[]()]"))

//time complexity = O(n)

//Stack using LinkedList

class Node {
    constructor(data) {
        this.val = data;
        this.next = null
    }
}
class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
        this.tail = null; // return top value of the stack
    }
    pushBack(data) {
        const node = new Node(data) 
        node.next = this.head;
        this.head = node;
        if(this.size === 0) {
            this.tail = node;
        }
        this.size++;
    }

    popBack(){
        if(!this.size) {
            throw Error("Stack is empty");
        }
        let curr = this.head;
        this.head = this.head.next;
        this.size--;
        curr.next = null;
        return curr.data
    }
}
class stack {
    constructor() {
        this.list = new LinkedList();
    }

    push(val) {
       // append at end
       this.list.pushBack(val);
    }

    pop(){
        // remove from end
        this.list.popBack();
    }

    getTop() {
        // return last element value
        return this.list.head;
    }

    getSize() {
        // return size of the stack
        return this.list.size
    }

    isEmpty() {
        return this.list.size === 0
    }
}

const st = new stack();

st.push(10);
st.push(20);
st.push(30);
st.push(40);

// st.pop(); // last element to remove
// st.getTop(); // return value of top element of the stack
// st.getSize();

while(!st.isEmpty()) {
    console.log(st.getSize,"=======",st.pop());
}

console.log(st.getSize)
