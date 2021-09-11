const stdin = (process.platform === 'linux'
    ? require('fs').readFileSync(0, 'utf-8')
    : `
2
1
2
`).trim().split('\n');
// const input = (()=>{
//     let line = 0;
//     return ()=> stdin[line++];//.split("").map( v => +v);
// })();
const tmp = [1];
const rst = [];
let now = 1;
for (let i = 1; i <= +stdin[0]; i++) {
    const num = +stdin[i];
    if (tmp[tmp.length - 1] > num)
        break;
    while (tmp[tmp.length - 1] < num) {
        tmp.push(++now);
        rst.push('+');
    }
    tmp.pop();
    rst.push('-');
}
if (+stdin[0] !== now)
    console.log('NO');
else
    rst.forEach(v => console.log(v));
//# sourceMappingURL=hi.js.map