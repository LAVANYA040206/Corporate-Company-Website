// Welcome Message

window.onload = function () {
    alert("Welcome to ABC Technologies!");
};

// Contact Form

document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    if (form) {

        form.addEventListener("submit", function (event) {

            const name = document.querySelector('input[type="text"]');

            const email = document.querySelector('input[type="email"]');

            if (name.value.trim() === "") {

                alert("Please enter your name.");

                event.preventDefault();

                return;

            }

            if (email.value.trim() === "") {

                alert("Please enter your email.");

                event.preventDefault();

                return;

            }

            alert("Thank you! Your message has been submitted.");

        });

    }

});

// Scroll To Top Button

let button = document.createElement("button");

button.id = "topBtn";

button.innerHTML = "↑";

document.body.appendChild(button);

window.onscroll = function () {

    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {

        button.style.display = "block";

    } else {

        button.style.display = "none";

    }

};

button.onclick = function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});