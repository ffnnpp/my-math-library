function sum(a, b) {
    if (Array.isArray(a)) {
      let total = 0
      a.forEach((i) => (total += i))
      return total
    } else if (typeof a === 'number' && typeof b === 'number') {
      return a + b
    }
  }
module.exports = {
    sum,
}