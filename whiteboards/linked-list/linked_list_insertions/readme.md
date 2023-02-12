# Linked List:

## Linked list insertion: Diagram:

### Adding a new node at the front(append):

![Append](https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2013/03/Linkedlist_insert_at_start.png)

### Adding a node(insertBefore):

>note the practical diagrams are the same the only difference is which one youre targeting. If youre submitting before C or after B you still have essentially the same steps

![Insert](https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2013/03/Linkedlist_insert_middle.png)|


### append:
>This function adds a new node to the end of the linked list. It creates a new node with supplied vlaue, updates the tail node to point to it, sets the new node as the new tail, and increases the length of the linked list. It returns the updated linked list.

### insertBefore:
>This function inserts a new node with a given value before a target node with a specified value. It checks if the linked list is empty and returns false if it is. Then, it searches the linked list for the target node, and inserts the new node before it if found. The new node's next pointer points to the target node, and the previous node's next pointer is updated to point to the new node. If the target node is the head, the new node becomes the head. It increases the length of the linked list and returns true if successful, and false if the target node is not found.

### insertAfter:
>This function inserts a new node with a given value after a target node with a specified value. It checks if the linked list is empty and returns false if it is. Then, it searches the linked list for the target node, and inserts the new node after it if found. The new node's next pointer points to the next node of the target node, and the target node's next pointer is updated to point to the new node. If the target node is the tail, the new node becomes the tail. It increases the length of the linked list and returns true if successful, and false if the target node is not found.