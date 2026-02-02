import { ISortable } from "./ISortable";

export class CharacterGroup implements ISortable {
    data: string;
    
    constructor(data: string) {
        this.data = data
    }

    get length(): number {
        return this.data.length;
    }

    swap(leftPos: number, rightPos: number) {
        const charactersAsArray = this.data.split("")
        
        const tempLeft = charactersAsArray[leftPos]
        charactersAsArray[leftPos] = charactersAsArray[rightPos]
        charactersAsArray[rightPos] = tempLeft;

        this.data = charactersAsArray.join("")
    }

    compare(leftPos: number, rightPos: number) {
        return this.data[leftPos].toLowerCase() > this.data[rightPos].toLowerCase();
    }
}