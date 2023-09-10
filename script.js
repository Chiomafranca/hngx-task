// Function to get the current day of the week
function getCurrentDay() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    return daysOfWeek[today.getDay()];
}

// Function to get the current UTC time in milliseconds
function getCurrentUTCTime() {
    return Date.now();
}

// Update the elements with real-time data
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("[data-testid='currentDayOfTheWeek']").textContent = "Current Day: " + getCurrentDay();
    document.querySelector("[data-testid='currentUTCTime']").textContent = "Current UTC Time: " + getCurrentUTCTime() + " ms";
});
