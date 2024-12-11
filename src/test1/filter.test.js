import filter from "../filter";

describe("filter", () => {
  test("properly filters array based on predicate", () => {
    const products = [
      { product: "Honey", active: true },
      { product: "Jam", active: false },
    ];
    expect(filter(products, ({ active }) => active)).toEqual([products[0]]);
  });

  test("properly filters array based on predicate with multiple conditions", () => {
    const products = [
      { product: "Honey", active: true, type: "organic" },
      { product: "Jam", active: false, type: "non-organic" },
    ];
    expect(
      filter(products, ({ active, type }) => active && type === "organic")
    ).toEqual([products[0]]);
  });
});
