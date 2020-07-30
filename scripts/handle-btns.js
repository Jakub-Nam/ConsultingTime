const toggleBtn = document.querySelector('#toggle_btn');
const returnBtn = document.querySelector('#return_btn');
const timeForm = document.querySelector('.grid-item-3__timer-form');
const grid = document.querySelector('.grid');

const authForm = document.querySelector('.grid-item-2_auth-form');
const timer = document.querySelector('.grid-item-2_timer');

const divToggleBtn = document.querySelector('.div__toggle-btn')
divToggleBtn.addEventListener('click', () => {
    toggleTimer();
})

export function toggleTimer() {

    firebase.auth().onAuthStateChanged(user => {

        if (!user) {
            // No user is signed in.

            const toggleTimerStyles = getComputedStyle(timer);
            const toggleTimerDisplay = toggleTimerStyles.display;

            switch (toggleTimerDisplay) {
                case 'flex':
                    timer.setAttribute('style', 'display: none;');
                    toggleBtn.setAttribute('style', 'display: none');
                    returnBtn.setAttribute('style', 'display: flex');
                    authForm.setAttribute('style', 'display: flex;');
                    break;
                case 'none':
                    timer.setAttribute('style', 'display: flex;');
                    toggleBtn.setAttribute('style', 'display: flex')
                    returnBtn.setAttribute('style', 'display: none');
                    authForm.setAttribute('style', 'display: none;');
                    break;
            }

        } else {
            // User is signed in.

            // const returnBtn = document.querySelector('#return_btn');
            const returnBtnStyles = getComputedStyle(returnBtn);
            const returnBtnDisplay = returnBtnStyles.display;

            switch (returnBtnDisplay) {
                case 'flex':
                    toggleBtn.setAttribute('style', 'display: flex');
                    returnBtn.setAttribute('style', 'display: none');
                    timeForm.setAttribute('style', 'display: none');
                    grid.setAttribute('style', 'grid-template-rows: 0.5fr 1fr 1fr 0.3fr');

                    authForm.setAttribute('style', 'display: none');
                    timer.setAttribute('style', 'display: flex');

                    break;
                case 'none':
                    toggleBtn.setAttribute('style', 'display: none');
                    returnBtn.setAttribute('style', 'display: flex');
                    timeForm.setAttribute('style', 'display: flex');
                    grid.setAttribute('style', 'grid-template-rows: 0.5fr 1fr 2.2fr 0.3fr');
                    break;
            }
        }
    });
}

export function returnToMainDeskop() {
    toggleTimer();
}

returnBtn.addEventListener('click', () => {
    returnToMainDeskop();

});

