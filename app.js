function openMobileNav() {
  // get nav-list element from HTML document
  let navList = document.querySelector('nav ul')
  console.log ('navList:', navList)
  // get hamburger element from HTML document
  let hamburger = document.querySelector('hamburger ')
  // toggle class to show nav mobile
  console.log('navList.classList', navList.classList)
  navList.classList.toggle('show-mobile-nav')
  // toggle class to show hamburger close when nav open