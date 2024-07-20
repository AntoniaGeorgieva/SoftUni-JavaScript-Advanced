function townsToJSON(arr) {
  let result = [];

  for (let i = 1; i < arr.length; i++) {
    let line = arr[i].split(' | ');
    let Town = line[0].split('| ')[1];
    let Latitude = Number(Number(line[1]).toFixed(2));
    let Longitude = Number(Number(line[2].split(' |')[0]).toFixed(2));

    result.push({ Town, Latitude, Longitude });
  }

  console.log(JSON.stringify(result));
}