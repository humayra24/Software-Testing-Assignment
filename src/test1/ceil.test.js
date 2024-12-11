import ceil from "../ceil.js";

describe("ceil", () => {
  test("properly rounds up with two decimals accuracy", () => {
    expect(ceil(6.004, 2)).toBe(6.01);
  });

  test("properly rounds up with one decimal accuracy", () => {
    expect(ceil(6.004, 1)).toBe(6.1);
  });

  test("properly rounds up with zero decimal accuracy", () => {
    expect(ceil(6.004, 0)).toBe(7);
  });
});
