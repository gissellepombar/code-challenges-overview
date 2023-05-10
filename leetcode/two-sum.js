// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

function returnInd(arr1, target) {
    for (i = 0; i < arr1.length; i++) {
        for (j = i + 1; j < arr1.length; j++) {
            if (arr1[i] + arr1[j] == target) {
                return [i, j]
            }
        }
    }
}

console.log(returnInd([2,7,11,15], 9))