# Solo Leveling Workout Tracker

A web app for tracking progress through the 24-week Solo Leveling workout program. This program transforms you from 20 rows, 40 pushups, and 60 squats to 100 chinups, 200 pike pushups, and 300 squats over a 24-week period.

## Features

- Track your progress through all 168 days of the workout program
- Mark workouts as complete and automatically advance to the next day
- Navigate between workout days
- View detailed exercise information for each day
- Progress is saved locally in your browser
- Responsive design works on both desktop and mobile devices

## How to Use

1. Clone or download this repository
2. Open the `public/index.html` file in your web browser
3. Complete your workout for the day and click "MARK COMPLETE"
4. Your progress will be saved automatically
5. Continue with the next workout the following day

Alternatively, you can use a simple web server to serve the app:

```bash
# Using Python 3
cd soloLevelingApp
python -m http.server

# Then open http://localhost:8000/public/ in your browser
```

## Program Structure

- 24 weeks of workouts (168 days total)
- Alternating between regular and lighter intensity days
- Progressive overload within each week
- Scheduled deload weeks for optimal recovery
- Transition from easier exercises to more challenging ones

## Data Storage

Your progress is stored in your browser's localStorage. Clearing your browser data will reset your progress.

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS, no frameworks or libraries)