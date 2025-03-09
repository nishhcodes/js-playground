function createUser(name) {
  const discordName = "@" + name;

  let reputation = 0;
  const getReputation = () => reputation;
  const giveReputation = () => reputation++;

  return { name, discordName, getReputation, giveReputation };
}

const manish = createUser("Manish");
manish.giveReputation();
manish.giveReputation();

console.log({
  discordName: manish.discordName,
  reputation: manish.getReputation(),
});
