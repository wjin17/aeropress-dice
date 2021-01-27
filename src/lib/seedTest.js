const { customAlphabet } = require("nanoid");
const alphanumeric = require("nanoid-dictionary/alphanumeric");
const seedrandom = require("seedrandom");

for (let i = 0; i < 100; i++) {
  const nanoid = customAlphabet(alphanumeric, 8);

  const seed = nanoid();

  const anum = seedrandom(seed)();
  console.log(anum);
  /* const anum = pnum.toString().split("");
  console.log(anum[2], parseInt(anum[2])); */
  /* console.log(i);
  if (anum.length < 10) {
    console.log("invalid number produced", i, seed, pnum, anum);
  } */
}
