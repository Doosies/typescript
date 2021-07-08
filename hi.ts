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
8 16
32 4
17 5
0 0
`).trim().split('\n');
const input = (()=>{
    let line = 0;
    return ()=>stdin[line++].split(" ").map((v:string) => +v);
})();

// const N: number = +input();
// const arr: number[] = Array.from({length:N}, () => +input());

while(true) {
    const [l,r]: number[] = input();
    let str: string = '';

    if (l + r === 0) break;
    if (r % l === 0) str = "factor";
    else if (l % r === 0) str = "multiple";
    else str = "neither";

    console.log(str);
}

