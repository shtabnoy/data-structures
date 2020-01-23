/**
 * Selection Sort
 * (in-place modification)
 */
export const selectionSort = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    let temp = arr[i]
    arr[i] = arr[min]
    arr[min] = temp
  }
  return arr
}

/**
 * Insertion Sort
 * (in-place modification)
 */
export const insertionSort = (arr, asc = true) => {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i]
    let j = i - 1
    while (j >= 0 && (asc ? arr[j] > key : arr[j] < key)) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = key
  }
}

/**
 * Merge Sort
 * with a sentinel element (Infinity)
 * which is needed for better comparison
 */
const merge = (arr, p, q, r) => {
  let left = arr.slice(p, q + 1)
  let right = arr.slice(q + 1, r + 1)
  left.push(Infinity)
  right.push(Infinity)

  let i = 0,
    j = 0
  for (let k = p; k <= r; k++) {
    if (left[i] <= right[j]) {
      arr[k] = left[i]
      i++
    } else {
      arr[k] = right[j]
      j++
    }
  }
}

const mergeSortRec = (arr, p, r) => {
  if (p < r) {
    let q = Math.floor((p + r) / 2)
    mergeSortRec(arr, p, q)
    mergeSortRec(arr, q + 1, r)
    merge(arr, p, q, r)
  }
}

export const mergeSort = arr => {
  return mergeSortRec(arr, 0, arr.length - 1)
}
