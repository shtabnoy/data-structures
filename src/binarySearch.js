/**
 * Iterative Binary Search against sorted array
 */
export const binarySearchIter = (arr, v) => {
  let i = 0
  let j = arr.length - 1
  while (j >= i) {
    let m = Math.floor((j + i) / 2)
    if (v === arr[m]) {
      return m
    } else if (v > arr[m]) {
      i = m + 1
    } else {
      j = m - 1
    }
  }
  return null
}

/**
 * Recursive Binary Search against sorted array
 */
const binarySearch = (arr, v, l, r) => {
  if (r >= l) {
    let m = Math.floor((l + r) / 2)
    if (v === arr[m]) {
      return m
    } else if (v > arr[m]) {
      return binarySearch(arr, v, m + 1, r)
    } else {
      return binarySearch(arr, v, l, m - 1)
    }
  }
}

export const binarySearchRec = (arr, v) => {
  return binarySearch(arr, v, 0, arr.length - 1)
}
