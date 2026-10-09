document.addEventListener("DOMContentLoaded", () => {
    const year = document.getElementById("footer-year");

    if (year) {
        year.textContent = `© ${new Date().getFullYear()} · Static deployment demo`;
    }

    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.forEach((item) => item.classList.remove("active"));
            link.classList.add("active");
        });
    });
});