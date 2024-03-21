let str = 'hello world hi njan sanjay'

let str1 = str.split(' ')
console.log(str1);

for (i = 0; i < str1.length; i++) {
str1[i] = str1[i].charAt(0).toUpperCase() + str1[i].slice(1)
}

console.log(str1)