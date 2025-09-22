// This code is broken! Find and fix the errors.
// Added missing semicolon for i and j. though not necessary in JS unlike python, However, it's a good practice to include them.
console.log("Solution for Exercise 2: Debugging Challenge");
let i = 5;
let j = 10;
let k = 25;
        
// Here was a missing quotation mark around Joe, Joe must be a string
let l = "Joe";
const arr = [3, 5, 7];

if (i < j) {
    console.log("i");
} else if (j > k) {
    console.log("k");
} else {
// Missing closing quotation mark around j
    console.log("j");
}

// Here when first testing the loop, is show undefined because the loop was going out of bounds of the array
// To fix it, the loop condition was changed from i <= 3; to i < arr.length;
for (let i = 0; i < arr.length; ++i) {
    console.log(arr[i]);
}