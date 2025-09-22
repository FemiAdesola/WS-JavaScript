// This function convert the human age to dog age in seven times
function humanToDogYears(age) {
  if (isNaN(age) ) {
    return "";
  } else if (age <=0) {
    return "invalid and it cannot be calculated, please provide a valid non-negative number for age and number greater than 0.";
  }

  return age * 7;
}

// Testing the function:
console.log("Solution for Exercise 1: Human to Dog Years Converter");
const age = 1;
console.log("When the age of human is " + age + ", a dog age is " + humanToDogYears(age) + " years."); // Output: 42 years

console.log("############################# ############################# #############################"); 