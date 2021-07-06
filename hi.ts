const stdin: string = (process.platform ==='linux'
? require('fs').readFileSync('dev/stdin').toString()
: `
15
10 -4 3 1 5 6 -35 35 1 -5 -6 12 -20 -30 500

`).trim().split('\n');
const input: () => string[] = (()=>{
    let line = 0;
    return () => stdin[line++].toString().split(" ");
})();

// const t = input();
const n: number = Number(input());
const arr: number[] = input().map((v: string) => +v);
const dp: number [] = [arr[0]];

for (let i=1; i<n; i++) {
    dp[i] = Math.max(arr[i], dp[i-1] + arr[i]);
}
console.log(Math.max(...dp));