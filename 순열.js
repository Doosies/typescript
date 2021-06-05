function getPermutation(arr, depth){
    results = []
    if( depth == 1 )
        return arr.map(val=>[val]);
    else{
        arr.forEach((fixed,idx,array)=>{
            // fixed를 제외한 값들
            let rest = [...array.splice(0,idx), ...array.splice(idx+1)];
            // rest에 대한 순열을 구함.
            let permutations = getPermutation(rest, depth-1);
            // fixed와 방금 구한 순열을 더함.
            let attached = permutations.map(permutation => [fixed, ...permutation]);
            // 구한 순열들을 results에 푸쉬
            results.push(...attached);
        });
    }
    return results;
}