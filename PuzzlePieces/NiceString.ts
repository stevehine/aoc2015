export class NiceString {
    private _isNice: boolean;
    private _isReallyNice: boolean;

    constructor(theString: string) {
        const vowelMatches = /([aeiou])/g;

        if (theString.match(vowelMatches)?.length! >= 3
            && theString.split('').reduce((p, c) => { return { v: c, m: p.v === c ? p.m || true : p.m } }, { v: '', m: false }).m) {

            this._isNice = ["ab", "cd", "pq", "xy"].map(x => theString.includes(x)).filter(x => x).length === 0;

        } else {
            this._isNice = false;
        }

        const pairs: Map<string, number[]> = new Map();
        const singles: Map<string, number[]> = new Map();

        for (let i = 0; i < theString.length; i++) {
            if (i < theString.length - 1) {
                const pair = theString.slice(i, i + 2);
                pairs.set(pair, pairs.has(pair) ? [...pairs.get(pair) as number[], i] : [i]);
            }
            const single = theString.slice(i, i + 1);
            singles.set(single, singles.has(single) ? [...singles.get(single) as number[], i] : [i]);
        }

        this._isReallyNice = this.determineIfItsReallyNice(pairs, singles);

    }

    private determineIfItsReallyNice(pairs: Map<string, number[]>, singles: Map<string, number[]>) {
        let couldBeReallyNice = false;
        for (const key of pairs.keys()) {
            const positions = pairs.get(key)!;
            if (positions.length > 0) {
                for (const position of positions) {
                    positions.forEach(p => { if (p > position + 1) couldBeReallyNice = true; });
                }
            }
        }

        let isActuallyReallyNice = false; 
        if (couldBeReallyNice) {
            for (const key of singles.keys()) {
                const positions = singles.get(key)!;
                if (positions.length > 0) {
                    for (const position of positions) {
                        positions.forEach(p => { if (p == position + 2) isActuallyReallyNice = true; });
                    }
                }
            }
        }
        return couldBeReallyNice && isActuallyReallyNice;
    }

    public get IsNice() { return this._isNice; }
    public get IsReallyNice() { return this._isReallyNice; }
}