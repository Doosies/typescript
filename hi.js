const stdin = (process.platform ==='linux'
? require('fs').readFileSync('dev/stdin').toString()
: `
1 1 1
2 2 2
10 4 6
50 50 50
-1 7 18
15 15 15
-1 -1 -1
`
).trim().split('\n');

const input = (()=>{
    let line = 0;
    return ()=>stdin[line++].split(" ").map(Number);
})();

let dp = {};
const w = function(a, b, c){
    if( !dp[`${a},${b},${c}`]){
        if(a <= 0 || b <= 0 || c <= 0){
            dp[`${a},${b},${c}`] = 1;
        }else if(a > 20 || b > 20 || c > 20){
            dp[`${a},${b},${c}`] =  w(20,20,20);
        }else if(a < b && b < c){
            dp[`${a},${b},${c}`] = w(a, b, c-1) + w(a, b-1, c-1) - w(a, b-1, c);
        }else{
            dp[`${a},${b},${c}`] = w(a-1, b, c) + w(a-1, b-1, c) + w(a-1, b, c-1) - w(a-1, b-1, c-1);
        }
    }
    return dp[`${a},${b},${c}`];
};

while(true){
    let [a,b,c] = input();
    if(a == -1 && b == -1 && c == -1) return; 
    const result = w(a,b,c);
    console.log(`w(${a}, ${b}, ${c}) = ${result}`);
}