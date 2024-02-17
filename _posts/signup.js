function signup(event) {
    event.preventDefault();

    const newUsername = document.getElementById("newUsername").value;
    const newPassword = document.getElementById("newPassword").value;
    
    alert("User registered successfully. Redirecting to login page.");
    window.location.href = "login.html";
}