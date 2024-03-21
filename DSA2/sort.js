//========Bubble Sort=========
function bubbleSort(arr) {
    let swapped
    do {
        swapped = false
        for (let i = 0; i < arr.length - 1; i++) {
            if(arr[i] > arr[i+1]) {
                let temp = arr[i]
                arr[i] = arr[i+1] 
                arr[i+1] = temp
                swapped = true
            }
        }
    } while (swapped);
}

const arr = [8, 20, -2, 4, -6]
console.log(arr)
bubbleSort(arr)
console.log(arr)

//=======Insertion Sort=============
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let numberToInsert = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > numberToInsert) {
            arr[j + 1] = arr[j]
            j --
        }
        arr[j + 1] = numberToInsert
    }
}

// Best Case Time Complexity = O(n)
// Worst Case Time Complexity = O(n^2)
// Average Case Time Complexity = O(n^2)
// space Complexity = O(1)

const arr = [8, 20, -2, 4, -6]
console.log(arr)
insertionSort(arr)
console.log(arr)

//=============Quick Sort========
function quickSort(arr) {
    if (arr.length < 2) {
        return arr
    }
    let pivot = arr[arr.length - 1]
    let left = []
    let right = []
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
} 

// Time Complexity
// Average Case - O(nlogn)
// Best Case - O(nlogn)
// Worst Case - O(n^2)

// Space Complexity
// Average Case - O(nlogn)
// Worst Case - O(n)

const arr = [8, 20, -2, 4, -6]
console.log(arr)
console.log(quickSort(arr))


//==========Merge sort=========
function mergeSort(arr) {
    if (arr.length < 2) {
        return arr
    }
    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, mid)
    const rightArr = arr.slice(mid)
    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(leftArr, rightArr) {
    const sortedArr = []
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift())
        } else {
            sortedArr.push(rightArr.shift())
        }
    }
    return [...sortedArr, ...leftArr, ...rightArr]
}

const arr = [8, 20, -2, 4, -6]
console.log(arr)
console.log(mergeSort(arr))


//========Selection Sort========
function selectionSort(arr) {
    const n = arr.length;
    for(let i =0; i < n -1 ; i++) {
        let minIndex = i
        for( let j = i+1 ; j < n ; j++) {
            if(arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        // if(minIndex !== i) {
        //     [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        // }
        
        if(minIndex !== i) {
            let temp = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] = temp
        }
    }
    return arr
}

//Time Complexity = O(n^2)
//Space Complexity = O(1)

const arr = [8, 20, -2, 4, -6]
console.log(arr)
console.log(selectionSort(arr))