---
date: '2022-10-26 13:23:53'
title: 'Start Python - data structures'
category: 'Basic'
tags: ['python', 'study']
summary: ''
emoji: '🏢' 
---

<small><em>last modified: 2022-11-04</em></small>

# Data Structure

## Lists
- `[]`
- [`list()`](https://docs.python.org/3/library/functions.html#func-list)
```python
# [ value1, ... ]
days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
```

## Tuple
- `()`
- [`tuple()`](https://docs.python.org/3/library/functions.html#func-tuple)
- almost like list, but immutable
- can't modify data in tuple using like list method
```python
# list (mutable)
days_list = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

# tuple (immutable)
days_tuple = ('Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun')
```

## Dicts
- `{}`
- [`dict()`](https://docs.python.org/3/library/functions.html#func-dict)
```python
# { (key): (value), ... }
user = {
	'id': 354
	'alive': True,
	'live_in': 'seoul',
	'fav_food': ["🍟", "🍞"]
}
```
