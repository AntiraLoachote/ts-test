export default class Stack<T> {
  numbers: Array<T> = [];
  push(number: T) {
    this.numbers.push(number);
  }
  list() {
    return this.numbers;
  }
  pop() {
    return this.numbers.splice(this.numbers.length - 1, 1)[0];
  }
  peek() {
    return this.numbers[this.numbers.length - 1];
  }
}
