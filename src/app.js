// DOM Elements
const currentDayElement = document.getElementById('currentDay');
const currentWeekElement = document.getElementById('currentWeek');
const dayNumberElement = document.getElementById('dayNumber');
const intensityBadgeElement = document.getElementById('intensityBadge');
const pullExerciseElement = document.getElementById('pullExercise');
const pushExerciseElement = document.getElementById('pushExercise');
const squatsExerciseElement = document.getElementById('squatsExercise');
const progressFillElement = document.getElementById('progressFill');
const markCompleteButton = document.getElementById('markComplete');
const prevDayButton = document.getElementById('prevDay');
const nextDayButton = document.getElementById('nextDay');

// App state
let currentDayIndex = 0;
let completedDays = [];

// Load saved state from localStorage
function loadState() {
  const savedCurrentDay = localStorage.getItem('currentDayIndex');
  const savedCompletedDays = localStorage.getItem('completedDays');
  
  if (savedCurrentDay !== null) {
    currentDayIndex = parseInt(savedCurrentDay, 10);
  }
  
  if (savedCompletedDays !== null) {
    completedDays = JSON.parse(savedCompletedDays);
  }
}

// Save state to localStorage
function saveState() {
  localStorage.setItem('currentDayIndex', currentDayIndex);
  localStorage.setItem('completedDays', JSON.stringify(completedDays));
}

// Update UI based on current day
function updateUI() {
  const currentDay = workoutData[currentDayIndex];
  const dayNumber = currentDay.day;
  const weekNumber = Math.ceil(dayNumber / 7);
  
  // Update header progress
  currentDayElement.textContent = dayNumber;
  currentWeekElement.textContent = weekNumber;
  
  // Update progress bar
  const progressPercentage = (dayNumber / 168) * 100;
  progressFillElement.style.width = `${progressPercentage}%`;
  
  // Update workout card
  dayNumberElement.textContent = dayNumber;
  
  // Set intensity badge
  if (currentDay.isLighter) {
    intensityBadgeElement.textContent = 'Lighter Day';
    intensityBadgeElement.className = 'badge lighter';
  } else {
    intensityBadgeElement.textContent = 'Regular Day';
    intensityBadgeElement.className = 'badge regular';
  }
  
  // Update Mark Complete button state
  if (completedDays.includes(dayNumber)) {
    markCompleteButton.textContent = 'COMPLETED ✓';
    markCompleteButton.disabled = true;
  } else {
    markCompleteButton.textContent = 'MARK COMPLETE';
    markCompleteButton.disabled = false;
  }
  
  // Update navigation buttons
  prevDayButton.disabled = currentDayIndex === 0;
  nextDayButton.disabled = currentDayIndex === workoutData.length - 1;
  
  // Update exercises
  updateExerciseUI(currentDay);
}

// Helper function to format exercise display
function formatExercise(exercise) {
  if (Array.isArray(exercise)) {
    // For combined exercises like weeks 7-10 with multiple pull/push exercises
    let html = '';
    exercise.forEach(ex => {
      html += `<p class="exercise-name">${ex.type}</p>`;
      html += `<p class="exercise-count">${ex.count} reps</p>`;
    });
    return html;
  } else {
    // For simple exercises
    return `
      <p class="exercise-name">${exercise.type}</p>
      <p class="exercise-count">${exercise.count} reps</p>
    `;
  }
}

// Update exercise display
function updateExerciseUI(currentDay) {
  // Pull exercise
  pullExerciseElement.innerHTML = formatExercise(currentDay.pull);
  
  // Push exercise
  pushExerciseElement.innerHTML = formatExercise(currentDay.push);
  
  // Squats
  squatsExerciseElement.innerHTML = `<p class="exercise-count">${currentDay.squats} reps</p>`;
}

// Navigation functions
function goToPrevDay() {
  if (currentDayIndex > 0) {
    currentDayIndex--;
    saveState();
    updateUI();
  }
}

function goToNextDay() {
  if (currentDayIndex < workoutData.length - 1) {
    currentDayIndex++;
    saveState();
    updateUI();
  }
}

// Mark current day as complete
function markComplete() {
  const currentDay = workoutData[currentDayIndex].day;
  
  if (!completedDays.includes(currentDay)) {
    completedDays.push(currentDay);
    saveState();
    
    // Show completion message
    markCompleteButton.textContent = 'COMPLETED ✓';
    markCompleteButton.disabled = true;
    
    // Automatically go to next day if not on the last day
    if (currentDayIndex < workoutData.length - 1) {
      setTimeout(() => {
        goToNextDay();
      }, 1000);
    } else {
      // Show congratulations for completing the program
      alert('Congratulations! You have completed the entire 24-week program! 🎉');
    }
  }
}

// Event listeners
markCompleteButton.addEventListener('click', markComplete);
prevDayButton.addEventListener('click', goToPrevDay);
nextDayButton.addEventListener('click', goToNextDay);

// Initialize the app
function init() {
  loadState();
  updateUI();
}

// Start the app
window.addEventListener('DOMContentLoaded', init);