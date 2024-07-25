// Set the target date (replace with your desired target date in the format "MM/DD/YYYY")
const targetDate = new Date("06/12/2024");

// Set the custom message to display after the target date
const expiredMessage = "Today!";

// Function to calculate the remaining days until the target date
function calculateRemainingDays() {
  const currentDate = new Date();
  const timeDiff = targetDate.getTime() - currentDate.getTime();
  const remainingDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  return remainingDays;
}

// Function to update the counter display
function updateCounter() {
  const remainingDays = calculateRemainingDays();
  const counterElement = document.getElementById("days");
  if (counterElement) {
    if (remainingDays > 0) {
      counterElement.textContent = `${remainingDays} days remaining`;
    } else {
      counterElement.textContent = expiredMessage;
      clearInterval(interval); // Stop the interval when the target date is reached
    }
  }
}

// Update the counter every second
const interval = setInterval(updateCounter, 1000);