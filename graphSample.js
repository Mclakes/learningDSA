//Edge List
const graph = [[0,2], [2,3], [2,1], [1,3]];

//Adjacency
const graph1 = [[2], [2,3], [0,1,3], [1,2]];
//the index of this array is the value of the actual graph node

//adjacent matrix
const graph2 = [
    [0,0,1,0],
    [0,0,1,1],
    [1,1,0,1],
    [0,1,1,0]
]
// for object
const graph3 = {
    0: [0,0,1,0],
    1: [0,0,1,1],
    2: [1,1,0,1],
    3: [0,1,1,0] 
}