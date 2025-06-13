// List of blog pages in order
const blogPages = [
  "week-1.html",
  "week-2.html",
  "week-3.html",
  "week-4.html",
  "week-7.html",
  "week-9.html",
  "week-10.html",
  "week-11.html",
  "week-12.html",
  "week-13.html"
  // Add more as needed
];

// Get current page filename
const currentPage = window.location.pathname.split("/").pop();

// Find current index in the blogPages array
const currentIndex = blogPages.indexOf(currentPage);

// Get buttons
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Enable/disable and set up navigation
if (prevBtn && currentIndex > 0) {
  prevBtn.onclick = () => {
    window.location.href = blogPages[currentIndex - 1];
  };
} else if (prevBtn) {
  prevBtn.disabled = true;
}

if (nextBtn && currentIndex < blogPages.length - 1) {
  nextBtn.onclick = () => {
    window.location.href = blogPages[currentIndex + 1];
  };
} else if (nextBtn) {
  nextBtn.disabled = true;
}