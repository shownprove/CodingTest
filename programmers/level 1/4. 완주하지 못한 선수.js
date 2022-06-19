function solution(participant, completion) {
  participant.sort(); //sort 메서드는 배열을 자가변환하여 리턴한다. 문제의 경우 배열을 자가변환해도 문제 없는 경우이므로 굳이 새로운 변수에 재할당할 이유가 없다.
  completion.sort(); //나는 주어진 초기 배열의 정렬을 바꾸는 것을 선호하지 않는 경향 때문에 orderedParticipant와 같은 변수에 재할당하였지만, 문제에서는 필요 없는 짓이다. 문제의 요구사항을 정확히 파악하자. 코테는 최적화의 학문이지 실무의 영역이 아니다.
  for (let i in participant) {
    if (participant[i] !== completion[i]) return participant[i];
  }
  //for in 구문 좀 써라...
  //answer로 꼭 리턴할 필요는 없다. 문제를 해결하기만 하면 뭐든 ok, 따라서 이 문제의 경우 곧바로 return 시켜도 된다. 코테는 가독성도, 코드 컨벤션도 없는 영역이다. 그냥 최적화와 요구사항 충족, 그리고 멋짐만 폭발하면 된다.
}
