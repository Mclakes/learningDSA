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

let user = {
    age: 54,
    name: "kylie",
    magic: true,
    screen: function() {
        console.log('ahhhhhh');
    }
}