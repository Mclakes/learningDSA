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

class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i= 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i ) %
            this.data.length
            // console.log(hash)
        }
        return hash
    }

    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] =[];
        }
        this.data[address].push([key, value])
        return this.data
    }
    get(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if(currentBucket) {
            for (let i = 0; i<currentBucket.length; i++){
                if(currentBucket[i][0] === key ) {
                    return currentBucket[i][1]
                }
            }
        }
        return undefined
    }

    keys() {    
        const keysArray = []; 
            for (let i=0; i < this.data.length ; i++) {
                if(this.data[i]) {
                    keysArray.push(this.data[i][0][0]) 
                    console.log(this.data[i][0][0])
                                     
                }                 
            }
        return keysArray;
    }
}

const myHashTable = new HashTable(50)
// myHashTable.set('grapes', 10000)
// myHashTable.get('grapes')
myHashTable.set('grapes', 10000)
myHashTable.set('apples', 54)
myHashTable.set('oranges', 2)
// myHashTable.keys();

// console.log(myHashTable._hash('grapes'))
// console.log(myHashTable.set('grapes', 10000), myHashTable.set('apples', 54)) 
// console.log(myHashTable.get('oranges'));
console.log(myHashTable.keys());