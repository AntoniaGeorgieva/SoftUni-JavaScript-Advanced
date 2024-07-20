function magicMatrices(arr) {
  let sum = 0;
  let arrOfSums = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
    arrOfSums.push(sum);
    sum = 0;
  }

  let row = arr[0];

  for (let j = 0; j < row.length; j++) {
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i][j];
    }
    arrOfSums.push(sum);
    sum = 0;
  }

  let output = true;
  for (let i = 1; i < arrOfSums.length; i++) {
    if (arrOfSums[i] != arrOfSums[i - 1]) {
      output = false;
      break;
    }
  }

  console.log(output);
}