import { MD5 } from "crypto-js";

export class MD5IsAlive {
    private _nonce = 0;
    constructor(input: string) {
        let nonce = 0;
        do {
            if (MD5(input + nonce).toString().startsWith('000000'))
                this._nonce = nonce;
            nonce++;
        } while (this._nonce == 0)
    }
    public get Nonce() { return this._nonce; }
}