const db = firebase.firestore();

export function pushData(selectedDay, selectedHour) {
    const now = new Date();
    db.collection("data").doc("time").set({
        day: selectedDay,
        hour: selectedHour,
        created_at: firebase.firestore.Timestamp.fromDate(now)
    })
        .then(function () {
            console.log("Document successfully written!");
        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
        });
}

// document.addEventListener('DOMContentLoaded', () => {
//     const getData = db.collection("data").doc("time");
//     getData.get().then(function (doc) {
//         if (doc.exists) {
//             const data = doc.data();
//             const timestamp = new Date(data.created_at.toDate());
//             consultingDay.innerHTML = data.day;
//             consultingHour.innerHTML = data.hour;
//             const getMonth = "0" + (timestamp.getMonth() + 1)
//             const getDay = "0" + timestamp.getDate()
//             consultingTime.innerHTML = `o godzinie ${timestamp.getHours()}:${timestamp.getMinutes()} dnia ${getDay.slice(-2)}:${getMonth.slice(-2)}:${timestamp.getFullYear()}`
//         } else {
//             console.log("No such document!");
//         }
//     }).catch(function (error) {
//         console.log("Error getting document:", error);
//     });
// });