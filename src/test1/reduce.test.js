import reduce from "../reduce";

describe("reduce", () => {
  test("should reduce array to single value", () => {
    const array = [1, 2, 3, 4];
    expect(reduce(array, (sum, n) => sum + n, 0)).toBe(10);
  });
});
