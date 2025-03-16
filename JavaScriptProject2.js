// String Manipulation Functions:

// Function to reverse a string
function reverseString() {
  const str = "hello";
  return str.split('').reverse().join('');
  // .split('') converts the string into an array of characters: ["h", "e", "l", "l", "o"]
   // .reverse() reverses the array: ["o", "l", "l", "e", "h"]
   // .join('') joins the array back into a string: "olleh"
}
console.log(reverseString()); // "olleh"

// Function to count characters in a string
function countCharacters() {
  const str = "hello";
  return str.length;
  // .length directly returns the number of characters in the string(1+1+1+1+1=5)
}
console.log(countCharacters()); // 5

// Function to capitalize the first letter of each word in a sentence
function capitalizeWords() {
  const sentence = "hello world";
  return sentence
      .split(' ')   // .split(' ') splits the sentence into an array of words: ["hello", "world"]
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      // .map() iterates over each word
      // word.charAt(0).toUpperCase() capitalizes the first letter
      // word.slice(1) gets the rest of the word unchanged
      .join(' ');
      // .join('') joins the array back into a string: "Hello World"
}
console.log(capitalizeWords()); // "Hello World"
'________________________________________________________________________________________________________'
//Array Functions:
//1-Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
const numbers = [3, 7, 1, 9, 4];function findMax(arr)
{
  if (arr.length === 0) return undefined;
  return Math.max(...arr);
}
console.log('Max:', findMax(numbers));     // Output: 9

// Function to find the minimum value in an array
function findMin(arr) {
  if (arr.length === 0) return undefined;
  return Math.min(...arr);
}
console.log('Min:', findMin(numbers));     // Output: 1

// Function to calculate the sum of all elements in an array
function sumArray(arr) {
  return arr.reduce((sum, current) => sum + current, 0);
}
console.log('Sum:', sumArray(numbers));    // Output: 24

// Function to filter elements from an array based on a condition
function filterArray(arr, condition) {
  return arr.filter(condition);
}
console.log('Filtered:', filterArray(numbers, num => num > 5)); // Output: [7, 9] 
"__________________________________________________________________________________________________________________________________"
//Mathematical Functions:
//Factorial: Write a function to calculate the factorial of a given number.
function factorial(n) {
  if (n < 0) return undefined;
  return n === 0 ? 1 : n * factorial(n - 1);
}
//5!=5*4*3*2*1  // Output: 120 
// Function to check if a number is prime
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
//العدد الاولي اللي يقبل القسمة على نفسه و واحد فقط ex:1 3 5 7 9 11
// Function to generate Fibonacci sequence up to a given number of terms
//The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the previous two.
//Example:
//0, 1, 1, 2, 3, 5, 8, 13, 21, ...
function fibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  const seq = [0, 1];
  while (seq.length < n) {
    seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
  }
  return seq;
}
const num = n ; //to calcule chenges "n"
console.log('Factorial:', factorial(num));       // Factorial of num
console.log('Is Prime?', isPrime(num));          // Prime check for num
console.log('Fibonacci:', fibonacci(num));       // Fibonacci sequence for num




