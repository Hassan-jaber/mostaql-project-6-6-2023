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
    progressBar.style.width = percentageRemaining + "%";
  
    // Get the current date
    const currentDateElement = new Date();
  
    // Format the date as "month/day/year"
    const formattedDate = `${currentDateElement.getMonth() + 1}/${currentDateElement.getDate()}/${currentDateElement.getFullYear()}`;
  
    // Set the formatted date to the element
    document.querySelector(".currentDate-element").textContent = formattedDate;
  
    // Update the remaining days and weeks
    document.querySelector(".remaining-days").textContent = ` remaining days : ${daysRemaining}` ;
    document.querySelector(".remaining-weeks").textContent = ` remaining weeks : ${weeksRemaining}`;
  
    document.getElementById("info-year").childNodes[1].textContent = currentYear + "م";
    document.getElementById("result").innerHTML = percentagePassed.toFixed(0) + "%";
  }
  
  // Call the function to calculate and display the remaining days and weeks
  calculateRemainingDaysAndWeeks();
  