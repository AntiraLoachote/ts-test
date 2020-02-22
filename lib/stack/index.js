"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Stack {
    constructor() {
        this.numbers = [];
    }
    push(number) {
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
exports.default = Stack;
