// .d.ts文件内没有任何实际实现代码，只有类型声明
// 如：interface、function或者class等类型

// declare function axios(url: string): string;

interface IAxios {
  get: (url: string) => string;
  post: (url: string, data: any) => string;
}
declare const axios: IAxios;
