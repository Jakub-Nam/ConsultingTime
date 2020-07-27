import { pushData } from "./database.js";
import { toggleTimer } from "./handle-btns.js";

export const timerConsultingDay = document.querySelector('.consulting-day');
export const timerConsultingHours = document.querySelector('.consulting-hours');
export const lastChangeConsultingTime = document.querySelector('.consulting-change-time');

const toggleBtn = document.querySelector('.div_toggle-btn')
toggleBtn.addEventListener('click', () => {
    toggleTimer();
})
const example = flatpickr('#flatpickr');
// flatpickr('selector', options);
flatpickr('#flatpickr', {

    // A string of characters which are used to define how the date will be displayed in the input box. 
    dateFormat: 'd-m-Y'
});

document.querySelector("#startTime").addEventListener("input", function (e) {
    const reTime = /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/;
    const time = this.value;
    if (reTime.exec(time)) {
        const minute = Number(time.substring(3, 5));
        const hour = Number(time.substring(0, 2)) % 12 + (minute / 60);
        this.style.backgroundImage = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><circle cx='20' cy='20' r='18.5' fill='none' stroke='%23222' stroke-width='3' /><path d='M20,4 20,8 M4,20 8,20 M36,20 32,20 M20,36 20,32' stroke='%23bbb' stroke-width='1' /><circle cx='20' cy='20' r='2' fill='%23222' stroke='%23222' stroke-width='2' /></svg>"), url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M18.5,24.5 19.5,4 20.5,4 21.5,24.5 Z' fill='%23222' style='transform:rotate(${360 * minute / 60}deg); transform-origin: 50% 50%;' /></svg>"), url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M18.5,24.5 19.5,8.5 20.5,8.5 21.5,24.5 Z' style='transform:rotate(${360 * hour / 12}deg); transform-origin: 50% 50%;' /></svg>")`;
    }
});



const timerForm = document.querySelector('.grid-item-3__timer-form')
timerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const selectedDay = document.querySelector('#flatpickr');
    const selectedFromHour = document.querySelector('#startTime');
    const selectedToHour = document.querySelector('#endTime');
    pushData(selectedDay.value, selectedFromHour.value, selectedToHour.value);
    timerForm.reset();
});
// const groupDays = document.querySelector('.group-days');
// groupDays.addEventListener('click', (e) => {
//     if (e.target.classList.contains('group-btn_btn')) {
//         timerConsultingDay.innerHTML = e.target.innerText;
//         groupDays.setAttribute('style', 'display: none;');
//         groupHours.setAttribute('style', 'display: flex;');
//     };
// });

// const groupHours = document.querySelector('.group-hours');
// groupHours.addEventListener('click', (e) => {
//     if (e.target.classList.contains('group-btn_btn')) {
//         timerConsultingHour.innerHTML = e.target.innerText;
//         groupHours.setAttribute('style', 'display: none;');

//         const toggleBtn = document.querySelector('#toggle-btn');
//         toggleBtn.setAttribute('style', 'display: flex');

//         const toggleBtnDiv = document.querySelector('.grid-item-3_div');
//         toggleBtnDiv.setAttribute('style', 'display: flex');

//         const returnBtn = document.querySelector('#return-btn');
//         returnBtn.setAttribute('style', 'display: none');

//         updateConsultingTime()

//         const selectedDay = timerConsultingDay.innerHTML;
//         const selectedHour = e.target.innerText;
//         pushData(selectedDay, selectedHour);
//     };
// });

// function updateConsultingTime() {

//     const now = new Date();
//     const getMonth = "0" + (now.getMonth() + 1);
//     const getDay = "0" + now.getDate();

//     const getHours = "0" + (now.getHours());
//     const getMinutes = "0" + (now.getMinutes());

//     const date = `${getDay.slice(-2)}:${(getMonth.slice(-2))}:${now.getFullYear()}`;
//     const time = `${getHours.slice(-2)}:${getMinutes.slice(-2)}`;


//     const dateTime = `o godzinie ${time}, dnia ${date}r.`

//     lastChangeConsultingTime.innerHTML = dateTime;
// };
