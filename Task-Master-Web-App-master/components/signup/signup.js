const loginBtn = document.getElementById("login-btn");
const signupBtn = document.getElementById("signup-btn");
const createBtn = document.getElementById("create-btn")

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

document.getElementById("create-btn").onclick = () => {
    const fullName = document.querySelector('input[name="fname"]').value.trim();
    const email = document.querySelector('input[name="e-address"]').value.trim();
    const password = document.querySelector('input[name="password"]').value.trim();

    if (!fullName || !email || !password) {
        alert("This field is required.");
        return;
    }

    if(password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    // Save user info to localStorage
    const user = { fullName, email, password };
    localStorage.setItem("taskmaster-user", JSON.stringify(user));

    alert("Account created successfully!");
    window.location.href = "login.html";
};


