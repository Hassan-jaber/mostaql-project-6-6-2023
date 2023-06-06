// var currentDate = new Date();
// var currentYear = currentDate.getFullYear();
// var startDate = new Date(currentYear, 0, 1);
// var endDate = new Date(currentYear, 11, 31);
// var totalDays = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));
// var elapsedDays = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24));
// var percentageRemaining = Math.floor(((totalDays - elapsedDays) / totalDays) * 100);

// var progressBar = document.querySelector('.progress');
// progressBar.style.width = percentageRemaining + "%";

// document.getElementById("result").innerHTML = percentageRemaining + "%";

// document.getElementById("info-year").childNodes[1].textContent = currentYear + "م";


// Get the current date
const currentDate = new Date();

// Get the current year
const currentYear = currentDate.getFullYear();

// Set the target date to the last day of the current year
const targetDate = new Date(currentYear, 11, 31); // Month is zero-based, so 11 represents December

// Calculate the time difference in milliseconds
const timeDifference = targetDate.getTime() - currentDate.getTime();

// Convert the time difference to days
const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

// Calculate the percentage of days remaining
const daysPassed = 365 - daysRemaining;
const percentageRemaining = Math.floor((daysRemaining / 365) * 100); // Round down to the nearest integer
const percentagePassed = 100 - percentageRemaining;

// Output the result
var progressBar = document.querySelector('.progress');
progressBar.style.width = percentagePassed + "%";


document.getElementById("info-year").childNodes[1].textContent = currentYear + "م";
document.getElementById("result").innerHTML = percentagePassed + "%";

