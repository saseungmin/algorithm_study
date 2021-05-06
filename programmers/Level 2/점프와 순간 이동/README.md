# ✔ 점프와 순간 이동

## 👉 LEVEL 2

### 🎯 Summer/Winter Coding(~2018)

#### 📚 배운 점
- 문제자체는 어려운 문제가 아닌데 수학을 못하면 풀 수가 없는 문제..
- 수포자한텐 너무 어렵다. 결국 몰라서 답을 봤다.
- https://velog.io/@diddnjs02/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%A0%90%ED%94%84%EC%99%80-%EC%88%9C%EA%B0%84%EC%9D%B4%EB%8F%99
- 내가 이해한 바로는 순간이동은 현재까지 온 거리 * 2의 지점에 도달할 수 있기 때문에, 이동할 총 거리의 / 2를 해주면 순간이동이 가능한 지점이다.
- 그러므로 2로 나눌수 있는 짝수 일때만 순간이동이 가능하다.
- 홀수는 불가능하므로 1을 이동시킨다.

```js
function solution(n) {
  let answer = 0;

  while (n > 0) {
    if (n % 2 !== 0) {
      n -= 1;
      answer += 1;
    } else {
      n /= 2;
    }
  }

  return answer;
}
```

- 그리도 다른 분의 풀이중에서 아래와 같이 이진수로 변환해서 1의 개수를 모두 더한 값이 결과값으로 도출이되는데 어떻게 이게 가능한 거지..? 이건 왜?가 잘 이해가 안된다.
- 어째서 2진수로 변경해주면 이렇게 되는걸까?

```js
function solution(n) {
  if (n === 1) return 1;
  const nArr = Array.from(n.toString(2));
  return nArr.reduce((a, b) => (+a) + (+b));
}
```

---

- 📌 문제 출처: https://programmers.co.kr/learn/courses/30/lessons/12980?language=javascript
