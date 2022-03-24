const subtract = require("../js/subtract");

test("properly subtracts 2 numbers", () => {
  expect(subtract(5, 1)).toBe(4);
});
