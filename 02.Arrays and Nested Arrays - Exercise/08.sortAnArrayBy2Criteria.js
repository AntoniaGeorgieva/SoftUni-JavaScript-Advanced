function sortAnArrayBy2Criteria(arr) {
  arr.sort((a, b) => {
    if (a.length !== b.length) {
      return a.length - b.length;
    } else {
      return a.toLowerCase().localeCompare(b.toLowerCase());
    }
  });
  console.log(arr.join('\n'));
}