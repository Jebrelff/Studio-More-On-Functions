const sample1 = [5, 10, 2, 42];
const sample2 = [-2, 0, -10, -44, 5, 3, 0, 3];
const sample3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

// Creating a copy of each sample array using slice method and sorting the copied array in increasing order
const sortedSample1Inc = sample1.slice().sort((a, b) => a - b);
const sortedSample2Inc = sample2.slice().sort((a, b) => a - b);
const sortedSample3Inc = sample3.slice().sort((a, b) => a - b);

// Printing the sorted arrays
console.log("Sample 1 Array: ", sample1);
console.log("Sample 1 Sorted in Increasing Order:", sortedSample1Inc, "\n");

console.log("Sample 2 Array: ", sample2);
console.log("Sample 2 Sorted in Increasing Order:", sortedSample2Inc, "\n");

console.log("Sample 3 Array: ", sample3);
console.log("Sample 3 Sorted in Increasing Order:", sortedSample3Inc, "\n");

// Creating a copy of each sample array using slice method and sorting the copied array in decreasing order
const sortedSample1Dec = sample1.slice().sort((a, b) => b - a);
const sortedSample2Dec = sample2.slice().sort((a, b) => b - a);
const sortedSample3Dec = sample3.slice().sort((a, b) => b - a);

// Printing the sorted arrays
console.log("Sample 1 Array: ", sample1);
console.log("Sample 1 Sorted in Decreasing Order:", sortedSample1Dec, "\n");

console.log("Sample 2 Array: ", sample2);
console.log("Sample 2 Sorted in Decreasing Order:", sortedSample2Dec, "\n");

console.log("Sample 3 Array: ", sample3);
console.log("Sample 3 Sorted in Decreasing Order:", sortedSample3Dec, "\n");

// Checking if the sort function alters the original array
const arr = [5,2,4,1,3];
console.log("Array arr before sorting: ", arr);

arr.sort((a,b) => a-b);
console.log("Array arr after performing sorting: ", arr);

console.log("Does the sort function alter the original array? Yes, it does.");