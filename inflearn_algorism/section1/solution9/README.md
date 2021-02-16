### 📚 A를 #으로
1. 대문자로만 주어진다
2. A가 포함되면 모두 #으로 변경하여 출력

#### 🎯 정리
- 간단하게 정규표현식을 사용하여 풀었다.

```javascript
function solution(str) {
  const regex = /A/ig;

  return str.replace(regex, '#');
}
```