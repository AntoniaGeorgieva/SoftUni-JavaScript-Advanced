function rotateArray(arr, num) {
  for (let i = 1; i <= num; i++) {
    let digit = arr.pop();
    arr.unshift(digit);
  }
  console.log(arr.join(' '));
}