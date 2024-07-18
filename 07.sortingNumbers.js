function sortingNumbers(arr) {
  let newArr1 = arr.slice();
  let smallestToBiggest = newArr1.sort((a, b) => a - b);
  let newArr2 = arr.slice();
  let biggestToSmallest = newArr2.sort((a, b) => b - a);

  let finalArr = [];
  let smallestNumIndex = 0;
  let biggestNumIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      finalArr.push(smallestToBiggest[smallestNumIndex]);
      smallestNumIndex++;
    } else {
      finalArr.push(biggestToSmallest[biggestNumIndex]);
      biggestNumIndex++;
    }
  }

  console.log(finalArr);
}