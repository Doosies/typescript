const stdin = (process.platform === 'linux'
    ? require('fs').readFileSync(0, 'utf-8')
    : `
So when I die (the [first] I will see in (heaven) is a score list).
[ first in ] ( first out ).
Half Moon tonight (At least it is better than no Moon at all].
A rope may form )( a trail in a maze.
Help( I[m being held prisoner in a fortune cookie factory)].
([ (([( [ ] ) ( ) (( ))] )) ]).
 .
.
`).trim().split('\n');
const input = (() => {
    let line = 0;
    return () => stdin[line++]; //.split("").map( v => +v);
})();
const b = {
    l: {
        '[': ']',
        '(': ')'
    },
    r: {
        ']': '[',
        ')': '(',
    }
};
function isPassed(str) {
    const stack = [];
    for (let s of str) {
        if (b.l[s])
            stack.push(s);
        else if (b.r[s]) {
            if (s !== b.l[stack.pop()]) {
                return false;
            }
        }
    }
    if (stack.length === 0)
        return true;
    else
        return false;
}
for (let s of stdin) {
    if (s !== '.')
        console.log(isPassed(s) ? 'yes' : 'no');
}
//# sourceMappingURL=hi.js.map