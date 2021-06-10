// 순열
const getPermutation = (arr, depth) =>{
    const results = [];
    if( depth === 1 ) return arr.map(val=>[val]);
    // else{
    arr.forEach((fixed,idx,array)=>{
        // fixed를 제외한 값들
        const rest = [...array.slice(0,idx), ...array.slice(idx+1)];
        // rest에 대한 순열을 구함.
        const permutations = getPermutation(rest, depth-1);
        // fixed와 방금 구한 순열을 더함.
        const attached = permutations.map(v => [fixed, ...v]);
        // 구한 순열들을 results에 푸쉬
        results.push(...attached);
    });
    // }
    return results;
}
// 중복순열
const getDuplicationPermutation = (arr, depth) =>{
    const result = [];
    if( depth === 1 ) return arr.map((v) => [v]);

    arr.forEach((fixed,idx,rest)=>{
        const permutations = getDuplicationPermutation(rest, depth-1);
        const attached = permutations.map(v => [fixed, ...v]);
        result.push(...attached);
    });
    return result;
}
// 조합
const getCombination = (arr, depth) =>{
    const result = [];
    if( depth === 1 ) return arr.map((v) => [v]);

    arr.forEach((fixed,idx,array)=>{
        const rest = array.slice(idx+1);
        const permutations = getCombination(rest, depth-1);
        const attached = permutations.map(v => [fixed, ...v]);
        result.push(...attached);
    });
    return result;
}
// 중복조합
const getDuplicationCombination = (arr, depth) =>{
    const result = [];
    if( depth === 1 ) return arr.map((v) => [v]);

    arr.forEach((fixed,idx,array)=>{
        const rest = array.slice(idx);
        const permutations = getDuplicationCombination(rest, depth-1);
        const attached = permutations.map(v => [fixed, ...v]);
        result.push(...attached);
    });
    return result;
}
const array = [1,2,3];
const select = 2;

console.log("순열: ", getPermutation(array, select));
console.log("중복순열: ", getDuplicationPermutation(array, select));
console.log("조합: ", getCombination(array, select));
console.log("중복조합: ", getDuplicationCombination(array, select));