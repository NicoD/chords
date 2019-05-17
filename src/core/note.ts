export class Note {
    constructor (public name: string, public octave: Number) {
    }

    public get SPNname(): string {
        return this.name + this.octave;
    }
}