function sameNumbers(digit) {
  let splitedDigit = digit.toString().split("");
  let sameNum = true;

  for (let i = 1; i < splitedDigit.length; i++) {
    if (Number(splitedDigit[i - 1]) != Number(splitedDigit[i])) {
      sameNum = false;
      break;
    }
  }
  if(sameNum) {
    console.log("true");
  } else {
    console.log("false");
  } 

  function sumOfNumbers(num) {
    let splitedDigit = num.toString().split("");
    let sum = 0;

    for (let digit of splitedDigit) {
      sum += Number(digit);
    }
    return sum;
  }

  let sum = sumOfNumbers(digit);
  console.log(sum);
}

sameNumbers(22222222)