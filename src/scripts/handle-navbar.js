import { toggleTimer } from "./handle-btns.js";
const timeForm = document.querySelector('.grid-item-3__timer-form');
const timer = document.querySelector('.grid-item-2_timer');
const authForm = document.querySelector('.grid-item-2_auth-form');
const navLogin = document.querySelector('.nav-menu__login');

navLogin.addEventListener('click', () => {
    navLogin.setAttribute('style', 'display: none');
    navReturn.setAttribute('style', 'display: block');

    authForm.setAttribute('style', 'display: flex;');
    
    timer.setAttribute('style', 'display: none');
})

const navReturn = document.querySelector(".nav-menu__return");
navReturn.addEventListener('click', () => {
    navReturn.setAttribute('style', 'display: none');
    timeForm.setAttribute('style', 'display: none');
    timer.setAttribute('style', 'display: block');
    authForm.setAttribute('style', 'display: none;');

    firebase.auth().onAuthStateChanged(user => {
        if (!user) {
            navLogin.setAttribute('style', 'display: block');
            navMenuChangeTimer.setAttribute('style', 'display: none');
        } else {
            navMenuChangeTimer.setAttribute('style', 'display: block')
        }
    })
})

const navMenuChangeTimer = document.querySelector(".nav-menu__change-time");
navMenuChangeTimer.addEventListener('click', () => {
    navMenuChangeTimer.setAttribute('style', 'display: none');
    navLogin.setAttribute('style', 'display: none');
    navReturn.setAttribute('style', 'display: block');
    timeForm.setAttribute('style', 'display: flex');
    // toggleTimer();
    

})

