const stdin = (process.platform ==='linux'
? require('fs').readFileSync('dev/stdin').toString()
: `
100000
`
).trim().split('\n');
const input = (()=>{
    let line = 0;
    return ()=>stdin[line++].split(" ").map(Number);
})();

const n = Number(input());
let arr = [0,1,2];
for(i=3; i<n+1; i++)
    arr[i] = (arr[i-1] + arr[i-2])%15746;
console.log(arr[n]);