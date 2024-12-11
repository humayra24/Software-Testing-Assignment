import map from "../map";

describe("map", () => {
  test("should return an array of the same length", () => {
    const array = [1, 2, 3, 4];
    expect(map(array, (x) => x)).toHaveLength(array.length);
  });

  test("should return an array with the elements squared", () => {
    const array = [4, 8];
    expect(map(array, (x) => x * x)).toEqual([16, 64]);
  });

  test("should return an array with the elements doubled", () => {
    const array = [4, 8];
    expect(map(array, (x) => x * 2)).toEqual([8, 16]);
  });
});
