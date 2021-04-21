### 📚 조합의 경우수(메모이제이션)
1. 다음 공식을 사용해 재귀를 이용해 조합수를 구하는 프로그램을 작성

<sub>n</sub>C<sub>r</sub> = <sub>n-1</sub>C<sub>r-1</sub> + <sub>n-1</sub>C<sub>r</sub>

2. n과 r을 입력받는다.
#### 🎯 정리
- 이 문제는 단순한 재귀로 풀었을때의 문제점을 보여주는? 문제이다.
- 그렇기 떄문에 메모이제이션을 해줌으로써 재귀의 시간 복잡도를 해결해준 문제이다.
- 다이나믹 2차원 배열로 이미 찾은 값을 저장한다. 그리고 그 값이 존재하면 해당 값을 반환하기만 하고 재귀를 돌지 않는다.
- 약간 캐시 히트 같은 느낌인거 같았다. 캐시에 존재하면 캐시 히트가 되어 해당 값만 반환시켜주는 거 같았다.

```js
const dynamic = Array.from(Array(n + 1), () => Array(r + 1).fill(0));

function dfs(a, b) {
  if (dynamic[a][b] > 0) { // 캐시 히트?
    return dynamic[a][b];
  }

  if (a === b || b === 0) {
    return 1;
  }

  // 값을 저장
  dynamic[a][b] = dfs(a - 1, b - 1) + dfs(a - 1, b);

  return dynamic[a][b];
}
```
