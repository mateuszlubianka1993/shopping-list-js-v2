document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.querySelector('#signup-form');
    signupForm.addEventListener('submit', addUser);

    const logoutBtn = document.querySelector('#logout-btn');
    logoutBtn.addEventListener('click', logOutUser);

    const loginForm = document.querySelector('#login-form');
    loginForm.addEventListener('submit', logInUser);
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
        console.log('user signed out');
        $('#logout-modal').modal('hide');
    });
};

const logInUser = (e) => {
    e.preventDefault();

    const email = document.querySelector('#login-email').value;
    const password = document.querySelector('#login-password').value;

    auth.signInWithEmailAndPassword(email, password).then(() => {
        console.log('user logged in');
        const loginForm = document.querySelector('#login-form');
        $('#login-modal').modal('hide');
        loginForm.reset();
    });
};
