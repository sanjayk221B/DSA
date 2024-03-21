//Second Largest Number 
function secondLargest(array) {
    const uniqueArray = Array.from(new Set(array));  //O(n)
    uniqueArray.sort((a, b) => b - a);  //O(nlogn)

    if(uniqueArray.length >= 2) {
        return uniqueArray[1];
    }
}
console.log(secondLargest([1, 2, 5, 4, 6, 8, 9, 13, 12, 11]));


function secondLargestOptimized(array) {
    let largest = Number.NEGATIVE_INFINITY;
    let secondLargest = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > largest) {
            secondLargest = largest
            largest = array[i];
        } else if (array[i] != largest && array[i] > secondLargest) {
            secondLargest = array[i]
        }
    }
    return secondLargest;
}
console.log(secondLargestOptimized([1, 2, 5, 4, 6, 8, 9, 13, 11]));


// let a = 10
// let b = 20


