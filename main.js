document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById("submitButton");

    submitButton.addEventListener("click", function() {
        const userInput = document.getElementById("userInput").value;
        const outputDiv = document.getElementById("output");

        // Using jQuery's html() method, which is vulnerable to XSS
        $(outputDiv).html(userInput);
    });
});
