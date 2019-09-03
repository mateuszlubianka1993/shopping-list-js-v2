document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.addEventListener('click', function () {
            $(`${link.dataset.target}`).modal('toggle');
        });
    });
});
