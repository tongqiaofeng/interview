const add = (a: number, b: number, c?: number): number => {
  if (c) {
    return a + b + c;
  } else {
    return a + b;
  }
};

interface ISum {
  (d: number, e: number, f?: number): number;
}

// :后都为类型声明
// let two:(a:number,b:number,c?:number) => number = add
let two: ISum = add;

console.log(two(1, 2));
