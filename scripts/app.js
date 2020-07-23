import {pushData} from "./database.js";


const consultingDay = document.querySelector('.consulting-day');
const consultingHour = document.querySelector('.consulting-hour');

const toggleBtn = document.querySelector('.toggle-btn')
toggleBtn.addEventListener('click', () => {
    toggleTimer();
})

export function toggleTimer() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            console.log(user)
            const toggleBtnDiv = document.querySelector('.grid-item-3_div');
            toggleBtnDiv.setAttribute('style', 'display: none');


            const groupBtnDays = document.querySelector('.group-days');
            groupBtnDays.setAttribute('style', 'display: flex');
        } else {
            // No user is signed in.
            const timer = document.querySelector('.grid-item-2_timer')
            const form = document.querySelector('form')
            const toggleTimer = getComputedStyle(timer);
            const getTimerDisplay = toggleTimer.display;
            switch (getTimerDisplay) {
                case 'flex':
                    timer.setAttribute('style', 'display: none;');
                    form.setAttribute('style', 'display: flex;');
                    // login.innerHTML = 'Wróc';
                    break;
                case 'none':
                    timer.setAttribute('style', 'display: flex;');
                    form.setAttribute('style', 'display: none;');
                    // login.innerHTML = 'Zaloguj';
                    break;
            }
        }
    });

}
const groupDays = document.querySelector('.group-days');
groupDays.addEventListener('click', (e) => {
    if (e.target.classList.contains('group-btn_btn')) {
        consultingDay.innerHTML = e.target.innerText;
        groupDays.setAttribute('style', 'display: none;');
        groupHours.setAttribute('style', 'display: flex;');
    };
});

const groupHours = document.querySelector('.group-hours');
groupHours.addEventListener('click', (e) => {
    if (e.target.classList.contains('group-btn_btn')) {
        consultingHour.innerHTML = e.target.innerText;
        groupHours.setAttribute('style', 'display: none;');

        const toggleBtnDiv = document.querySelector('.grid-item-3_div');
        toggleBtnDiv.setAttribute('style', 'display: flex');
        updateConsultingTime()
        const selectedDay = consultingDay.innerHTML;
        const selectedHour = e.target.innerText;
        pushData(selectedDay, selectedHour);
    };
});

function updateConsultingTime() {
    const consultingTime = document.querySelector('.consulting-change-time');

    const now = new Date();
    const getMonth = "0" + (now.getMonth() + 1);
    const getDay = "0" + now.getDate();

    const getHours = "0" + (now.getHours());
    const getMinutes = "0" + (now.getMinutes());

    const date = `${getDay.slice(-2)}:${(getMonth.slice(-2))}:${now.getFullYear()}`;
    const time = `${getHours.slice(-2)}:${getMinutes.slice(-2)}`;


    const dateTime = `o godzinie ${time}, dnia ${date}r.`
    
    consultingTime.innerHTML = dateTime;
};

// function setData(selectedDay, selectedHour) {
//     const now = new Date();
//     db.collection("data").doc("time").set({
//         day: selectedDay,
//         hour: selectedHour,
//         created_at: firebase.firestore.Timestamp.fromDate(now)
//     })
//         .then(function () {
//             console.log("Document successfully written!");
//         })
//         .catch(function (error) {
//             console.error("Error writing document: ", error);
//         });
// }
