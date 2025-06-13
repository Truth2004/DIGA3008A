const sideNav = document.getElementById("sideNav");
const sideNavToggle = document.getElementById("sideNavToggle");

sideNavToggle.addEventListener("click", () => {
    sideNav.classList.toggle("open");
});

document.querySelectorAll("#sideNav a").forEach(link => {
    link.addEventListener("click", () => {
        sideNav.classList.remove("open");
    });
});