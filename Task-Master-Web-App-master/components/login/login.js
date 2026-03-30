const loginBtn = document.getElementById("login-btn");
const signupBtn = document.getElementById("signup-btn");
const nextStep= document.getElementById("next-step-btn")

// switch action
signupBtn.addEventListener("click", () => {
    signupBtn.classList.add("active");
    loginBtn.classList.remove("active");
    window.location.href = "index.html"; 
});

loginBtn.addEventListener("click", () => {
    loginBtn.classList.add("active");
    signupBtn.classList.remove("active");
    window.location.href = "login.html"; 
});

document.getElementById("next-step-btn").onclick = () => {
    window.location.href = "dashboard.html";
};

nextStep.addEventListener("click", () => {
    const email = document.querySelector('input[name="e-address"]').value.trim();
    const password = document.querySelector('input[name="password"]').value.trim();

    if (!email || !password) {
        alert("Please enter both email and password.");
        return;
    }

    // Get saved user
    const savedUser = JSON.parse(localStorage.getItem("taskmaster-user"));

    if (!savedUser) {
        alert("No user found. Please sign up first.");
        return;
    }

    if (email === savedUser.email && password === savedUser.password) {
        alert("Login successful!");
        window.location.href = "/components/dashboard/dashboard.html";
    } else {
        alert("Incorrect email or password.");
    }
});
