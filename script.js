document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.block-title').forEach(title => {
        title.addEventListener('click', () => {
            const id = title.getAttribute('data-toggle');
            const body = document.getElementById(id);
            if (!body) return;

            const arrow = title.querySelector('.arrow');
            body.classList.toggle('collapsed');

            if (arrow) {
                arrow.textContent = body.classList.contains('collapsed') ? '↓' : '↑';
            }
        });
    });
});
