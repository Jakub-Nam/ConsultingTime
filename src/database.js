import { spinner } from "./spinner.js";
import { returnToMainDeskop } from "./handle-btns.js";
import { showAlert } from "./index.js";

const db = firebase.firestore();


//observer
db.collection("data").doc("time").onSnapshot(doc => {
    const data = doc.data()
    fetchDatabase(data);
})

function fetchDatabase(data) {
    db.collection("data").doc("time").get().then(function (doc) {
        if (doc.exists) {
            spinner.stop();
            const timerParagaphDisplay = document.querySelector('.grid-item-2_timer_p');
            timerParagaphDisplay.setAttribute('style', 'display: block');

            const timerConsultingDay = document.querySelector('.consulting-day');
            timerConsultingDay.innerHTML = data.selectedDay;

            const timerConsultingHours = document.querySelector('.consulting-hours');
            timerConsultingHours.innerHTML = `${data.fromHour} do ${data.toHour}`

            const timestamp = new Date(data.created_at.toDate());
            const month = "0" + (timestamp.getMonth() + 1);
            const day = "0" + timestamp.getDate();
            const hour = "0" + timestamp.getHours()
            const minutes = "0" + timestamp.getMinutes();

            const lastChangeConsultingTime = document.querySelector('.consulting-change-time');
            lastChangeConsultingTime.innerHTML = `o godzinie ${hour.slice(-2)}:${minutes.slice(-2)} dnia ${day.slice(-2)}.${month.slice(-2)}.${timestamp.getFullYear()}r.`

            const comment = document.querySelector('.item-3__comment');
            comment.innerHTML = data.comment;
        } else {
            showAlert("Nieokreślono godzin konsultacji");
        }
    }).catch(error => {
        showAlert("Wystąpił błąd podczas ładowania czasu konsultacji.");
    });
}

export function pushData(selectedDay, selectedFromHour, selectedToHour, comment) {
    const now = new Date();
    db.collection("data").doc("time").set({
        selectedDay: selectedDay,
        fromHour: selectedFromHour,
        toHour: selectedToHour,
        comment: comment,
        created_at: firebase.firestore.Timestamp.fromDate(now)
    })
        .then(function () {
            showAlert("Pomyślnie zmieniono czas konsultacji");
            returnToMainDeskop();
        })
        .catch(function (error) {
            showAlert("Wystąpił błąd podczas zmiany czasu konsultacji: ", error);
        });
}