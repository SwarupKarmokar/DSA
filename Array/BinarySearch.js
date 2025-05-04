// Input: [1,2,3,4,5,6,7,8] Target: 5 Output: 4 Note: Array must be sorted here

// Bruitforce approach using linear search
const binaryBruit = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }

    return -1;
}

console.log(binaryBruit([1, 2, 3, 4, 5, 6, 7, 8], 5)) // Time complexity: O(n) Space complextiy: O(1)




const binarySearchEff = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

console.log(binarySearchEff([1, 2, 3, 4, 5, 6, 7, 8], 5)) // Time complexity: O(logn) Space complextiy: O(1)