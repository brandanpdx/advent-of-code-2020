const fs = require("fs");
const passwords = fs.readFileSync("passwords.txt", { encoding: "utf-8" });

const passwordArray = passwords.split("\n").map((x) => {
  const parts = x.split(" ");
  return {
    minmax: parts[0].split("-").map((num) => parseInt(num)),
    letter: parts[1].split(":")[0],
    pass: parts[2].split(""),
  };
});

// Part 1
const checkIfValid = () => {
  let validPasswords = 0;

  for (const x of passwordArray) {
    let letterCount = 0;
    for (const y of x.pass) {
      letterCount += y === x.letter;
    }
    if (letterCount >= x.minmax[0] && letterCount <= x.minmax[1]) {
      validPasswords++;
    }
  }
  console.log(validPasswords);
};
checkIfValid();

// Part 2
const checkPositions = () => {
  let validPositions = 0;

  for (const x of passwordArray) {
    const p1 = x.pass[x.minmax[0] - 1];
    const p2 = x.pass[x.minmax[1] - 1];

    validPositions += (p1 === x.letter) ^ (p2 === x.letter);
  }
  console.log(validPositions);
};
checkPositions();
