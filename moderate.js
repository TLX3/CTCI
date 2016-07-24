function swap(a, b) {
  return [a, b = a][0];
}

function wordFrequency(pages) {
  let wordCounts = {};
  for(let i = 0; i < pages.length; i++) {
    let page = pages[i].split(" ");
    for(let j = 0; j < pages.split(" ")) {
      if(wordCounts[page[j]]) {
        wordCounts[page[j]] += 1;
      }
      else {
        wordCounts[page[j]] = 1;
      }
    }
  }
  return wordCounts;
}

function intersection(start1, end1, start2, end2) {
  let slope1 = Math.abs(end1[1] - start1[1])/(end1[0]  - start1[0]);
  let slope2 = Math.abs(end2[1] - start2[1])/(end2[0]  - start2[0]);
  let b1 = end1[1] - slope1*end1[0];
  let b2 = end2[1] - slope2*end2[0];
  let x = (b2 - b1)/(slope1 - slope2);
  let y = slope1*x + b1;
  return [x, y];
}

function ticTacWon(board, sym) {
  return checkRow(board, sym) || checkCol(board, sym) || checkDiag(board, sym);
}

function checkRow(board, sym) {
  return board.some(row => row.every(spot => spot === sym));
}

function checkCol(board, sym) {
  return board.transpose().some(row => row.every(spot => spot === sym));
}

function checkDiag(board, sym) {
  return [board[0][0],board[1][1],board[2][2]].all(p => p === sym) ||
         [board[0][2],board[1][1],board[2][0]].all(p => p === sym);
}

function factorialZeros(n) {
  let fac = 1, count = 0;
  while(n !== 0) {
    fac *= n;
    n -= 1;
  }
  let str = fac.toString();
  for(let i = str.length - 1; i >= 0; i--) {
    if(str[i] !== "0") break;
    count += 1;
  }
  return count;
}

function visitSpiral(arr) {
  let top = 0, left = 0, bottom = arr.length; right = arr.length[0];
  while(top < bottom && left < right) {
    for(let i = 0; i < right; i++) {
      console.log(arr[top][i]);
    }
    top += 1;
    for(let i = top; < bottom; i++) {
      console.log(arr[i][right - 1]);
    }
    right -= 1;
    if(top < bottom) {
      for(let i = right - 1; i >= left; i -= 1) {
        console.log(arr[bottom - 1][i]);
      }
      bottom -= 1;
    }
    if(left < right) {
      for(let i = bottom - 1; i <= top; i -= 1) {
        console.log(arr[i][left]);
      }
      left += 1;
    }
  }
};
