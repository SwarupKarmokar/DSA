// Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: 6
// Explanation: [4, -1, 2, 1] has the largest sum = 6.


const maxSubArr = (arr) => {
    let maxSum = arr[0];
    let startInd = 0;
    let endIdx = 0;

    for (let i = 0; i<arr.length; i++) {
        let currSum = 0;
        for (let j = i; j<arr.length; j++) {
            currSum = currSum + arr[j];
            if (currSum > maxSum) {
                maxSum = currSum;
                startInd = i;
                endIdx = j;
            }
        }
    }


    return {sum: maxSum, subArr: arr.slice(startInd, endIdx+1)};
}

console.log(maxSubArr([-2, 1, -3, 4, -1, 2, 1, -5, 4]))



const maxSubArrEff = (arr) => {
    let sum = 0;
    let maxSum = arr[0];

    for (let i=0; i< arr.length; i++) {
        sum += arr[i];
        if (sum > maxSum) {
            maxSum = sum
        } 
        if (sum < 0) {
            sum = 0;
        }
    }

    return maxSum;
}

console.log(maxSubArrEff([-2, 1, -3, 4, -1, 2, 1, -5, 4]))