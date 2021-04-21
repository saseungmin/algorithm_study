### 📚 순열 구하기
1. 10이하의 N개의 자연수가 주어지면 이 중 M개를 뽑아 일렬로 나열하는 방법을 모두 출력한다.
2. 출력순서는 사전순으로 오름차순으로 출력한다.

#### 🎯 정리
- 중복되는 순열은 제거해주고 중복되지 않은 순열만 반환한다.
- 그렇기 때문에 이미 사용되었는지를 확인하기 위해서 check 배열이 필요하다. 각 자리의 수마다 사용여부를 체크를 해야하기 때문에 받은 숫자 배열 만큼의 배열 크기로 만든다.

```js
const check = Array.from({ length: len }, () => false);
// [false, false, false]
```

- 각 자리마다 해당 숫자들을 반복해서 돌아야하니 내부에서 반복문을 주어진 숫자크키만큼 돌아야한다.

```js
function dfs(level) {
  if (level === m) { // 레벨이 m과 같으면 반환
    result.push(temp.slice());
    return;
  }

  for (let i = 0; i < len; i++) {
    // ...
  }
}

dfs(0)
// level 0: [3, 6, 9]
// level 1: [3, 6, 9]
```

- 체크 배열은 `false`로 초기화해놓고 사용하면 `true`로 변경되게 해준다. 즉, 사용안했을시(`false`)때만 재귀를 돌게해준다.
- 그리고 재귀를 돌면서 level이 m이 되어 해당 재귀가 반환되어 끝이 났을 때 체크 배열의 해당 숫자의 사용여부를 다시 `false`로 변경해준다.

```js
for (let i = 0; i < len; i++) {
  if (!check[i]) {
    temp[level] = n[i];
    check[i] = true;

    dfs(level + 1);

    check[i] = false;
  }
}
```