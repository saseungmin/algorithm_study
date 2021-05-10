# ✔ 파일명 정렬

## 👉 LEVEL 2

### 🎯 2018 KAKAO BLIND RECRUITMENT

#### 📚 배운 점
- 정규표현식의 그룹화하는 방법을 알게되었다.
- 기타 등등 정규표현식

```js
// foo- .0015.txt
// 시작부터 끝까지 찾는데
// 첫번째 그룹은 a-z . - \s(공백)이 1개 이상일때 매칭된다. (foo- .)
// 두번째 그룹은 0부터 9까지의 숫자로 1개 이상이고 5개 이하일때 매칭된다. (0015)
// 세번째 그룹은 모든 문자를 끝까지 포함한다. (.txt)
// 대소문자 구분없이
str.match(/^([a-z.-\s]+)([0-9]{1,5})(.*)$/i);
// 0015처럼 왼쪽부터 0을 찾아 제거해준다.
// 15
number.replace(/(^0+)/, '')
```

- `localeCompare()`: 메서드는 기준 문자열과 비교했을 때 비교 대상 문자열이 정렬상 전에 오는지, 후에 오는지 혹은 같은 순서에 배치되는지를 알려주는 숫자를 리턴한다.
- 이 메서드를 몰라서 `charCodeAt()` 메서드를 사용하여 일일히 비교하였지만, 실패.

```js
const upper = (str) => str.toUpperCase();
const compareCharCode = (a, b) => upper(a).localeCompare(upper(b));
```

---

- 📌 문제 출처: https://programmers.co.kr/learn/courses/30/lessons/17686
