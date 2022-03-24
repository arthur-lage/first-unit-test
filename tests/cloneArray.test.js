const cloneArray = require("../js/cloneArray");

test("clones an array", () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const clone = cloneArray(array);
  expect(clone).toEqual(array);
  expect(clone).not.toBe(array);
});
