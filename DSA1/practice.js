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

    removeMiddle() {
        let prev = this.head
        let middle = Math.floor((this.size)/2)
        for(let i = 0 ; i < middle-1; i++) {
            prev = prev.next
        }
        let remove = prev.next
        prev.next = remove.next

    }

    print() {
        if(this.isEmpty()) {
            console.log('list is empty');
        } else {
            let curr = this.head
            let list = ''
            while(curr) {
                list += `${curr.value} `
                curr = curr.next
            }
            console.log(list);
        }
    }
}

const list = new LinkedList()

list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)
list.print()
list.removeMiddle()
list.print()