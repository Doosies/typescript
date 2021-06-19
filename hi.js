const stdin = (process.platform ==='linux'
? require('fs').readFileSync('dev/stdin').toString()
: `
13
1 5 10 10 5 3 13 18 15 16 17
`
).trim().split('\n');
const input = (()=>{
    let line = 0;
    return ()=>stdin[line++].split(" ");
})();


const n = Number(input());
const arr = input().map(v => Number(v));
const dp = [];

const insertSort = (dpList) =>{
    const len = dp.length;
    const [_, cnt] = dpList;
    for(let i=0; i<len; i++){
        if( dp[i][1] <= cnt){
            dp.splice(i,0,dpList);
            return;
        }
    }
    dp.push(dpList);
}
const findDP = (num) =>{
    const len = dp.length;
    for(let i=0; i<len; i++){
        if( dp[i][0] < num){
            return [num, dp[i][1]+1];
        }
    }
    return [num, 1];
}

for( let i=0; i<n; i++){
    let tmpDp = findDP(arr[i]);
    insertSort(tmpDp);
}
console.log(dp[0][1]);