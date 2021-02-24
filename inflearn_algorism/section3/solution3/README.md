### 📚 숫자만 추출
1. 문자와 숫자가 섞여있는 문자열이 주어진다.
2. 그 중 숫자만 추출하여 그 순서대로 자연수를 만든다.

#### 🎈 정리
- 정규표현식을 사용하여 숫자만 걸러낸 뒤, parseInt로 정수로 변경하면 앞자리 0은 알아서 제거된다.

```js
const convertToNumber = (arr) => parseInt(arr.join(''), 10);
const regexp = (str) => str.match(/[0-9]/ig);

function solution(str) {
  return convertToNumber(regexp(str));
}
```