//8.1 O(N) time O(N) space
function tripleStep(n) {
  let memo = {}
  return countWays(n, memo);
}

function countWays(n, memo) {
  if(n < 0) {
    return 0;
  }
  else if(n === 0) {
    return 1;
  }
  else if(memo[n]) {
    return memo[n];
  }
  else {
    memo[n] = countWays(n - 1, memo) + countWays(n - 2, memo) + countWays(n - 3, memo);
    return memo[n];
  }
}

//8.2 O(N*M) time
function findPath(maze) {
  if(maze === null || maze.length === 0) return null;
  let path = [];
  let failedPaths = {};
  if(checkPath(maze, maze.length - 1, maze[0].length, path, failedPaths)) {
    return path;
  }
  return null;
}

function checkPath(maze, row, col, path, failedPaths) {
  if(row < 0 || col < 0 || !maze[row][col]) return false;
  if(failedPaths[[row, col]]) return false;
  if((row === 0 && col === 0) || checkPath(maze, row, col - 1, path, failedPaths)
  || checkPath(maze, row - 1, col, path, failedPaths)) {
    path.push([row,col]);
    return true;
  }
  failedPaths[[row, col]] = true;
  return false;
}

//8.3 O(lgN) time O(1) space
function magicNumber(arr, start, end) {
  if(end < start) return -1;
  let mid = Math.floor((start + end)/2);
  if(arr[mid] === mid) {
    return mid;
  }
  let leftEnd = Math.min(mid - 1, arr[mid]);
  let left = magicNumber(arr, start, leftEnd);
  if(left >= 0) {
    return left;
  }
  let rightStart = Math.max(mid + 1, arr[mid]);
  let right = magicNumber(arr, rightStart, end);
  return right;
}

//8.4 O(N*2^N) time O(N*2^N) space
function powerSet(arr) {
  let subsets = [[]];
  for(let i = 0; i < arr.length; i++) {
    let currentSubs = subsets.slice();
    currentSubs.forEach(sub => subsets.push(sub.concat([arr[i]])));
  }
  return subsets;
}

function powerSet2(set) {
  let subsets = [];
  let max = 1 << arr.length();
  for(let i = 0; i < max; i++) {
    subsets.push(convertIntToSet(i, set));
  }
  return subsets;
}

function convertIntToSet(i, set) {
  let subset = [];
  let index = 0;
  for(i; i > 0; i >>= 1) {
    if((i & 1) === 1) {
      subset.push(set[i]);
    }
    index += 1;
  }
  return subset;
}

//8.5 O(lgN) time O(1) space
function recursiveMultiply(a, b) {
  if(b < a) {
    let temp = a;
    a = b;
    b = temp;
  }
  if(a === 0) return 0;
  else if(a === 1) return b;
  let halfProd = recursiveMultiply(a >> 1, b);
  if(a % 2 === 0) {
    return halfProd + halfProd;
  }
  else {
    return halfProd + halfProd + b;
  }
}

//8.6
function moveDisks(n, origin, destination, buffer) {
  if(n <= 0) {
    return;
  }
  moveDisks(n - 1, origin, buffer, destination);
  moveTop(origin, destination);
  moveDisks(n - 1, buffer, destination, origin);
}

//8.7
function permutationWithoutDups(str) {
  if(str === null) return null;
  let perms = [];
  if(str.length === 0) {
    perms.push("");
    return perms;
  }
  let first = str[0];
  let remainder = str.slice(1, str.length - 1);
  let words = permutationWithoutDups(remainder);
  for(let i = 0; i < words.length; i++) {
    let word = words[i];
    for(let j = 0; j < word.length; j++) {
      let newStr = word.splice(j,0,first);
      perms.push(newStr);
    }
  }
  return perms;
}

function permutations(str) {
  let perms = [];
  if(str.length === 0) {
    perms.push("");
    return perms;
  }
  for(let i = 0; i < str.length; i++) {
    let before = str.slice(0, i);
    let after = str.slice(i + 1);
    let partials = permutations(before + after);
    for(let j = 0; j < partials.length; j++) {
      perms.push(str[i] + partials[j]);
    }
  }
  return perms;
}

//8.8


//8.9
function allValidParens(n) {
  let parenStr = new Array(2*n);
  let parens = [];
  addParens(parens, n, n, str, 0);
  return parens;
}

function addParens(parens, leftRem, rightRem, parenStr, idx) {
  if(leftRem < 0 || rightRem < leftRem) return;
  if(leftRem === 0 && rightRem === 0) {
    parens.push(parenStr.join(""));
  }
  else {
    parenStr[idx] = '(';
    addParens(parens, leftRem - 1, rightRem, parenStr, idx + 1);
    parenStr[idx] = ')';
    addParens(parens, leftRem, rightRem - 1, parenStr, idx + 1)
  }
}

//8.10

//8.11
function allChange(n) {
  let coins = [1, 5, 10, 25];
  return makeChange(n, coins, 0);
}

function makeChange(n, coins, idx) {
  if(idx >= coins.length - 1) {
    return 1;
  }
  let currentAmount = coins[idx];
  let ways = 0;
  for(let i = 0; i*currentAmount <= n; i++) {
    let remainder = n - i*currentAmount;
    ways += makeChange(remainder, coins, idx + 1);
  }
  return ways;
}

//8.12
function placeQueens(row, columns, results) {
  if(row === 8) {
    results.push(columns.slice());
  }
  else {
    for(let col = 0; col < 8; col++) {
      if(checkValid(columns, row, col)) {
        columns[row] = col;
        placeQueens(row + 1, columns, results);
      }
    }
  }
}

function checkValid(columns, row1, column1) {
  for(let row2 = 0; row2 < row1; row2++) {
    let column2 = columns[row2];
    if(column1 === column2) {
      return false;
    }
    let columnDistance = Math.abs(column2 - column1);
    let rowDistance = row1 - row2;
    if(columnDistance === rowDistance) {
      return false;
    }
  }
  return true;
}

//8.13
