# ==========================테스트=================================
# string = '''2 1
# 2 2
# 2 4
# '''
# tmp = string.split('\n')
# n, k = map(int, tmp[0].split(' '))
# arr = [list(map(int,tmp[i].split(' '))) for i in range(1,n+1)]
# ================================================================

def is_in_dp_or_bigger_than_original(weight, compare_dp, compare_weight, k):
    if weight <= k:
        if (weight in compare_dp and compare_dp[weight] < compare_weight
            or not weight in compare_dp ):
            return True
        else:
            return False
def solution():
    n, k = map(int, input().split())
    arr = [list(map(int, input().split())) for i in range(n)]
    dp = {}
    
    for i in range(n):
        c_dp = dict.copy(dp)

        for c_dp_weight in c_dp:
            sumWeight = c_dp_weight + arr[i][0]
            value = c_dp[c_dp_weight] + arr[i][1]

            if (is_in_dp_or_bigger_than_original(sumWeight, c_dp, value, k) ):
                dp[sumWeight] = value

        if (is_in_dp_or_bigger_than_original(arr[i][0], c_dp, arr[i][1], k) ):
            dp[arr[i][0]] = arr[i][1]
    
    if len(dp.keys()) == 0:
        print(0)
    else:
        result = max(dp.items(), key=lambda x: x[1])
        print(result[1])


solution()