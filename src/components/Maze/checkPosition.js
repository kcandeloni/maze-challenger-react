export function checkPosition({ i, j, maze }) {
  if (maze[i][j] > 1) {
    return maze[i][j];
  }

  /*
    nw  n   ne
    w   ij  e
    sw  s   se  */
  const i_sub = i - 1 < 0 ? false : i - 1;
  const i_add = i + 1 > maze[0].length - 1 ? false : i + 1;
  const j_sub = j - 1 < 0 ? false : j - 1;
  const j_add = j + 1 > maze[0].length - 1 ? false : j + 1;

  const nw = i_sub ? maze[i_sub][j_sub] : 0;
  const n = j_sub ? maze[i][j_sub] : 0;
  const ne = i_add && j_sub ? maze[i_add][j_sub] : 0;
  const w = i_sub ? maze[i_sub][j] : 0;
  const e = i_add ? maze[i_add][j] : 0;
  const sw = i_sub && j_add ? maze[i_sub][j_add] : 0;
  const s = j_add ? maze[i][j_add] : 0;
  const se = i_add && j_add ? maze[i_add][j_add] : 0;

  const nearbyGreens = [nw, n, ne, w, e, sw, s, se];
  let result = 0;
  for (let k = 0; k < nearbyGreens.length; k++) {
    if (nearbyGreens[k] === 1) result++;
  }

  if (maze[i][j]) {// verdes
    if (result === 4 || result === 5) {
      return 1;
    }
    return 0;
  }// brancas
  if (result < 2 || result > 4) {
    return 0;
  }
  return 1;
}
