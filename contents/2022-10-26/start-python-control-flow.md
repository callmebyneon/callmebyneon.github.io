---
date: '2022-10-26'
title: 'Start Python - control flow'
categories: ['Python']
summary: ''
thumbnail: './default.png'
---

## Control the flow

- **If**
```python
# if (condition=True):
if age < 18:
	print('Lower then 18')

if not age < 18:
	print('Higher then 18 or equal')
```

- **Else, Elif**
```python
if age < 18:
	print('Lower then 18')
elif age >= 18 and age <= 40:
	print('Between 18 and 40, and include these numbers')
else: 
	print('Higher then 40')
```

- **And, Or**
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

### Iterator
- **While**
```python
# while (condition=True):
while True:
	run(codes)
```

- **For** loop
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