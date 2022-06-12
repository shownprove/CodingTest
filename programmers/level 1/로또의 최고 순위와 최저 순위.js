function solution(lottos, win_nums) {
  let correctCount = 0;
  let zeroCount = 0;
  for (const lotto of lottos) {
    if (lotto !== 0) {
      for (const win_num of win_nums) {
        if (lotto === win_num) {
          correctCount++;
        }
      }
    } else {
      zeroCount++;
    }
  }

  const minCount = correctCount;
  const maxCount = correctCount + zeroCount;
  let minWin;
  let maxWin;
  switch (maxCount) {
    case 6:
      maxWin = 1;
      break;
    case 5:
      maxWin = 2;
      break;
    case 4:
      maxWin = 3;
      break;
    case 3:
      maxWin = 4;
      break;
    case 2:
      maxWin = 5;
      break;
    default:
      maxWin = 6;
  }
  switch (minCount) {
    case 6:
      minWin = 1;
      break;
    case 5:
      minWin = 2;
      break;
    case 4:
      minWin = 3;
      break;
    case 3:
      minWin = 4;
      break;
    case 2:
      minWin = 5;
      break;
    default:
      minWin = 6;
  }
  let answer = [maxWin, minWin];
  return answer;
}
