const stdin = (process.platform ==='linux'
? require('fs').readFileSync('dev/stdin').toString()
: `
3
1
5
7
`// 정답: 75
).trim().split('\n');
const input = (()=>{
    let line = 0;
    return ()=>stdin[line++].split(" ").map(Number);
})();

const n = Number(input());
const arr = Array.from({length:n}, ()=> Number(input()));
let dp = [];
dp[0] = arr[0];
dp[1] = Math.max(arr[0]+arr[1], arr[1]);
dp[2] = Math.max(arr[0]+arr[2], arr[1]+arr[2]);

for( let i=3; i<n; i++){
    const a = dp[i-3] + arr[i-1] + arr[i];
    const b = dp[i-2] + arr[i];
    dp[i] = Math.max(a,b);
}
console.log(dp[n-1]);