function solution(participant, completion) {
  const orderedParticipant = participant.sort();
  const orderedCompletion = completion.sort();
  let answer = [];
  for (let i = 0; i < orderedParticipant.length; i++) {
    if (orderedParticipant[i] !== orderedCompletion[i]) {
      answer.push(orderedParticipant[i]);
    }
  }
  return answer[0];
}
