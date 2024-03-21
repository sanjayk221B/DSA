const Stack = require('../Week-14/stack')
const Queue = require('../Week-14/queue')

// const stack = new Stack()

// const str = 'sanjay';
// const str1 = str.split('');
// console.log(str1);

// for (let i = 0; i < str1.length; i++) {
//     stack.push(str1[i]);
// }

// let reversedString = "";
// while (stack.size > 0) {
//     reversedString += stack.pop();
// }

// console.log(reversedString, "reversed string");


//============Reverse Queue========
const queue = new Queue()

function reverseQueue(queue) {
    if(queue.isEmpty()) {
        return
    }
    let frontElement = queue.dequeue()

    reverseQueue(queue) 
    queue.enqueue(frontElement)
}

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)
queue.print()

reverseQueue(queue)
queue.print()