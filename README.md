# First workshop

## Human to Dog Years Convertion
> This is a simple JavaScript function that can converts a person's age into "dog years."  
For this example, **A human year = 7 dog years**.
<details>
<summary>👉Click to expand and see the details</summary>

### Usage

#### For HTML
+ Write right click **WS1-JavaScript.html** file
+ Choose **Open with Live server** if you have it.
+ Press <strong>F12</strong> or right-click, 
    + Choose <strong>Inspect</strong> , 
        + then choose <strong>Console</strong> to see the output.</p>

```javascript
// Import the function or paste the function into the project
function humanToDogYears(age) {
  if (isNaN(age) ) {
    return "";
  } else if (age <=0) {
    return "invalid and it cannot be calculated, please provide a valid non-negative number for age and number greater than 0.";
  }

  return age * 7;
}
```
###
```js
// Testing the function:
const age = 3;
console.log("When the age of human is " + age + ", a dog age is " + humanToDogYears(age) + " years."); // Output: 77
```

### Features

+ Converts human years into dog years.

+ Handles invalid input (non-numbers or negative values).

+ Works with both whole numbers and decimals.

### Output Example

| Human Age | Dog Age (Years) |
| --------- | ------- |
| 1         | 7       |
| 2.5       | 17.5    |
| 10        | 70      |
</details>

---
## Debugging Challenge – Exercise 2
> This exercise demonstrates debugging a small piece of JavaScript code embedded in an HTML file. The original code contained several errors that caused it to fail. The goal was to **find and fix** these issues.
<details>
<summary>👉Click to expand and see the details</summary>

### Check fixed Code
[Debugging_html](/WS1-JavaScript/Debugging.html)

### What Was Fixed?
+ Semicolons
  + Added missing semicolons (;) for clarity and consistency
+ Undefined variable Joe
  + Changed let l = Joe; to let l = "Joe"; (make it string).
+ String syntax error
  + Missing closing quotation mark around j. 
    + Fixed console.log("j); to console.log("j");, 
+ Array loop out of range
  + Changed loop condition from i <= 3 to i < arr.length to avoid undefined.
</details>