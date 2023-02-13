# kth Value from the end of a linked list
<br>

>Write tests for the following scenarios, and any other cases that help you ensure your code is working as expected.
>
> * Where k is greater than the length of the linked list
> * Where k and the length of the list are the same
> * Where k is not a positive integer
> * Where the linked list is of a size 1
> * “Happy Path” where k is not at the end, but somewhere in the middle of the linked list

## Whiteboard
<br>

![whiteboard](https://i.ibb.co/6Xm1kDy/kth.jpg)

## Approach and Efficiency

> The time complexity is O(n) where n is the number of the nodes in the linked list. The time complexity is O(1) because it simply adds a new node. check if K is equal to 0 => nullset two pointers and set them to the head of the linked listFor loop iterates k-1 times. On each iteration , it checks if p2 is nulland if its not it will set to the next nodeWhole loop will run as long as p2.next is truthyWhen the loop finishes return the value of pointer 1
