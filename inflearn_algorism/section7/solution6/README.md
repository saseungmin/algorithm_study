### 📚 장난꾸러기 현수
1. n명의 학생이 있다.
2. 반 번호를 정해 주기 위해 운동장에 반 학생들을 키가 가장 작은 학생부터 일렬로 키순으로 세웠다.
3. 근데 현수는 앞 번호를 받고 싶어 키가 작은 짝궁과 자리를 바꿨다.
4. 현수와 짝궁이 자리를 바꾼 반 학생들의 일려로 서있는 키 정보가 주어진다.
5. 현수가 받은 번호와 현수 짝궁이 받은 번호를 차례로 출력하라.

#### 🎯 정리
- 이 문제를 풀면서 배우고자 하는 목적이 뭔지를 잘 모르겠다.

```js
function solution(students) {
  // 배열 복사 후 오름차순 정렬
  const sortStudents = [...students].sort((a, b) => a - b);
  const result = [];

  sortStudents.forEach((student, index) => {
    if (student !== students[index]) { // 비교 후 만약 값이 다르면
      result.push(index + 1); // 인덱스 번호를 push
    }
  });

  return result;
}
```
