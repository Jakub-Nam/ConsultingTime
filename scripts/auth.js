// import { firebaseConfig } from './../environments/environmnet.js';
import { toggleTimer } from './app.js';

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


    const groupBtnHours = document.querySelector('.group-hours');

    firebase.auth().signInWithEmailAndPassword(user.login, user.password)
        .then(response => {
            console.log('res', response);
            window.alert("Pomyślnie zalogowano.");

            const toggleBtnDiv = document.querySelector('.grid-item-3_div');
            toggleBtnDiv.setAttribute('style', 'display: none');


            const groupBtnDays = document.querySelector('.group-days');
            groupBtnDays.setAttribute('style', 'display: flex');
            // const gridItem2 = document.querySelector('.grid-item-2')
            // rowDays.setAttribute('style', 'display: flex;');
            // time.setAttribute('style', 'display:flex');
            // form.setAttribute('style', 'display:none');
            toggleTimer();
        })
        .catch(err => {
            window.alert("Wystąpił błąd:", err)
        });
});