let correctUsername = "roshan";
let correctPassword = "1234";


// LOGIN
function login() {

    let username =
        document.getElementById("username").value;

    let password =
        document.getElementById("password").value;

    let message =
        document.getElementById("loginMessage");


    if (username === correctUsername &&
        password === correctPassword) {

        openDashboard(username);

    } else {

        message.style.color = "red";

        message.textContent =
            "Invalid username or password!";

    }
}


// SHOW RESET PAGE
function showReset() {

    document.getElementById("loginSection")
        .classList.add("hidden");

    document.getElementById("resetSection")
        .classList.remove("hidden");

}


// BACK TO LOGIN
function showLogin() {

    document.getElementById("resetSection")
        .classList.add("hidden");

    document.getElementById("loginSection")
        .classList.remove("hidden");

}


// RESET PASSWORD
function resetPassword() {

    let newPassword =
        document.getElementById("newPassword").value;

    let confirmPassword =
        document.getElementById("confirmPassword").value;

    let message =
        document.getElementById("resetMessage");


    if (newPassword === "" ||
        confirmPassword === "") {

        message.style.color = "red";

        message.textContent =
            "Please enter both passwords.";

        return;
    }


    if (newPassword !== confirmPassword) {

        message.style.color = "red";

        message.textContent =
            "Passwords do not match.";

        return;
    }


    correctPassword = newPassword;

    message.style.color = "green";

    message.textContent =
        "Password reset successfully!";


    setTimeout(() => {

        showLogin();

    }, 1500);
}


// DASHBOARD
function openDashboard(username) {

    document.getElementById("loginSection")
        .classList.add("hidden");

    document.getElementById("resetSection")
        .classList.add("hidden");

    document.getElementById("dashboard")
        .classList.remove("hidden");


    document.getElementById("displayUsername")
        .textContent = username;

    document.getElementById("profileUsername")
        .textContent = username;
}


// DASHBOARD HOME
function showDashboard() {

    hidePages();

    document
        .getElementById("dashboardHome")
        .classList.remove("hidden");
}


// PROFILE
function showProfile() {

    hidePages();

    document
        .getElementById("profile")
        .classList.remove("hidden");
}


// SETTINGS
function showSettings() {

    hidePages();

    document
        .getElementById("settings")
        .classList.remove("hidden");
}


// HIDE DASHBOARD PAGES
function hidePages() {

    document
        .getElementById("dashboardHome")
        .classList.add("hidden");

    document
        .getElementById("profile")
        .classList.add("hidden");

    document
        .getElementById("settings")
        .classList.add("hidden");
}


// EDIT PROFILE
function editProfile() {

    let newName =
        prompt("Enter your new username:");

    if (newName !== null &&
        newName.trim() !== "") {

        document.getElementById("displayUsername")
            .textContent = newName;

        document.getElementById("profileUsername")
            .textContent = newName;
    }
}


// DARK MODE
function darkMode() {

    document.body.classList.toggle("dark");

}


// LOGOUT
function logout() {

    document.getElementById("dashboard")
        .classList.add("hidden");

    document.getElementById("loginSection")
        .classList.remove("hidden");

    document.getElementById("username").value = "";

    document.getElementById("password").value = "";
}