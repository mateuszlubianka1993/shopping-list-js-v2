document.addEventListener('DOMContentLoaded', function () {
    auth.onAuthStateChanged(user => {
        if(user) {
            console.log('logged in', user);
        } else {
            console.log('logged out');
        }
    });

    const signupForm = document.querySelector('#signup-form');
    signupForm.addEventListener('submit', addUser);

    const logoutBtn = document.querySelector('#logout-btn');
    logoutBtn.addEventListener('click', logOutUser);

    const loginForm = document.querySelector('#login-form');
    loginForm.addEventListener('submit', logInUser);

    database.collection('products').get().then(snapshot => {
        displayItems(snapshot.docs);
    });
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
