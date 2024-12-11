import capitalize from "../capitalize";

describe("capitalize", () => {
  test("properly capitalizes first character of a string", () => {
    expect(capitalize("honey")).toBe("Honey");
  });

  test("properly capitalizes first character of a string with multiple words", () => {
    expect(capitalize("organic honey")).toBe("Organic honey");
  });

  test("properly capitalizes first character of a string with special characters", () => {
    expect(capitalize("honey!")).toBe("Honey!");
  });

  test("properly capitalizes first character of a string with numbers", () => {
    expect(capitalize("honey1")).toBe("Honey1");
  });
});
