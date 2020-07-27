const returnBtn = document.querySelector('#return_btn');

export function toggleTimer() {

    firebase.auth().onAuthStateChanged(user => {

        if (!user) {
            // No user is signed in.
            const timer = document.querySelector('.grid-item-2_timer');
            const toggleBtn = document.querySelector('#toggle_btn');
            const authForm = document.querySelector('.grid-item-2_auth-form');

            const toggleTimer = getComputedStyle(timer);
            const getTimerDisplay = toggleTimer.display;

            switch (getTimerDisplay) {
                case 'flex':
                    timer.setAttribute('style', 'display: none;');
                    toggleBtn.setAttribute('style', 'display: none');
                    returnBtn.setAttribute('style', 'display: flex');
                    authForm.setAttribute('style', 'display: flex;');
                    break;
                case 'none':
                    timer.setAttribute('style', 'display: flex;');
                    toggleBtn.setAttribute('style', 'display: flex')
                    returnBtn.setAttribute('style', 'display: none'); 0
                    authForm.setAttribute('style', 'display: none;');
                    break;
            }

        } else {
            // // User is signed in.

            // const toggleBtn = getComputedStyle(timer);
            // const getTimerDisplay = toggleTimer.display;

            const toggleBtn = document.querySelector('#toggle_btn');
            toggleBtn.setAttribute('style', 'display: none');

            const returnBtn = document.querySelector('#return_btn');
            returnBtn.setAttribute('style', 'display: flex');

            const timeForm = document.querySelector('.grid-item-3__timer-form');
            timeForm.setAttribute('style', 'display: flex');

            const grid = document.querySelector('.grid');
            grid.setAttribute('style', 'grid-template-rows: 0.5fr 1fr 2fr 0.3fr');
            // const toggleBtn = document.querySelector('.grid-item-3_div');
            // toggleBtn.setAttribute('style', 'display: none');
        }
    });
}

returnBtn.addEventListener('click', () => {
    returnToMainDeskop();

});
export function returnToMainDeskop() {
    // toggleTimer();
    const toggleBtn = document.querySelector('#toggle_btn');
    toggleBtn.setAttribute('style', 'display: flex');

    const returnBtn = document.querySelector('#return_btn');
    returnBtn.setAttribute('style', 'display: none');

    const timeForm = document.querySelector('.grid-item-3__timer-form');
    timeForm.setAttribute('style', 'display: none');

    const authForm = document.querySelector('.grid-item-2_auth-form');
    authForm.setAttribute('style', 'display: none');

    const timer = document.querySelector('.grid-item-2_timer');
    timer.setAttribute('style', 'display: flex');

    const grid = document.querySelector('.grid');
    grid.setAttribute('style', 'grid-template-rows: 0.5fr 1fr 1fr 0.3fr');

}

