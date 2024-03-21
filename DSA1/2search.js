// =============Linear Search===============
// function linearSearch(array, target) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === target) {
//             return i
//         }
//     }
//     return -1;
// }
// //O(n)
// console.log(linearSearch([-5, 2, 10, 4, 6], 10));
// console.log(linearSearch([-5, 2, 10, 4, 6], 6));
// console.log(linearSearch([-5, 2, 10, 4, 6], 20));


//==============Binary Search=================== 
// function binarySearch(array, target) {
//     let leftIndex = 0;
//     let rightIndex = array.length - 1;
    //     while (leftIndex <= rightIndex) {
    //         let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    //         if(target === array[middleIndex]) {
    //             return middleIndex
    //         } 
    //         if(target < array[middleIndex]) {
    //             rightIndex = middleIndex - 1
    //         } else {
    //             leftIndex = middleIndex + 1
    //         }
    //     }
//     return -1
// }
// // Big-O = O(log n)
// console.log(binarySearch([-5, 2, 4, 6, 10], 10));
// console.log(binarySearch([-5, 2, 4, 6, 10], 6));
// console.log(binarySearch([-5, 2, 4, 6, 10], 20));


//==============Recursive Binary Search==========
function recursiveBinarySearch(array, target) {
    return search(array, target, 0, array.length - 1)
}

function search(array, target, leftIndex, rightIndex) {
    if (leftIndex > rightIndex) {
        return -1
    }

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    if (target === array[middleIndex]) {
        return middleIndex
    }

    if (target < array[middleIndex]) {
        return search(array, target, leftIndex, middleIndex - 1)
    } else {
        return search(array, target, middleIndex + 1, rightIndex)
    }

}

console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10));
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6));
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20));