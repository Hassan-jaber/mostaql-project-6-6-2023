// Function to calculate the requested information
function calculateHijriCalendar() {
  // Get the current Hijri date
  const currentDate = moment().format('iDD/iMM/iYYYY');
  const hijriYear = moment().format('iYYYY');
  
  // Calculate the start and end dates of the current Hijri year
  const startOfYear = moment(hijriYear, 'iYYYY');
  const endOfYear = moment(hijriYear, 'iYYYY').add(1, 'iyear').subtract(1, 'days');
  
  // Calculate the elapsed and remaining days
  const elapsedDays = moment(currentDate, 'iDD/iMM/iYYYY').diff(startOfYear, 'days');
  const remainingDays = endOfYear.diff(moment(currentDate, 'iDD/iMM/iYYYY'), 'days');
  
  // Calculate the percentage of elapsed days
  const totalDaysOfYear = endOfYear.diff(startOfYear, 'days') + 1;
  const percentageElapsed = (elapsedDays / totalDaysOfYear) * 100;
  
  // Calculate the number of weeks following the end of the Hijri year
  const weeksFollowingEnd = Math.ceil(remainingDays / 7);
  
  // Update the element with the current Hijri date
  document.querySelector(".currentDate-element").textContent = currentDate;
  
  // Update the year in the element with id "info-year"
  document.getElementById("info-year").childNodes[1].textContent = hijriYear;
  
  // Return the calculated values
  return {
    elapsedDays,
    remainingDays,
    percentageElapsed,
    weeksFollowingEnd,
  };
}

// Call the function and print the results
const hijriCalendarInfo = calculateHijriCalendar();   
// Update the remaining days and weeks
document.querySelector(".remaining-days").textContent += ` ${hijriCalendarInfo.remainingDays}`;
document.querySelector(".remaining-weeks").textContent += ` ${hijriCalendarInfo.weeksFollowingEnd}`;

document.getElementById("result").innerHTML = parseInt(hijriCalendarInfo.percentageElapsed) + "%"; // Remove the decimal portion

// Output the result
var progressBar = document.querySelector('.progress');
progressBar.style.width = hijriCalendarInfo.percentageElapsed.toFixed(2) + '%';





// Add click event listener to the copy button
document.getElementById("copy-url-btn").addEventListener("click", function() {
  // Copy the URL to the clipboard
  const currentUrl = window.location.href;
  const el = document.createElement('textarea');
  el.value = currentUrl;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
});

