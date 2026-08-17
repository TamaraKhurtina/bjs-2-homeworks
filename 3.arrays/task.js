function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  return arr1.every((element, index) => element === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
  const usersWithGender = users.filter((user) => user.gender === gender);

  if (usersWithGender.length === 0) {
    return 0;
  }

  const ages = usersWithGender.map((user) => user.age);

  const sum = ages.reduce((acc, age) => acc + age, 0);

  return sum / ages.length;
}