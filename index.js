function superbowlWin(arr) {
  const win = arr.find(obj => obj.result === "W");
  return win ? win.year : undefined;
}
const games = [
  { year: 2022, result: "L" },
  { year: 2021, result: "W" },
  { year: 2020, result: "L" },
  { year: 2019, result: "W" },
];

console.log(superbowlWin(games)); // Output: 2021

