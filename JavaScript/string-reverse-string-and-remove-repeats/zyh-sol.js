function reverseAndRemoveRepeats(str) {
  const stack = [];
  let pos = str.length - 1;
  while (pos >= 0) {
    const stackLength = stack.length;
    if (stackLength === 0) {
      stack.push([str[pos--], 1]);
    } else if (stack[stackLength - 1][0] === str[pos]) {
      stack[stackLength - 1][1]++;
      pos--;
    } else {
      if (stack[stackLength - 1][1] > 3) {
        stack.pop();
      } else {
        stack.push([str[pos--], 1]);
      }
    }
  }

  return stack.map(val => val[0].repeat(val[1])).join("");
}

const cases = ["", "abc", "acabbbbaaad"];

cases.forEach((val, i) => {
  console.log(`Case ${i + 1}`);
  console.log("input", val);
  console.log("output", reverseAndRemoveRepeats(val));
});
