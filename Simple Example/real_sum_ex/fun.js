// @param arr = []
const calculateTotal = (arr) => {
   if (arr && arr.length) return arr.reduce((a, b) => (parseInt(a) || 0) + (parseInt(b) || 0), 0)
    else return 0

}

module.exports = calculateTotal;