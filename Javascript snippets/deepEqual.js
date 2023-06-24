const deepEqual = (obj1, obj2) => {
  if (obj1 == obj2) return true;
  else if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
  else {
    const keys = Object.keys(obj1);
    for (var i = 0; i < keys.length; i++) {
      if (obj1[keys[i]] !== obj2[keys[i]]) return false;
    }
    return true;
  }
};

const obj1 = {
  firstname: "Alex",
  lastname: "alfred",
  day: 1,
};

const obj2 = {
  firstname: "Alex",
  lastname: "alfred",
  day: 1,
  year: 2023,
};

console.log(deepEqual(obj1, obj1));
console.log(deepEqual(obj1, obj2));
