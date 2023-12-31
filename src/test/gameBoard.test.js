
import { gameBoard } from "../modules/gameBoard";

const newBoard = gameBoard();

describe("", () => {
  it("", () => {
    expect(newBoard.placeShip([20, 21, 22], "submarine")).toContain(
      "submarine"
    );
  });
  it("", () => {
    expect(newBoard.verifySpace([10, 11, 12])).toBe(true);
  });

  it("", () => {
    expect(newBoard.verifySpace([11, 21, 31])).toBe(false);
  });

  it("", () => {
    expect(newBoard.placeShip([11, 21, 31], "boat")).toBe("already ship here");
  });

  it("", () => {
    expect(newBoard.placeShip([0, 10], "boat")).toContain("boat");
  });

  it("", () => {
    expect(newBoard.receiveAttack(0)).toBe(true);
  });

  it("", () => {
    expect(newBoard.receiveAttack(10)).toBe(true);
  });

  it("", () => {
    expect(newBoard.receiveAttack(20)).toBe(true);
  });
  it("", () => {
    expect(newBoard.receiveAttack(21)).toBe(true);
  });
  it("", () => {
    expect(newBoard.receiveAttack(22)).toBe(true);
  });

  it("place a third ship", () => {
    expect(newBoard.placeShip([80, 81, 82, 83], "battleship")).toContain(
      "battleship"
    );
  });

  it("", () => {
    expect(newBoard.allSunk()).toBe(false);
  });
});

describe("", () => {
  it("attack double ", () => {
    expect(newBoard.receiveAttack(80)).toBe(true);
  });
  it("attack double 2", () => {
    expect(newBoard.receiveAttack(80)).toBe("already attacked");
  });

  it("attack double failed", () => {
    expect(newBoard.receiveAttack(85)).toBe(false);
  });
  it("attack double failed 2", () => {
    expect(newBoard.receiveAttack(85)).toBe("already attacked");
  });
});