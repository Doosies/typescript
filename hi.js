const stdin = (process.platform ==='linux'
? require('fs').readFileSync('dev/stdin').toString()
: `
2
0
1 1
`// 정답: 3058
).trim().split('\n');
const input = (()=>{
    let line = 0;
    return ()=>stdin[line++].split(" ").map(Number);
})();

const n = input();
const trg = Array.from({length:n}, ()=> input());
for(let i = n-2; i >= 0; i--){
    for(let j = 0; j < trg[i].length; j++){
        const l = trg[i+1][j] + trg[i][j];
        const r = trg[i+1][j+1] + trg[i][j];
        trg[i][j] = Math.max(l,r);
    }
}
console.log(parseInt(trg[0]));