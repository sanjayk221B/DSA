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

    getSize() {
        return this.size
    }

    print() {
        let curr = this.head
        let list = ''
        if (this.isEmpty()) {
            console.log('list is empty');
        } else {
            while (curr) {
                list += `${curr.value} `
                curr = curr.next
            }
        }

        console.log(list)
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


}

const list = new LinkedList()
let array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {
    list.append(array[i])
}
console.log(list.getSize());
list.print()