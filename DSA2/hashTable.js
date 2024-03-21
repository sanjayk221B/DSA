// class HashTable {
//     constructor(size) {
//         this.table = new Array(size)
//         this.size = size
//     }

//     hash(key) {
//         let total = 0
//         for (let i = 0; i < key.length; i++) {
//             total += key.charCodeAt(i)
//         }
//         return total % this.size
//     }

//     set(key, value) {
//         const index = this.hash(key)
//         this.table[index] = value
//     }

//     get(key) {
//         const index = this.hash(key)
//         return this.table[index]
//     }

//     remove(key) {
//         const index = this.hash(key)
//         this.table[index] = undefined
//     }

//     display() {
//         for (let i = 0; i < this.table.length; i++) {
//             if(this.table[i]) {
//                 console.log(i, this.table[i])
//             }
//         }
//     }
// }



// const table = new HashTable(50)

// table.set("name", "sanjay")
// table.set("age", 25)
// table.display()

// console.log(table.get("name"))
// table.remove("name")
// table.display()

// table.set("mane","clark")
// table.display()


//Collision
class HashTable {
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }

    hash(key) {
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key, value) {
        const index = this.hash(key)
        // this.table[index] = value
        const bucket = this.table[index]

        if (!bucket) {
            this.table[index] = [[key, value]]
        } else {
            const sameKeyItem = bucket.find(item => item[0] === key)
            if (sameKeyItem) {
                sameKeyItem[1] = value
            } else {
                bucket.push([key, value])
            }
        }
    }

    get(key) {
        const index = this.hash(key)
        // return this.table[index]
        const bucket = this.table[index]

        if (bucket) {
            const sameKeyItem = bucket.find(item => item[0] === key)

            if (sameKeyItem) {
                return sameKeyItem[1]
            }
        }
        return undefined
    }

    remove(key) {
        const index = this.hash(key)
        // this.table[index] = undefined
        const bucket = this.table[index]
        if (bucket) {
            const sameKeyItem = bucket.find(item => item[0] === key)

            if (sameKeyItem) {
                bucket.splice(bucket.indexOf(sameKeyItem), 1)
            }
        }
    }

    remove(value) {
        for (let i = 0; i < this.table.length; i++) {
            const bucket = this.table[i]
            if (bucket) {
                for (let j = 0; j < bucket.length; j++) {
                    if (bucket[j][1] === value) {
                        bucket.splice(j, 1)
                    }
                }
            }
        }
    }

    containsValue(value) {
        for (let i = 0; i < this.table.length; i++) {
            const bucket = this.table[i]
            if (bucket) {
                for (let j = 0; j < bucket.length; j++) {

                    if (bucket[j][1] === value) return true
                }
            }

        }
        return false
    }

    containsKey(key) {
        const index = this.hash(key)
        const bucket = this.table[index]
        if (bucket) {
            const sameKeyItem = bucket.find(item => item[0] === key)
            if (sameKeyItem) return true
        }
        return false
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i])
            }
        }
    }
}


const table = new HashTable(50)

table.set("name", "sanjay")
table.set("age", 25)
// table.display()

console.log(table.get("name"))
// table.remove("name")
// table.display()

table.set("mane", "clark")
table.set("name", "Diana")
table.set("naem", "hello")
console.log(table.get("name"))
// table.remove("name")
// table.display()

// console.log(table.get("name"))
// console.log(table.get("mane"))
// console.log(table.get("naem"))

// console.log(table.containsValue('hello'))
console.log(table.containsKey('naem'))

module.exports = HashTable