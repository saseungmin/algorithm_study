# ✔ [3차] 방금그곡

## 👉 LEVEL 2

### 🎯 2018 KAKAO BLIND RECRUITMENT

#### 📚 배운 점
- 역시 갓카오 문제.. 너무 빡세다.
- 어렵진 않은데 요구사항이 진짜 많다.
- 시간이 오래걸렸다. 그래도 풀어서 기분은 좋다.
- 배운점은 역시 정규표현식
- `#` 때문에 굉장히 골치 아픈 문제다.
- 각 음표마다 1분인데 음표에 `C#`이런식으로 문자열로 같이 들어가있는 경우에 길이는 2이지만, 1분으로 봐야한다.
- 그렇기 때문에 정규표현식을 사용해서 짤라주었다.


```js
// 영문자 대소문자 구분없이 한글자와 #은 옵션으로 있어도 그만 없어도 그만이다.
sounds.match(/[A-Z]{1}#?/ig);

// ['A', 'B#', 'C']
```

- 그리고 정규표현식의 전방탐색, 후방탐색, 부정후방탐색, 부정전방탐색이라는 것을 알게되었다.
- [참고](https://sub0709.tistory.com/54)
- 여기서 사용한 건 부정전방탐색으로 뒤에 어떤 문자가 존재하면 안된다는 것이다.
- `#`으로 인해서 `ABC`와 같은 문자열이 들어왔을 때 `ABC#`이랑은 동일하지 않은 것인데 동일하다고 판단하기 때문이다. 그렇기 때문에 `#`이 붙은것이랑 붙지않은 것이랑 분리해서 비교해주어야 한다. 그렇기 떄문에 부정 전방탐색을 사용했다.

```js
const regExp = new RegExp(`${m}(?!#)`, 'g');

if (regExp.test(soundInfo[2])) {
  includeSoundInfo.push(soundInfo);
}
```

- 여기서 또다른 핵심은 음악 시작시간과 끝시간을 비교해서 파악해줘야한다. 그렇기 때문에 문자열로 들어온 시간을 비교해주어야 하기 때문에 다음과 같이 `date` 형으로 변경해주고 둘을 빼준 값을 분으로 변경해주었다.

```js
const getDiffDateMinutes = (start, end) => {
  const startTime = new Date(0, 0, 0, start[0], start[1], 0);
  const endTime = new Date(0, 0, 0, end[0], end[1], 0);

  return (endTime.getTime() - startTime.getTime()) / 1000 / 60;
};
```

- 시간은 오래걸렸지만, 알게된 점이 많다.

---

- 📌 문제 출처: https://programmers.co.kr/learn/courses/30/lessons/17683?language=javascript
