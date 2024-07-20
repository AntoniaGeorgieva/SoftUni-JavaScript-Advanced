function townsToJSON(arr) {
  let result = [];

  for (let i = 1; i < arr.length; i++) {
    let line = arr[i].split(' | ');
    let Town = line[0]
    let Latitude = Number(line[1]).toFixed(1);
    let Longitude = Number(line[2]).toFixed(1);

    result.push({ Town, Latitude, Longitude });
  }

  console.log(JSON.stringify(result));
}

townsToJSON(['| Town | Latitude | Longitude |',
  '| Sofia | 42.696552 | 23.32601 |',
  '| Beijing | 39.913818 | 116.363625 |']
  )