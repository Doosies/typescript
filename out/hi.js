var stdin = (process.platform === 'linux'
    ? require('fs').readFileSync('dev/stdin').toString()
    : "\n8\n1 8\n3 9\n2 2\n4 1\n6 4\n10 10\n9 7\n7 6\n").trim().split('\n');
var input = (function () {
    var line = 0;
    return function () { return stdin[line++].split(" ").map(function (v) { return Number(v); }); };
})();
function getMinus(arr) {
    return Number(arr[0]) - Number(arr[1]);
}
var n = Number(input());
var arr = Array.from({ length: n }, function () { return input(); });
var dp = [1];
arr.sort(function (a, b) { return a[0] - b[0]; });
for (var i = 1; i < n; i++) {
    dp[i] = 1;
    for (var j = 0; j < i; j++) {
        if (arr[i][1] < arr[j][1] && dp[i] <= dp[j]) {
            dp[i] = dp[j];
        }
    }
}
console.log(dp);
console.log("!!");
//# sourceMappingURL=hi.js.map