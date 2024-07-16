function timeToWalk(steps, footprintLength, speed) {
  let roadlengthInMeters = steps * footprintLength;
  speed = speed * 1000 / 3600;
  let secondsNeeded = Math.round(roadlengthInMeters / speed);

  let numberOfBreaks = Math.floor(roadlengthInMeters / 500);
  let breakTimeSeconds = numberOfBreaks * 60;
  let totalTimeSeconds = secondsNeeded + breakTimeSeconds;

  const hours = Math.floor(totalTimeSeconds / 3600);
  const minutes = Math.floor((totalTimeSeconds % 3600) / 60);
  const seconds = Math.floor(totalTimeSeconds % 60);

  if (hours >= 10) {
    console.log(`${hours}:${minutes}:${seconds}`);
  } else {
    console.log(`0${hours}:${minutes}:${seconds}`);
  }

}

timeToWalk(2564, 0.70, 5.5)