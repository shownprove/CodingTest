function solution(id_list, report, k) {
  const reportedInfo = new Object();

  for (const id of id_list) {
    reportedInfo[id] = new Object();
    reportedInfo[id].reportedCount = 0;
    reportedInfo[id].reporter = [];
    reportedInfo[id].contribute = 0;
  }

  for (const item of report) {
    const splitedReport = item.split(/\s/);
    const reporter = splitedReport[0];
    const reportedUser = splitedReport[1];
    if (!reportedInfo[reportedUser].reporter.some((i) => i === reporter)) {
      reportedInfo[reportedUser].reportedCount++;
      reportedInfo[reportedUser].reporter.push(reporter);
    }
  }

  let answer = [];
  for (const id of id_list) {
    if (reportedInfo[id].reportedCount >= k) {
      const contributer = reportedInfo[id].reporter;
      for (const contributerId of contributer) {
        reportedInfo[contributerId].contribute++;
      }
    }
  }
  for (const id of id_list) {
    answer.push(reportedInfo[id].contribute);
  }

  return answer;
}
