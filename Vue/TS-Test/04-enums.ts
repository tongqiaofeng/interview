// 枚举
// enum Direction {
//   Up=6,
//   Down,
//   Left,
//   Right,
// }

// console.log(Direction.Up); // 6
// console.log(Direction[6]); // Up

const enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

const val = "UP";
if (val === Direction.Up) {
  console.log("go up!");
}
