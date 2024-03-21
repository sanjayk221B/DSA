// =====================Linked List============
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    //O(1)
    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    //O(n)
    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            let prev = this.head
            while (prev.next) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            return
        }
        if (index === 0) {
            this.prepend(value)
        } else {
            const node = new Node(value)
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

    remove(index) {
        if (index < 0 || index >= this.size) {
            return null
        }
        let removeNode;
        if (index === 0) {
            removeNode = this.head
            this.head = this.head.next
        } else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            removeNode = prev.next
            prev.next = removeNode.next
        }
        this.size--
        return removeNode
    }

    removeValue(value) {
        if (this.isEmpty()) {
            return null
        }
        if (this.head.value === value) {
            this.head = this.head.next
            this.size--
            return value
        } else {
            let prev = this.head
            while (prev.next && prev.next.value !== value) {
                prev = prev.next
            }
            if (prev.next) {
                const removeNode = prev.next
                prev.next = removeNode.next
                this.size--
                return value
            }
            return null
        }
l
    }

    search(value) {
        if (this.isEmpty()) {
            return -1
        }
        let i = 0
        let curr = this.head
        while (curr) {
            if (curr.value === value) {
                return i
            }
            curr = curr.next
            i++
        }
        return -1
    }

    reverse() {
        let prev = null
        let curr = this.head
        while (curr) {
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }   


    print() {
        if (this.isEmpty()) {
            console.log('list is empty')
        } else {
            let curr = this.head
            let listValues = ''
            while (curr) {
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listValues)
        }
    }
}




const list = new LinkedList()
console.log(list.isEmpty())
console.log(list.getSize())
list.print()
// list.append(10)
// list.print()
// list.append(20)
// list.append(30)
// list.print()

list.insert(10, 0)
list.print()
list.insert(20, 0)
list.print()
list.insert(30, 1)
list.print()
list.insert(40, 1)
list.print()

// console.log(list.remove(0));
// list.print()

// console.log(list.removeValue(40))
// list.print()

// console.log(list.search(60))

// list.reverse()
// list.print()





//==============Linked List With Tail========
// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null
//         this.tail = null
//         this.size = 0
//     }

//     isEmpty() {
//         return this.size === 0
//     }

//     getSize() {
//         return this.size
//     }

//     print() {
//         if (this.isEmpty()) {
//             console.log('List is empty');
//         } else {
//             let curr = this.head
//             let listValues = ''
//             while (curr) {
//                 listValues += `${curr.value} `
//                 curr = curr.next
//             }
//             console.log(listValues)
//         }
//     }

//     prepend(value) {
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//             this.tail = node
//         } else {
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }

//     append(value) {
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//             this.tail = node
//         } else {
//             this.tail.next = node
//             this.tail = node
//         }
//         this.size++
//     }

//     removeFromFront() {
//         if(this.isEmpty()) {
//             return null
//         }
//         const value = this.head.value
//         this.head  = this.head.next
//         this.size--
//         return value
//     }

//     removeFromEnd() {
//         if(this.isEmpty) {
//             return null
//         }
//         const value = this.tail.value
//         if(this.size === 1) {
//             this.head = null
//             this.tail = null
//         } else {
//             let prev = this.head
//             while(prev.next !== this.tail) {
//                 prev = prev.next
//             }
//             prev.next = null
//             this.tail = prev
//         }
//         this.size--
//         return value
//     }
// }

// const list = new LinkedList()
// list.print()

// list.append(1)
// list.append(2)
// list.append(3)
// list.prepend(0)
// console.log('list size', list.getSize())
// list.print()

// list.removeFromFront()
// list.removeFromEnd()
// list.print()