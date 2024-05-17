// a function that squares even numbers and triples odd numbers in an array
function processArray(arrayOfNumbers) {
  return arrayOfNumbers.map((number) => {
    return number % 2 === 0 ? number * number : number * 3;
  });
}

//a function that converts strings to uppercase or lower case based on its corresponding number in arrayOfNumbers
function formatArrayStrings(arrayOfStrings, arrayOfNumbers) {
  return arrayOfStrings.map((string, index) => {
    return arrayOfNumbers[index] % 2 === 0
      ? string.toUpperCase()
      : string.toLowerCase();
  });
}
