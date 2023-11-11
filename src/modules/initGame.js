import gameLoop from "./game.js";
const initGame = () => {
  document.getElementById("enter__game").addEventListener("click" , (e) => {
    const inputName = document.getElementById("user__name");
    const span = document.querySelector("span");
    if (!inputName.value){  
      span.classList.add("empty__name");
      setTimeout(() => span.classList.remove("empty__name"), 1000);
    } else {
      document.querySelector(".start__window").classList.add("is-close");
      sessionStorage.setItem("name", inputName.value);
      gameLoop();
    };
  });
};

export {initGame};