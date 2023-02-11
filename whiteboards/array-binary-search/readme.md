#Binary Search:

Binary Search:Write a function called BinarySearch that takes 2 parameter:a sorted arraya search key.WIthout using built in methods, return the index of the array’s element equal to the value of the search key, or -1 if the element does not exist


![here](https://i.ibb.co/BG3zCj9/codechallenge3.jpg)



#Approach

setting the start index and end index i ran through a while loop. To make it more efficient for large arrays we check first at the midpoint (kinda like silicon valley) to see if the index were searching for is greater or smaller. If it is smaller it processes the array if its bigger it resets the startpoint as the value of the midpoint and then returns the index. if the index isnt found it returns -1