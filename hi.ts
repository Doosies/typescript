// // // readline 사용
// // const stdin: string[][] = [];
// // const rl = require('readline').createInterface({
// //   input: process.stdin,
// //   output: process.stdout
// // });

// // rl.on('line', function (line: string[]): void {
// //     stdin.push(line)
// // }).on('close', function (): never {
// //     solution();
// //     process.exit();
// // });

// // // fs 사용
const stdin: string = (process.platform ==='linux'
? require('fs').readFileSync(0, 'utf-8')
: `
3
2
`).trim().split('\n');
const input = (()=>{
    let line = 0;
    return ()=>stdin[line++].split(" ").map((v:string) => +v);
})();

const N: number = +input();
const arr: number[] = input();
arr.sort((a: number, b: number) => a-b);

const result: number = arr[0] * arr[arr.length-1];
console.log(result);


// if (N === 1)
//     console.log(arr[0]**2);

// if (N % 2 === 0) {
// }
// else{
//     const pos: number = Math.floor(arr.length/2);
//     console.log(arr[pos]**2, pos);
// }