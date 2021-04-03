### 📚 Special Sort(구글 인터뷰)
1. N개의 정수가 입력되면 당신은 입력된 값을 정렬해야 한다.
2. 음의 정수는 앞쪽에 양의정수는 뒷쪽에 있어야 한다. 
3. 또한 양의정수와 음의정수의 순서에는 변함이 없어야 한다.

#### 🎯 정리
- 이 문제를 해결하기는 다음과 같이 하면 매우 간단하게 해결 가능하지만, 문제의 목적은 기본적인 정렬을 사용하여 문제를 푸는 것이였다.

```js
function solution(arr) {
  const negative = arr.filter((value) => value < 0);
  const positive = arr.filter((value) => value > 0);

  return [
    ...negative,
    ...positive,
  ];
}
```

- 그래서 문제를 버블 정렬을 응용하여 풀 수 있었다.
- 버블 정렬과 같은 방식으로 진행하되 양수와 음수만 정렬해야되고 각각의 양수 음수의 수끼리의 순서는 기존 순서를 지켜야 하기 때문에 비교하는 두개의 숫자중 앞의 숫자가 양수일 경우와 뒷 숫자가 음수인 경우만 두 수의 자리를 변경해준다.

```js
function solution(arr) {
  for (let i = arr.length - 1; i > -1; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}
```