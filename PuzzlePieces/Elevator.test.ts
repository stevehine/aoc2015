import { Elevator } from "./Elevator";

describe("Some tests about elevators", () => {

    test("All matching braces should be zero", () => {
        let elevator = new Elevator("(())");
        expect(elevator.Floor).toBe(0);
        elevator = new Elevator("()()");
        expect(elevator.Floor).toBe(0);
    });

    test("These are for floor 3", () => {
        let elevator = new Elevator("(((");
        expect(elevator.Floor).toBe(3);
        elevator = new Elevator("(()(()(");
        expect(elevator.Floor).toBe(3);
        elevator = new Elevator("))(((((");
        expect(elevator.Floor).toBe(3);
    });

    test("Floor -1", () => {
        let elevator = new Elevator("())");
        expect(elevator.Floor).toBe(-1);
        elevator = new Elevator("))(");
        expect(elevator.Floor).toBe(-1);
    });

    test("Floor -3", () => {
        let elevator = new Elevator(")))");
        expect(elevator.Floor).toBe(-3);
        elevator = new Elevator(")())())");
        expect(elevator.Floor).toBe(-3);
    });
});