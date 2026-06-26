const test = require("node:test");
const assert = require("node:assert/strict");

const { addieren, multiplizieren } = require("./rechner");

test("addieren: 2 + 3 ergibt 5", () => {
  assert.equal(addieren(2, 3), 5);
});

test("multiplizieren: 4 * 3 ergibt 12", () => {
  assert.equal(multiplizieren(4, 3), 12);
});
