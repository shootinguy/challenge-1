// Step 1: Console messages
console.log("Greetings from my custom JavaScript webpage!");
console.log("JavaScript makes webpages come alive!");

// Step 2: Alert box
window.onload = function() {
    alert("Welcome to my interactive webpage!");
    
    // Step 3: Modify text content of the webpage dynamically
    document.getElementById("title").textContent = "Hello, Welcome to My Awesome Page!";
    document.getElementById("message").textContent = "This webpage is powered by JavaScript magic!";
};
