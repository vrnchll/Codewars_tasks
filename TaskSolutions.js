
/* 1.Reversed Strings
Complete the solution so that it reverses the string passed into it.
*/
function solution(str) {
let array= str.split('').reverse();
return array.join('');
};


/* 2.Remove First and Last Character
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of 

a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/
function removeChar(str) {
    return str.slice(1, str.length - 1);
};

/* 3.Find The Duplicated Number in a Consecutive Unsorted List
You are given an array of n+1 integers 1 through n. In addition there is a single duplicate integer.

The array is unsorted.

An example valid array would be [3, 2, 5, 1, 3, 4]. It has the integers 1 through 5 and 3 is duplicated. [1, 2, 4, 5, 5] would not be valid as it is missing 3.

You should return the duplicate value as a single integer.
*/ 
function findDup(arr) {
    let flag = false;
     for(let i = 0; i < arr.length; i++){
       if(arr[i+1] === arr[arr.length]) break;
       if(arr[i+1]>arr[i]) {flag = true;}
       else {
         flag = false;
         break;
       }
     }
     if(flag == true) return false;
     arr.sort(function(a,b){return a - b});
     console.log(arr);
     for(let i = 0; i < arr.length; i++){
       let div = arr[i+1]-arr[i];
       if(arr[i+1] == arr[arr.length]) break;
        if(div !=0 && div !=1) return false
       if(arr[i] === arr[i+1]) return arr[i]
     }
};

/* 4.Factorial
In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).
*/
function factorial(x) {
 if(x < 0 || x > 12 ) throw new Error('RangeError')
 let result = 1;
 for(let i = 1 ; i <= x ;i++) result *=i;
 return result;
};

/* 5.Even or Odd
Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/
function even_or_odd(number) {
    if (number % 2 == 0) {
      return "Even";
    }
    return "Odd";
};

/* 6.Remove duplicates from list
Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.
 */
function distinct(arr) {
    let result = [];
    arr.forEach((item) => {
     if(!result.includes(item)) {
      result.push(item);
    }
    })
    return result;
};

/* 7.Birthday I - Cake
It's your Birthday. Your colleagues buy you a cake. The numbers of candles on the cake is provided (x). Please note this is not reality, and your age can be anywhere up to 1,000. Yes, you would look a mess.

As a surprise, your colleagues have arranged for your friend to hide inside the cake and burst out. They pretend this is for your benefit, but likely it is just because they want to see you fall over covered in cake. Sounds fun!

When your friend jumps out of the cake, he/she will knock some of the candles to the floor. If the number of candles that fall is higher than 70% of total candles (x), the carpet will catch fire.

You will work out the number of candles that will fall from the provided string (y). You must add up the character ASCII code of each even indexed (assume a 0 based indexing) character in y, with the alphabetical position of each odd indexed character in y to give the string a total.

example: 'abc' --> a=97, b=2, c=99 --> y total = 198.

If the carpet catches fire, return 'Fire!', if not, return 'That was close!'.
 */
function cake(count, str) {
    let result = [];
    let sum = 0;
    str.split('').forEach((item,index) => {
      if(index %2 == 0) result.push(item.charCodeAt(0))
      else item = result.push(item.charCodeAt(0) - 96);
    })
    result.forEach((item) => {
      sum+=item;
    })
    if((sum / count) * 100 > 70) return 'Fire!';
    return 'That was close!'
};
