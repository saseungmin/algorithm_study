# ✔ 3진법 뒤집기

## 👉 LEVEL 1

### 🎯 월간 코드 챌린지 시즌1

#### 📚 배운 점

- TDD를 적용 후 문제 풀이
- 알게된 점은 `toString(n)`에 대해서 알게되었다. 이렇게 유용한것이 있었다니..
- 진법변환을 해준다. 굳이 `While`으로 변환해줄 필요가 없었다.

```js
const solution = (n) => {
  return parseInt([...n.toString(3)].reverse().join(''), 3);
}
```

---

- 📌 문제 출처: https://programmers.co.kr/learn/courses/30/lessons/68935
