function calculateRemainingDaysAndWeeks() {
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

  // Calculate the remaining weeks
  const weeksRemaining = Math.ceil(daysRemaining / 7);

  // Calculate the percentage of days remaining
  const daysPassed = 365 - daysRemaining;
  const percentageRemaining = (daysRemaining / 365) * 100;
  const percentagePassed = 100 - percentageRemaining;

  // Output the result
  var progressBar = document.querySelector('.progress');
  progressBar.style.width = percentagePassed + "%";

  // Format the current date as "day/month/year"
  const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;

  // Set the formatted date to the element
  document.querySelector(".currentDate-element").textContent = formattedDate;

  // Update the remaining days and weeks
  document.querySelector(".remaining-days").textContent += ` ${daysRemaining}`;
  document.querySelector(".remaining-weeks").textContent += ` ${weeksRemaining}`;

  document.getElementById("info-year").childNodes[1].textContent = currentYear;
  document.getElementById("result").innerHTML = parseInt(percentagePassed) + "%"; // Remove the decimal portion
}

// Call the function to calculate and display the remaining days and weeks
calculateRemainingDaysAndWeeks();


















/*
 // Function to calculate the requested information
 function calculateHijriCalendar() {
  // Get the current Hijri date
  const currentDate = moment().format('iYYYY/iM/iD');
  const hijriYear = moment().format('iYYYY');

  // Calculate the start and end dates of the current Hijri year
  const startOfYear = moment(hijriYear, 'iYYYY');
  const endOfYear = moment(hijriYear, 'iYYYY').add(1, 'iyear').subtract(1, 'days');

  // Calculate the elapsed and remaining days
  const elapsedDays = moment(currentDate, 'iYYYY/iM/iD').diff(startOfYear, 'days');
  const remainingDays = endOfYear.diff(moment(currentDate, 'iYYYY/iM/iD'), 'days');

  // Calculate the percentage of elapsed days
  const totalDaysOfYear = endOfYear.diff(startOfYear, 'days') + 1;
  const percentageElapsed = (elapsedDays / totalDaysOfYear) * 100;

  // Calculate the number of weeks following the end of the Hijri year
  const weeksFollowingEnd = Math.ceil(remainingDays / 7);

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
console.log('Number of days elapsed in the Hijri year 1444:', hijriCalendarInfo.elapsedDays);
console.log('Percentage of elapsed days:', hijriCalendarInfo.percentageElapsed.toFixed(2) + '%');
console.log('Number of days remaining:', hijriCalendarInfo.remainingDays);
console.log('Number of weeks following the end of the Hijri year:', hijriCalendarInfo.weeksFollowingEnd);
*/
