import { toggleTimer } from "./handle-btns.js";
const timeForm = document.querySelector('.grid-item-3__timer-form');

const navLogin = document.querySelector('.nav-login-menu');
navLogin.addEventListener('click', () => {
    navLogin.setAttribute('style', 'display: none');
    navReturn.setAttribute('style', 'display: block');
    toggleTimer();
})

const navReturn = document.querySelector(".nav-return");
navReturn.addEventListener('click', () => {
    navReturn.setAttribute('style', 'display: none');
    timeForm.setAttribute('style', 'display: none');

    toggleTimer()
    firebase.auth().onAuthStateChanged(user => {
        if (!user) {
            navLogin.setAttribute('style', 'display: block');
            navChangeTimer.setAttribute('style', 'display: none');
        } else {
            navChangeTimer.setAttribute('style', 'display: block')
        }
    })
})

const navChangeTimer = document.querySelector(".nav-change-timer");
navChangeTimer.addEventListener('click', () => {
    navChangeTimer.setAttribute('style', 'display: none');
    navLogin.setAttribute('style', 'display: none');
    navReturn.setAttribute('style', 'display: block');
    timeForm.setAttribute('style', 'display: flex');
    toggleTimer();

})

