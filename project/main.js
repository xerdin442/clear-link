document.querySelector('.faq-container').addEventListener('click', function (event) {
    if (event.target.classList.contains('toggle-button')) {
        const button = event.target;
        const panel = button.closest('.faq-item').querySelector('.panel-content');

        // Toggle the visibility of the panel
        panel.classList.toggle('hidden');
    }
});


const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const menuOpenIcon = document.getElementById('menu-open');
const menuCloseIcon = document.getElementById('menu-close');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('-translate-x-full');
    menuOpenIcon.classList.toggle("hidden");
    menuCloseIcon.classList.toggle("hidden");
});
