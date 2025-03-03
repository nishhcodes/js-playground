// Reverse a String

function reversedString(item) {
  return item.split("").reverse().join("");
}

console.log("Using reverse method()");
console.log(reversedString("Using reverse method()"));

// Without using reverse method

function stringReversed(item) {
  const newString = [];
  for (let i = item.length - 1; i >= 0; i--) {
    newString.push(item[i]);
  }
  return newString;
}

console.log("Without using reverse method()");
console.log(stringReversed("Without using reverse method()").join(""));
