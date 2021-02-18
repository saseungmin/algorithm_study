### 📚 가위 바위 보
1. A, B가 가위바위보를 한다.
2. A가 이기면 A출력, B가 이기면 B출력, 비길 경우는 D출력
3. 가위, 바위 보의 정보는 1, 2, 3으로 정한다.

#### 🎯 정리
- 각자의 할 일? 역할마다 잘 나눠주었다.
- 그로 인해서 가독성이 증가되었다.
- `for`문을 사용하였다.

```javascript
const isWin = (x, y) => ((x === 2 && y === 1) || (x === 3 && y === 2) || (x === 1 && y === 3));

const checkRSP = (a, b) => {
  if (isWin(a, b)) {
    return 'A';
  }

  if (isWin(b, a)) {
    return 'B';
  }

  return 'D';
};

function solution(a, b) {
  let str = '';

  for (let i = 0; i < a.length; i++) {
    str += `${checkRSP(a[i], b[i])}`;
  }

  return str;
}
```