// Add console logging to debug
console.log('App script loaded');

// DOM Elements - wrapped in a function to ensure they're gathered after DOM is loaded
function initDOMElements() {
  const elements = {
    currentDay: document.getElementById('currentDay'),
    currentWeek: document.getElementById('currentWeek'),
    dayNumber: document.getElementById('dayNumber'),
    intensityBadge: document.getElementById('intensityBadge'),
    pullExercise: document.getElementById('pullExercise'),
    pushExercise: document.getElementById('pushExercise'),
    squatsExercise: document.getElementById('squatsExercise'),
    daySlider: document.getElementById('daySlider'),
    markComplete: document.getElementById('markComplete'),
    prevDay: document.getElementById('prevDay'),
    nextDay: document.getElementById('nextDay')
  };
  
  // Check if all elements are found
  Object.entries(elements).forEach(([name, element]) => {
    if (!element) {
      console.error(`Element ${name} not found!`);
    }
  });
  
  return elements;
}

// We'll assign these later when DOM is fully loaded
let currentDayElement, currentWeekElement, dayNumberElement, intensityBadgeElement;
let pullExerciseElement, pushExerciseElement, squatsExerciseElement, daySliderElement;
let markCompleteButton, prevDayButton, nextDayButton;

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
    try {
      const parsed = JSON.parse(savedCompletedDays);
      console.log('Loaded completed days:', parsed);
      
      // Ensure all completed days are numbers
      completedDays = parsed.map(day => parseInt(day, 10));
      console.log('Normalized completed days:', completedDays);
    } catch (error) {
      console.error('Error parsing completedDays:', error);
      completedDays = [];
    }
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
  
  // Update day slider position and progress bar
  daySliderElement.value = dayNumber;
  
  // Calculate completed progress
  // Find the highest completed day
  const highestCompletedDay = completedDays.length ? Math.max(...completedDays) : 0;
  const completedPercentage = (highestCompletedDay / 168) * 100;
  
  // Set the progress bar to show completed days
  daySliderElement.style.setProperty('--progress-percentage', `${completedPercentage}%`);
  
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
    // Day is already completed
    markCompleteButton.textContent = 'COMPLETED ✓';
    markCompleteButton.className = 'btn btn-completed';
    markCompleteButton.disabled = true;
  } else {
    // Check if previous day is completed
    const previousDayCompleted = dayNumber === 1 || completedDays.includes(dayNumber - 1);
    
    if (previousDayCompleted) {
      // Previous day is completed, allow marking this day as complete
      markCompleteButton.textContent = 'MARK COMPLETE';
      markCompleteButton.className = 'btn btn-primary';
      markCompleteButton.disabled = false;
    } else {
      // Previous day not completed, show message and disable button
      markCompleteButton.textContent = 'COMPLETE PREVIOUS DAY FIRST';
      markCompleteButton.className = 'btn btn-secondary';
      markCompleteButton.disabled = true;
    }
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
      const exerciseType = ex.type.toLowerCase().replace(/\s+/g, '-');
      html += `<p class="exercise-name"><a href="javascript:void(0)" onclick="openExerciseGuide('${exerciseType}')">${ex.type}</a></p>`;
      html += `<p class="exercise-count">${ex.count} reps</p>`;
    });
    return html;
  } else {
    // For simple exercises
    const exerciseType = exercise.type.toLowerCase().replace(/\s+/g, '-');
    return `
      <p class="exercise-name"><a href="javascript:void(0)" onclick="openExerciseGuide('${exerciseType}')">${exercise.type}</a></p>
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
  
  // Leg exercise (squats)
  squatsExerciseElement.innerHTML = `
    <p class="exercise-name"><a href="javascript:void(0)" onclick="openExerciseGuide('squats')">Squats</a></p>
    <p class="exercise-count">${currentDay.squats} reps</p>
  `;
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

// Mark current day as complete (no undo functionality)
function markComplete() {
  const currentDay = workoutData[currentDayIndex].day;
  
  // Check if the day is not already completed
  if (completedDays.includes(currentDay)) {
    console.log('Day', currentDay, 'is already completed');
    return;
  }
  
  // Check if previous day is completed (except for day 1)
  const previousDayCompleted = currentDay === 1 || completedDays.includes(currentDay - 1);
  
  if (!previousDayCompleted) {
    console.log('Cannot complete day', currentDay, '- previous day not completed');
    alert('Please complete the previous day first.');
    return;
  }
  
  // All checks passed, mark the day as complete
  console.log('Marking day', currentDay, 'as complete');
  completedDays.push(currentDay);
  saveState();
  
  // Update UI immediately
  updateUI();
  
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

// Event listeners are set up in init()

// Initialize the app
function init() {
  console.log('Initializing app');
  
  // Get DOM elements
  const elements = initDOMElements();
  
  // Assign elements to global variables
  currentDayElement = elements.currentDay;
  currentWeekElement = elements.currentWeek;
  dayNumberElement = elements.dayNumber;
  intensityBadgeElement = elements.intensityBadge;
  pullExerciseElement = elements.pullExercise;
  pushExerciseElement = elements.pushExercise;
  squatsExerciseElement = elements.squatsExercise;
  daySliderElement = elements.daySlider;
  markCompleteButton = elements.markComplete;
  prevDayButton = elements.prevDay;
  nextDayButton = elements.nextDay;
  
  // Add event listeners
  markCompleteButton.addEventListener('click', function() {
    console.log('Mark complete clicked');
    markComplete();
  });
  
  prevDayButton.addEventListener('click', function() {
    console.log('Previous day clicked');
    goToPrevDay();
  });
  
  nextDayButton.addEventListener('click', function() {
    console.log('Next day clicked');
    goToNextDay();
  });
  
  // Add day slider event listener
  daySliderElement.addEventListener('input', function() {
    const day = parseInt(this.value, 10);
    console.log('Slider moved to day:', day);
    
    // Convert from 1-based day number to 0-based index
    const dayIndex = workoutData.findIndex(workout => workout.day === day);
    
    if (dayIndex !== -1) {
      currentDayIndex = dayIndex;
      saveState();
      updateUI();
    }
  });
  
  // Load state and update UI
  loadState();
  updateUI();
  
  console.log('App initialized');
}

// Start the app
window.addEventListener('DOMContentLoaded', init);

// Exercise guide opener function
window.openExerciseGuide = function(exerciseType) {
  console.log('Opening guide for:', exerciseType);
  
  // Define URLs for different exercise types
  const exerciseGuides = {
    // Main exercises
    'bodyweight-rows': 'https://www.youtube.com/watch?v=PGcTxvn-Rbk',
    'pushups': 'https://www.youtube.com/watch?v=IODxDxX7oi4',
    'squats': 'https://www.youtube.com/watch?v=YaXPRqUwItQ',
    'chinups': 'https://www.youtube.com/watch?v=FnWrvWZDJTo',
    'pike-pushups': 'https://www.youtube.com/watch?v=sposDXWZUVA',
    
    // Warmup exercises
    'joint-rotations': 'https://www.youtube.com/watch?v=G8y-RYFo3kY',
    'cat-cow': 'https://www.youtube.com/watch?v=kqnua4rHVVA',
    'jumping-jacks': 'https://www.youtube.com/watch?v=c4DAnQ6DtF8',
    'lunges': 'https://www.youtube.com/watch?v=3XDriUn0udo',
    
    // Cooldown exercises
    'forward-fold': 'https://www.youtube.com/watch?v=g7Uhp5tphAs',
    'low-lunge': 'https://www.youtube.com/watch?v=yfPE0-iMbdg',
    'pec-stretch': 'https://www.youtube.com/watch?v=SV7l1sfEmO0'
  };
  
  // Open the guide in a new tab
  if (exerciseGuides[exerciseType]) {
    window.open(exerciseGuides[exerciseType], '_blank');
  } else {
    // Generic search if specific guide not found
    window.open(`https://www.google.com/search?q=how+to+do+${exerciseType.replace(/-/g, '+')}`, '_blank');
  }
};