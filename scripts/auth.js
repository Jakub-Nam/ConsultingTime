import { returnToMainDeskop } from "./handle-btns.js";
import { showAlert } from "./app.js";

class User {
    constructor(login, password) {
        this.login = login,
            this.password = password
    }
}

document.addEventListener('DOMContentLoaded', () => {
    checkUser();
});

function checkUser() {
    firebase.auth().onAuthStateChanged(user => {
        const logged = document.querySelector('.logged')
        if (!user) {

            // User is signed in.
            Array.from(document.querySelectorAll('.logged'))
                .forEach(btn => {
                    btn.style.display = 'none';
                });

        }
        else {
            // No user is signed in.
            // logoutBtn.setAttribute('style', 'display: block');
            Array.from(document.querySelectorAll('.logged'))
                .forEach(btn => {
                    btn.style.display = 'block';
                });
            const navLogin = document.querySelector('.nav-login-menu')
            navLogin.setAttribute('style', 'display: none');

        }
    })
}

document.querySelector('.grid-item-2_auth-form').addEventListener('submit', event => {

    event.preventDefault();

    const login = document.getElementById('inputEmail').value;
    const password = document.getElementById('inputPassword').value;
    const user = new User(login, password);

    firebase.auth().signInWithEmailAndPassword(user.login, user.password)
        .then(response => {
            showAlert("Pomyślnie zalogowano.")

            const form = document.querySelector('form');
            form.setAttribute('style', 'display: none;');

            const timer = document.querySelector('.grid-item-2_timer');
            timer.setAttribute('style', 'display: flex');

            const comment = document.querySelector('.item-3__comment');
            comment.setAttribute('style', 'display: block;');

            const toggleBtn = document.querySelector('#toggle_btn');
            toggleBtn.setAttribute('style', 'display: none');

            const navReturn = document.querySelector(".nav-return");
            navReturn.setAttribute('style', 'display: none')

            const grid = document.querySelector('.grid');
            grid.setAttribute('style', 'grid-template-rows: 0.5fr 1fr 1fr 0.3fr');

        })
        .catch(err => {
            showAlert("Nieprawidłowe dane")
        });
});

const logoutBtn = document.querySelector('.logout-btn');
logoutBtn.addEventListener('click', () =>
    logout()
);
const logoutA = document.querySelector('#a-logout');
logoutA.addEventListener('click', () =>
    logout()
);

function logout() {
    firebase.auth().signOut()
        .then(() => {
            returnToMainDeskop();
            showAlert("Zostałeś pomyślnie wylogowany")
        }).catch(() => {
            showAlert("Błąd podczas wylogowywania.")
        })
}



