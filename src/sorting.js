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
 * Insertion Sort Iterative
 * (in-place modification)
 */
export const insertionSortIter = (arr, asc = true) => {
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
 *
 * Insertion Sort Recursive
 */
const insertion = (arr, k) => {
  let key = arr[k]
  let i = k - 1
  while (i >= 0 && arr[i] > key) {
    arr[i + 1] = arr[i]
    i--
  }
  arr[i + 1] = key
}

const insertionSortRec = (arr, k) => {
  if (k > 1) {
    insertionSortRec(arr, k - 1)
    insertion(arr, k - 1)
  }
}

export const insertionSortRecursive = arr => {
  insertionSortRec(arr, arr.length)
}

/**
 * Merge Sort
 * with a sentinel element (Infinity)
 * which is needed for better comparison
 */
const mergeSentinel = (arr, p, q, r) => {
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

// without a sentinel element
const merge = (arr, p, q, r) => {
  let left = arr.slice(p, q + 1)
  let right = arr.slice(q + 1, r + 1)

  let i = 0,
    j = 0
  for (let k = p; k <= r; k++) {
    if (i >= left.length) {
      arr[k] = right[j]
      j++
    } else if (j >= right.length) {
      arr[k] = left[i]
      i++
    } else if (left[i] <= right[j]) {
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
