# ✔ 2개 이하로 다른 비트

## 👉 LEVEL 2

### 🎯 월간 코드 챌린지 시즌2

#### 📚 배운 점
- 제일 작은 숫자를 찾는 것이기 때문에 BFS로 풀어야 할 줄 알았고, 그 방법으로 문제를 풀었다.
- 하지만, 테스트케이스에서 시간초과가 나서 많이 해맸었다. 다른 방법이 생각이 안나서 질문을 참고했다.
- 이진법에 대해서 조금만 생각해보면 쉽게 풀만한 문제였다. 발상의 전환이.. 필요해보였다.
- 이 문제는 홀수와 짝수를 구분해서 풀면되는데, 짝수일 때는 이진법의 마지막 자리가 무조건 0이다.
- 그렇기 떄문에 단순히 1만 증가시켜주면 해결이 가능했다.
- 홀수일 경우는 마지막 자리가 1이라는 소리다. 때문에 뒤자리부터 0의 위치를 찾는것이 중요한데 이유는 1을 더할 경우에 자리수가 바뀔 것이기 때문이다. 그렇기에 0인 위치를 찾아 0은 1로 그 전 1은 0으로 바꿔주면 된다.
- `11011` => `11101`로 바꿔준다. 0과 1을 바꿔준다. 이렇게하면 바로 다음 큰 수를 알 수 있게되고 이렇게하면 단 2개의 지점만 다를뿐이기때문에 조건에도 만족하게 된다.
- 두 수를 바꾸는 부분

```js
const interChangeBinary = (number) => {
  // 앞에다 0을 추가해주고, 2진법 변환 후 배열로 바꾸고 그 배열을 뒤집는다.
  const reverseBinary = `0${number.toString(2)}`.split('').reverse();
  // 맨처음 만난 0일때의 인덱스 번호를 찾는다.
  const findZeroIndex = reverseBinary.findIndex((value) => value === '0');

  // 뒤집었으니 10을 01로 바꿔준다.
  [
    reverseBinary[findZeroIndex - 1],
    [reverseBinary[findZeroIndex]],
  ] = [
    reverseBinary[findZeroIndex],
    reverseBinary[findZeroIndex - 1],
  ];

  //그리고 다시 뒤집고 10진수로 바꿔준다.
  return parseInt([...reverseBinary].reverse().join(''), 2);
};
```

---

- 📌 문제 출처: https://programmers.co.kr/learn/courses/30/lessons/77885?language=javascript
