function fruit(fruit, grams, pricePerKl) {
  let weight = grams / 1000;
  let totalPrice = weight * pricePerKl;

  console.log(`I need $${totalPrice.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`)
}