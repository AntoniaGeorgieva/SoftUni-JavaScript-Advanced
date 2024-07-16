function previousDay(year, month, day) {
  if(day != 1) {
    day -= 1;
  } else {
    switch (month - 1) {
      case 0:
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
        day = 31;
        break;
      default:
        day = 30; 
        break;
    }

    if(month == 1) {
      month = 12;
      year -= 1;
    } else {
      month -= 1;
    } 
  }

  console.log(`${year}-${month}-${day}`)
}

previousDay(2016, 12, 1)