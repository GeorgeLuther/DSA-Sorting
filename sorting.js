//bubble sort - BAD!!! - O(n^2)
//multiple incremental passes through the array until swaps = 0

function swap(arr, i, j){
    const tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
}

function bubbleSort(arr) {
    let swaps = 0
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i+1]) {
            swap(arr, i, i+1)
            swaps++
        }
    }
    if (swaps > 0) {
        return bubbleSort(arr)
    }
    return arr
}

//merge sort - Good - O(nlog(n))
// recursive, divide and conquer. 
//chop list into lists 1 el long, sort into groups of 2
// sort those groups into a list, etc

//consistent, potentially uses more space than quicksort

//split down
function mergeSort(arr){
    if (arr.length <= 1) {
        return arr
    }
    const mid = Math.floor(arr.lenth/2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid, arr.length)

    left = mergeSort(left)
    right = mergeSort(right)
    return merge(left, right, arr)
}
//sort and join
function merge(left, right, arr) {
    let leftIdx = 0
    let rightIdx = 0
    let outputIdx = 0
    while (leftIdx < left.length && rightIdx < right.length) {
        if (left[leftIdx] < right[rightIdx]) {
            arr[outputIdx++] = left[leftIdx++]
        }
        else {
            arr[outputIdx++] = right[rightIdx++]
        }
    }
    for (let i = leftIdx; i < left.length; i++) {
        arr[outputIdx++] = left[i]
    }

    for (let i = rightIdx; i < right.length; i++) {
        arr[outputIdx++] = right[i]
    }
    return arr
}
/*
    1. 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40
    - 3 calls of mergeSort brings
    21, 1 
    26, 45 
    29, 28 
    2, 9
    16, 49 
    39, 27 
    43, 34 
    46, 40
    
*/