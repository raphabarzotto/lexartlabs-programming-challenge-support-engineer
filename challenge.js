// filter letters and number from array given
function filterLettersAndNumbers(arr) {
  const lettersArray = [];
  const numbersArray = [];

  arr.forEach((element) => {
    if (typeof element === "number") {
      numbersArray.push(element);
    } else if (typeof element === "string" && /^[A-Za-z]+$/.test(element)) {
      // used a regular expression to make sure the string is only letters
      lettersArray.push(element);
    }
  });

  return { lettersArray, numbersArray };
}

// find largest number from a numbers array
function findLargestNumber(numbersArray) {
  if (numbersArray.length === 0) {
    return null; // Return null if the array is empty
  }
  return Math.max(...numbersArray);
}

// input array
const inputArray = ["a", 10, "b", "hello", 122, 15];

// obtain arrays containing only letters and numbers based on input array
const { lettersArray, numbersArray } = filterLettersAndNumbers(inputArray);

// output the arrays
console.log("Letters array:", lettersArray);
console.log("Numbers array:", numbersArray);

// obtain and output the largest number from the numbers array
const largestNumber = findLargestNumber(numbersArray);
console.log("Largest number:", largestNumber);
