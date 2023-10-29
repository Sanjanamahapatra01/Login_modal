document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal")
    const signInForm = document.getElementById("signInForm")
    const registrationForm = document.getElementById("registrationForm")
    const toggleFormLink = document.getElementById("toggleForm")
    const closeModalBtn = document.getElementById("closeModalBtn")

    // Function to toggle between sign-in and registration forms
    function toggleForm() {
        if (signInForm.style.display === "block") {
            signInForm.style.display = "none"
            registrationForm.style.display = "block"
        } else {
            signInForm.style.display = "block"
            registrationForm.style.display = "none"
        }
    }

    signInLink.addEventListener("click", function () {
        toggleForm()
    })

    if (registrationLink) {
        registrationLink.addEventListener("click", function () {
            toggleForm()
        })
    }

    // Show the login modal when the page loads
    modal.style.display = "block" // Display the modal when the page loads

    closeModalBtn.addEventListener("click", function () {
        modal.style.display = "none"
    })

    const loginForm = document.getElementById("loginForm")

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault()
            alert("Login submitted!")
            modal.style.display = "none"
        })
    }

    const googleLoginBtn = document.getElementById("google-login")
    const facebookLoginBtn = document.getElementById("facebook-login")
    const linkedinLoginBtn = document.getElementById("linkedin-login")

    googleLoginBtn.addEventListener("click", function () {
        alert("Login with Google")
    })

    facebookLoginBtn.addEventListener("click", function () {
        alert("Login with Facebook")
    })

    linkedinLoginBtn.addEventListener("click", function () {
        alert("Login with LinkedIn")
    })
})
