import Stack from ".";
describe("Stack", () => {
  test("can init Stack", () => {
    new Stack<number>();
  });
  test("can push number", () => {
    const stack = new Stack();
    stack.push(1);

    const actual = stack.list();

    const expected = [1];
    expect(actual).toEqual(expected);
  });

  test("can push 2 should add 2", () => {
    const stack = new Stack();
    stack.push(2);

    const actual = stack.list();

    const expected = [2];
    expect(actual).toEqual(expected);
  });

  test("can pop 1 should 1", () => {
    const stack = new Stack();
    stack.push(1);

    const actual = stack.pop();

    const expected = 1;
    expect(actual).toEqual(expected);
  });

  test("can pop 2 should 2 when stack have 2 lists", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);

    const actual = stack.pop();

    const expected = 2;
    expect(actual).toEqual(expected);
    expect(stack.list()).toEqual([1]);
  });

  test("present lastest value", () => {
    const stack = new Stack();
    stack.push(7);
    stack.push(1);

    const actual = stack.peek();

    const expected = 1;
    expect(actual).toEqual(expected);
  });

  test("can push string to stack", () => {
    const stack = new Stack<string>();
    stack.push("wow");

    expect(stack.list()).toEqual(["wow"]);
  });

  test("can pop string to stack", () => {
    const stack = new Stack<string>();
    stack.push("wip wup");
    stack.push("wowwow");

    expect(stack.pop()).toEqual("wowwow");
  });
});
