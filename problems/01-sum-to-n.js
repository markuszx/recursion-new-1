/***********************************************************************
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.

Examples:

sumToN(5) // returns 15
sumToN(1)  // returns 1
sumToN(9)  // returns 45
sumToN(-8)  // returns null
***********************************************************************/


function sumToN(sum = 0,numsB4n = 0,n) {
  // Your code here


  if(n < 0){return null}

  if(numsB4n < n){

    sum + sumToN(numsB4n+1,n)}

  if(numsB4n === n){
    return sum
  }


}

console.log(sumToN(5)) // returns 15
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumToN;
} catch (e) {
  module.exports = null;
}
