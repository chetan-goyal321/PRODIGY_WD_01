// Change navigation menu style on scroll
window.onscroll = function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#333'; // Change background color on scroll
        navbar.style.color = '#fff'; // Change font color on scroll
    } else {
        navbar.style.backgroundColor = '#007bff'; // Revert back to initial background color
        navbar.style.color = '#fff'; // Revert back to initial font color
    }
};

// Change menu item style on hover
const menuItems = document.querySelectorAll('nav ul li a');
menuItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.color = '#ffd700'; // Change font color on hover
    });
    item.addEventListener('mouseleave', function() {
        this.style.color = 'inherit'; // Revert back to initial font color on hover out
    });
});
