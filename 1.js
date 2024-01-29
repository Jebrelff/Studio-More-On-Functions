// fucntion to find the minimum value in an array of numbers
function findMinimum(arr) {
    if (!arr.length) {
        return undefined;
    }

    // Initialize minVal with the first element of the array
    let minVal = arr[0];

    // Iterate through the array and find the minimum value
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minVal) {
            minVal = arr[i];
        }
    }

    return minVal;
}

// Test the function and print the results with the provided samples
const sample1 = [5, 10, 2, 42];
const sample2 = [-2, 0, -10, -44, 5, 3, 0, 3];
const sample3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

console.log("sample1: [ " + sample1.join(', ') + " ]");
console.log("The minimum value in the sample 1 array is: " + findMinimum(sample1) + "\n"); // Expected Output: 2

console.log("sample2: [ " + sample2.join(', ') + " ]");
console.log("The minimum value in the sample 2 array is: " + findMinimum(sample2) + "\n"); // Expected Output: -44

console.log("sample3: [ " + sample3.join(', ') + " ]");
console.log("The minimum value in the sample 3 array is: " + findMinimum(sample3) + "\n"); // Expected Output: -3.3
