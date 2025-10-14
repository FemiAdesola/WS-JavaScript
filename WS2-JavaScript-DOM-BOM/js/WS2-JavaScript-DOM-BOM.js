
// This script writes a message to the document for DOM manipulation exercise 1
document.write("Exercise 1:<br>");
document.write("Hello, this is my first DOM manipulation exercise."); // Write message to the document


// Exercise 2: Writing a message to the document 30 times using a loop
if (confirm("Click OK to continue to Exercise 2")) {
    document.write("Exercise 2:<br>");
    function repeatingText() {
    for (let i = 1; i <= 30; i++) {
        let div = document.createElement("div");  // create a <div> element
        div.textContent = "This is line " + i; // set the text content
        document.body.appendChild(div); // append the <div> to the body
    }
    }
}
repeatingText(); // Call the function to execute the loop and write to the document
document.write("<hr>");


// Exercise 3: Browser detection and redirection
if (confirm("Click OK to continue to Exercise 3")) {
    document.write("Exercise 3:<br>");
    if (navigator.appName === "Netscape") {
        // window.location.href = "https://www.mozilla.org/en-GB/"; // Redirect to Mozilla's website
        window.open("https://www.mozilla.org/en-GB/", "_blank"); // Open in a new tab
        document.write("Mozilla browser detected, media page opened in new tab.<hr>");
    } else {
        document.write("You are not using Mozilla.<hr>");
    }
}


// Exercise 4: Using confirm dialog box for user interaction
if (confirm("Click OK to continue to Exercise 4")) {
    document.write("Exercise 4:<br>");
    if (confirm("Are you a student?") === true) {
        document.write("User response: true<hr>"); // User clicked OK
        console.log("You pressed OK");
    } else {
        document.write("User response: false<hr>");
        console.log("You pressed Cancel");
    }
}


// Exercise 5: Displaying a random image from an array
if (confirm("Click OK to continue to Exercise 5")) {
    document.write("Exercise 5:<br>");
    const images = [
        "https://placehold.co/600x400/000000/FFFFFF",
        "https://placehold.co/600x400/FF0000/000000",
        "https://placehold.co/600x400/008000/FFFFFF"
    ];

    let randomIndex = Math.floor(Math.random() * images.length); // Generate a random index
    document.write("<img src='" + images[randomIndex] + "' alt='Random Image'>");
}
