// Highlight Current Page link in the Navbar
document.addEventListener('DOMContentLoaded', () => {
  const $navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-link'), 0);
  
  if ($navLinks.length > 0) {
    $navLinks.forEach( el => {
      if(window.location.pathname == el.getAttribute("href")){
         el.className += " current";
      }
    })
  }
});
// End of Highlight Current Page link in the Navbar



  const btn = document.getElementById('hamburgerBtn');
  const menu = document.getElementById('mobileMenu');
  const icon = document.getElementById('hamburgerIcon');

  btn.addEventListener('click', () => {
    const isOpen = !menu.classList.contains('hidden');
    menu.classList.toggle('hidden');
    btn.setAttribute('aria-expanded', String(!isOpen));
    icon.className = isOpen ? 'ti ti-menu-2 text-[22px]' : 'ti ti-x text-[22px]';
  });