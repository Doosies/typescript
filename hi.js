const { listenerCount } = require('events');

const stdin = (process.platform ==='linux'
? require('fs').readFileSync('dev/stdin').toString()
: `
abcabcabcabcdededededede

`// 정답: 75
).trim().split('\n');
const input = (()=>{
    let line = 0;
    return ()=>stdin[line++].split(" ");
})();

const solution = (s) =>{
    s = s.split("");
    let resultLen = Number.POSITIVE_INFINITY;
    for(let len=1; len < (s.length/2)+1; len++){
        let before = '';
        let nowLenResult = '';
        for( let i=0; i<s.length; i++){
            const nowChar = s.slice(i,i+len);
            let cnt=1;
            if( nowChar !== before){
                for( let j= i+len; j<s.length; j+=len){
                    const nextChar = s.slice(j,j+len);
                    if( nowChar.join("") === nextChar.join(""))
                        cnt ++;
                    else
                        break;
                }
            }
            before = nowChar;
            const add = s.slice(i, i+len).join("");
            i += (cnt * len ) - 1;
            if( cnt > 1) nowLenResult += `${add}${cnt}`;
            else nowLenResult += `${add}`;
        }
        resultLen = Math.min(nowLenResult.length, resultLen);
    }
    return resultLen;
}
let str = String(input()).split('');
const s = solution('aabbaccc');
console.log(s);