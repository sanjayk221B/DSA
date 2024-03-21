// class Queue {
//     constructor() {
//         this.items = []
//     }

//     enqueue(element) {
//         this.items.push(element)
//     }

//     dequeue(element) {
//         return this.items.shift()
//     }

//     isEmpty() {
//         return this.items.length === 0
//     }

//     peek() {
//         if(!this.isEmpty()) {
//             return this.items[0]
//         }
//         return null
//     }

//     size() {
//         return this.items.length
//     }

//     print() {
//         console.log(this.items.toString())
//     }
// }


// const queue  = new Queue()
// console.log(queue.isEmpty());

// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// console.log(queue.peek());
// console.log(queue.size());
// queue.print()

// console.log(queue.dequeue())
// console.log(queue.peek());



class Queue {
    constructor() {
        this.queue = []
        this.front = 0
        this.back = 0
    }

    isEmpty() {
        return this.back - this.front === 0
    }

    getSize() {
        return this.back - this.front
    }
    
    enqueue(element) {
        this.queue[this.back] = element
        this.back++
    }

    dequeue() {
        if(this.isEmpty()) {
            return null
        }
        let removedItem = this.queue[this.front]
        delete this.queue[this.front]
        this.front++

        return removedItem
    }

    peek() {
        if(this.isEmpty()) {
            console.log();
        }
        return this.queue[this.front]
    }

    print() {
        if(this.isEmpty()) {
            console.log('Queue is empty');
        }
        let str = ''
        for(let i = this.front ; i < this.back; i++) {
            str += `${this.queue[i]} `
        }
        console.log(str)
    }
}

// const queue = new Queue()

// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(40)
// queue.enqueue(50)

// queue.print()
// queue.dequeue()
// queue.print()
// console.log(queue.peek())


module.exports = Queue