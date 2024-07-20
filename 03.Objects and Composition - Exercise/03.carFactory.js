function carFactory(obj) {
  let power;
  if (obj.power <= 90) {
    power = 90;
  } else if (obj.power <= 120) {
    power = 120;
  } else {
    power = 200
  }

  let volume;
  if (power == 90) {
    volume = 1800;
  } else if (power == 120) {
    volume = 2400;
  } else {
    volume = 3500;
  }

  let wheels;
  if (obj.wheelsize % 2 == 0) {
    wheels = obj.wheelsize - 1;
  } else {
    wheels = obj.wheelsize;
  }

  let newObj = {
    model: obj.model,
    engine: {
      power: power,
      volume: volume
    },
    carriage: {
      type: obj.carriage,
      color: obj.color
    },
    wheels: [wheels, wheels, wheels, wheels]
  };

  console.log(newObj)
}