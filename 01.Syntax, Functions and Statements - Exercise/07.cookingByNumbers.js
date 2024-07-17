function cookingByNumbers(startingPoint, operation1, operation2, operation3, operation4, operation5) {
  let finalPoint = Number(startingPoint);

  let operations = operation1 + " " + operation2 + " " + operation3 + " " + operation4 + " " + operation5;
  let operationsArr = operations.toString().split(" ");

  for (const operation of operationsArr) {
    switch (operation) {
      case "chop":
        finalPoint /= 2;
        break;
      case "dice":
        finalPoint = Math.sqrt(finalPoint);
        break;
      case "spice":
        finalPoint += 1;
        break;
      case "bake":
        finalPoint *= 3;
        break;
      case "fillet":
        finalPoint -= (0.2 * finalPoint);
        break;
    }
    console.log(finalPoint);
  }
}