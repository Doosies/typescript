
const insertSort = (dpList) =>{
    const len = dp.length;
    const [num, _] = dpList;
    for(let i=0; i<len; i++){
        if( dp[i][0] <= num){
            dp.splice(i,0,dpList);
            continue;
        }
    }
    dp.push(dpList);
}
const findDP = (num) =>{
    const len = dp.length;
    for(let i=0; i<len; i++){
        if( dp[i][0] < num)
            return [num, dp[i][1]+1];
    }
    return [num, 1];
}

for( let i=0; i<n; i++){
    let tmpDp = [];
    if( arr[i] !== arr[i-1]){
        tmpDp = findDP(arr[i]);
    }
    else{
        tmpDp = [arr[i], dp[i-1][1]];
    }
    insertSort(tmpDp);
    result = Math.max(result, tmpDp[1]);
}
// console.log(dp);
console.log(result);