const stdin = (process.platform === 'linux'
    ? require('fs').readFileSync('dev/stdin').toString()
    : `
8
1 8
3 9
2 2
4 1
6 4
10 10
9 7
7 6
`).trim().split('\n');
const input = (() => {
    let line = 0;
    return () => stdin[line++].split(" ").map((v) => Number(v));
})();
function getMinus(arr) {
    return Number(arr[0]) - Number(arr[1]);
}
const n = Number(input());
const arr = Array.from({ length: n }, () => input());
const dp = [1];
arr.sort((a, b) => a[0] - b[0]);
for (let i = 1; i < n; i++) {
    dp[i] = 1;
    for (let j = 0; j < i; j++) {
        if (arr[i][0] < arr[j][0] && dp[i] < dp[j]) {
            dp[i] = dp[j];
        }
    }
}
console.log(dp);
console.log("!!");
//# sourceMappingURL=hi.js.map