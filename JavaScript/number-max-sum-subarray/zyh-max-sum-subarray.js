function maxSumSubarray(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let min = 0,
    sum = 0,
    res = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum - min > res) {
      res = sum - min;
    }
    if (min > sum) {
      min = sum;
    }
  }
  return res;
}

const cases = [
  [],
  [1, 2, 3],
  [-1, 1, 2, -2],
  [-1, 1, 2, -3, 5],
  [-1, 1, 2, -3, -4, 5]
];

cases.forEach((val, i) => {
  console.log(`Case ${i + 1}`);
  console.log("input", val);
  console.log("output", maxSumSubarray(val));
});
