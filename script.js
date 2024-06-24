document.addEventListener("DOMContentLoaded", (event) => {
  const menuToggle = document.getElementById("menu-toggle");
  const closeMenu = document.getElementById("close-menu");
  const mobileMenu = document.getElementById("mobile-menu");
  const splineViewer = document.querySelector("spline-viewer");
  const mobileGif = document.getElementById("mobile-gif");

  function handleResize() {
    if (window.innerWidth < 768) {
      splineViewer.style.display = "none";
      mobileGif.style.display = "block";
      if (!mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("hidden");
        mobileMenu.classList.remove("flex");
      }
    } else {
      splineViewer.style.display = "block";
      mobileGif.style.display = "none";
      mobileMenu.classList.add("hidden");
      mobileMenu.classList.remove("flex");
    }
  }

  handleResize();
  window.addEventListener("resize", handleResize);

  menuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
  });

  closeMenu.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("flex");
  });

  document.addEventListener("click", (e) => {
    if (!mobileMenu.contains(e.target) && e.target !== menuToggle) {
      mobileMenu.classList.add("hidden");
      mobileMenu.classList.remove("flex");
    }
  });

  mobileMenu.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  const menuItems = mobileMenu.querySelectorAll("a");
  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      mobileMenu.classList.remove("flex");
    });
  });
});
