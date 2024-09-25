document.addEventListener('DOMContentLoaded', function() {

    // navigation bar toggle
    const navbarToggler = document.getElementById('navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar__collapse');
    const navbar = document.querySelector('.navbar');  

    navbarToggler.addEventListener('change', function() {
      navbarCollapse.style.display = this.checked ? 'block' : 'none';
      navbar.style.backgroundColor = this.checked ? '#A9614F' : 'transparent';
      navbar.style.height = this.checked ? '100vh' : '';
    })

    const menuItems = document.querySelector('.nav__link');
    const menuItemArray = Array.from(menuItems);

    menuItemArray.forEach(item => {
      item.addEventListener('click', () => {
        navbarCollapse.style.display = 'none';
        navbar.style.backgroundColor = 'transparent';
      });
    });
  });

    // const header = document.querySelector('header');
    // const section = document.querySelector('section');
  
    // if (section) {
    //   section.addEventListener('scroll', function() {
    //     if (section.scrollTop > 0) {
    //       header.style.backgroundColor = '#000';
    //     } else {
    //       header.style.backgroundColor = 'transparent';
    //     }
    //   });
    // } else {
    //   console.error('.section element not found.');
    // }
