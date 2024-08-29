/* eslint-disable no-param-reassign */
// N stages result
// 5 [2, 1, 2, 6, 2, 4, 3, 3] [3,4,2,1,5]
// 4 [4,4,4,4,4] [4,1,2,3]

function solution(N, stages = []) {
  const answer = [];

  for (let i = 1; i < N + 1; i++) {
    const filteredCurrentSteps = stages.filter((v) => v === i);

    const failRatio = filteredCurrentSteps.length / stages.length;

    answer.push({
      stage: i,
      failRatio,
    });

    const nextStages = stages.filter((v) => v !== i);

    stages = nextStages;
  }

  return [...answer].sort((a, b) => b.failRatio - a.failRatio).flatMap((value) => value.stage);
}

describe('solution', () => {
  it('result', () => {
    const result = solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);

    expect(result).toEqual([3, 4, 2, 1, 5]);
  });

  it('result 2', () => {
    const result = solution(4, [4, 4, 4, 4, 4]);

    expect(result).toEqual([4, 1, 2, 3]);
  });
});
