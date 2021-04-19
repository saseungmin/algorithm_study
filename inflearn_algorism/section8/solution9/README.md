### 📚 동전교환
1. 여러 단위의 동전들이 주어져 있을때 거스름돈을 가장 적은 수의 동전으로 교환해주려면?
2. 간 단위의 동전은 무한정 쓸 수 있다.
3. 동전의 종류개수 N, N개의 동전의 종류, 거슬러 줄 금액 M이 주어진다.

#### 🎯 정리

```js
function solution(types, m) {
  const len = types.length;
  let result = Number.MAX_SAFE_INTEGER;

  function dfs(level, sum) {
    if (sum > m) { // 동전의 합이 m보다 크면 필요없으니 return
      return;
    }

    if (level >= result) { // level(동전 개수)가 현재 최소 동전 개수보다 크거가 같으면 return
      return;
    }

    if (sum === m) { // 동전의 합과 m과 같은 경우에만 성립하니
      result = Math.min(result, level); // 최소값을 변경
      return;
    }

    for (let i = 0; i < len; i++) { // 동전의 개수 만큼 재귀 여기서는 동전이 3개니 3개만큼 각자 재귀를 돌아 sum에 대한 계산 수행
      dfs(level + 1, sum + types[i]);
    }
  }

  dfs(0, 0);

  return result;
}
```
