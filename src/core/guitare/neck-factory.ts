import { Neck } from "./neck";
import { Note } from "../note";

export const createStandard = (): Neck => {
    return new Neck(
        [
            new Note('E'),
            new Note('A'),
            new Note('D'),
            new Note('G'),
            new Note('B'),
            new Note('E'),           
        ],
        true,
        true,
        24
    );
};