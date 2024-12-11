import words from "../words";

describe("words", () => {
  test("should split string into words", () => {
    expect(words("honey, jam, & pickle")).toEqual(["honey", "jam", "pickle"]);
  });

  test("should return empty array for empty string", () => {
    expect(words("")).toEqual([]);
  });

  test("should split string into words with custom pattern", () => {
    expect(words("honey, jam, & pickle", /[^, ]+/g)).toEqual([
      "honey",
      "jam",
      "&",
      "pickle",
    ]);
  });
});
