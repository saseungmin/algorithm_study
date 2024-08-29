// function solution(n) {
//   // eslint-disable-next-line func-names
//   return function (acc = 0) {
//     if (n > 20) {
//       return false;
//     }

//     if (n < 1) {
//       return acc;
//     }

//     return solution(n - 1)(acc + n);
//   };
// }

// function solution(n) {
//   if (n > 20) {
//     return false;
//   }

//   if (n < 1) {
//     return 0;
//   }

//   return n + solution(n - 1);
// }

// function solution(n) {
//   let sum = 0;

//   if (n > 20) {
//     return false;
//   }

//   if (n < 1) {
//     return 0;
//   }

//   for (let i = 1; i < n + 1; i++) {
//     sum += i;
//   }

//   return sum;
// }

function solution(n) {
  if (n > 20) {
    return false;
  }

  const calculate = (k, acc) => {
    if (k < 1) {
      return acc;
    }

    return calculate(k - 1, acc + k);
  };

  return calculate(n, 0);
}

describe('solution', () => {
  context('with over 20', () => {
    it('Should return false', () => {
      const result = solution(21);

      expect(result).toBeFalsy();
    });
  });

  context('with under 20', () => {
    it('Should return correct answer', () => {
      expect(solution(6)).toBe(21);
      expect(solution(10)).toBe(55);
    });
  });
});
