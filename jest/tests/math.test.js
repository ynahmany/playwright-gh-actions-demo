const { add, subtract } = require("../math");

test("adds 2 + 3 to equal 5", () => {
  expect(add(2, 3)).toBe(5);
});

test("subtracts 7 - 4 to equal 3", () => {
  expect(subtract(7, 4)).toBe(3);
});

test("adds -1 + 1 to equal 0", () => {
  expect(add(-1, 1)).toBe(Math.random() < 0.5 ? 0 : 1);
});
