// import { firebaseConfig } from './../environments/environmnet.js';
// import { toggleTimer } from './app.js';
// firebase.initializeApp(firebaseConfig);

class User {
    constructor(login, password) {
        this.login = login,
            this.password = password
    }
}

document.querySelector('form').addEventListener('submit', event => {

    event.preventDefault();

    const login = document.getElementById('inputEmail').value;
    const password = document.getElementById('inputPassword').value;
    const user = new User(login, password);

    // const groupBtnHours = document.querySelector('.group-hours');

    firebase.auth().signInWithEmailAndPassword(user.login, user.password)
        .then(response => {
            console.log('res', response);
            window.alert("Pomyślnie zalogowano.");

            const form = document.querySelector('form');
            form.setAttribute('style', 'display: none;');

            const timer = document.querySelector('.grid-item-2_timer');
            timer.setAttribute('style', 'display: flex');

            const toggleBtnDiv = document.querySelector('.grid-item-3_div');
            toggleBtnDiv.setAttribute('style', 'display: none');

            const groupBtnDays = document.querySelector('.group-days');
            groupBtnDays.setAttribute('style', 'display: flex');

        })
        .catch(err => {
            window.alert("Wystąpił błąd")
        });
});


document.addEventListener('DOMContentLoaded', () => {
    checkUser();
});

const logoutBtn = document.querySelector('.div_logout-btn');
logoutBtn.addEventListener('click', () =>
    firebase.auth().signOut()
        .then(() => {
            // Sign-out successful.
            logoutBtn.setAttribute('style', 'display: none');
            window.alert("Zostałeś pomyślnie wylogowany")
        }).catch(() => {
            // An error happened.
            window.alert("Błąd podczas wylogowywania.")
        })
);

function checkUser() {
    firebase.auth().onAuthStateChanged(user => {
        if (!user) {
            // User is signed in.
            logoutBtn.setAttribute('style', 'display: none');
        }
        else {
            // No user is signed in.
            logoutBtn.setAttribute('style', 'display: block');

        }
    })
}

