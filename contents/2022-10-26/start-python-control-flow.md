---
date: '2022-10-26 13:23:54'
title: 'Start Python - control flow'
category: 'Basic'
tags: ['python', 'study']
summary: ''
emoji: '✍'
thumbnail: './default.png'
---

<small><em>last modified: 2022-11-04</em></small>

# Control the flow

# Comparison operator
- `a == b`: a equals b
- `a != b`: a not equals b
- `a > b`: a bigger than b
- `a <= b`: a equals b or smaller than b


# If
```python
# if (condition=True):
if age < 18:
	print('Lower then 18')

if not age < 18:
	print('Higher then 18 or equal')
```

## Else, Elif
```python
if age < 18:
	print('Lower then 18')
elif age >= 18 and age <= 40:
	print('Between 18 and 40, and include these numbers')
else: 
	print('Higher then 40')
```

## And, Or
```python
# (condition) and (condition)
print(True and True) # True
print(True and False) # False
print(False and True) # False
print(False and False) # False

# (condition) or (condition)
print(True or True) # True
print(True or False) # True
print(False or True) # True
print(False or False) # False
```

# Iterator

## While
```python
# while (condition=True):
while True:
	run(codes)
```

## **For** loop
```python
# for (keyword of each item) in (list)
for day in ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']:
	print(day)

# Mon
# Tue
# Wed
# Thu
# Fri
# Sat
# Sun
```
- That `list`, in above, not just like `list()`, means a set of statements: _list, tuple, set..._