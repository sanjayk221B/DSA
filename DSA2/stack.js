// class Stack {

//     constructor() {
//         this.stack = []
//     }

//     isEmpty() {
//         return this.stack === 0
//     }

//     getSize() {
//         return this.stack.length
//     }

//     push(element) {
//         this.stack.push(element)
//     }

//     pop() {
//         if (this.isEmpty()) {
//             console.log('stack is empty')
//         }
//         return this.stack.pop()
//     }

//     peek() {
//         if (this.isEmpty()) {
//             console.log('stack is empty')
//         }
//         return this.stack[this.getSize() - 1]
//     }

//     print() {
//         console.log(this.stack.toString())
//     }
// }

// const stack = new Stack();

// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.push(40)

// console.log(stack.peek())
// stack.print()
// console.log(stack.pop())
// stack.print()



class Stack {
    constructor() {
        this.stack = []
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    push(element) {
        this.stack[this.size] = element
        this.size++
    }

    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        let removedItem = this.stack[this.size - 1]
        delete this.stack[this.size - 1]
        this.size--
        return removedItem
    }

    peek() {
        if (this.isEmpty()) {
            console.log('this list is empty');
            return null
        } else {
            return this.stack[this.size - 1]
        }
    }

    print() {
        let str = ''
        for (let i = 0; i < this.size ; i++) {
            str += this.stack[i] + ' '
        }
        console.log(str)
    }
}


// const stack = new Stack();

// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.push(40)

// console.log(stack.peek())
// stack.print()
// console.log(stack.pop())
// stack.print()


module.exports = Stack