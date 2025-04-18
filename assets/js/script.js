//  Navbar Section----------

     // Sticky Navbar--------
     document.addEventListener("DOMContentLoaded", function() {
         const header = document.querySelector('header');
         window.addEventListener("scroll", function() {
             header.classList.toggle("sticky", window.scrollY > 5);
         });
     });
  
  
  // Toggle Icon Navbar------
  let menuIcon = document.querySelector("#menu-icon");
  let navlist = document.querySelector(".navlist");
  
  menuIcon.onclick = () => {
      menuIcon.classList.toggle("bx-x");
      navlist.classList.toggle("open"); 
  }
  
  
  // Close the menu when a nav link is clicked
  navlist.querySelectorAll("a").forEach(link => {
      link.onclick = () => {
          menuIcon.classList.remove("bx-x");
          navlist.classList.remove("open");
      };
  });
 
// Back to Top Button
const backToTopBtn = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.style.display = 'flex';
  } else {
    backToTopBtn.style.display = 'none';
  }
});
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});