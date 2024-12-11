import drop from "../drop.js";

describe("drop", () => {
  test("should return an array with the first element removed", () => {
    const array = [1, 2, 3];
    expect(drop(array)).toEqual([2, 3]);
  });

  test("should return an array with the first two elements removed", () => {
    const array = [1, 2, 3];
    expect(drop(array, 2)).toEqual([3]);
  });

  test("should return the same array if the number of elements to remove is 0", () => {
    const array = [1, 2, 3];
    expect(drop(array, 0)).toEqual([1, 2, 3]);
  });

  test("should return an empty array if the number of elements to remove is greater than the array length", () => {
    const array = [1, 2, 3];
    expect(drop(array, 5)).toEqual([]);
  });

  test("should return an empty array if the number of elements to remove is equal to the array length", () => {
    const array = [1, 2, 3];
    expect(drop(array, 4)).toEqual([]);
  });
});
