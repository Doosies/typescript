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
let sumList = [];

const solv = (indexes, depth) =>{
    if(depth == n){
        let sum = indexes.reduce((acc,curr,i) => {
            return acc += color[i][curr];
        }, 0);
        sumList.push(sum);
        return;
    }else{
        for(let i=0; i<3; i++){
            if( depth == 0){
                solv([...indexes, i], depth+1);
            }else if(indexes[depth-1] != i){
                solv([...indexes, i], depth+1);
            }
        }
    }
};

solv([],0)
console.log(Math.min(...sumList));
