// script.js
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function fadeInOnScroll() {
    var elements = document.querySelectorAll('.fade-in-element');
    elements.forEach(function(element) {
      if (isElementInViewport(element)) {
        setTimeout(function() {
          element.classList.add('fade-in');
        }, 200); // Delay 200ms sebelum menambahkan kelas "fade-in"
      }
    });
  }
  
  // Memanggil fungsi fadeInOnScroll() saat halaman di-scroll
  window.addEventListener('scroll', fadeInOnScroll);
  window.addEventListener('load', fadeInOnScroll); // Untuk memastikan elemen muncul saat pertama kali halaman dimuat
  