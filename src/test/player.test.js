const Player = require("../modules/player.js");

const newPlayer = Player("AI");

describe("" , () => {
  it("attack random of AI", () => {
    expect(newPlayer.attackAI()).toBe(20);    
  });
  it("attack random of AI 2", () => {
    expect(newPlayer.attackAI()).toBe(50);    
  }); 
});