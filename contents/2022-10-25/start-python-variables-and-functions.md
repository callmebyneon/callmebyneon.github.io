---
date: '2022-10-25 00:00:00'
title: 'Start Python - variables and functions'
category: 'Basic'
tags: ['python', 'study']
summary: ''
emoji: '📝' 
---

<small><em>last modified: 2022-11-04</em></small>

# Variable
## declaration
```python
# declaration
# variable_name = value

# string
name = "neon"
greeting = f"Hello, {name}"

# number
days_in_one_week = 7

# Boolean
false_value = False
true_value = True
```

## use library and get methods
- link: https://docs.python.org/3/library/
```python
# use library like below
from random import random, randint
```


# Functions
## function definition
- Function names cannot contain spaces and cannot begin with numbers
- Using parameter(s) in functions by argument(s)
```python
# declaration
# def fn_name(args):
#   write(codes_with_indent)
#   can_use(args)
def plus(a, b):
  return a + b
```

## return values
```python
# fn_name(params)
result = plus(2, 4) # 6
```
- When python meets a `return`, the function stops running and Python leaves the function
```python
def plus_weird(a, b):
  return a + b
  print(f"a is {a}, b is {b}")
``` 

## *args, **kwds
- Set not only argument(s) but also keyword argument(s) 
```python
# using arg(argument)
plus(2, 4)

# using kwds(keyword argument)
plus(a=2, b=4)
```

## default parameters
- Set default parameter values when declaring a function
- If the argument was not given, python use the default value instead printing error
- So the parameter with default value is optional parameter.
```python
def say_hello(user_name="anonymous"):
  print("Hello", user_name)

say_hello() # Hello anonymous
```