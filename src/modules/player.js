function Player(name) {
  const randomAttack = (max, min) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const attackSended = [];

  const attackAI = () => {
    let attempt = true;
    while (attempt) {
      const attack = randomAttack(99, 0);
      if (!attackSended.includes(attack)) {
        attackSended.push(attack);
        attempt = false;
        return attack;
      }
    }
  };

  return { name, attackAI };
}

export { Player };
