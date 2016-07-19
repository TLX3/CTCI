'use strict';

/**
1.1
O(N) time O(N) memory
**/
function isUnique1(str) {
  let set = new Set();
  for(let i = 0; i < str.length; i++) {
    if(set.has(str[i])) return false;
    set.insert(str[i]);
  }
  return true;
}

//O(NlogN) time O(1) memory
function isUnique(str) {
  let sortedStr = str.split("").sort();
  for(let i = 0; i < str.length; i++) {
    if(sortedStr[i] === sortedStr[i + 1]) return false;
  }
  return true;
}

/**
1.2
O(M + N) time O(N) space
*/
function checkPermutation(str1, str2) {
  if(str1.length !== str2.length) return false;
  let counts1 = hashCharCount(str1), counts2 = hashCharCount(str2);
  for(char in counts1) {
    if(counts2[char] != counts1[char]) return false;
  }
  return true;
}

function hashCharCount(str) {
  let counts = {};
  str = str.split("");
  for(let i = 0; i < str.length; i++) {
    if(counts[str[i]] == undefined) {
      counts[str[i]] = 1;
    }
    else {
      counts[str[i]] += 1;
    }
  }
  return counts;
}
//O(NlogN + MlogM) time O(1) space
function isPermutationSorted(str1, str2) {
  if(str1.length !== str2.length) return false;
  str1 = str1.sort();
  str2 = str2.sort();
  return str1.every((char, i) => char === str2[i]);
}

/**
1.3
O(N) time O(N) space
*/
function URLify(str) {
  if(str === "") return str;
  let url = [], idx = str.length - 1;
  while(str[idx] === " ") {
    idx -= 1;
  }
  for(let i = 0; i <= idx; i++) {
    if(str[i] === " ") {
      url.push("%20");
    }
    else {
      url.push(str[i])
    }
  }
  return url.join("");
}

/**
1.4
O(N) time O(N) space
Hash count of chars in string. If there are 2 or more chars with odd counts then it cannot be a palindrome
*/
function palindromePermutation(str) {
  let counts = {}, numOddCounts = 0;
  str = str.toLowerCase();
  for(let i = 0; i < str.length; i++) {
    if(str[i] !== " ") {
      if(counts[str[i]]) {
        counts[str[i]] += 1;
      }
      else {
        counts[str[i]] = 1;
      }
    }
  }
  for(char in counts) {
    if(counts[char] % 2 !== 0) {
      numOddCounts += 1;
    }
  }
  if(numOddCounts > 1) return false;
  return true;
}

/**
1.5
O(N) time O(1) space
*/
function oneAway(str1, str2) {
  if(str1 === str2) return true;
  if(str1.length !== str2.length) {
    if(str1.length < str2.length) {
      if(str2.length - 1 !== str1.length) return false;
      return true;
    }
    else {
      if(str1.length - 1 !== str2.length) return false;
      return true;
    }
  }
  else {
    let changes = 0;
    for(let i = 0; i < str1.length; i++) {
      if(str1[i] !== str2[i]) changes += 1;
    }
    return changes === 1 ? true : false;
  }
}

/**
1.6
O(N) time O(N) space
*/
function stringCompression(str) {
  let newStr = "", counts = {};
  str.split("").forEach(c => {
    if(counts[c]) {
      counts[c] += 1;
    }
    else {
      counts[c] = 1;
    }
  });
  for(char in counts) {
    newStr += (char + counts[char]);
  }
  return newStr.length < str.length ? newStr : str;
}

/**
1.7
O(N^2) time O(1) space
*/
function rotateMatrix(matrix) {
  if(matrix.length === 0 || matrix.length !== matrix[0].length) throw "Invalid input";
  if(matrix.length === 1) return matrix;
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix.length; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  return matrix.map(row => row.reverse);
}

/**
1.8
O(N*M) time O(N + M) space
*/
function zeroMatrix(arr) {
  if(arr.length === 0) return arr;
  let zeroRow = new Array(arr[0].length);
  zeroRow.fill(0);
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[0].length; j++) {
      if(arr[i][j] === 0) {
        arr = setColZero(arr, j);
        arr[i] = zeroRow.slice(0);
      }
    }
  }
}

function setColZero(arr, col) {
  for(let j = 0; j < arr.length; j++) {
    arr[j][col] = 0;
  }
  return arr;
}

/**
1.9
O(N + M) time O(1) space
*/
function isRotation(str1, str2) {
  if(str1.length !== str2.length) return false;
  let i = 0, j = 0;
  while(str1[i] !== str2[0]) {
    i += 1;
  }
  i += 1;
  while(str2[j] === str1[i]) {
    j += 1;
  }
  if(isSubstring(str1, str2.slice(j))) return true;
  return false;
}

function isSubstring(s1, s2) {
  let length = s2.length;
  for(let i = 0; i + length <= s1.length; i++) {
    if(s1.substring(i, i + length) === s2) return true;
  }
  return false;
}

//O(N) time O(N) space
function isRotation2(str1, str2) {
  if(str1.length !== str2.length) return false;
  return (str1 + str1).includes(str2);
}
