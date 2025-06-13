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




//typing effect for about page
document.addEventListener("DOMContentLoaded", () => {
  const text = "Design. Code. Create. Repeat.";
  const typingText = document.getElementById("typing-text");
  let index = 0;
  let deleting = false;

  function typeLoop() {
    if (!deleting) {
      typingText.textContent += text.charAt(index);
      index++;
      if (index === text.length) {
        deleting = true;
        setTimeout(typeLoop, 1000); // pause before deleting
        return;
      }
    } else {
      typingText.textContent = typingText.textContent.slice(0, -1);
      index--;
      if (index === 0) {
        deleting = false;
      }
    }
    setTimeout(typeLoop, deleting ? 50 : 100);
  }

  typeLoop();
});

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