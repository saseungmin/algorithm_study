### 📚 졸업 선물
1. 선생님이 가지고 있는 예산은 한정적
2. 학생에게 원하는 상품의 가격과 배송비를 제출하라고 했다.
3. 현재 예산으로 최대 몇 명의 학생에게 선물을 사줄 수 있는지
4. 선생님은 상품 하나를 50% 할인해서 살 수 있는 쿠폰을 가지고 있다. (단, 배송비는 할인에 포함안된다.)
5. 예산 m과 학생의 상품의 가격과 배송비가 주어진다.

#### 🎯 정리
- 주어진 학생의 상품의 가격과 배송비를 더한 금액이 작은 순부터 정렬을 시킨다.

```js
const ascSort = (a, b) => (a[0] + a[1]) - (b[0] + b[1]);
arr.sort(ascSort);
```

- 처음 학생부터 차례대로 상품 가격을 50%할인(한 명)을 시킨 상태에서 예산에서 가격을 빼준다.

```js
arr.forEach((price, i) => {
  let leftMoney = m - (price[0] / 2) + price[1];

  // 생략..
});
```

- 50% 할인 시킨 뒤 남은 예산으로 금액이 작은 순으로 예산에서 뺴주고 count를 1 증가해준다.
- 그리고 만약, 예산보다 상품 가격이 비싸면 끝을 낸다.
- 마지막으로 count한 수가 더 크면 그 count가 결과값으로 바뀌고 끝날때까지 반복한다.

```js
arr.forEach((price, i) => {
  let leftMoney = m - (price[0] / 2) + price[1];
  let count = 1;

  arr.forEach((target, j) => {
    const targetMoney = target[0] + target[1];

    if (i !== j && targetMoney > leftMoney) {
      return;
    }

    if (i !== j && targetMoney <= leftMoney) {
      leftMoney -= targetMoney;
      count += 1;
    }
  });

  result = Math.max(result, count);
});
```