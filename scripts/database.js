import { timerConsultingDay } from "./app.js";
import { timerConsultingHour } from "./app.js";
import { lastChangeConsultingTime } from "./app.js";
import { spinner } from "./spinner.js";

const db = firebase.firestore();

export function pushData(selectedDay, selectedHour) {
    const now = new Date();
    db.collection("data").doc("time").set({
        day: selectedDay,
        hour: selectedHour,
        created_at: firebase.firestore.Timestamp.fromDate(now)
    })
        .then(function () {
            window.alert("Pomyślnie zmieniono czas konsultacji");
        })
        .catch(function (error) {
            window.alert("Wystąpił błąd podczas zmiany czasu konsultacji: ", error);
        });
}

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

            const timestamp = new Date(data.created_at.toDate());
            timerConsultingDay.innerHTML = data.day;
            timerConsultingHour.innerHTML = data.hour;

            const getMonth = "0" + (timestamp.getMonth() + 1);
            const getDay = "0" + timestamp.getDate();
            const getHour = "0" + timestamp.getHours()
            const getMinutes = "0" + timestamp.getMinutes();

            lastChangeConsultingTime.innerHTML = `o godzinie ${getHour.slice(-2)}:${getMinutes.slice(-2)} dnia ${getDay.slice(-2)}.${getMonth.slice(-2)}.${timestamp.getFullYear()}r.`
        } else {
            window.alert("Nieokreślono godzin konsultacji");
        }
    }).catch(error => {
        window.alert("Wystąpił błąd podczas ładowania czasu konsultacji: ", error);
    });
}