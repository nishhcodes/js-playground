// Create a function that reverses an array

const givenArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function reversedArray(element) {
  const newArray = [];
  for (let i = givenArray.length - 1; i >= 0; i--) {
    newArray.push(element[i]);
  }

  return newArray;
}

console.log("Without using reverse Method");
console.log(reversedArray(givenArray));

// Using reverse() method

const reverseArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("With using reverse Method");
console.log(reverseArray.slice().reverse());
