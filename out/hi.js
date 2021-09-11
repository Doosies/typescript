var stdin = (process.platform === 'linux'
    ? require('fs').readFileSync(0, 'utf-8')
    : "\n6\n(())())\n(((()())()\n(()())((()))\n((()()(()))(((())))()\n()()()()(()()())()\n(()((())()(\n").trim().split('\n');
var input = (function () {
    var line = 0;
    return function () { return stdin[line++].split(""); }; //.map( v => +v);
})();
var C = +input();
var result = [];
var _loop_1 = function (i) {
    var stack = [];
    var str = input();
    str.forEach(function (str, idx) {
        if (str === '(')
            stack.push(str);
        else if (str === ')' && stack.length > 0)
            stack.pop();
    });
    console.log(stack);
    result.push(stack.length === 0 ? 'YES' : 'NO');
};
for (var i = 0; i < C; i++) {
    _loop_1(i);
}
result.forEach(function (cur) { return console.log(cur); });
//# sourceMappingURL=hi.js.map