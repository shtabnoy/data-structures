// modification in-place
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
