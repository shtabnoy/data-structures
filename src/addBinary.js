/**
 * Add to binary arrays of the same length
 * most significant digit first
 * @param {Array of 0s and 1s} a (length N)
 * @param {Array of 0s and 1s} b (length N)
 * @returns {Array of 0s and 1s} c (length N + 1)
 */
export const addBinary = (a, b) => {
  if (a.length !== b.length) return

  let c = new Array(a.length + 1).fill(0)
  for (let i = a.length - 1; i >= 0; i--) {
    let sum = c[i + 1] + a[i] + b[i]
    c[i + 1] = sum % 2
    c[i] = Math.floor(sum / 2)
  }

  return c
}

// The same with "carry" variable
const addBinary = (a, b) => {
  if (a.length !== b.length) return

  let c = new Array(a.length + 1).fill(0)
  let carry = 0
  for (let i = a.length - 1; i >= 0; i--) {
    c[i + 1] = (a[i] + b[i] + carry) % 2
    carry = Math.floor((a[i] + b[i] + carry) / 2)
  }
  c[0] = carry

  return c
}
