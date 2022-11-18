// const nemo = ["nemo",];

// const everyone = ["dary", "bruce", "marlin" ,  "gill", "bloat", "nigel", "squirt", "darla" , "hank", "nemo"];
 
// const large = new Array(10).fill("nemo");

// function findNemo(array) {
//     let t0 = performance.now();
    
//     for (let i=0; i<array.length; i++) {
//         console.log("running")
//         if(array[i] === "nemo") {
//             console.log("found Nemo");
//             break;
//         }
//     }
//     let t1 = performance.now();
//     console.log("call to find nemo took " +(t1-t0) + " milliseconds")
// }

// findNemo(everyone); //O(n) -> linear time 

// const boxes = [1,2,3,4,5];   

// function logAllPairsOfArray( array) {
//     for (let i=0; i< array.length; i++ ) {
//         for(let j=0; j<array.length; j++) {
//             console.log(array[i], array[j]);
//         }
        
//     }
// }

// logAllPairsOfArray(boxes);

// console.log("olalekan".length);

// let user = {
//     age: 54,
//     name: "kylie",
//     magic: true,
//     scream: function() {
//         console.log('ahhhhhh');
//     }
// }

//  //0(1)
// user.spell = 'aba ka da bra';
// user

// console.log(user.scream())

// const a = new Map()
// const b = new Set()

// class HashTable {
//     constructor(size) {
//         this.data = new Array(size);
//     }

//     _hash(key) {
//         let hash = 0;
//         for (let i= 0; i < key.length; i++) {
//             hash = (hash + key.charCodeAt(i) * i ) %
//             this.data.length
//             // console.log(hash)
//         }
//         return hash
//     }

//     set(key, value) {
//         let address = this._hash(key);
//         if (!this.data[address]) {
//             this.data[address] =[];
//         }
//         this.data[address].push([key, value])
//         return this.data
//     }
//     get(key) {
//         let address = this._hash(key);
//         const currentBucket = this.data[address];
//         if(currentBucket) {
//             for (let i = 0; i<currentBucket.length; i++){
//                 if(currentBucket[i][0] === key ) {
//                     return currentBucket[i][1]
//                 }
//             }
//         }
//         return undefined
//     }

//     keys() {    
//         const keysArray = []; 
//             for (let i=0; i < this.data.length ; i++) {
//                 if(this.data[i]) {
//                     keysArray.push(this.data[i][0][0]) 
//                     console.log(this.data[i][0][0])
                                     
//                 }                 
//             }
//         return keysArray;
//     }
// }

// const myHashTable = new HashTable(50)
// // myHashTable.set('grapes', 10000)
// // myHashTable.get('grapes')
// myHashTable.set('grapes', 10000)
// myHashTable.set('apples', 54)
// myHashTable.set('oranges', 2)
// // myHashTable.keys();

// // console.log(myHashTable._hash('grapes'))
// // console.log(myHashTable.set('grapes', 10000), myHashTable.set('apples', 54)) 
// // console.log(myHashTable.get('oranges'));
// console.log(myHashTable.keys());

// function findingRecurringCharacter(input) {
//     for (let i=0; i < input.length; i++) {
//         for(let j=i+1; j < input.length; j++) {
//             if(input[i] === input[j]) {
//                 return input[i]
//             }
//         }
//     }
//     return undefined
// }
// //O(n^2)

// function findingRecurringCharacter1(input) {
//     let map = {};
//     for(let i=0; i<input.length; i++){
//         // console.log(map[input[i]])
//         if (map[input[i]] !== undefined) {
//             return input[i]
//         } else {
//             map[input[i]] = i
//         }
//         console.log(map)
//     }
    
//     return undefined
// }
// // findingRecurringCharacter1([2,5,1,2,3,5,1,2,4])
// console.log(findingRecurringCharacter([2,5,5,2,3,5,1,2,4]))

// let obj1 = {a:true};
// let obj2 = obj1;
// obj1.a = 'booya';
// delete obj1;
// obj2 = 'hello'
// // console.log('1', obj1)
// console.log('2', obj2);

//10-->5-->16

// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }

class LinkedList {
    constructor(value){
        this.head = {
            value: 10,
            next: null
        }
            this.tail = this.head;
            this.length = 1;
    }
}

const myLinkedList = new LinkedList(10)
console.log(myLinkedList)