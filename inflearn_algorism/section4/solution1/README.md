### 📚 자릿수의 합
1. N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구한다.
2. 그 합이 최대인 자연수를 출력한다.
3. 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 한다.

#### 🎯 정리
- 숫자로 이루어진 배열을 `forEach` 루프를 사용하여 각 숫자를 문자열로 변경한 뒤 자리수를 더해준다.

```js
const digitsSum = (number) => {
  let sum = 0;

  for (let i = 0; i < number.length; i++) {
    sum += parseInt(number[i], 10);
  }

  return sum;
};
```

- 만약 현재 각 자리수의 합이 더 클 때 `maxSum`과 `maxNumber` 값을 변경해준다.

```js
if (sum > maxSum) {
  maxSum = sum;
  maxNumber = number;
}
```

- 만약 각 자리수의 합이 같고, 현재의 원래 숫자가 더 크면 `maxNumber`를 변경해준다.


```js
if (sum === maxSum && number > maxNumber) {
  maxNumber = number;
}
```

- 다른 방법으론 10으로 나눠서 몫과 나머지를 사용해서 할 수도 있다.

```js
while (tmp) {
  sum += (tmp % 10);
  tmp = Math.floor(tmp / 10);
}
```