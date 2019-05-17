import { Note } from "../note";

export class Tuning {
    constructor(public guitareStrings: Note[]) {}
}

export const createStandard = (): Tuning => {
    return new Tuning(
        [
            new Note('E', 2),
            new Note('A', 2),
            new Note('D', 3),
            new Note('G', 3),
            new Note('B', 3),
            new Note('E', 4),           
        ]
    );
};