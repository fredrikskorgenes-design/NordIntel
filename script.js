// SCROLL REVEAL
window.addEventListener("scroll", function () {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((reveal) => {
    const windowHeight = window.innerHeight;
    const revealTop = reveal.getBoundingClientRect().top;

    if (revealTop < windowHeight - 100) {
      reveal.classList.add("active");
    }
  });
});

// CURSOR GLOW
const glow = document.createElement("div");
glow.classList.add("cursor-glow");
document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

// PAGE TRANSITION
const transition = document.createElement("div");
transition.classList.add("page-transition");
document.body.appendChild(transition);

document.body.classList.add("fade-in");

document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");

    if (href && !href.startsWith("#")) {
      e.preventDefault();
      transition.classList.add("active");

      setTimeout(() => {
        window.location = href;
      }, 600);
    }
  });
});
