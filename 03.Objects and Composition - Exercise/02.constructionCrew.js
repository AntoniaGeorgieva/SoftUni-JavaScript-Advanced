function constructionCrew(obj) {
  if (obj.dizziness == true) {
    Number(obj.levelOfHydrated) += 0.1 * Number(obj.weight) * Number(obj.experience);
    obj.dizziness = false;
  }

  console.log(obj);
}