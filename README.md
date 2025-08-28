# B12-A5-BDEmergency-Hotline

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Difference between:
 getElementById- Select a single element ID attribute.  
 getElementsByClassName- Select all element of same class selector.
 querySelector- Select first element of a class attribute.
 querySelectorAll- Select all element of matches class selector.

2. How do you **create and insert a new element into the DOM**?

**Create An Element
We usually used to create an element: document.createElement() method
Example: const newDiv =document.createElement('div');

** Insert a new element
We usually used to Insert an element: appendChild() Method
Example: const newDiv =document.body.appendChild('newDiv');

3. What is **Event Bubbling** and how does it work?

** What is Event Bubbling
Event Bubbling is a DOM event when click target element it propagates upwards to parent element and grandparents element and son until the reaches document root.

** How does it work
When an user clicked a button an event listener triggered this button then event propagates to the parent element, grand parents element and so on and triggered target element.

4. What is **Event Delegation** in JavaScript? Why is it useful?
Event delegation is is a powerful event that simplifies event handling its improves performance of code. Its like as bubbling but not same as bubbling.
 Example: let a div has many button. Then we add a event listener div. We don't add the event listener to all button.when a button clicked event listener reaches and we select clicked button with event target.

 5. What is the difference between **preventDefault() and stopPropagation()** methods?

 **preventDefault() is a method that prevent default browser behavior.

 ** stopPropagation() is a method that prevent event Bubbling.

