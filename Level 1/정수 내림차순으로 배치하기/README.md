# ✔ 시저 암호
## 📌 LEVEL 1
- 주어진 숫자를 각자리수의 내림차순으로 정렬하기.

1. 문자열로 변경한 뒤 각 자리수를 배열로 담고 sort로 역순으로 재배치 후 문자열로 변경한 뒤 숫자로 변환해준다.

```javascript
parseInt(n.toString().split('').sort((a, b) => b - a).join(''), 10);
```

---

📌 문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/12933?language=javascript