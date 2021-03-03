### 📚 공통원소 구하기
- A, B 두 개의 집합이 주어지면 두 집합의 공통 원소를 추출하여 오름차순으로 출력.

#### 🎯 정리

- 두번째 문제도 처음부터 Two Pointer를 생각하지 못했다.
- 원래 풀던대로 풀어봤는데 다음과 같이 풀었다.
- 이중으로 반복문을 돌아 같은건 `Set`에 넣어주고 다시 배열로 변환해 오름차순으로 정렬하였다.

```js
function solution(a, b) {
  const result = new Set();

  a.forEach((value) => {
    b.forEach((target) => {
      if (value === target) {
        result.add(value);
      }
    });
  });

  return [...result].sort((x, y) => x - y);
}
```

- Two Pointer 알고리즘을 적용한 방식은 일단 오름차순으로 두 배열을 정렬를 해준다.

```js
const sort = (arr) => arr.sort((x, y) => x - y);

function solution(a, b) {
  const arrA = sort(a);
  const arrB = sort(b);

  // ...
}
```

- 다음으로 이전문제와 같이 두개의 포인터를 이용해 문제를 푼다.
- 만약 두개의 포인터가 위치하는 값이 같으면 그 값을 결과 배열에 넣어준다. 그리고 공통 원소는 두군데에 해당하니까 두 포인터를 다 1증가시킨다.

```js
if (A === B) {
  result.push(A);

  aP += 1;
  bP += 1;
}
```

- 만약 A가 B보다 작으면 즉, 작은 값을 가진 포인터의 위치를 1증가시켜준다.


```js
if (A < B) {
  aP += 1;
}

if (A > B) {
  bP += 1;
}
```