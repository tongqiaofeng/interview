interface IPerson {
  readonly id: number;
  name: string;
  age: number;
}

let tong: IPerson = {
  id: 1,
  name: "tong",
  age: 18,
};

// tong.id = 8 // id为只读，不可修改
tong.name = "zhang";
