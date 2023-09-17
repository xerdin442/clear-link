document.querySelector('.faq-container').addEventListener('click', function (event) {
    if (event.target.classList.contains('toggle-button')) {
        const button = event.target;
        const panel = button.closest('.faq-item').querySelector('.panel-content');

        // Toggle the visibility of the panel
        panel.classList.toggle('hidden');
    }
});
