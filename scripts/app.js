import { pushData } from "./database.js";
import { toggleTimer } from "./handle-btns.js";

export const timerConsultingDay = document.querySelector('.consulting-day');
export const timerConsultingHour = document.querySelector('.consulting-hour');
export const lastChangeConsultingTime = document.querySelector('.consulting-change-time');

const toggleBtn = document.querySelector('.div_toggle-btn')
toggleBtn.addEventListener('click', () => {
    toggleTimer();
})

const groupDays = document.querySelector('.group-days');
groupDays.addEventListener('click', (e) => {
    if (e.target.classList.contains('group-btn_btn')) {
        timerConsultingDay.innerHTML = e.target.innerText;
        groupDays.setAttribute('style', 'display: none;');
        groupHours.setAttribute('style', 'display: flex;');
    };
});

const groupHours = document.querySelector('.group-hours');
groupHours.addEventListener('click', (e) => {
    if (e.target.classList.contains('group-btn_btn')) {
        timerConsultingHour.innerHTML = e.target.innerText;
        groupHours.setAttribute('style', 'display: none;');

        const toggleBtn = document.querySelector('#toggle-btn');
        toggleBtn.setAttribute('style', 'display: flex');

        const toggleBtnDiv = document.querySelector('.grid-item-3_div');
        toggleBtnDiv.setAttribute('style', 'display: flex');

        const returnBtn = document.querySelector('#return-btn');
        returnBtn.setAttribute('style', 'display: none');

        updateConsultingTime()

        const selectedDay = timerConsultingDay.innerHTML;
        const selectedHour = e.target.innerText;
        pushData(selectedDay, selectedHour);
    };
});

function updateConsultingTime() {

    const now = new Date();
    const getMonth = "0" + (now.getMonth() + 1);
    const getDay = "0" + now.getDate();

    const getHours = "0" + (now.getHours());
    const getMinutes = "0" + (now.getMinutes());

    const date = `${getDay.slice(-2)}:${(getMonth.slice(-2))}:${now.getFullYear()}`;
    const time = `${getHours.slice(-2)}:${getMinutes.slice(-2)}`;


    const dateTime = `o godzinie ${time}, dnia ${date}r.`

    lastChangeConsultingTime.innerHTML = dateTime;
};

tail.DateTime("#demo");