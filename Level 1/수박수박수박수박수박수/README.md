# ✔ 수박수박수박수박수박수?
## 📌 LEVEL 1
### ✌ 문제 풀이
- 이 문제는 간단히 한줄로도 가능했던 문제였다.
<pre>
const solution = n => n%2 === 0 ? '수박'.repeat(n/2) : '수박'.repeat(n/2) + '수';
</pre>
- `repeat()`는 처음 알았다.
- 주어진 수만큼 문자열을 반복한다.

<hr>
- 📌 문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/12922?language=javascript