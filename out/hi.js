const stdin = (process.platform === 'linux'
    ? require('fs').readFileSync(0, 'utf-8')
    : `
20
5 4 6 9 8 41 3 2 1 5 4 7 5 52 4 5 5 4 5 45
`).trim().split('\n');
const input = (() => {
    let line = 0;
    return () => stdin[line++].split(" ").map(v => +v);
})();
console.time("algorithm");
const C = +input();
const arr = input();
const stack = [];
const result = [-1];
let cnt = 0;
for (let i = C - 2; i > -1; i--) {
    const cur = arr[i];
    const prv = arr[i + 1];
    if (prv > cur) {
        stack.push(prv);
        result.push(prv);
    }
    else {
        let num = -1;
        stack.forEach(stackCur => {
            cnt++;
            if (cur < stackCur) {
                num = stackCur;
                return false;
            }
        });
        result.push(num);
    }
}
console.log("cnt: " + cnt);
console.log(result.reverse().join(' '));
console.log(stack);
console.timeEnd("algorithm");
//# sourceMappingURL=hi.js.map