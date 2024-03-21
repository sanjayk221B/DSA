//Array Declaration
// let array = new Array();
// let array = [];
let person = {
    name: "sanjay",
    age: "21"
}
// let array = ["apple", "orange", "pineapple", person];
let array = ["apple", "orange", "pineapple"];
// console.log(array[3]);
// console.log(array[3].name);
// console.log(array.length);

array.push("mango");
// console.log(array);

// array.pop();
// console.log(array);

// array.unshift("cherry");
// console.log(array);

// array.shift();
// console.log(array);


//=============Array Loop methods
let numbers = [1, 2, 3, 4, 5];

// const newNumbers = numbers.map((item, index, array) => {
//     // console.log(item, index, array);
//     return item + 5
// })
// console.log(newNumbers);

// const newNumbers = numbers.filter((item, index, array) => {
//     return item > 3;
// });
// console.log(newNumbers);

// const newNumbers = numbers.reduce((prev, item, index, array) => {
//     return prev + item;
// }, 0);
// console.log(newNumbers);

// const newNumbers = numbers.some((item, array, index) => {
//     return item < 2
// })
// console.log(newNumbers);

// const newNumbers = numbers.every((item, array, index) => {
//     return item < 6
// })
// console.log(newNumbers);

// const newNumbers = numbers.find((item, array, index) => {
//     return item < 3
// })
// //First element that satisfy the condition 
// console.log(newNumbers);

// const index = nums1.findIndex((item) => item === 3) ;
// console.log(index);

// ===============Spread and Rest 
const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6, 7, 8];

// const finalNums = [...nums1, ...nums2];
// console.log(finalNums);

// function sum(...numbers) { //no rest operator returns nums1 only
//     return numbers;
// }

// console.log(sum(nums1, nums2, 5, "hello"));

// ================Other Array Methods
// const newNums = nums1.concat(nums2, array);
// console.log(newNums);

// const newArray = array.slice(0, 2);
// const newArray = array.slice(-3,-2);
// console.log(array);
// console.log(newArray);

// // splice(start, deleteCount, elementsToAdd)
// console.log(array)
// const newArray = array.splice(1, 1, "coconut");
// console.log(array)
// console.log(newArray);

// // fill(elementToAdd, start)
// const nums3 = [2, 3, 4, 5, 6];
// nums3.fill(0, 2);
// console.log(nums3)

// // flat(depth) can also give Infinity
// const nums4 = [1, [2, 3], [[4, 5], 6]];
// const flat = nums4.flat(2);
// console.log(flat);

// nums1.reverse();
// console.log(nums1);

// const unSorted = [5, 1, 3, 9, 7, 2, 6];
// unSorted.sort();
// unSorted.sort((a,b) => b-a)
// console.log(unSorted);

