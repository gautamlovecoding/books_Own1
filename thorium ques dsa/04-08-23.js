// 1.Write a code for a LinkedList, And we have 2 given numbers in an array and we have to find the middle number in an array.

// class Node{
//     constructor(val){
//         this.val = val;
//         this.next = null;
//     }
// }

// class linkedList{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }
//     push(val){
//         let newNode = new Node(val);

//         if(!this.head){
//             this.head = newNode;
//             this.tail = newNode;
//         }else{
//             this.tail.next = newNode;
//             this.tail = newNode;   
//         }
//         this.length++;
//         return this;
//     }
//     get(index){
//         if(index < 0 || index>= this.length) return null;

//         let count = 0, curr = this.head;
//         while(count !== index){
//             curr = curr.next;
//             count++;
//         }
//         return curr;
//     }
//     findMid(){
//         let slow = this.head;
//         let fast = this.head;

//         while(fast && fast.next){
//             slow = slow.next;
//             fast = fast.next.next;
//         }
//         return slow;
//     }

//     print(){
//         let arr=[];
//         let curr = this.head;

//         while(curr){
//             arr.push(curr.val);
//             curr = curr.next;
//         }
//         console.log(arr);
//     }

// }

// let list = new linkedList();

// list.push(5);
// list.push(15);
// list.push(23);
// list.push(51);
// list.push(55);
// list.push(85);

// console.log(list.findMid());

// list.print();

// 2.Write a code for a closures function that have the given parameters into each functions.

function function1(){
    let a = 20;
    return function function2(){
        console.log(a)
    }
}

// let res = function1();


//--------------or--------------------------
// function function1(a){
//     return function function2(b){
//         console.log(a+b)
//     }
// }

// let res = function1(2);
// res(3);

//--------------or--------------------------
function function1(){
    let a = 20;
    function function2(){
        console.log(a)
    }
    function2();
}

// function1();

// 3.Find out unique pairs in an array, whose sum is equal to the target sum.
//Input:-[2,1,5,8], target = 9   ----> Output is [ 1, 8 ]
//Input:-[2,2,5,8], target = 9   ----> Output is "Pair is not present in the array"

function uniquePair(arr, target){
    let hash = new Map();
    let res = [];

    for(let i=0; i<arr.length; i++){   
        let diff = target - arr[i];   

        if(hash.has(diff)){    
            res[0] = hash.get(diff);
            res[1] = arr[i];
            break;
        }else{
            hash.set(arr[i], arr[i]); 
        }
    }
    if(res.length === 0 ) return "Pair is not present in the array"
    return res;
}

// console.log(uniquePair([2,1,5,8], 9))
// console.log(uniquePair([2,5,8], 9))


// 4.Move all zeros at the end of the array.

let arr = [1, 2, 0, 4, 3, 0, 5, 0];

function moveAllZero(arr){
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] !== 0){
      arr[count] = arr[i];
      count++;
    }
  }

  for(let i=count; i<arr.length; i++){
    arr[i] = 0
  }

  return arr;

}
console.log(moveAllZero(arr))

// 5.check string is palindrome or not even after removing the character from it(not we have to allow only one removal of character from string at a time (at most 1 character at a time))
