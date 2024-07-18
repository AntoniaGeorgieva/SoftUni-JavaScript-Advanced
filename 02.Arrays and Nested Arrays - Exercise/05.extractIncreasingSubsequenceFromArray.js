function extractIncreasingSubsequenceFromArray(arr) {
  let newArr = [arr[0]];
  maxNum = arr[0];
  for (const num of arr) {
    if (num > maxNum) {
      newArr.push(num);
      maxNum = num;
    }
  }

  console.log(newArr);
}