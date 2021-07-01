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
var dp = [];
arr.sort(function (a, b) { return a[0] - b[0]; });
for (var i = 0; i < n; i++) {
    dp[i] = 1;
    for (var j = 0; j < i; j++) {
        if (arr[i][1] < arr[j][1]) {
            dp[i] = Math.max(dp[i], dp[j] + 1);
        }
    }
}
console.log(arr);
console.log(dp);
var result = Math.max.apply(Math, dp);
console.log(n - result);
console.log(result);
// const stdin = (process.platform ==='linux'
// ? require('fs').readFileSync('dev/stdin').toString()
// : `
// 8
// 8 2 9 1 4 6 7 10
// `
// ).trim().split('\n');
// const input = (()=>{
//     let line = 0;
//     return ()=>stdin[line++].split(" ");
// })();
// const n = Number(input());
// const arr = input().map(v => Number(v));
// const dp = [1];
// for(let i=1, l=arr.length; i<l; i++){
//     dp[i] = 1;
//     for( let j=i; j>=0; j--){
//         if( arr[j] > arr[i] && dp[j] >= dp[i] ){
//             dp[i] = dp[j] +1;
//         }
//     }
// }
// console.log(dp);
// console.log(dp[n-1]);
//# sourceMappingURL=hi.js.map