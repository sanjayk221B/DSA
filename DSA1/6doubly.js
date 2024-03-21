class Node {
    constructor(value) {
        this.value = value
        this.prev = null
        this.next = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
        this.size++
    }

    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            node.prev = this.tail
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    removeFromFront() {
        if (this.isEmpty()) {
            return null
        }
        const value = this.head.value
        this.head = this.head.next
        this.head.prev = null
        this.size--
        return value

    }

    removeFromEnd() {
        if (this.isEmpty()) {
            return null
        }
        const value = this.tail.value
        if (this.size === 1) {
            this.head = null
            this.tail = null
        } else {
            prev = this.tail.prev
            prev.next = null
            this.tail.prev = null
            this.tail = prev
        }
        this.size--
        return value
    }

    print() {
        if (this.isEmpty()) {
            console.log('list is empty')
        } else {
            let list = ''
            let curr = this.head
            while (curr) {
                list += `${curr.value} `
                curr = curr.next
            }
            console.log(list)
        }

    }

    printReverse() {
        if (this.isEmpty()) {
            console.log('list is empty')
        } else {
            let curr = this.tail
            let list = ''
            while (curr) {
                list += `${curr.value} `
                curr = curr.prev
            }
            console.log(list);
        }
    }
}


const list = new DoublyLinkedList()

list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.print()
list.printReverse()