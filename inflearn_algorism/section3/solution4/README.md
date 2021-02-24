### 📚 가장 짧은 문자거리
1. 한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출력
2. 문자열과 문자는 소문자로만 주어진다.

#### 🎈 정리
- 일단, 거리가 0인 즉, 문자열 s중 문자 t와 같은 문자인 것의 `index`를 배열에 담는다.

```js
arr.forEach((value, index) => {
  if (value === t) {
    location.push(index);
  }
});
```

- 그 후 각 자리마다 t의 문자와 같은 s 문자안에 있는 문자t와의 거리를 구한다.

```js
arr.forEach((_, index) => {
  let min = Number.MAX_SAFE_INTEGER;
  location.forEach((locate) => {
    const abs = Math.abs(index - locate);

    if (index === locate) { // index가 같을 때는 거리는 무조건 0
      min = 0;
      return;
    }

    if (min > abs) {
      min = abs;
    }
  });
  answer.push(min);
});
```

- 다른 방법으로는 다음과 같이 처음부터 순서대로 for문을 돌며 e와의 거리를 구하는 것이다.

```js
let num = Number.MAX_SAFE_INTEGER;

arr.forEach((value) => {
  if (value === t) {
    num = 0;
    answer.push(num);
  }

  if (value !== t) {
    num += 1;
    answer.push(num);
  }
});
```
- 그리고 뒤에서부터 시작해 첫번째 인덱스까지 for문을 반대로 돈다.
- 그 후 처음부터 돈 거리와 뒤에서부터 돈 거리중 더 적은 거리를 배열에 담는다.

```js
for (let i = s.length - 1; i >= 0; i--) {
  if (s[i] === t) {
    num = 0;
  }

  if (s[i] !== t) {
    num += 1;
    answer[i] = Math.min(answer[i], num);
  }
}
```

- 효율성은 이게 for문을 2번을 돌았고 이 전은 3번을 돌았기에 두번째 방법이 더 빠른 방법이다.