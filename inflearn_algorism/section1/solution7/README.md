### 📚 10부제
1. 자동차 번호의 일의 자리 숫자가 0이면 10일, 20일, 30일에 운행하지 못한다.
2. 날짜의 일의 자리 숫자가 주어지고 자동차 번호 끝 두자리가 주어진다.
3. 위반하는 자동차의 대수를 출력

#### 🎯 정리
- 처음 생각한 방법.
- 먼저 주어진 두자리를 한자리로 잘랐다.

```javascript
const sliceOneDigit = (number) => parseInt(number.toString().slice(1, 2), 10);
```

- 그다음 `reduce`를 사용하여 비교 후 날짜와 같으면 `+1`
- 10부제니까 10으로 나눈 나머지 값이랑 같은 날만 걸러주면 됬었다.

```javascript
function solution(day, arr) {
  return arr.filter((number) => number % 10 === day).length;
}
```