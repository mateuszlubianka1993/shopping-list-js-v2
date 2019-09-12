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
    if (items.length > 0) {
        
        const listItems = items.map(item => {
            const product = item.data();
            const li = document.createElement('li');
            const btn = document.createElement('button');
            const name = document.createElement('p');
            const detail = document.createElement('span');

            li.setAttribute('class', 'list-group-item d-flex justify-content-between align-items-center');
            li.setAttribute('data-id', item.id);
            btn.setAttribute('class', 'btn btn-primary delete-btn');
            detail.setAttribute('class', 'justify-content-between align-items-center');

            btn.addEventListener('click', deleteProduct);

            detail.innerHTML = `
                <span class="badge">${product.quantity} ${product.unit}</span>   
            `;
            name.innerHTML = product.name;
            btn.innerText = 'Bought';

            li.appendChild(name);
            li.appendChild(detail);
            li.appendChild(btn);
            return listItem = li;
        });
        // console.log(listItems);
        list.innerHTML ='';
        listItems.forEach(item => {
            list.appendChild(item);
        })
    } else {
        list.innerHTML = `
                <h3 class="text-center">
                    There is nothing
                    <small class="text-muted">Log in and add new products.</small>
                </h3>
            `;
    }
};

const navDisplay = (user) => {
    const loggedNav = document.querySelectorAll('.logged');
    const notLoggedNav = document.querySelectorAll('.not-logged');
    const userName = document.querySelector('.user-name');

    if(user) {
        loggedNav.forEach(link => link.style.display = 'block');
        notLoggedNav.forEach(link => link.style.display = 'none');
        userName.innerHTML = user.email;
    } else {
        loggedNav.forEach(link => link.style.display = 'none');
        notLoggedNav.forEach(link => link.style.display = 'block');
        userName.innerHTML = '';
    }
}; 
