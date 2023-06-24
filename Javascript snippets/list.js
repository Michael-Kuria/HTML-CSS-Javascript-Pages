const makeList = (...ar) => {
  var n = ar.length;

  if (n == 0) return null;

  let list = {
    value: ar[0],
    rest: {},
  };

  var next = list.rest;

  for (var i = 1; i < n; i++) {
    next.value = ar[i];
    next.rest = {};
    next = next.rest;
  }

  return list;
};

const list = makeList(1, 2, 3, 4, 5, 5);

var next = list;

while (next.rest != null) {
  console.log(next.value);

  next = next.rest;
}
