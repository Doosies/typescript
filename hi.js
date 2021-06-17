const stdin = (process.platform ==='linux'
? require('fs').readFileSync('dev/stdin').toString()
: `
2
`// 정답: 75
).trim().split('\n');
const input = (()=>{
    let line = 0;
    return ()=>stdin[line++].split(" ");
})();

const n = Number(input());
const arr = [0,1,1,1,1,1,1,1,1,1];
for( let i=1; i<n; i++){
    const tmp = [...arr];
    for(let j=0; j<10; j++){
        const left = tmp[j-1] ? tmp[j-1] : 0;
        const right = tmp[j+1] ? tmp[j+1] : 0;
        arr[j] = (left+right)%1000000000;
    }
}
const result = arr.reduce((sum, curr)=>sum+=curr);
console.log(result%1000000000);