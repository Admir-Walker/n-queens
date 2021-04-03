let solutions = [];
let chessboard = [];
function nQueens(n) {
  let line = [];
  for (let i = 0; i < n; ++i) line.push(0);
  for (let i = 0; i < n; ++i) chessboard.push([...line]);
  solve(n, 0);
  return solutions;
}

function solve(n, k) {
  if (k < n) {
    for (let j = 0; j < n; ++j) {
      if (chessboard[k][j] == 0) {
        if (placeable(n, k, j)) {
          chessboard[k][j] = 1;
          solve(n, k + 1);
          chessboard[k][j] = 0;
        }
      }
    }
  } else {
    let solution = [];
    for (let i = 0; i < n; ++i) {
      let added = false;
      for (let j = 0; j < n; ++j) {
        if (chessboard[i][j] == 1) {
          solution[i] = j + 1;
          added = true;
        }
      }
      if (!added) return;
    }
    solutions.push(solution);
  }
}

function placeable(n, arrIndex, position) {
  let mainDiagonal = arrIndex - position;
  let secondaryDiagonal = arrIndex + position;
  for (let i = 0; i < n; ++i) {
    if (chessboard[arrIndex][i] == 1 || chessboard[i][position] == 1)
      return false;
    for (let j = 0; j < n; ++j) {
      if (
        (i - j == mainDiagonal || i + j == secondaryDiagonal) &&
        chessboard[i][j] == 1
      ) {
        return false;
      }
    }
  }
  return true;
}
