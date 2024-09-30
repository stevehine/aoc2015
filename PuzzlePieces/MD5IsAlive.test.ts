import { MD5IsAlive } from "./MD5IsAlive"

describe("Some tests about MD5", () => {
    test("The key abcdef should generate a nonce of 609043", () => {
        const md5IsAlive = new MD5IsAlive('abcdef');
        expect(md5IsAlive.Nonce).toBe(609043);
    });
    test("The key pqrstuv should generate a nonce of 1048970", () => {
        const md5IsAlive = new MD5IsAlive('abcdef');
        expect(md5IsAlive.Nonce).toBe(609043);
    });
})