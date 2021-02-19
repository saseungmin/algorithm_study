### 📚 등수 구하기
1. 학생의 국어점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력
2. 같은 점수가 입력될 경우는 높은 등수로 동일 처리 (1등이 3명이면 그다음 학생은 4등)

#### 🎯 정리
- 이중 `for`문을 사용
- 전체를 돌면서 자신보다 큰 점수가 존재하면 등수를 `+1`해준다.

```javascript
function solution(arr) {
  const { length } = arr;
  const order = Array.from({ length }, () => 1);

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (arr[i] < arr[j]) {
        order[i] += 1;
      }
    }
  }

  return order;
}
```