import { SphericalHouses } from "./SphericalHouses";

describe("Some tests about spherical houses in a vaccuum", () => {
    test("A single move equates to two houses", () => {
        const sphericals = new SphericalHouses(">");
        expect(sphericals.DistinctHouses).toBe(2);
        expect(sphericals.DistinctHousesWithRobotAssistance).toBe(2);
    });
    test("A two moves equates to three houses for robo sants", () => {
        const sphericals = new SphericalHouses("^v");
        expect(sphericals.DistinctHouses).toBe(2);
        expect(sphericals.DistinctHousesWithRobotAssistance).toBe(3);
    });
    test("A square equates to four houses", () => {
        const sphericals = new SphericalHouses("^>v<");
        expect(sphericals.DistinctHouses).toBe(4);
        expect(sphericals.DistinctHousesWithRobotAssistance).toBe(3);
    });
    test("up and down is only over 2 houses", () => {
        const sphericals = new SphericalHouses("^v^v^v^v^v");
        expect(sphericals.DistinctHouses).toBe(2);
        expect(sphericals.DistinctHousesWithRobotAssistance).toBe(11);
    });
});