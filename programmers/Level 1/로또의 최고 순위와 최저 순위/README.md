# ✔ 로또의 최고 순위와 최저 순위

## 👉 LEVEL 1

### 🎯 2021 Dev-Matching: 웹 백엔드 개발자(상반기)

#### 📚 배운 점

- 맞은 번호 수와 랭크가 반비례하기 때문에 객체로 값을 찾으려고 했었는데 어짜피 둘다 숫자이기 때문에 단순히 배열로만 가능했다는 사실을 알았다.

```js
const findRank = {
  6: 1,
  5: 2,
  4: 3,
  3: 4,
  2: 5,
  1: 6,
  0: 6,
};

// 
const rank = [6, 6, 5, 4, 3, 2, 1];

// 최고 순위, 최저 순위
return [rank[count + zero.length], rank[count]];
```

---

- 📌 문제 출처: https://programmers.co.kr/learn/courses/30/lessons/77484?language=javascript
