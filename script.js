document.addEventListener("DOMContentLoaded", function () {
  fetch("header.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("header-container").innerHTML = data;

      // Highlight current page
      const path = window.location.pathname.split("/").pop();
      const linkId = {
        "Publication.html": "link-publication",
        "successstory.html": "link-success",
        "portfolio.html": "link-portfolio",
        "fourbetters.html": "link-fourbetters",
        "index.html": "link-home",
      }[path];

      if (linkId) {
        const activeLink = document.getElementById(linkId);
        if (activeLink) {
          activeLink.classList.add("active");
        }
      }

      // Enable sidebar toggle
      window.toggleSidebar = function () {
        const sidebar = document.getElementById("sidebar");
        sidebar.classList.toggle("open");
      };
    });
});
