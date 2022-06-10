const generateViewList = jest.requireMock("controller");
const dummyItems = [
  {name: "Ali", phone: "0000"},
  {name: "Ahmed", phone: "1111"},
  {name: "mohammed", phone: "22222"},
];

describe("generateViewList ", () => {


  test("should return html list element", () => {
    const expected =
        "<div><ol><li><p>Ali - 0000</p></li><li><p>Ahmed - 1111</p></li><li><p>mohammed - 22222</p></li></ol></div>";
    let output = generateViewList(dummyItems, ["name", "phone"])
    expect(output).toBe(expected);
  });
});
