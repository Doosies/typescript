type inputType = () => string[];

const stdin: string = (process.platform ==='linux'
? require('fs').readFileSync('dev/stdin').toString()
: `
AABBAA
BA
`).trim().split('\n');
const input: inputType = (()=>{
    let line = 0;
    return () => stdin[line++].toString().split("");
})();


let longStr: string[] = input();
longStr.splice(0,0,"0");
let shortStr: string[] = input();
shortStr.splice(0,0,"0");
if (longStr.length < shortStr.length) {
    [longStr,shortStr] = [shortStr,longStr];
}
const endI = longStr.length;
const endJ = longStr.length;
const LCS: number[][] = Array.from({length:endI}, () => []);

for (let i=0; i<endI; i++) {
    for (let j=0; j<endJ; j++) {
        if (i === 0 || j === 0) {
            LCS[i][j] = 0;
        }
        else if (longStr[i] === shortStr[j]) {
            LCS[i][j] = LCS[i-1][j-1] + 1;
        }
        else {
            LCS[i][j] = Math.max(LCS[i][j-1], LCS[i-1][j]);
        }
    }
}
// const maxTmp = LCS.map((row: number[]) => Math.max(...row));
// const max = Math.max(...maxTmp);
// console.log(LCS.join("\n"));
// console.log(LCS);
console.log(LCS[endI-1][endJ-1]);