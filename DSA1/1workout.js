// ==============Fibonacci===========

// function fibonacci(n) {
//     const fib = [0, 1];
//     for( let i=2; i<n ; i++) {
//         fib[i] = fib[i-1] + fib[i-2]
//     }
//     return fib;
// }
// console.log(fibonacci(2));
// console.log(fibonacci(3));
// console.log(fibonacci(7));

// Big O = O(n)


// ==============Factorial==========
// factorial of 4 = 4*3*2*1

// function factorial(n) {
//     let result = 1;
//     for (let i = 2; i <= n; i++) {
//         result = result * i;
//     }
//     return result;
// }

// console.log(factorial(0));
// console.log(factorial(1));
// console.log(factorial(5));


// ===============Prime==============
// function isPrime(n) {
//     if (n < 2) {
//         return false;
//     }
//     for (let i = 2; i < Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             return false;
//         }
//     }
//     return true
// }

// console.log(isPrime(2));
// console.log(isPrime(5));
// console.log(isPrime(6));


// ==============Power of 2===============
// function isPowerOfTwo(n) {
//     if (n < 1) {
//         return false;
//     }
//     while (n > 1) {
//         if (n % 2 !== 0) {
//             return false;
//         }
//         n = n / 2
//     }
//     return true
// }

// console.log(isPowerOfTwo(1));
// console.log(isPowerOfTwo(2));
// console.log(isPowerOfTwo(5));

// ============Recursive Fibonacci==============
// function recursiveFibonacci(n) {
//     if (n < 2) {
//         return n
//     }
//     return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
// }

// console.log(recursiveFibonacci(0));
// console.log(recursiveFibonacci(1));
// console.log(recursiveFibonacci(6));

// =============Recursive Factorial=============
// function recursiveFactorial(n) {
//     if(n === 0) {
//         return 1;
//     }
//     return n * recursiveFactorial(n-1);
// }

// console.log(recursiveFactorial(0))
// console.log(recursiveFactorial(1))
// console.log(recursiveFactorial(5))

// Big-O = O(n)

// ===============Palindrome======================
// function isPalindrome(x) {
//  return x === +x.toString().split('').reverse().join('')
// }
// console.log(isPalindrome(121));
// console.log(isPalindrome(-123456));


// function isPalindrome(x) {
//  return x < 0 ? false : x === +x.toString().split('').reverse().join('')
// }
// console.log(isPalindrome(121));
// console.log(isPalindrome(-123456));


// =================Valid Anagram===================
// function isAnagram(s, t) {
//     s = s.split('').sort().join('');
//     t = t.split('').sort().join('');

//     return s === t;

// }
// console.log(isAnagram("nagaram","anagram"));
// console.log(isAnagram("nagaram","anagraaa"));

// const isAnagram = function (s, t) {
//     if (s.length !== t.length) return false;

//     let obj1 = {};
//     let obj2 = {};

//     for (let i = 0; i < s.length; i++) {
//         obj1[s[i]] = (obj1[s[i]] || 0) + 1;
//         obj2[t[i]] = (obj2[t[i]] || 0) + 1;
//     }
//     console.log(obj1);
//     console.log(obj2);

//     for (const key in obj1) {
//         console.log(`Comparing key: ${key}`);
//         console.log(`obj1[${key}]: ${obj1[key]}`);
//         console.log(`obj2[${key}]: ${obj2[key]}`);
//         if (obj1[key] !== obj2[key]) {
//             console.log(`Values are different for key: ${key}`);
//             return false;
//         }
//     }

// }

// console.log(isAnagram("nagaram", "anagrak"));


// ==================Two Sum================
// var twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] == target) {
//                 return [i, j]
//             }
//         }
//     }

// };
// console.log(twoSum([2, 7, 11, 15, 5, 4], 9));

// const twoSum = function (nums, target) {
//     const obj = {}

//     for (let i = 0; i < nums.length; i++) {
//         let n = nums[i];
//         if (obj[target - n] >= 0) {
//             return [obj[target - n], i]
//         } else {
//             obj[n] = i;
//         }
//     }
// }
// console.log(twoSum([2, 7, 11, 15, 5, 4], 9));
