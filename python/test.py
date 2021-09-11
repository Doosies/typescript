def isPassed(s):
    size = len(s);
    stack = [];
    for i in range(0,size):
        if s[i] == '(':
            stack.append(1)
        else:
            if len(stack) == 0:
                return False
            else:
                stack.pop()
    
    if len(stack) == 0: return True
    else: return False

C = int(input())
for i in range(0, C):
    print('YES' if isPassed(list(input())) else 'NO')