### 📚 문자열 압축
1. 같은 문자가 연속으로 반복되는 경우 박복되는 문자 바로 오른쪽에 반복 횟수를 표기한다.
2. 반복횟수가 1인 경우는 생략한다.

#### 🎈 정리
- 문자열을 for loop를 수행하기 전에 한 칸을 늘려준다.

```js
const newStr = `${str} `;
```
- 문자열의 현재 문자와 다음 인덱스 문자와 비교하여 같으면 1을 더해준다.

```js
if (newStr[i] === newStr[i + 1]) {
  count += 1;
}
```

- 만약 다를때 count가 1보다 클 때는 현재 문자와 count를 같이 더해주어 추가해 준다.
- 1보다 작을때는 해당 문자만 추가해준다.
- 그 후 count는 1로 다시 변경

```js
if (newStr[i] !== newStr[i + 1]) {
  answer += count > 1 ? newStr[i] + count : newStr[i];
  count = 1;
}
```