import { consultingDay } from "./app.js";
import { consultingHour } from "./app.js";
import { consultingTime } from "./app.js";
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

document.addEventListener('DOMContentLoaded', () => {
    const fetchData = db.collection("data").doc("time");
    fetchData.get().then(function (doc) {
        if (doc.exists) {
            spinner.stop();
            const timerParagaphDisplay = document.querySelector('.grid-item-2_timer_p');
            timerParagaphDisplay.setAttribute('style', 'display: block');
            const data = doc.data();
            const timestamp = new Date(data.created_at.toDate());
            consultingDay.innerHTML = data.day;
            consultingHour.innerHTML = data.hour;
            const getMonth = "0" + (timestamp.getMonth() + 1)
            const getDay = "0" + timestamp.getDate()
            consultingTime.innerHTML = `o godzinie ${timestamp.getHours()}:${timestamp.getMinutes()} dnia ${getDay.slice(-2)}:${getMonth.slice(-2)}:${timestamp.getFullYear()}r.`
        } else {
            window.alert("Nieokreślono godzin konsultacji");
        }
    }).catch(error => {
        console.log(error)
        window.alert("Wystąpił błąd podczas ładowania czasu konsultacji: ", error);
    });
});