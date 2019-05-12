import { Note } from "../note";

export class Neck {
    public readonly guitareStrings: Note[];
    public readonly showFrets: Boolean;
    public readonly showMarkers: Boolean;
    public readonly intervalLength: Number;

    constructor(guitareStrings: Note[], showFrets: Boolean, showMarkers: Boolean, intervalLength: Number) {
        this.guitareStrings = guitareStrings;
        this.showFrets = showFrets;
        this.showMarkers = showMarkers;
        this.intervalLength = intervalLength;
    }
}
