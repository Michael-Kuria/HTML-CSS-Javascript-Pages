/**
 * find the sequence of operations of either adding 5 or multiplying by 3 that produces a given
 * number, starting with the number 1
 */

const recursive = function (current, number, history) {
  if (current == number) {
    return history;
  } else if (current > number) {
    return null;
  } else
    return (
      recursive(current * 3, number, history + " * 3") ||
      recursive(current + 5, number, history + " + 5")
    );
};

console.log(recursive(1, 20, "1"));
