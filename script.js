window.addEventListener("scroll", function () {
    const button = document.getElementById("backToTop");
    if (window.scrollY > 300) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("backToTop");
    button.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});