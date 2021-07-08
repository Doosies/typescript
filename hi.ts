interface dpInterface {
    [w: number]:number;
}
// // readline 사용
const stdin: string[][] = [];
const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});



rl.on('line', function (line: string[]): void {
    stdin.push(line)
}).on('close', function (): never {
    solution();
    process.exit();
});

// // fs 사용
// const stdin: string = (process.platform ==='linux'
// ? require('fs').readFileSync('dev/stdin')
// : `
// 5 7
// 3 8
// 1 5
// 2 7
// 2 2
// 2 6
// `).trim().split('\n');
const input = (()=>{
    let line = 0;
    return () => stdin[line++].toString().split(" ").map(v=>+v);
})();

// solution();
function isInDpOrBiggerThanOriginal(
    weight: number, 
    compareDP: dpInterface, 
    compareWeight: number,
    maxWeight: number
): boolean {
    if (weight > maxWeight)
        return false;
    if (compareDP[weight] && compareDP[weight] < compareWeight || !compareDP[weight])
        return true;

}

function solution(): void {
    const [n, k] = input();
    const arr = Array.from({length:n}, ()=> input());
    const dp: dpInterface = {};
    
    for (let i=0; i<n; i++) {
        const cDP: dpInterface = {...dp};
        const [orgWeight, orgValue] = arr[i];

        for (let cWeight in cDP) {
            const sumWeight: number = +cWeight + orgWeight;
            const value: number = cDP[cWeight] + orgValue;

            if (isInDpOrBiggerThanOriginal(sumWeight, cDP, value, k)) 
                dp[sumWeight] = value;    
        }
        if (isInDpOrBiggerThanOriginal(orgWeight, cDP, orgValue, k))
            dp[orgWeight] = orgValue;
    }

    const dpArray: [string,number][] = Object.entries(dp);
    if (dpArray.length === 0) {
        console.log(0);
    } else {
        const result: number = Math.max(...dpArray.map( ([_, v]: [string,number]) => v));
        console.log(result);
    }
}