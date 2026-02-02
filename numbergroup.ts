import { ISortable } from "./ISortable";

export class NumberGroup implements ISortable {
    data: number[];

    constructor(data: number[]) {
        this.data = data;
    }

    get length(): number {
        return this.data.length;
    }

    compare(leftPos: number, rightPos: number) {
        return this.data[leftPos] > this.data[rightPos];
    };

    swap(leftPos: number, rightPos: number) {
        let tempLeft = this.data[leftPos]
        this.data[leftPos] = this.data[rightPos];
        this.data[rightPos] = tempLeft;
    }
}