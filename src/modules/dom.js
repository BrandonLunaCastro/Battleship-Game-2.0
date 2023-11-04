function dom() {
  const createBoard = (reference, player) => {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < 100; i++) {
      const div = document.createElement("div");
      div.classList.add(player);
      div.setAttribute("coordinate", i);
      fragment.appendChild(div);
    }
    reference.appendChild(fragment);
  };

  return {createBoard};
}

export { dom };
