import add from "../add";

describe("add", () => {
  test("properly adds two numbers", () => {
    expect(add(6, 4)).toBe(10);
  });

  test("properly adds two negative numbers", () => {
    expect(add(-6, -4)).toBe(-10);
  });

  test("properly adds a negative and a positive number", () => {
    expect(add(-6, 4)).toBe(-2);
  });

  test("properly adds a positive and a negative number", () => {
    expect(add(6, -4)).toBe(2);
  });

  test("properly adds two decimal numbers", () => {
    expect(add(6.5, 4.5)).toBe(11);
  });
});
