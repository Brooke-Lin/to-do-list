const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
        // if the input value is empty, then the web page will pop up the alert message.
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        // the "appendChild()" method of the Node interface adds a node to the end of the list of children of a specified parent node.
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        //the Unicode character "\u00d7", which represents the multiplication sign(x)
        li.appendChild(span);
        
    }
    inputBox.value = "";
    // after inputing the text into the list, the input box will be empty.
    saveData()
}
//1. It begins with an "if" statement to check if the value of the "inputBox" element is empty.
//If it is empty, it displays an alert message indicating that the user must write something.
//If not, it proceeds to add the task.

//2. Inside the "else" block (when input is not empty)
//It creates a new <li> element using "document.createElement("li")"
//Sets the "innerHTML" of the newly created "<li>" element to value of the "inputBox"
//Appends this new "<li>" element to the "listContainer", presumably a "<ul>" or "<li>" element representing a list
//Creates a new "<span>" element using "document.createElement("span")"
//Sets the "innerHTML" of the "<span>" element using "document.createElement("span")"
//Appends this "<span>" element as a child of the newly created "<li>" element

//3. After adding the task, it sets the value of the "inputBox" element to an empty string, clearing the input field for the next task entry.



listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        // the tagName read-only property of the Element interface returns the tag name of the element on which it's called.
        // for example, if the element is an <img>, its tagName property is IMG
        e.target.classList.toggle("checked");
        // toggle between adding and removing a class name from an element with JavaScript
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false);

// This code adds an event listener to the "listContainer" element. 
// When a click event occurs within the "listContainer", the provided function is executed.
// Here's what the function does:
// It checks if the clicked element ("e.target") is a list item ("LI") by comparing its tag name to "LI".
// If the clicked element is a list item ("LI"), it toggles the "checked" class on the clicked list item. This likely means it's for marking the item as checked or unchecked visually.
// If the clicked element is not a list item ("LI") but is a "<span>" element (which is often used for buttons or controls), it checks if the clicked element is a child of a list item.
// If so, it removes the parent element of the clicked "<span>", likely removing the entire list item from the list.

// The "false" parameter simply means that the event listener is set to listen in the bubbling phase rather than capturing phase. 
// Bubbling phase means the event starts from the target element and bubbles up through its ancestors. 
// This is the default behavior for event listeners in JavaScript when you pass "false" as the third parameter.
// Event bubbling就是只在listContainer裡找尋LI和SPAN
// 但Event capturing會從頭開始找起


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
    // "setItem("...", ...)" means set the value of the specified local storage item.
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
    // "getItem("...")" means get the value of the specified local storage item.
}
showTask();

// These functions interact with the "localStorage" object in Javascript to save and retrieve data from the browser's local storage.

// 1. "saveData()" function:
// This function stores data in the browser's local storage.
// It uses the "setItem()" method of the "localStorage" object to save data.
// The key used for storing the data is "data".
// The data being saved is the "innerHTML" of the "listContainer" element. This likely contains HTML content, such as a list of tasks.

// 2. "showTask()" function:
// This function retrieves previously saved data from the browser's local storage.
// It uses the "getItem()" method of the "localStorage" object to retrieve data.
// It retrieves the data associated with the key "data".
//The retrieved data is then assigned to the "innerHTML" property of the "listContainer" element, effectively displaying the saved data on the webpage.



