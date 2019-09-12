document.addEventListener('DOMContentLoaded', function () {
    auth.onAuthStateChanged(user => {
        if (user) {
            database.collection('products').onSnapshot(snapshot => {
                displayItems(snapshot.docs);
                navDisplay(user);
                // console.log(snapshot.docs)
            },err => {
                console.log(err.message);
            });
        } else {
            displayItems([]);
            navDisplay();
        }
    });
    
    const signupForm = document.querySelector('#signup-form');
    signupForm.addEventListener('submit', addUser);

    const logoutBtn = document.querySelector('#logout-btn');
    logoutBtn.addEventListener('click', logOutUser);

    const loginForm = document.querySelector('#login-form');
    loginForm.addEventListener('submit', logInUser);

    const newProductForm = document.querySelector('#newproduct-form');
    newProductForm.addEventListener('submit', addProduct);
    
});

const addUser = (e) => {
    e.preventDefault();

    const email = document.querySelector('#signup-email').value;
    const password = document.querySelector('#signup-password').value;

    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user);
        const signupForm = document.querySelector('#signup-form');
        $('#signup-modal').modal('hide');
        signupForm.reset();
    });
};

const logOutUser = () => {
    auth.signOut().then(() => {
        $('#logout-modal').modal('hide');
    });
};

const logInUser = (e) => {
    e.preventDefault();

    const email = document.querySelector('#login-email').value;
    const password = document.querySelector('#login-password').value;

    auth.signInWithEmailAndPassword(email, password).then(() => {
        const loginForm = document.querySelector('#login-form');
        $('#login-modal').modal('hide');
        loginForm.reset();
    });
};

const addProduct = (e) => {
    e.preventDefault();

    database.collection('products').add({
        name: document.querySelector('#product-name').value,
        quantity: document.querySelector('#product-quantity').value,
        unit: document.querySelector('#product-unit').value
    }).then(() => {
        const newProductForm = document.querySelector('#newproduct-form');
        $('#newproduct-modal').modal('hide');
        newProductForm.reset();
    });
};

const deleteProduct = (e) => { 
    productId = e.target.parentElement.getAttribute('data-id');
    database.collection('products').doc(productId).delete();
};
