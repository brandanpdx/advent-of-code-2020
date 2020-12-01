// The Elves in accounting just need you to fix your expense report (your puzzle input); apparently, something isn't quite adding up.
// Specifically, they need you to find the two entries that sum to 2020 and then multiply those two numbers together.

// For example, suppose your expense report contained the following:

// 1721
// 979
// 366
// 299
// 675
// 1456

// In this list, the two entries that sum to 2020 are 1721 and 299. Multiplying them together produces 1721 * 299 = 514579, so the correct answer is 514579.
// Of course, your expense report is much larger. Find the two entries that sum to 2020; what do you get if you multiply them together?

const fs = require("fs");

const input = fs.readFileSync("expenseReport.txt", { encoding: "utf-8" });

const arr = input
  .split("\n")
  .filter((x) => x)
  .map((x) => parseInt(x));

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] == 2020) {
      console.log(arr[i] * arr[j]);
    }
  }
}

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    for (let k = j + 1; k < arr.length; k++) {
      if (arr[i] + arr[j] + arr[k] == 2020) {
        console.log(arr[i] * arr[j] * arr[k]);
      }
    }
  }
}
