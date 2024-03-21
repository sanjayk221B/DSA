// function reverse(str) {
//     let arr = str.split('')
//     console.log(arr)
//     let len = str.length

//     for (let i = 0; i < len / 2; i++) {
//         let temp = arr[i]
//         arr[i] = arr[len - 1 - i]
//         arr[len - 1 - i] = temp
//     }
//     return arr.join(' ')
// }

// let arr = [1, 2, 3, 4, 5]

// console.log(reverse('12345'))


function reverse(arr) {
    
    let len = arr.length

    for (let i = 0; i < len / 2; i++) {
        let temp = arr[i]
        arr[i] = arr[len - 1 - i]
        arr[len - 1 - i] = temp
    }
    return arr
}

let arr = [1, 2, 3, 4, 5]
console.log(reverse(arr))