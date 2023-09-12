// Get the Save and Clear buttons
const saveButton = document.getElementById("save-btn");
const clearButton = document.getElementById("clear-btn");
const inputField = document.getElementById("write-your-text");

// Add an event listener for the Save button
saveButton.addEventListener("click", function () {
    const text = inputField.value;
    // You can save the text or perform any other action here
    alert(`Text saved: ${text}`);
});

// Add an event listener for the Clear button
clearButton.addEventListener("click", function () {
    inputField.value = ""; // Clear the input field
});
