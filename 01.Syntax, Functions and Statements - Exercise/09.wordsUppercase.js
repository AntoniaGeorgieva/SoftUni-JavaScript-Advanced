function wordsUppercase(words) {
  let regex = /[A-z0-9]+/g;
  let matches = words.match(regex);

  console.log(matches.join(', ').toUpperCase());
}