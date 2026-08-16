// ========================================
// LOGIN DETAILS
// ========================================

let correctUsername = "roshan";
let correctPassword = "0000";


// ========================================
// LOGIN
// ========================================

function login() {

    let username =
        document.getElementById("username").value.trim();

    let password =
        document.getElementById("password").value;

    let message =
        document.getElementById("loginMessage");


    // WRONG USERNAME / PASSWORD

    if (
        username !== correctUsername ||
        password !== correctPassword
    ) {

        message.style.color = "red";

        message.textContent =
            "Wrong Username or Password! ❌";

        return;
    }


    // CORRECT LOGIN

    message.style.color = "lightgreen";

    message.textContent =
        "Login Successful!";


    // POPUP

    alert(
        "Login Successful! ✅\n\n" +
        "Welcome to My Portfolio! 🎉"
    );


    // OPEN PORTFOLIO

    window.location.href = "port.html";
}


// ========================================
// SHOW RESET PAGE
// ========================================
function showReset() {

    document.getElementById("loginSection").style.display = "none";

    document.getElementById("resetSection").style.display = "flex";
}


// ========================================
// BACK TO LOGIN
// ========================================

function showLogin() {

    document.getElementById("resetSection").style.display = "none";

    document.getElementById("loginSection").style.display = "flex";


    // Clear reset fields

    document.getElementById("resetUsername").value = "";

    document.getElementById("newPassword").value = "";

    document.getElementById("confirmPassword").value = "";

    document.getElementById("resetMessage").textContent = "";
}


// ========================================
// RESET PASSWORD
// ========================================

function resetPassword() {

    let username =
        document
            .getElementById("resetUsername")
            .value
            .trim();

    let newPassword =
        document
            .getElementById("newPassword")
            .value;

    let confirmPassword =
        document
            .getElementById("confirmPassword")
            .value;

    let message =
        document.getElementById("resetMessage");


    // CHECK USERNAME

    if (username !== correctUsername) {

        message.style.color = "red";

        message.textContent =
            "Username not found! ❌";

        return;
    }


    // CHECK EMPTY PASSWORD

    if (
        newPassword === "" ||
        confirmPassword === ""
    ) {

        message.style.color = "orange";

        message.textContent =
            "Please enter both passwords.";

        return;
    }


    // CHECK PASSWORD MATCH

    if (newPassword !== confirmPassword) {

        message.style.color = "red";

        message.textContent =
            "Passwords do not match! ❌";

        return;
    }


    // UPDATE PASSWORD

    correctPassword = newPassword;


    message.style.color = "lightgreen";

    message.textContent =
        "Password reset successfully! ✅";


    // POPUP

    alert(
        "Password Reset Successful! ✅"
    );


    // GO BACK TO LOGIN

    setTimeout(function () {

        showLogin();

    }, 500);
}
function showReset() {

    document.getElementById("loginSection").style.display = "none";

    document.getElementById("resetSection").style.display = "flex";
}


// ========================================
// DASHBOARD HOME
// ========================================

function showDashboard() {

    hidePages();

    document
        .getElementById("dashboardHome")
        .classList.remove("hidden");
}


// ========================================
// PROFILE
// ========================================

function showProfile() {

    hidePages();

    document
        .getElementById("profile")
        .classList.remove("hidden");
}


// ========================================
// SETTINGS
// ========================================

function showSettings() {

    hidePages();

    document
        .getElementById("settings")
        .classList.remove("hidden");
}


// ========================================
// HIDE DASHBOARD PAGES
// ========================================

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


// ========================================
// EDIT PROFILE
// ========================================

function editProfile() {

    let newName =
        prompt("Enter your new username:");

    if (
        newName !== null &&
        newName.trim() !== ""
    ) {

        document
            .getElementById("displayUsername")
            .textContent = newName;

        document
            .getElementById("profileUsername")
            .textContent = newName;
    }
}


// ========================================
// DARK MODE
// ========================================

function darkMode() {

    document.body.classList.toggle("dark");
}


// ========================================
// LOGOUT
// ========================================

function logout() {

    document
        .getElementById("dashboard")
        .classList.add("hidden");

    document
        .getElementById("loginSection")
        .classList.remove("hidden");


    document.getElementById("username").value = "";

    document.getElementById("password").value = "";
}


// ========================================
// REVEAL MY DATA
// ========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const contactButton =
            document.getElementById("RevealButton");

        const displayDiv =
            document.getElementById("displayDiv");


        // Only run if elements exist

        if (
            contactButton &&
            displayDiv
        ) {

            contactButton.addEventListener(
                "click",
                function () {

                    displayDiv.innerHTML =
                        "<b>Name</b>: Roshan Melvin C";

                    displayDiv.innerHTML +=
                        "<br><b>Email</b>: roshanmelvinc@gmail.com";

                    displayDiv.innerHTML +=
                        "<br><b>Phone</b>: 6369646776";

                    displayDiv.innerHTML +=
                        "<br><b>Education</b>: B.E in Computer Science and Engineering";

                    displayDiv.innerHTML +=
                        "<br><b>Language Known</b>: HTML, CSS, JavaScript, Python";

                    displayDiv.innerHTML +=
                        "<br><b>Tools</b>: Visual Studio Code, GitHub, Figma, Canva, Miro";

                    displayDiv.innerHTML +=
                        "<br><b>CGPA</b>: 7.45";

                    displayDiv.innerHTML +=
                        "<br><b>Interest</b>: Designing, coding, and exploring new technologies";

                    displayDiv.innerHTML +=
                        "<br><b>College Name</b>: Asan College of Engineering and Technology";

                    displayDiv.innerHTML +=
                        "<br><b>Address</b>: Chennai, Tamil Nadu, India";
                }
            );
        }

    }
);