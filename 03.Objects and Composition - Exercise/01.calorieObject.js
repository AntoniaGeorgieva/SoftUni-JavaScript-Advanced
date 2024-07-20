function calorieObject(arr) {
  let obj = {};
  for (let i = 1; i < arr.length; i++) {
    if (i % 2 != 0) {
      obj[arr[i - 1]] = Number(arr[i]);
    }
  }
  console.log(obj);
}