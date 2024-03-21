class Node {
    constructor(value) {
        this.value = value
        this.next = null
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
            return null
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
        if (index < 0 || index > this.size) {
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
        } else {
            let prev = this.head
            while (prev.next && prev.next.value !== value) {
                prev = prev.next
            }
            let removeNode = prev.next
            prev.next = removeNode.next
            this.size--
            return removeNode
        }
        return null
    }

    search(value) {
        if(this.isEmpty()) {
            return -1
        }
        let i = 0
        let curr = this.head
        while(curr) {
            if(curr.value === value) {
                return i
            }
            i++ 
            curr = curr.next
        }
        return -1
    }

    reverse() {
        if(this.isEmpty()) {
            console.log('list is empty');
        } else {
            let prev = null 
            let curr = this.head
            while(curr) {
                let next = curr.next
                curr.next = prev
                prev = curr
                curr = next 
            }
            this.head = prev
        }
    }

    removeDuplicates() {
        if(this.isEmpty() || this.size === 1) {
            return null
        } 
        let start = this.head 
        while (start) {
            let curr = start 
            while(curr.next) {
                if(start.value === curr.next.value) {
                    curr.next = curr.next.next
                    this.size --
                } else {
                    curr = curr.next
                }
            }
            start = start.next
        }
    }

    print() {
        if (this.isEmpty()) {
            console.log('list is empty');
        }
        let curr = this.head
        let list = ''
        while (curr) {
            list += `${curr.value} `
            curr = curr.next
        }
        console.log(list);
    }

}

const list = new LinkedList()
list.prepend(5)
list.prepend(4)
list.append(3)
list.append(3)
list.append(5)
list.append(4)
list.append(3)
list.append(5)
list.insert(1, 2)
list.append(4)
list.print()

// list.remove(1)
// list.print()

// list.removeValue(1)
// list.print()

// console.log(list.search(0));

// list.reverse()
// list.print()

list.removeDuplicates()
list.print()