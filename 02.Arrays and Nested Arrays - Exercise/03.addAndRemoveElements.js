function addAndRemoveElements(arr) {
  let numsArr = [];
  let num = 1;

  for (let i = 0; i < arr.length; i++) {
    if(arr[i] == "add") {
      numsArr.push(num);
    } else {
      numsArr.pop();
    }
    num++;
  }

  if(numsArr.length >= 1) {
    console.log(numsArr.join('\n'));
  }
 
}

addAndRemoveElements(['add', 
  'add', 
  'remove', 
  'add', 
  'add']
  )