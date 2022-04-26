const binarySearch = function (nums, target) {
    let
        result = -1,
        minIndex = 0,
        maxIndex = nums.length - 1 // those for keeping track of which part of the list I’ll search in

    // While you haven’t narrowed it down to one element
    while (minIndex <= maxIndex) {
        // check the middle element
        const
            midIndex = Math.floor((minIndex + maxIndex) / 2),
            geuss = nums[midIndex]
        //  Check the target
        if (geuss === target) return result=  midIndex
        else if (geuss > target) maxIndex = midIndex - 1
        else minIndex = midIndex + 1
    }

    return result
}
const binarySearchArrayOfObjects = ({targetValue, key, arr, sortByKey = 'id'})=> {
const sortedArr = arr.sort((a,b) => a[sortByKey]- b[sortByKey]);

    let minIndex = 0, maxIndex = sortedArr.length - 1
    try {
        while (minIndex <= maxIndex) {
            const
                midIndex = Math.floor((minIndex + maxIndex) / 2),
                guess  = sortedArr[midIndex]

            if (guess[key] === targetValue) return guess
            else if (guess[key] > targetValue) maxIndex = midIndex - 1
            else  minIndex = midIndex + 1

        }
    } catch (err) {
        console.log('getSingleData', err)
    }

}

module.exports = {binarySearch, binarySearchArrayOfObjects}