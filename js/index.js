document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.addEventListener('click', function () {
            $(`${link.dataset.target}`).modal('toggle');
        });
    });

});

const list = document.querySelector('.products-list');
const displayItems = (items) => {
    let domElement = '';
    items.forEach(item => {
        const product = item.data();
        const listItem = `
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        ${product.name}
                    <span class="justify-content-between align-items-center">
                        <span class="badge badge-primary badge-pill">${product.quantity}</span>
                        <span class="badge badge-primary badge-pill">${product.unit}</span>
                    </span>
                    <button type="button" class="btn btn-primary">Bought</button>
                </li>
            `;
        domElement += listItem;
    });
    list.innerHTML = domElement;
};