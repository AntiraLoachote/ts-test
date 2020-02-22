import { fizzBuzz } from "./index";

describe("fizzBuzz()", () => {
  it("input 3 should return fizz", () => {
    expect(fizzBuzz(3)).toEqual("fizz");
  });
  it("input 10 should return buzz", () => {
    expect(fizzBuzz(10)).toEqual("buzz");
  });
  it("input 15 should return fizzBuzz", () => {
    expect(fizzBuzz(15)).toEqual("fizzBuzz");
  });
  it("input 6 should return fizz", () => {
    expect(fizzBuzz(6)).toEqual("fizz");
  });
  it("input 50 should return buzz", () => {
    expect(fizzBuzz(50)).toEqual("buzz");
  });
  it("input 1 should return 1", () => {
    expect(fizzBuzz(1)).toEqual(1);
  });
  it("input 2 should return 2", () => {
    expect(fizzBuzz(2)).toEqual(2);
  });
  it("input 30 should return fizzBuzz", () => {
    expect(fizzBuzz(30)).toEqual("fizzBuzz");
  });
});
