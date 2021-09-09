var stdin = (process.platform === 'linux'
    ? require('fs').readFileSync(0, 'utf-8')
    : "\n3\n2 2\n1 5\n13 29\n").trim().split('\n');
var input = (function () {
    var line = 0;
    return function () { return stdin[line++].split(" ").map(function (v) { return +v; }); };
})();
function mul(time, num) {
    var rst = 1;
    for (var i = 0; i < time; i++) {
        rst *= num;
        num -= 1;
    }
}
var c = +input();
for (var i = 0; i < c; i++) {
    var _a = input(), n = _a[0], m = _a[1];
    var top_1 = mul(n, m);
    var bottom = mul(n, n);
    console.log(top_1, bottom);
}
// 분자 30이면 30 29 28
// 분모 3이면 3 2 1
//# sourceMappingURL=hi.js.map