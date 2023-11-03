const ship = require("../modules/ship.js");

const newShip = ship(3);

describe("", () => {
  it("", () => {
    expect(newShip.length).toBe(3);
  });
  it("", () => {
    expect(newShip.hit()).toBe(1); 
  });
  it("", () => {
    expect(newShip.hit()).toBe(2); 
  });
  it("", () => {
    expect(newShip.hit()).toBe(3); 
  });
  it("", () => {
    expect(newShip.isSunk()).toBe(true); 
  });
});