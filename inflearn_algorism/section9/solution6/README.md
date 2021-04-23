### 📚 섬나라 아일랜드(DFS 활용)
1. N*N의 섬나라 아일랜드 지도가 격자판의 정보로 주어진다.
2. 각 섬은 1로 표시되어 상하좌우와 대각선으로 연결되어 있으며, 0은 바다이다.
3. 섬나라 아일랜드에 몇 개의 섬이 있는지 구하라.

#### 🎯 정리
- 어려워보였지만, 여태까지 한거의 좀 응용버전?
- dfs를 사용한 미로탐색인데 상하좌우 대각선까지 포함이기 떄문에 각각 8가지의 경우의 수가 있다.

```js
function solution(board) {
  let result = 0;
  const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  const dy = [0, 1, 1, 1, 0, -1, -1, -1];
  const len = board.length;

  function dfs(x, y) {
    // 확인한 곳은 다시 확인하면 안되기 떄문에 0으로 변경해준다.
    board[x][y] = 0;

    for (let i = 0; i < dx.length; i++) { // 좌표 상하좌우 대각선 8가지의 경우를 찾는다.
      const nx = x + dx[i];
      const ny = y + dy[i];

      // 0보다 크거나 같아야하고, 좌표 크기를 벗어나면 안된다.
      // 그리고 1일 때는 섬이기 때문에 1일 때만 확인한다.
      if (nx >= 0 && nx < len && ny >= 0 && ny < len && board[nx][ny] === 1) {
        dfs(nx, ny);
      }
    }
  }

  // 좌표를 처음부터 확인하여 1일때가 섬이다.
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 1) {
        board[i][j] = 0; // 처음 찾은 곳을 0으로 변경
        result += 1; // 섬을 개수를 1증가시킨다.
        dfs(i, j);
      }
    }
  }

  return result;
}
```
