# ✔ 경주로 건설

## 🌈 LEVEL 3

### ✌ 2020 카카오 인턴쉽

### ✌ 풀이 방법
- 최소 비용을 찾아야하기 때문에 BFS를 사용하여 문제를 풀었다.
- BFS를 사용한 미로찾기와 비슷한 문제지만, 코너일 때 비용이 늘어나는 요구조건이 더 붙는다.
- 이것 때문에 다시 생각해서 시간이 두배로 걸렸다.
- 직선 도로 하나를 만들 때는 100원이 소요되며, 코너를 하나 만들 때는 500원이 추가이지만, 코너를 만들때와 직선 도로를 만들 때가 겹치기 때문에 결국 코너를 만들때 600원들 더해주어야 한다.

```js
const bfs = (board) => (starting) => {
  const len = board.length - 1;
  // 결과 배열을 모두 무한대로 초기화
  const result = Array.from({ length: len + 1 }, () => Array(len + 1).fill(Infinity));

  const queue = [starting];

  const dx = [-1, 0, 1, 0]; // 좌 하 우 상
  const dy = [0, 1, 0, -1];

  while (queue.length) {
    const [x, y, direction, cost] = queue.shift();

    // 각 위치마다 4방향 (상, 하, 좌, 우)를 모두 찾는다.
    for (let i = 0; i < 4; i++) {
      const nX = x + dx[i]; // 다음 x좌표
      const nY = y + dy[i]; // 다음 y좌표
      // 만약 i(갈려는 방향)와 direction(현재가고있는 방향)과 같으면 직진이니 100의 비용을 더해준다.
      // 만약 방향이 다르면 600원을 더해준다 
      const nCost = i === direction ? cost + 100 : cost + 600;

      // nX <= len && nX >= 0 && nY <= len && nY >= 0: board의 크기를 벗어나면 안된다.
      // 1은 벽이다. 그러니 board[nX][nY] === 0인 위치만 갈 수 있다.
      // 다음 비용이 현재 다음 위치의 비용보다 적을 경우
      if (nX <= len && nX >= 0 && nY <= len && nY >= 0
        && board[nX][nY] === 0 && result[nX][nY] > nCost) {
        // 더 작은 비용으로 변경
        result[nX][nY] = nCost;
        // queue에 다음 정보를 담는다.
        queue.push([nX, nY, i, nCost]);
      }
    }
  }

  // n * n 위치의 가격을 반환
  return result[len][len];
};

function solution(board) {
  const cost = bfs(board);

  // 아래쪽부터 시작, 왼쪽으로 시작 중 최소 비용이 결과값
  return Math.min(cost([0, 0, 1, 0]), cost([0, 0, 2, 0]));
}
```

<hr>

📌 문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/67259?language=javascript
