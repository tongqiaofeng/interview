// type inference 类型推断
let str = "str";

// union types 联合类型
let numberOrString: number | string;

function getLength(input: number | string): number {
  // 类型断言  用来手动指定一个值的类型
  const str = input as string;
  if (str.length) {
    return str.length;
  } else {
    const num = input as number;
    return num.toString().length;
  }
}

//  type guard 类型守护
/**
类型守卫定义：在语句的块级作用域【if语句内或三目运算符表达式内】缩小变量的一种类型推断行为

类型守卫产生时机：TS条件语句中遇到下列条件关键字时，会在语句中的会计作用域内缩小变量的类型，这种类型推断的行为称作类型守卫（Tyoe Guard），类型守卫可以帮助我们在块级作用域缩小更为需要的精确的变量类型，从而减少不必要的类型断言。

类型判断：typeof
属性或者方法或者函数判断：in
实例判断：instanceog
字面量相等判判断：==，===，!=,!==
**/
function getLength2(input: number | string): number {
  if (typeof input === "string") {
    return input.length;
  } else {
    return input.toString().length;
  }
}
