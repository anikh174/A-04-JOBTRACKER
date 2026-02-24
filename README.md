1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
--> i/ getElementById() selects one element by id.
   ii/ getElementsByClassName() selects elements by class name.
   iii/ querySelector() selects the first element.
   iv/ querySelectorAll() selects all elements.

2. How do you create and insert a new element into the DOM?
--> First create the element, document.createElement(). Then add content. After, insert it into the page, appendChild() or append().

3. What is Event Bubbling?
--> Event Bubbling is a event starts from the child element and goes up to its parent elements.

4. What is Event Delegation? Why is it useful?
--> Event Delegation adding one event listener to a parent and controll of many child elements. It saves memory and works for new elements.

5. What is the difference between preventDefault() and stopPropagation()?
--> i/ preventDefault() stops the browser’s default action.
   ii/ stopPropagation() stops the event from going to parent elements.
