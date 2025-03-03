// check whether the given value is palindrome or not

const isPalindrome = (param) => {
  const reversedArray = [];
  for (let i = param.length - 1; i >= 0; i--) {
    reversedArray.push(param[i]);
  }
  const checkPalindrome = reversedArray.join("");
  return param === checkPalindrome;
};

console.log(isPalindrome("1212"));
console.log(isPalindrome("121"));
