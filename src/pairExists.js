import { mergeSort } from './sorting'
import { binarySearchIter as binarySearch } from './binarySearch'

/**
 * Checks whether or not there exist two elements in "arr"
 * whose sum is exactly x
 * O(n lgn)
 * Merge sort + binary search * n = 2 * O(n lgn) = O(n lgn)
 */
export const pairExists = (arr, x) => {
  mergeSort(arr)
  for (let i = 0; i < arr.length; i++) {
    if (binarySearch(arr, x - arr[i])) return true
  }
  return false
}
