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
  else if(memo[n] > -1) {
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
  let leftMid = Math.min(mid - 1, arr[mid]);
  let left = magicNumber(arr, start, leftMid);
  if(left >= 0) {
    return left;
  }
  let rightMid = Math.max(mid + 1, arr[mid]);
  let right = magicNumber(arr, rightMid, end);
  return right;
}

//8.4 
