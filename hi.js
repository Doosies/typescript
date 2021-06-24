const stdin = (process.platform ==='linux'
? require('fs').readFileSync('dev/stdin').toString()
: `
6
10 30 10 20 20 10
`
).trim().split('\n');
const input = (()=>{
    let line = 0;
    return ()=>stdin[line++].split(" ");
})();


const n = Number(input());
const arr = input().map(v => Number(v));
const dp = [1];

for(let i=1, l=arr.length; i<l; i++){
    dp[i] = 1;
    for( let j=i; j>=0; j--){
        if( arr[j] > arr[i] && dp[j] >= dp[i] ){
            dp[i] = dp[j] +1;
        }
    }
}

console.log(dp);
console.log(dp[n-1]);