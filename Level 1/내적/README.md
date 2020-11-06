# ✔ 내적
## 🌈 LEVEL 1
### ✌ 월간 코드 챌린지 시즌1

- 너무 쉬워서 설명할 것이 없는..
- `reduce`를 사용해서 풀려했지만, 시간복잡도는 `while`문과 `for`이 좋다.
- 하지만, 이 문제에서는 상관없을 듯하다.
- 제한사항이 그다지 큰 숫자가 아닌거 같다.
> a, b의 길이는 1 이상 1,000 이하입니다.
> a, b의 모든 수는 -1,000 이상 1,000 이하입니다.

```javascript
function solution(a, b) {
  return a.reduce((acc, _current, i) => acc += a[i] * b[i], 0);
}
```