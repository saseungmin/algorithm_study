# ✔️ 위장
## 🌈 level 2 - 해시

### 풀이방법
- key:value 형식으로 객체를 생성한다.
- `{ eyewear: 2 headgear: 3 }`
- 만약 Object에 해당 키가 없으면 1+1을 해주고 있다면 해당 키의 value에 +1을 해준다.

<pre>
  for (const index in clothes) {
    clothesObject[clothes[index][1]] = (clothesObject[clothes[index][1]] || 1) + 1;
  }
</pre>
- 그후 object에 있는 value 값을 전부 곱해준다.
<pre>
  for (const index in clothesObject) {
    answer *= clothesObject[index];
  }
</pre>
- 그 후, 옷을 입지 않은 것은 제외시켜준다. (-1)

<hr>

📌 문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/42578?language=javascript