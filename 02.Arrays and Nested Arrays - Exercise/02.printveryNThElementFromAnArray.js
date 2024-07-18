function printveryNThElementFromAnArray(arr, num) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += num) {
    newArr.push(arr[i]);
  }
  console.log(newArr);
  console.log(newArr);
}

printveryNThElementFromAnArray(['5', 
  '20', 
  '31', 
  '4', 
  '20'], 
  2
  );