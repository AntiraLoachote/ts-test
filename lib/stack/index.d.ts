export default class Stack<T> {
    numbers: Array<T>;
    push(number: T): void;
    list(): T[];
    pop(): T;
    peek(): T;
}
