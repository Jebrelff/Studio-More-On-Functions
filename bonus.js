// Function to find the minimum value in an array of numbers
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

// Function to sort an array of numbers in increasing order
function recursiveSort(arr) {
    if (arr.length === 0) {
        return [];
    }

    const minValue = findMinimum(arr); // Use the findMinimum function to find the minimum value in the old array.
    arr.splice(arr.indexOf(minValue), 1); // Remove the minimum value from the old array

    // Add the minValue to the sorted array and Recursively call the function to sort the rest of the array
    return [minValue, ...recursiveSort(arr)];
}


// Test and print the results with the provided samples.
const sample1 = [5, 10, 2, 42];
const sample2 = [-2, 0, -10, -44, 5, 3, 0, 3];
const sample3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

console.log("Unsorted Sample 1 Array: ", sample1);
console.log("Sorted Sample 1 Array: ", recursiveSort(sample1), "\n");

console.log("Unsorted Sample 2 Array: ", sample2);
console.log("Sorted Sample 2 Array: ", recursiveSort(sample2), "\n");

console.log("Unsorted Sample 3 Array: ", sample3);
console.log("Sorted Sample 3 Array: ", recursiveSort(sample3), "\n");
