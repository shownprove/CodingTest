function solution(new_id) {
  const regExp = /[\{\}\[\]\/?,;:|\)*~!^\+<>@\#$%&\\\=\(\'\"]/g;
  const step1 = new_id.toLowerCase();
  const step2 = step1.replace(regExp, "");
  let step3 = step2.replace(/\.+/g, ".");
  let step4;
  if (step3.startsWith(".")) {
    step3 = step3.substring(1);
  }
  if (step3.endsWith(".")) {
    step4 = step3.substring(0, step3.length - 1);
  } else {
    step4 = step3;
  }
  let step5;
  if (step4 == "") {
    step5 = "a";
  } else {
    step5 = step4;
  }
  let step6;
  if (step5.length >= 16) {
    step6 = step5.slice(0, 15);
    if (step6[step6.length - 1] === ".") {
      step6 = step6.substring(0, step6.length - 1);
    }
  } else {
    step6 = step5;
  }
  if (step6.length === 1) {
    step6 = step6 + step6;
  }
  if (step6.length === 2) {
    step6 = step6 + step6[1];
  }
  var answer = step6;
  return answer;
}
