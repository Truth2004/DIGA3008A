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