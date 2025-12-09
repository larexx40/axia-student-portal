document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");

    if (email === "" || password === "") {
        errorMessage.textContent = "All fields are required.";
        return;
    }

    if (!email.includes("@")) {
        errorMessage.textContent = "Please enter a valid email.";
        return;
    }

    if (password.length < 6) {
        errorMessage.textContent = "Password must be at least 6 characters.";
        return;
    }

    errorMessage.textContent = "";
    alert("Login successful!");
});
