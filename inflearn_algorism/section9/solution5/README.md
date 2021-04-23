### 📚 송아지 찾기(BFS: 상태트리탐색)
1. 현수의 위치와 송아지의 위치가 수직선상의 좌표 점으로 주어진다.
2. 현수는 현재 위치에서 송아지의 위치까지 다음과 같은 방법으로 이동한다. 
3. 송아지는 움직이지 않고 제자리에 있다.
4. 현수는 스카이 콩콩을 타고 가는데 한 번의 점프로 앞으로 1, 뒤로 1, 앞으로 5를 이동할 수 있다.
5. 최소 몇 번의 점프로 현수가 송아지의 위치까지 갈 수 있는지 구하는 프로그램을 작성하라.
6. 첫 번째 줄에 현수의 위치 S와 송아지의 위치 E가 주어진다. 직선의 좌표 점은 1부터 10,000 까지이다.

#### 🎯 정리

```js
function solution(s, e) {
  // 최소 횟수를 구하기 위한 level 배열
  const dis = Array.from({ length: 10001 }, () => 0);
  // 이미 찾은 건 다시 찾을 필요가 없기 때문에 찾은 값을 true로 바꿔주기 위한 배열
  const check = Array.from({ length: 10001 }, () => false);

  const queue = [];

  queue.push(s); // 시작 위치를 queue에 담는다.
  check[s] = true; // 시작위치의 check 배열을 true로 변경해주어 이미 찾은 값으로 확인한다.

  while (queue.length) {
    const v = queue.shift(); // queue에 있는 현재 값

    for (const nv of [v + 1, v - 1, v + 5]) { // 앞으로 1칸, 뒤로 1칸, 앞으로 5칸
      if (nv === e) { // 송아지 위치랑 현수위치랑 같을 때
        return dis[v] + 1; // 그때 v의 레벨 (최소 횟수)에 1을 더해주고 return.
      }

      // 다음 위치가 0이고 10000보다 작고 이미 찾은 값이 아닐 때
      if (nv > 0 && nv <= 10000 && !check[nv]) {
        check[nv] = true; // true로 변경해주고 다음번엔 찾을 필요가 없게 true로 변경
        queue.push(nv); // queue에 값을 담는다.
        dis[nv] = dis[v] + 1; // 레벨 (회수, 거리)를 1 증가
      }
    }
  }

  return 0;
}
```
