import slice from "../slice.js";

describe("slice", () => {
  test("should return a slice of an array", () => {
    const array = [1, 2, 3, 4];
    expect(slice(array, 1, 3)).toEqual([2, 3]);
  });

  test("should return a slice of an array with a negative end", () => {
    const array = [1, 2, 3, 4];
    expect(slice(array, 1, -1)).toEqual([2, 3]);
  });

  test("should return a slice of an array with a negative start", () => {
    const array = [1, 2, 3, 4];
    expect(slice(array, -2, 4)).toEqual([3, 4]);
  });

  test("should return a slice of an array with a negative start and end", () => {
    const array = [1, 2, 3, 4];
    expect(slice(array, -2, -1)).toEqual([3]);
  });
});
