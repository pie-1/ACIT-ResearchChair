#Array is faster then list
#Suppose you have one million numbers and want to add 5 to each.
numbers = [1, 2, 3, 4]

result = []
for x in numbers:
    result.append(x + 5)

print(result)
#In list we go through every elemennt yourself
#but using a numpy array
import numpy as np

numbers = np.array([1, 2, 3, 4])

result = numbers + 5

print(result)