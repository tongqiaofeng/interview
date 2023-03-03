// type alias 类型别名
// let sum:(x:number,y:number) => number
// const result = sum(1,2)

type PlusType = (x: number, y: number) => number;
const sum2: PlusType = function (x, y) {
  return x + y;
};
const result2 = sum2(2, 3);

// type sayType = (person: string, content: string) => boolean;
// var say: sayType = function (person, content) {
//     if (person === '' || content === '') return false;
//     console.log(`${person}say:${content}`);
//     return true;
// };

// 字面量 给const常量提供一定的写法
// 分为：字符串字面量类型、数字字面量类型、布尔字面量类型，对应的字符串字面量、数字字面量、布尔字面量分别拥有与其值一样的字面量类型
const str6: "name" = "name";
const number: 1 = 1;
const boo: false = false;

type Direc = "Up" | "Down" | "Left" | "Right";
let toWhere: Direc = "Right";

interface IName {
  name: string;
}
type IPerson6 = IName & { age: number };
let person: IPerson6 = { name: "tong", age: 15 };
