# *July 7, 2017*

# Big O Notation

## Learning Objectives

* Differentiate different asymptotic Notation

* Analyze code to determine  perf under load
---

### What is Big O?

##### How quickly the runtime grows as the algorithms grow arbitrarily large.

##### This is relative to the input. We'll care most about the stuff that grows fastest as algorithms get huge

### Constant Time

```
def print_last_item(some_list):
  print some_list[-1]
```
##### The input list could be 1 item or 1,000 items, but this function would still just require on 'step'.

### Linear Time

```
def pring_all_items(list_of_items):
  for item in list_of_items,
  print item
```

### Quadratic Time

##### This will look like a square, which do several linear things, while moving down the square. 
