// 1) pushFront
// goal: given an array and another integer we need to put the integer at the front 
// of the given arr

// step 1 make a function called pushFront with an array and an integer x as parameters
// step 2 to start we'll need a new empty array, i = 0 for the index to loop through
// and to push x into the new array to start.
// step 3 we will need a while loop to loop through the existing array at the index of i
// and push to the new array.
// step 4 save the newArr as the existing arr, console.log to check and return arr

// Attempt 1

// function pushFront(arr, x) {
//     let i = 0
//     let newArr = []
//     newArr.push(x)
//     while( i < arr.length) {
//         newArr.push(arr[i])
//         i++
//     }
//     arr = newArr
//     console.log(arr)
//     return arr;
// }

// Attempt 2
// googled it and found out about unshift to push to front and its way easier lol

function pushFront(arr, x) {
    arr.unshift(x)
    console.log(arr) 
}

pushFront([5,7,2,3], 8)
pushFront([99], 7)

// 2) popFront
// goal: remove first element in array and return it.

// step 1: create function passing in an array
// step 2: define variable i to iterate through index and x to save value to return
// step 3: while loop save arr[0] to x then pop arr[0] which apparently doesnt work in javaScript
// step 4: console.log's and return

// Attempt 1 did not work using pop
// function popFront(arr) {
//     let i = 0
//     let x = 0
//     while(i < arr.length) {
//         x = arr[0]
//         arr.pop([0])
//         i++
//     }
//     console.log(arr)
//     console.log(x)
//     return x;
// }

// Attempt 2 worked with shift and much more efficient code.

function popFront(arr) {
    let x = arr.shift()
    console.log(arr)
    console.log(x)
    return x;
}

popFront([0,5,10,15])

//3) insertAt()
// goal: to insert value at specific index in existing array

//step 1: create function insertAt that takes in an array, index, and value
//step 2: splice the array insert value at the index without deleting any values.
//step 3: console.log and return arr

function insertAt(arr, index, value) {
    arr.splice(index, 0, value)
    console.log(arr);
    return arr;
}

insertAt([100,200,5], 2, 311)
insertAt([9,33,7], 1, 42)