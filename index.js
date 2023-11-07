function isPalindrome(word) {
  // Write your algorithm here
  let split = word.split("").reverse().join("");
  return word === split;
};

isPalindrome("yes");

/* 
  Add your pseudocode here
  
  1) Turn word into an array or letter
  2) Add each array into another array
  3) Reverse the words
  4) Combine the letters
  5) See if true
*/



/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
