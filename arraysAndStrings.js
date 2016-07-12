//1.1
//Doesn't work for sentences and is case insensitive. Use regex to parse out whitespaces and symbols
//O(klogk) time
function isUnique(str) {
  let sortedStr = str.split("").sort();
  for(let i = 0; i < str.length; i++) {
    if(sortedStr[i] === sortedStr[i + 1]) return false;
  }
  return true;
}

//1.2 O(k + l)
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
  for(var i = 0; i < str.length; i++) {
    if(counts[str[i]] == undefined) {
      counts[str[i]] = 1;
    }
    else {
      counts[str[i]] += 1;
    }
  }
  return counts;
}

//1.3 O(k)
function URLify(str) {
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

//1.4 O(k) Hash count of chars in string. If there are 2 or more chars with odd counts then it cannot be a palindrome
function palindromePermutation(str) {
  let counts = {}, numOddCounts = 0;
  str = str.toLowerCase().split("");
  for(var i = 0; i < str.length; i++) {
    if(str[i] !== " ") {
      if(counts[str[i]] !== undefined) {
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

//1.5 O(N + M)
function oneAway(str1, str2) {
  str1 = str1.split("");
  str2 = str2.split("");
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
    let counts = 0;
    for(let i = 0; i < str1.length; i++) {
      if(str1[i] !== str2[i]) counts += 1;
    } 
    return counts === 1 ? true : false;
  }
}

//1.6 O(N)
function stringCompression(str) {
  str = str.toLowerCase();
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

//1.7 
function rotateMatrix(arr) {
  
}

//1.8 O(N^2M)
function zeroMatrix(arr) {
  let zeroRow = [];
  for(let i = 0; i < arr[0].length; i++) {
    zeroRow.push(0);
  }
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

//1.9
function isRotation(str1, str2) {
  let i = 0, j = 0;
  while(str1[i] !== str2[0]) {
    i += 1;
  }
  i += 1;
  while(str2[j] === str1[i]) {
    j += 1;
  }
  if(isSubstring(str1, str2.slice(j))) return true;
  console.log(str2.slice(j));
  return false;
}

function isSubstring(s1, s2) {
  let length = s2.length;
  for(let i = 0; i + length <= s1.length; i++) {
    if(s1.substring(i, i + length) === s2) return true;
  }
  return false;
}