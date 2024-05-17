// a function that squares even numbers and triples odd numbers in an array
function processArray(arrayOfNumbers) {
  return arrayOfNumbers.map((number) => {
    return number % 2 === 0 ? number * number : number * 3;
  });
}
