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
24 18
`).trim().split('\n');
const input = (()=>{
    let line = 0;
    return ()=>stdin[line++].split(" ").map((v:string) => +v);
})();

function GCD(a: number, b: number): number {
    return b ? GCD(b, a%b) : a;
}

// const N: number = +input();
const [l,r]: number[] = input();
const gcd: number = GCD(l,r);

console.log(gcd);
console.log(gcd * (l/gcd) * (r/gcd));