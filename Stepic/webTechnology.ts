class Calculator {
    x: number;
    constructor(x: number) {
        this.x = x;
    }
    add(y: number): number {
        return y + this.x;
    }
}
