const stdin = (process.platform ==='linux'
? require('fs').readFileSync('dev/stdin').toString()
: `
10
711 572 325
209 187 673
512 930 898
759 85 260
136 226 532
201 3 959
132 607 359
601 775 848
462 776 920
74 807 671
`// 정답: 3058
).trim().split('\n');
const input = (()=>{
    let line = 0;
    return ()=>stdin[line++].split(" ").map(Number);
})();

let n = Number(input());
let color = Array.from({length:n}, ()=> input());

for(let i=1; i<color.length; i++){
    color[i][0] = Math.min(color[i-1][1], color[i-1][2]) + color[i][0];
    color[i][1] = Math.min(color[i-1][0], color[i-1][2]) + color[i][1];
    color[i][2] = Math.min(color[i-1][0], color[i-1][1]) + color[i][2];
}
console.log(Math.min(...color[n-1]));