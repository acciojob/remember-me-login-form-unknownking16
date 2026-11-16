//your JS code here. If required.
const loginForm = document.getElementById("loginForm");

const username = document.getElementById("username");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");

const existing = document.getElementById("existing");

        
const savedUsername = localStorage.getItem("username");
const savedPassword = localStorage.getItem("password");

if (savedUsername && savedPassword) {
     existing.style.display = "block";
}

        
loginForm.addEventListener("submit", function(e) {

            e.preventDefault();

            const user = username.value;
            const pass = password.value;

            alert("Logged in as " + user);

            if (checkbox.checked) {

                localStorage.setItem("username", user);
                localStorage.setItem("password", pass);

                existing.style.display = "block";

            } else {

                localStorage.removeItem("username");
                localStorage.removeItem("password");

                existing.style.display = "none";
            }
});

        
existing.addEventListener("click", function() {

            const savedUser = localStorage.getItem("username");

            if (savedUser) {
                alert("Logged in as " + savedUser);
            }

});
