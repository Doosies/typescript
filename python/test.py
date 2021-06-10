from sys import stdin; read = stdin.readline

#2580, 스도쿠
# board = [list(map(int,(read().split()))) for _ in range(9)]
board = [
    [1,0,0,3,0,9,0,0,5],
    [0,0,7,2,6,5,9,0,0],
    [0,9,5,0,0,0,3,6,0],
    [9,3,0,1,0,4,0,5,7],
    [0,4,0,0,3,0,0,8,0],
    [5,2,0,7,0,8,0,3,1],
    [0,5,9,0,0,0,1,4,0],
    [0,0,2,9,5,3,8,0,0],
    [8,0,0,6,0,1,0,0,2],
]
def get_need(li):
    result = []
    for i in range(1,10):
        if i not in li:
            result.append(i)
    return result

def get_board_area(i, j, is_first):
    li = []
    if is_first:
        for i in range(3):
            for j in range(3):
                li_t = []
                for k in range(3):
                    li_t.extend(board[i*3+k][j*3:j*3+3])
                li.append(li_t)
    else:
        i = i // 3
        j = j // 3
        for k in range(3):
            li.extend(board[i*3+k][j*3:j*3+3])
    return li

def can_put(pos, val):
    # 탐색하는 위치가 0일경우
    # x = pos // 9; y = pos % 9
    x = pos[0]; y = pos[1]
    if (board[x][y] == 0
    #탐색하는 위치의 값이 가로줄에 없을경우
    and val not in board[x]
    #탐색하는 위치의 값이 세로줄에 없을경우
    and val not in board_h[y]
    #탐색하는 위치의 값이 해당 구역에 없을경우
    and val not in get_board_area(x, y,False)):
        return True
    else:
        return False

def solv(need_sum, i, j):
    global flag
    if j == 9:
        i+=1; j=0
        
    if i == 9:
        flag = True
        return
        
    now_area =  ( j // 3 ) + ( i // 3 ) * 3 
    if board[i][j] == 0:
        for val in need[now_area]:
            if can_put([i, j], val):
                board[i][j] = val
                board_h[j][i] = val
                solv(need_sum-1, i, j+1)
                if flag == True:
                    return
                board[i][j] = 0
                board_h[j][i] = 0
    else:
        solv(need_sum, i, j+1)

board_h = [[board[j][i] for j in range(9)] for i in range(9)]
board_area = get_board_area(0,0,True)
need = [get_need(i) for i in board_area]
need_sum = sum([len(need[i]) for i in range(9)])
flag = False

solv(need_sum, 0, 0)
for i in board:
    print(" ".join(map(str,i)))