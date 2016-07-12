//Big O Examples

//O(n) time / O(n) space
function sum(n) {
  if(n <= 0) {
    return 0;
  }
  else {
    return n + sum(n - 1);
  }
}

//O(n) time / O(1) space
function pairSum(a, b) {
  return a + b;
}
function pairSumSequence(n) {
  let sum = 0;
  for(var i = 0; i < n; i++) {
    sum += pairSum(i, i + 1);
  }
  return sum;
}

// O(n) time = O(branches^depth) / O(n) space
function f(n) {
  if(n <= 1) {
    return 1;
  }
  else {
    return f(n - 1) + f(n - 1);
  }
}

//Example1 O(n) time / O(1) space
function foo(arr) {
  let sum = 0;
  let product = 1;
  arr.forEach((el) => {
    sum += el;
    product *= el;
  });
  console.log(`sum of array = ${sum} and product of array = ${product}`);
}

//Example2 O(N^2) time
function printPairs(arr) {
  for(var i = 0; i < arr.length; i++) {
    for(var j = 0; j < arr.length; j++) {
      console.log(`${arr[i]} ${arr[j]}`);
    }
  }
}

//Example3 O(N(N-1)/2) = O(N^2) time
function unorderedPairs(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      console.log(`${arr[i]} ${arr[j]}`);
    }
  }
}

//Example4 O(AB) time
function unorderedPairs(arr1, arr2) {
  for(let i = 0; i < arr1.length; i++) {
    for(let j = 0; j < arr2.length; j++) {
      if(arr1[i] < arr2[j]) console.log(`${arr[i]} ${arr[j]}`);
    }
  }
}

//Example5 O(AB) time
function unorderedPairs(arr1, arr2) {
  for(let i = 0; i < arr1.length; i++) {
    for(let j = 0; j < arr2.length; j++) {
      for(let k = 0; k < 1000000; k++) {
        console.log(`${arr[i]} ${arr[j]}`);
      }
    }
  }
}

//Example6 O(N/2) = O(N) time
function reverse(arr) {
  let oppositeIdx = arr.length - 1;
  for(let i = 0; i < Math.floor(arr.length/2); i++); {
    let temp = arr[i];
    arr[i] = arr[oppositeIdx - i];
    arr[oppositeIdx - i] = temp;
  }
  return arr;
}

//Example7 Drop terms according to dominating terms and ignore constants
/*
  O(N + P), where P < N/2 = O(N)
  O(2N) = O(N)
  O(N + logN) = O(N)
  O(N + M) != O(N)
*/

//Example8 O(NK(logK + logN) time
function sortStrArray(arr) {
  for(let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split("").sort().join("");
  }
  arr = arr.sort();
  return arr;
}

//Example9 O(branches^depth) = O(2^logN) = O(N) time
function sum(node) {
  if(node === null) {
    return 0;  
  }
  return sum(node.left) + node.value + sum(node.right);
}

//Example10 O(N^1/2) time
function isPrime(n) {
  if(n <= 1) return false;
  if(n == 2) return true;
  for(let i = 2; i*i <= n; i++) {
    if(n % i === 0) return false;
  }
  return true;
}

//Example11 O(N) time
function factorial(n) {
  if(n < 0) return -1;
  if(n == 0) {
    return 1;
  }
  else {
    return n * factorial(n - 1);
  }
}

//Example12 O(N!N^2) time
function permutation(str, prefix) {
  if(str.length === 0) {
    console.log(prefix);
  }
  else {
    for(let i = 0; i < str.length; i++) {
      let rem = str.slice(0, i) + str.slice(i + 1);
      permutation(rem, prefix + str.slice(i, 1))
    }
  }
}

//Example13 O(2^N) time
function fib(n) {
  if(n === 0) {
    return 0;
  }
  else if(n === 1) {
    return 1;
  }
  else {
    return fib(n - 1) + fib(n - 2);
  }
}

//Example14 O(2^1 + 2^2 + .... + 2^N) = O(2^N) time
function allFib(n) {
  for(let i = 0; i < n; i++) {
    console.log(fib(i));
  }
}

//Example15 O(N)
function allFib(n) {
  let memo = new Array(n);
  for(var i = 0; i < n; i++) {
    console.log(`i : ${fib(i, memo)}`);
  }
}

function fib(n, memo) {
  if(n <= 0) return 0;
  else if(n === 1) return 1;
  else if(memo[n] > 0) return memo[n];
  memo[n] = fib(n-1, memo) + fib(n-2, memo);
}

//Example16 O(logN)
function powersOfTwo(n) {
  if(n < 1) {
    return 0;
  }
  else if(n === 1) {
    return 1;
  }
  else {
    let prev = powersOfTwo(Math.floor(n/2));
    let curr = prev*2;
    console.log(curr);
    return curr;
  }
}

//Additional Problems
function mod(a, b) {
  if(b <= 0) {
    return -1;
  }
  let div = Math.floor(a/b);
  return a - div*b;
}

function sqrt(n, min, max) {
  if(max < min) return -1;
  let guess = Math.floor((min + max)/2);
  if(guess*guess === n) return guess;
  else if(guess*guess < n) return sqrt(n, guess + 1, max);
  else if(guess*guess > n) return sqrt(n, min, guess - 1);
}

function sumOfDigits(n) {
  let sum = 0;
  while(n > 0) {
    sum += n%10;
    n /= 10;
  }
  return sum;
}
/*
V1.1 O(b)
V1.2 O(b)
V1.3 O(1)
V1.4 O(a/b)
V1.5 O(logN)
V1.6 O(N^1/2)
V1.7 O(N)
V1.8 O(N)
V1.9 O(N^2)
V1.10 O(logN)
V1.11 O(KC^K)
V1.12 O(blogb + alogb)
*/















