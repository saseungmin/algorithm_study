# ✔ 최댓값과 최솟값
## 📌 LEVEL 2
### 🌈 문제 풀이
- 들어오는 문자열을 `split`을 사용하여 자른뒤 정수로 변환해준다.
- 그후, 최댓값과 최솟값을 구한뒤
- 최솟값 최댓값 순으로 `return` 해준다.

### 🌈 다른 풀이
- 문자열을 굳이 숫자로 변환을 안시켜도 최댓값 최솟값을 구할 수 있다..
```javascript
function solution(s) {
    const arr = s.split(' ');

    return Math.min(...arr)+' '+Math.max(...arr);
}
```

<hr>

📌 문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/12939?language=javascript