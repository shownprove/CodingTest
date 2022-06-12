function solution(id_list, report, k) {
  const reportedInfo = new Object();

  for (let i = 0; i < id_list.length; i++) {
    reportedInfo[id_list[i]] = new Object();
    reportedInfo[id_list[i]].reportedCount = 0;
    reportedInfo[id_list[i]].reporter = [];
    reportedInfo[id_list[i]].contribute = 0;
  }

  for (let i = 0; i < report.length; i++) {
    const eachReport = report[i];
    const splitedReport = eachReport.split(/\s/);
    const reporter = splitedReport[0];
    const reportedUser = splitedReport[1];
    if (!reportedInfo[reportedUser].reporter.some((i) => i === reporter)) {
      reportedInfo[reportedUser].reportedCount++;
      reportedInfo[reportedUser].reporter.push(reporter);
    }
  }

  var answer = [];
  for (let i = 0; i < id_list.length; i++) {
    if (reportedInfo[id_list[i]].reportedCount >= k) {
      const contributer = reportedInfo[id_list[i]].reporter;
      for (let i = 0; i < contributer.length; i++) {
        reportedInfo[contributer[i]].contribute++;
      }
    }
  }
  for (let i = 0; i < id_list.length; i++) {
    answer.push(reportedInfo[id_list[i]].contribute);
  }

  return answer;
}
