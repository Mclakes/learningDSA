// alert("Ancestor is blue");
// function inception () {
//     debugger;
//     inception()
// }
// var goal = inception();
// console.log(goal);


//stack overflow example

// let counter =  0;
// function inception( ) {
//     console.log(counter)
//     if (counter > 3) {
//         return 'done!';
//     }
//     counter++
//     inception()
// }

// console.log(inception())

//factorial Problem

// function findFactorialRecursive(number) {
//     if (number === 2) {
//         return 2;
//     }
//     return number * findFactorialRecursive(number-1);
// }

// function findFactorialIteration(number) {
//     let answer = 1;
//     if (number === 2) {
//         answer = 2
//     }
//     for(let i = 2; i <= number; i++){ 
//         answer = answer * i;
//     }
//     //code here
//     return answer;
// }

// console.log(findFactorialRecursive(5));
// console.log(findFactorialIteration(5));

//fibonacci Seuence solution
// 0,1,1,2,3,5,8,13,21,34,55,89

// function fibonacciIteration(n) {
//     let arr = [0,1];
//     for (let i=2; i< n+1; i++) {
//         arr.push(arr[i-2]+ arr[i-1]);
//     }   
//     return arr[n]
// } 
// function fibonacciRecursive(n) {
//     if (n<2) {
//         return n;
//     }
//     return (fibonacciRecursive(n-1) + fibonacciRecursive(n-2));
// }

// // console.log(fibonacciRecursive(11))
// console.log(fibonacciIteration(5));

//Sorting

// const letters = [ 'a', 'd', 'c', 'e', 'b', 'a']
// const basket =  [ 2, 65, 34, 2, 1, 7, 8];

// console.log(letters.sort())
// console.log('2'.charCodeAt(0));
// console.log('65'.charCodeAt(0));
// console.log('34'.charCodeAt(0));

// const spanish = []

// spanish.sort(function (a,b){
//     return  a.localeCompare(b);
// })

// console.log(basket.sort(function (a,b) {
//     return a-b;
// }))

//bubble sort

// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function bubbleSort(array) {
//     const length = array.length;
//     for(let i=0; i<length; i++) {
//         for (let j=0; j<length; j++){
//             if(array[j] > array[j+1]) {
//                 //swap numbers
//                 let temp = array[j];
//                 array[j] = array[j+1];
//                 array[j+1] = temp;
//             }
//         }
//     }
// }
// bubbleSort(numbers);
// console.log(numbers);

//selection sorting

// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function selectionSort(array) {
//     const length = array.length;
//     for(let i=0; i<length; i++) {
//         // set current index as minimum
//         let min = i;
//         let temp = array [i];
//         for(let j=i+1; j<length; j++) {
//             if(array[j]<array[min]) {
//                 //update minimum if current is lower than what we had previously
//                 min =j;
//             }
//         }
//         array[i] = array[min];
//         array[min] =temp;
//     }
//     return array;
// }

// selectionSort(numbers);
// console.log(numbers);


//insertion sorting

// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function insertionSorting(array){
//     const length = array.length;
//     for (let i =0; i< length; i++) {
//         if (array[i]< array[0]) {
//             //move number to the first positin 
//         array.unshift(array.splice(i,1)[0]);
//         } else {
//             //find where number should go
//             for (let j= 1; j<i; j++) {
//                 if (array[i]> array[j-1] && array[i] < array[j]) {
//                     //move number to the right spot
//                     array.splice(j,0,array.splice(i,1)[0]);
//                 }
//             }
//         }
        
//     }
// }

// insertionSorting(numbers);
// console.log(numbers);

//merge sort

// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function mergeSort(array) {
//     if (array.length === 1) {
//         return array
//     }
//     // split array into right and left
//     const length = array.length;
//     const middle = Math.floor(length / 2)
//     const left = array.slice(0, middle)
//     const right = array.slice(middle)
//     // console.log('left:', left);
//     // console.log('right:', right);

//     return merge (
//         mergeSort(left),
//         mergeSort(right)
//     )
// }

// function merge(left, right){
//     const result = []
//     let leftIndex = 0;
//     let rightIndex = 0;
//     while(leftIndex < left.length && rightIndex < right.length) {
//         if(left[leftIndex] < right[rightIndex]) {
//             result.push(left[leftIndex]);
//             leftIndex++
//         } else {
//             result.push(right[rightIndex]);
//             rightIndex++
//         }
//     }
//     console.log(left,right)
//     return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
// }


// answer = mergeSort(numbers);
// console.log(answer);

//QuicK SORT

// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// //no code

//TOPIC : Bread First Search

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BinarySearchTree {
//     constructor() {
//         this.root = null;
        
//     }
//     insert(value){
//         const newNode = new Node(value);
//         if(this.root === null) {
//             this.root = newNode
//         } else {
//             let currentNode = this.root;
//             while(true) {
//                 if(value < currentNode.value) {
//                     //left
//                     if(!currentNode.left) {
//                         currentNode.left = newNode;
//                         return this;
//                     }
//                     currentNode = currentNode.left;
//                 } else {
//                     //right
//                     if(!currentNode.right) {
//                         currentNode.right = newNode;
//                         return this;
//                     }
//                     currentNode = currentNode.right;
//                 }
//             }
//         }
//     }
//     lookup(value) {

//     }
//     remove(value){

//     }
//     breadthFirstSearch() {
//         let currentNode = this.root;
//         let list = [];
//         let queue = [];
//         queue.push(currentNode);

//         while(queue.length) {
//             currentNode = queue.shift()
//             console.log(currentNode.value)
//             list.push(currentNode.value)
//             if(currentNode.left){
//                 queue.push(currentNode.left)
//             }
//             if(currentNode.right) {
//                 queue.push(currentNode.right)
//             }
//         }
//         return list
//     }
//     //for recursive
//     breadthFirstSearchR(queue, list) {
//         if(!queue.length) {
//             return list;
//         }
//         let currentNode = queue.shift();
//         list.push(currentNode.value)
//         if(currentNode.left){
//             queue.push(currentNode.left)
//         }
//         if(currentNode.right) {
//             queue.push(currentNode.right)
//         }
//         return this.breadthFirstSearchR(queue, list)
//     }
//     DFSInorder(){
//         return traverseInOrder(this.root, [])
//     }
//     DFSPostorder(){
//         return traversePostOrder(this.root, [])
//     }
//     DFSPreorder(){
//         return traversePreOrder(this.root, [])
//     }

// }

// //1,4,6,9,15,20,170
// function traverseInOrder(node, list){
//     console.log(node.value)
//     if (node.left) {
//         traverseInOrder(node.left, list);
//     }
//     list.push(node.value)
//     if(node.right) {
//         traverseInOrder(node.right, list)
//     }
//     return list
// }

// //9,4,1,6,20,15,170
// function traversePreOrder(node, list) {
//     console.log(node.value)
//     list.push(node.value);
//     if(node.left) {
//         traversePreOrder(node.left, list)
//     }
//     if(node.right) {
//         traversePreOrder(node.right, list)
//     }
//     return list
// }

// //1,6,4,15,170,20, 9
// function traversePostOrder(node, list) {
//     console.log(node.value)
//     if(node.left) {
//         traversePostOrder(node.left, list)
//     }
//     if(node.right) {
//         traversePostOrder(node.right, list)
//     }
//     list.push(node.value);
//     return list
// }



// const tree = new BinarySearchTree();
// // tree.insert(9);
// tree.insert(9);
// tree.insert(4)
// tree.insert(6)
// tree.insert(20)
// tree.insert(170)
// tree.insert(15)
// tree.insert(1)
// // JSON.stringify(traverse(tree.root))
// // console.log(tree.breadthFirstSearch())
// // console.log(tree.breadthFirstSearchR([tree.root], []))
// console.log(tree.DFSPostorder())


// function traverse(node) {
//     const tree = { value: node.value}; 
//     tree.left = node.left === null ? null : traverse(node.left);
//     tree.right = node.right === null ? null : traverse(node.right);
//     return tree;
// }

// Dynamic Programming

function addTo80(n){
    console.log('long time')
    return n + 80
}

let cache = {};
