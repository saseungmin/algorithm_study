### 📚 중복순열 구하기
1. 1부터 N까지 번호가 적힌 구슬이 있다.
2. 이 중 중복을 허락하여 M번을 뽑아 일렬로 나열하는 방법을 모두 출력한다.

#### 🎯 정리

```js
function solution(n, m) {
  const result = [];
  const temp = Array.from({ length: m }, () => 0);

  function dfs(level) {
    if (level === m) { // level이 m과 같으면 m번
      result.push(temp.slice()); // slice를 해줘야지 정상적인 답이 나오는데, 주소값이 마지막이기 때문에 slice를 해준다.
      return;
    }

    for (let i = 1; i <= n; i++) { // 1번부터 ~ n번까지
      temp[level] = i; // level이 1일 때.. 2일 때... 3일 때...
      dfs(level + 1);
    }
  }

  dfs(0);

  return result;
}
```

- 만약 이 문제에서 중복 포문을 사용했다면 M번이 변경될때마다 계속 변경해줘야한다. 만약 M이 3이면 3중 포문을 돌아야 한다.
