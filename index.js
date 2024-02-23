//  question 1. How can you select an element by its ID using JavaScript?
let myname = document.getElementById(myname)


// question 2. How can you select all elements of a specific class name?

const elements = document.querySelectorAll('.example')


// question 3. How can you select the first child element of a given element?

let myContainer = document.getElementById("Container")
let allChildren = myContainer.children;

console.log(allChildren[0] )


// question 4. ● How can you select all elements that match a specific CSS selector?

let element = document.querySelectorAll(".temitope");


element.forEach(elementin => {
    
    console.log(element);
});



//question 5.  How can you change the text content of an element?
// Assuming you have an element with id "myElement"
let myElement = document.getElementById("myElement");

// Change the text content of the element
myElement.textContent = "New text content";



//question 6. How can you modify the value of an HTML attribute?

// Assuming you have an element with id "myElement"
let myElement = document.getElementById("myElement");

// Modify the value of the "src" attribute
myElement.setAttribute("src", "new-image.jpg");




// question 7. how can you add a new element to the DOM?
// Create a new element
let newElement = document.createElement("div");

// Optionally, you can add attributes, styles, or text content to the new element
newElement.textContent = "This is a new element";

// Find the parent element where you want to append the new element
let parentElement = document.getElementById("parentElementId");

// Append the new element to the parent element
parentElement.appendChild(newElement);




// question 8.How can you remove an element from the DOM?

// Select the element you want to remove
let elementToRemove = document.getElementById("elementToRemoveId");

// element to remove
if (elementToRemove) {
    // Remove the element from the DOM
    elementToRemove.remove();
} else {
    console.log("Element does not exist.");
}



// question 9. How can you access the parent element of a given element?
// Select the child element
let childElement = document.getElementById("childElementId");

// Access the parent element
let parentElement1 = childElement.parentElement1;

// next element
if (parentElement1) {
    // Now you can work with the parent element
    console.log("Parent element:", parentElement1);
} else {
    console.log("Parent element does not exist.");
}



// question 10. How can you access the next sibling element of a given element?

// Select the current element
let currentElement = document.getElementById("currentElementId");

// Access the next sibling element
let nextSiblingElement = currentElement.nextElementSibling;

// nextelement
if (nextSiblingElement) {
    // Now you can work with the next sibling element
    console.log("Next sibling element:", nextSiblingElement);
} else {
    console.log("Next sibling element does not exist.");
}



// question 11. How can you iterate over all child elements of a given element?

// Get the parent element
let parentsElement = document.getElementById("parentsElementId");

// Get all child elements of the parent element
let childElements = parentsElement.children;

// Iterate over each child element using a for loop
for (let i = 0; i < childElements.length; i++) {
    // Access each child element using childElements[i]
    let currentChild = childElements[i];
    
    // Do something with the current child element
    console.log("Child element:", currentChild);
}



// question 12. How can you find all elements matching a specific condition within a
// subtree?

// Define the condition using a CSS selector
let condition = ".your-condition"; // Replace ".your-condition" with your specific CSS selector

// Specify the root element of the subtree
let rootElement = document.getElementById("rootElementId"); // Replace "rootElementId" with the ID of your root element

// Find all elements matching the condition within the subtree
let matchingElements = rootElement.querySelectorAll(condition);

// Iterate over the matching elements and perform operations
matchingElements.forEach(element => {
    // Do something with each matching element
    console.log("Matching element:", element);
});



// question 13.How can you change the inline style of an element using JavaScript?

// Get a reference to the element
let elemented = document.getElementById("elementId"); // Replace "elementId" with the ID of your element

// Change the inline style properties
elemented.style.propertyName = "value"; // Replace "propertyName" with the CSS property you want to change, and "value" with the new value

// to change the inline style
element.style.backgroundColor = "red"; // Changes the background color to red
element.style.fontSize = "16px"; // Changes the font size to 16 pixels




// question 14.How can you add or remove CSS classes from an element?

// add
let addElement = document.getElementById("addNumber"); 
// Add a CSS class to the element
element.classList.add("className"); 



// remove class

let removeElement = document.getElementById("elementId"); 

// Remove a CSS class from the element
element.classList.remove("className"); 



// question 15. How can you toggle between two different styles for an element?

// i have to define the style two style i want to toggle first in css

// Get a reference to the element
let elementStyle = document.getElementById("elementStyleId");

// Toggle between styles
function toggleStyles() {
    if (elementStyle.classList.contains("style1")) {
        // If the element has style1, remove it and add style2
        elementStyle.classList.remove("style1");
        elementStyle.classList.add("style2");
    } else {
        // If the element has style2 or neither, remove it and add style1
        elementStyle.classList.remove("style2");
        elementStyle.classList.add("style1");
    }
}




// question 16. How can you dynamically create and add a CSS stylesheet to the document?

function addStyleSheet(url) {
    // Create a link element
    var link = document.createElement("link");

    // Set attributes
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = url;

    // Append the link element to the head section of the document
    document.head.appendChild(link);
}

// Usage: Call the function with the URL of your CSS file
addStyleSheet("http://yourdomain.com/css/styles.css");





// question 17. Explain the syntax and purpose of the forEach method in JavaScript.


"The forEach method in JavaScript helps us work with arrays. It lets us do something with each item in an array, one by one. Here's how it works"

"We start with an array, which is like a list of things"
"Then, we use forEach on that array"
"Inside forEach, we tell it what we want to do with each item in the array. We call this a callback function"
"This function runs once for every item in the array"
"It can do anything we want, like printing out each item or changing it somehow"
"forEach doesn't change the original array. It just lets us work with each item"
"For example, if we have an array of numbers like [1, 2, 3, 4, 5], we can use forEach to print each number or double each number. This makes it easier to work with arrays and do different tasks with their elements"


// question 18.Explain the syntax and purpose of the forEach method in JavaScript.