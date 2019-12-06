import random
mat = [[0 for y in range(14)] for x in range(7)]
arr_x = [x for x in range(7)]
arr_y = [y for y in range(14)]
print('Arrays:',arr_x, arr_y)
coords =[]
# print('Matrix:\n',mat)
def place(arr,ty):
  x = arr['x']
  y = arr['y']
  for i in range(ty):
    for j in range(ty):
      # print('pos: ',x+i,y+j)
      try:
        mat[x+i][y+j] = ty
      except IndexError as e:
        print(x+i,y+j,e)

def checker(x,y,ty):
  flag = True
  for i in range(ty):
    for j in range(ty):
      if not mat[x+i][y+j] == 0:
        # print(f'Not: ({x+i},{y+j}) for {ty}')
        flag = False
  # print(f'Not: ({x+i},{y+j}) for {ty}')
  return flag

def randomer(ty):
  while True:
    v_x = random.choice(arr_x)
    if not v_x+ty > len(arr_x):
      v_y = random.choice(arr_y)
      if not v_y+ty > len(arr_y):
        if checker(v_x,v_y,ty):
          coords.append({ 'id': f'{ty}{v_x}{v_y}', 'type': f'box{ty}', 'position': [v_x+1, v_y+1] },)
          print('coords:',v_x,v_y, 'for', ty)
          return {'x':v_x,'y':v_y}

for i in range(3):
  place(randomer(3),3)
for j in range(6):
  place(randomer(2),2)
for k in range(9):
  place(randomer(1),1)

# print('matrix:\n',mat)
# print('coords \n', coords)

# for a in arr_x:
#   print('nexxt: ', a)
#   for b in arr_y:
#     print(': ', b)
#     print(mat[a][b-1])

# print(mat[6][13])