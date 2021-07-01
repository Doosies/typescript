type inputType = () => number[];

const stdin: string = (process.platform ==='linux'
? require('fs').readFileSync('dev/stdin').toString()
: `
10
1 6
2 8
3 2
4 9
5 5
6 10
7 4
8 1
9 7
10 3
`).trim().split('\n');
const input: inputType = (()=>{
    let line = 0;
    return () => stdin[line++].split(" ").map((v:string) => Number(v));
})();

function getMinus(arr: string[]): number {
    return Number(arr[0]) - Number(arr[1]);
}

const n: number = Number(input());
const arr: number[][] = Array.from({length:n}, ()=> input());
const dp: number[] = [1];

arr.sort((a: number[], b: number[]): number => a[0] - b[0]);

for (let i=1; i<n; i++) {
    dp[i] = 1;
    for (let j=0; j<i; j++) {
        if (arr[i][1] < arr[j][1] && dp[i] <= dp[j]) {
            dp[i] = dp[j] + 1;
        }
    }
}
console.log(arr);
console.log(dp);
console.log(Math.max(...dp));