import { NiceString } from "./NiceString";

describe("Some tests about nice strings", () => {
    test.each(["ugknbfddgicrmopn", "aaa"])("Are all nice", (text) => {
        expect(new NiceString(text).IsNice).toBe(true);
    });
    test.each(["jchzalrnumimnmhp", "haegwjzuvuyypxyu", "dvszwmarrgswjxmb"])("Are all naughty", (text) => {
        expect(new NiceString(text).IsNice).toBe(false);
    });

    test.each(["qjhvhtzxzqqjkmpb", "xxyxx"])("Are all _really_ nice", (text) => {
        expect(new NiceString(text).IsReallyNice).toBe(true);
    });
    test.each(["uurcxstgmygtbstg", "ieodomkazucvgmuy"])("Are all _really_ naughty", (text) => {
        expect(new NiceString(text).IsReallyNice).toBe(false);
    });
});