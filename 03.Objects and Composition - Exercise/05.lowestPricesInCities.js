function lowestPricesInCities(arr) {
  let obj = {};
  for (let line of arr) {
    let [town, product, price] = line.split(' | ');
    price = Number(price);

    if (product in obj) {
      if (Number(obj[product][0]) > price) {
        obj[product][0] = price;
        obj[product][1] = town;
      }
    } else {
      obj[product] = [price, town];
    }
  }

  for (let product in obj) {
    console.log(`${product} -> ${obj[product][0]} (${obj[product][1]})`);
  }
}