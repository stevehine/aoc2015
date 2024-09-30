
export class Elevator {
    private _floor: number;
    private _enteredBasement: number = 0;
    public get Floor() { return this._floor; };
    public get EnteredBasement() { return this._enteredBasement };
    constructor(input: string) {
        this._floor = input.split('').map(action => action === '(' ? 1 : -1 as number).reduce((p, c, i) => {
            if (p == -1 && this._enteredBasement == 0) {
                this._enteredBasement = i;
            }
            return p + c
        }, 0);
    }
}