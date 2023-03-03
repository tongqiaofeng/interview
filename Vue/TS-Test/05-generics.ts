// 泛型
// 泛型指的是在定义函数/接口/类型时，不预先指定具体的类型，而是在使用的时候再指定类型限制的一种特性
function echo<T>(arg: T): T {
  return arg;
}

const res: boolean = echo(false);
const res2: number = echo(122);

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

const res3 = swap(["string", 155]);
console.log(res3);

// 约束泛型
// 约束函数 echoWithLength 类型必须为包含IWithLength类型的函数
interface IWithLength {
  length: number;
}
function echoWithLength<T extends IWithLength>(arg: T): T {
  console.log(arg.length);

  return arg;
}
const strs = echoWithLength("string");
const obj = echoWithLength({ name: "123", length: 3 });
const arr = echoWithLength([5, 6, 7]);

// 约束 类
class Queue<T> {
  private data: any = [];

  push(item: T) {
    return this.data.push(item);
  }

  pop(): T {
    console.log(this.data);

    // 把数组的第一个元素从其中删除，并返回第一个元素的值
    return this.data.shift();
  }
}

const queu = new Queue<number>();
queu.push(1);
console.log(queu.pop().toFixed());
// queu.push('str')
// console.log(queu.pop().toFixed());

// 约束  接口
interface IKeyPair<T, U> {
  key: T;
  value: U;
}
let kp1: IKeyPair<string, number> = { key: "sre", value: 5 };
let kp2: IKeyPair<boolean, number> = { key: false, value: 5 };

let arrs: number[] = [1, 2, 3];
let arrs2: Array<number> = [4, 5, 6];
