const stdin = (process.platform ==='linux'
? require('fs').readFileSync('dev/stdin').toString()
: `
3
0
1
3
10
20
30
40
`
).trim().split('\n');
const input = (()=>{
    let line = 0;
    return ()=> stdin[line++];
})();

// const T = +input[0];
const nums = stdin.slice(1).map(Number);
let dp = Array.from({length:41}, ()=> Array(2).fill(0));
dp[0] = [1,0];
dp[1] = [0,1];

function fibo(n){
    dp[n][0] = dp[n-1][0]+dp[n-2][0];
    dp[n][1] = dp[n-1][1]+dp[n-2][1];
}
for( let i = 2; i < 41; i++){
    fibo(i);
}

for(let num of nums ){
    console.log(dp[num][0], dp[num][1]);
}