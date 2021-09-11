const stdin: string[] = (process.platform ==='linux'
? require('fs').readFileSync(0, 'utf-8')
: `
3
3
1
2
`).trim().split('\n');
// const input = (()=>{
//     let line = 0;
//     return ()=> stdin[line++];//.split("").map( v => +v);
// })();

const tmp: number[] = [];
let rst: string = '';
let now = 0;
let isNo = false;

for (let i=1; i<= +stdin[0]; i++) {
    const num = +stdin[i];
    if (tmp[tmp.length-1] > num) {
        isNo = true;
        break;
    }

    while (tmp[tmp.length-1] < num || tmp.length === 0) {
        tmp.push(++now);
        rst += '+\n';
    }
    tmp.pop();
    rst += ('-\n');
}

if (isNo) console.log('NO');
else console.log(rst);