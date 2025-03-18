const workoutData = [
  // Week 1
  { day: 1, pull: { type: "bodyweight rows", count: 20 }, push: { type: "pushups", count: 40 }, squats: 60, isLighter: false },
  { day: 2, pull: { type: "bodyweight rows", count: 15 }, push: { type: "pushups", count: 30 }, squats: 45, isLighter: true },
  { day: 3, pull: { type: "bodyweight rows", count: 21 }, push: { type: "pushups", count: 42 }, squats: 63, isLighter: false },
  { day: 4, pull: { type: "bodyweight rows", count: 16 }, push: { type: "pushups", count: 31 }, squats: 47, isLighter: true },
  { day: 5, pull: { type: "bodyweight rows", count: 22 }, push: { type: "pushups", count: 44 }, squats: 66, isLighter: false },
  { day: 6, pull: { type: "bodyweight rows", count: 16 }, push: { type: "pushups", count: 32 }, squats: 49, isLighter: true },
  { day: 7, pull: { type: "bodyweight rows", count: 23 }, push: { type: "pushups", count: 46 }, squats: 69, isLighter: false },
  
  // Week 2
  { day: 8, pull: { type: "bodyweight rows", count: 24 }, push: { type: "pushups", count: 48 }, squats: 72, isLighter: false },
  { day: 9, pull: { type: "bodyweight rows", count: 18 }, push: { type: "pushups", count: 36 }, squats: 54, isLighter: true },
  { day: 10, pull: { type: "bodyweight rows", count: 25 }, push: { type: "pushups", count: 50 }, squats: 75, isLighter: false },
  { day: 11, pull: { type: "bodyweight rows", count: 19 }, push: { type: "pushups", count: 38 }, squats: 57, isLighter: true },
  { day: 12, pull: { type: "bodyweight rows", count: 26 }, push: { type: "pushups", count: 52 }, squats: 78, isLighter: false },
  { day: 13, pull: { type: "bodyweight rows", count: 20 }, push: { type: "pushups", count: 40 }, squats: 60, isLighter: true },
  { day: 14, pull: { type: "bodyweight rows", count: 27 }, push: { type: "pushups", count: 54 }, squats: 81, isLighter: false },
  
  // Week 3
  { day: 15, pull: { type: "bodyweight rows", count: 28 }, push: { type: "pushups", count: 56 }, squats: 84, isLighter: false },
  { day: 16, pull: { type: "bodyweight rows", count: 21 }, push: { type: "pushups", count: 42 }, squats: 63, isLighter: true },
  { day: 17, pull: { type: "bodyweight rows", count: 29 }, push: { type: "pushups", count: 58 }, squats: 87, isLighter: false },
  { day: 18, pull: { type: "bodyweight rows", count: 22 }, push: { type: "pushups", count: 44 }, squats: 66, isLighter: true },
  { day: 19, pull: { type: "bodyweight rows", count: 30 }, push: { type: "pushups", count: 60 }, squats: 90, isLighter: false },
  { day: 20, pull: { type: "bodyweight rows", count: 23 }, push: { type: "pushups", count: 46 }, squats: 68, isLighter: true },
  { day: 21, pull: { type: "bodyweight rows", count: 30 }, push: { type: "pushups", count: 61 }, squats: 92, isLighter: false },
  
  // Week 4
  { day: 22, pull: { type: "bodyweight rows", count: 30 }, push: { type: "pushups", count: 62 }, squats: 95, isLighter: false },
  { day: 23, pull: { type: "bodyweight rows", count: 23 }, push: { type: "pushups", count: 46 }, squats: 71, isLighter: true },
  { day: 24, pull: { type: "bodyweight rows", count: 29 }, push: { type: "pushups", count: 63 }, squats: 97, isLighter: false },
  { day: 25, pull: { type: "bodyweight rows", count: 22 }, push: { type: "pushups", count: 46 }, squats: 73, isLighter: true },
  { day: 26, pull: { type: "bodyweight rows", count: 28 }, push: { type: "pushups", count: 64 }, squats: 99, isLighter: false },
  { day: 27, pull: { type: "bodyweight rows", count: 21 }, push: { type: "pushups", count: 45 }, squats: 74, isLighter: true },
  { day: 28, pull: { type: "bodyweight rows", count: 27 }, push: { type: "pushups", count: 65 }, squats: 102, isLighter: false },
  
  // Week 5
  { day: 29, pull: { type: "bodyweight rows", count: 26 }, push: { type: "pushups", count: 66 }, squats: 105, isLighter: false },
  { day: 30, pull: { type: "bodyweight rows", count: 20 }, push: { type: "pushups", count: 44 }, squats: 79, isLighter: true },
  { day: 31, pull: { type: "bodyweight rows", count: 25 }, push: { type: "pushups", count: 67 }, squats: 108, isLighter: false },
  { day: 32, pull: { type: "bodyweight rows", count: 19 }, push: { type: "pushups", count: 43 }, squats: 81, isLighter: true },
  { day: 33, pull: { type: "bodyweight rows", count: 24 }, push: { type: "pushups", count: 68 }, squats: 111, isLighter: false },
  { day: 34, pull: { type: "bodyweight rows", count: 18 }, push: { type: "pushups", count: 42 }, squats: 83, isLighter: true },
  { day: 35, pull: { type: "bodyweight rows", count: 23 }, push: { type: "pushups", count: 69 }, squats: 114, isLighter: false },
  
  // Week 6
  { day: 36, pull: { type: "bodyweight rows", count: 22 }, push: { type: "pushups", count: 70 }, squats: 117, isLighter: false },
  { day: 37, pull: { type: "bodyweight rows", count: 17 }, push: { type: "pushups", count: 40 }, squats: 88, isLighter: true },
  { day: 38, pull: { type: "bodyweight rows", count: 21 }, push: { type: "pushups", count: 71 }, squats: 120, isLighter: false },
  { day: 39, pull: { type: "bodyweight rows", count: 16 }, push: { type: "pushups", count: 40 }, squats: 90, isLighter: true },
  { day: 40, pull: { type: "bodyweight rows", count: 20 }, push: { type: "pushups", count: 72 }, squats: 123, isLighter: false },
  { day: 41, pull: { type: "bodyweight rows", count: 15 }, push: { type: "pushups", count: 39 }, squats: 92, isLighter: true },
  { day: 42, pull: { type: "bodyweight rows", count: 19 }, push: { type: "pushups", count: 73 }, squats: 126, isLighter: false },
  
  // Week 7 - First Chin-Up Focus
  { day: 43, pull: [{ type: "bodyweight rows", count: 18 }, { type: "chinups", count: 1 }], push: [{ type: "pushups", count: 64 }, { type: "pike pushups", count: 10 }], squats: 130, isLighter: false },
  { day: 44, pull: [{ type: "bodyweight rows", count: 14 }, { type: "chinups", count: 1 }], push: [{ type: "pushups", count: 47 }, { type: "pike pushups", count: 7 }], squats: 98, isLighter: true },
  { day: 45, pull: [{ type: "bodyweight rows", count: 17 }, { type: "chinups", count: 2 }], push: [{ type: "pushups", count: 62 }, { type: "pike pushups", count: 12 }], squats: 133, isLighter: false },
  { day: 46, pull: [{ type: "bodyweight rows", count: 13 }, { type: "chinups", count: 1 }], push: [{ type: "pushups", count: 46 }, { type: "pike pushups", count: 8 }], squats: 100, isLighter: true },
  { day: 47, pull: [{ type: "bodyweight rows", count: 16 }, { type: "chinups", count: 3 }], push: [{ type: "pushups", count: 60 }, { type: "pike pushups", count: 14 }], squats: 136, isLighter: false },
  { day: 48, pull: [{ type: "bodyweight rows", count: 12 }, { type: "chinups", count: 2 }], push: [{ type: "pushups", count: 44 }, { type: "pike pushups", count: 10 }], squats: 102, isLighter: true },
  { day: 49, pull: [{ type: "bodyweight rows", count: 15 }, { type: "chinups", count: 4 }], push: [{ type: "pushups", count: 58 }, { type: "pike pushups", count: 16 }], squats: 139, isLighter: false },
  
  // Week 8 - Recovery Week
  { day: 50, pull: [{ type: "bodyweight rows", count: 14 }, { type: "chinups", count: 3 }], push: [{ type: "pushups", count: 50 }, { type: "pike pushups", count: 12 }], squats: 110, isLighter: false },
  { day: 51, pull: [{ type: "bodyweight rows", count: 10 }, { type: "chinups", count: 2 }], push: [{ type: "pushups", count: 38 }, { type: "pike pushups", count: 9 }], squats: 83, isLighter: true },
  { day: 52, pull: [{ type: "bodyweight rows", count: 14 }, { type: "chinups", count: 4 }], push: [{ type: "pushups", count: 50 }, { type: "pike pushups", count: 13 }], squats: 112, isLighter: false },
  { day: 53, pull: [{ type: "bodyweight rows", count: 10 }, { type: "chinups", count: 3 }], push: [{ type: "pushups", count: 38 }, { type: "pike pushups", count: 10 }], squats: 84, isLighter: true },
  { day: 54, pull: [{ type: "bodyweight rows", count: 14 }, { type: "chinups", count: 5 }], push: [{ type: "pushups", count: 50 }, { type: "pike pushups", count: 14 }], squats: 114, isLighter: false },
  { day: 55, pull: [{ type: "bodyweight rows", count: 10 }, { type: "chinups", count: 4 }], push: [{ type: "pushups", count: 38 }, { type: "pike pushups", count: 11 }], squats: 85, isLighter: true },
  { day: 56, pull: [{ type: "bodyweight rows", count: 14 }, { type: "chinups", count: 6 }], push: [{ type: "pushups", count: 50 }, { type: "pike pushups", count: 15 }], squats: 116, isLighter: false },
  
  // Week 9
  { day: 57, pull: [{ type: "bodyweight rows", count: 13 }, { type: "chinups", count: 7 }], push: [{ type: "pushups", count: 46 }, { type: "pike pushups", count: 20 }], squats: 140, isLighter: false },
  { day: 58, pull: [{ type: "bodyweight rows", count: 10 }, { type: "chinups", count: 5 }], push: [{ type: "pushups", count: 35 }, { type: "pike pushups", count: 15 }], squats: 105, isLighter: true },
  { day: 59, pull: [{ type: "bodyweight rows", count: 12 }, { type: "chinups", count: 8 }], push: [{ type: "pushups", count: 44 }, { type: "pike pushups", count: 22 }], squats: 145, isLighter: false },
  { day: 60, pull: [{ type: "bodyweight rows", count: 9 }, { type: "chinups", count: 6 }], push: [{ type: "pushups", count: 32 }, { type: "pike pushups", count: 16 }], squats: 109, isLighter: true },
  { day: 61, pull: [{ type: "bodyweight rows", count: 11 }, { type: "chinups", count: 9 }], push: [{ type: "pushups", count: 42 }, { type: "pike pushups", count: 24 }], squats: 150, isLighter: false },
  { day: 62, pull: [{ type: "bodyweight rows", count: 8 }, { type: "chinups", count: 7 }], push: [{ type: "pushups", count: 30 }, { type: "pike pushups", count: 18 }], squats: 112, isLighter: true },
  { day: 63, pull: [{ type: "bodyweight rows", count: 10 }, { type: "chinups", count: 10 }], push: [{ type: "pushups", count: 40 }, { type: "pike pushups", count: 26 }], squats: 155, isLighter: false },
  
  // Week 10
  { day: 64, pull: [{ type: "bodyweight rows", count: 9 }, { type: "chinups", count: 12 }], push: [{ type: "pushups", count: 37 }, { type: "pike pushups", count: 30 }], squats: 160, isLighter: false },
  { day: 65, pull: [{ type: "bodyweight rows", count: 7 }, { type: "chinups", count: 9 }], push: [{ type: "pushups", count: 28 }, { type: "pike pushups", count: 22 }], squats: 120, isLighter: true },
  { day: 66, pull: [{ type: "bodyweight rows", count: 8 }, { type: "chinups", count: 14 }], push: [{ type: "pushups", count: 35 }, { type: "pike pushups", count: 33 }], squats: 165, isLighter: false },
  { day: 67, pull: [{ type: "bodyweight rows", count: 6 }, { type: "chinups", count: 10 }], push: [{ type: "pushups", count: 26 }, { type: "pike pushups", count: 25 }], squats: 124, isLighter: true },
  { day: 68, pull: [{ type: "bodyweight rows", count: 7 }, { type: "chinups", count: 16 }], push: [{ type: "pushups", count: 33 }, { type: "pike pushups", count: 36 }], squats: 170, isLighter: false },
  { day: 69, pull: [{ type: "bodyweight rows", count: 5 }, { type: "chinups", count: 12 }], push: [{ type: "pushups", count: 25 }, { type: "pike pushups", count: 27 }], squats: 128, isLighter: true },
  { day: 70, pull: [{ type: "bodyweight rows", count: 6 }, { type: "chinups", count: 18 }], push: [{ type: "pushups", count: 31 }, { type: "pike pushups", count: 39 }], squats: 175, isLighter: false },
  
  // Week 11
  { day: 71, pull: { type: "chinups", count: 20 }, push: { type: "pike pushups", count: 42 }, squats: 180, isLighter: false },
  { day: 72, pull: { type: "chinups", count: 15 }, push: { type: "pike pushups", count: 31 }, squats: 135, isLighter: true },
  { day: 73, pull: { type: "chinups", count: 22 }, push: { type: "pike pushups", count: 45 }, squats: 185, isLighter: false },
  { day: 74, pull: { type: "chinups", count: 16 }, push: { type: "pike pushups", count: 34 }, squats: 139, isLighter: true },
  { day: 75, pull: { type: "chinups", count: 24 }, push: { type: "pike pushups", count: 48 }, squats: 190, isLighter: false },
  { day: 76, pull: { type: "chinups", count: 18 }, push: { type: "pike pushups", count: 36 }, squats: 143, isLighter: true },
  { day: 77, pull: { type: "chinups", count: 26 }, push: { type: "pike pushups", count: 51 }, squats: 195, isLighter: false },
  
  // Week 12 - Recovery Week
  { day: 78, pull: { type: "chinups", count: 20 }, push: { type: "pike pushups", count: 40 }, squats: 155, isLighter: false },
  { day: 79, pull: { type: "chinups", count: 15 }, push: { type: "pike pushups", count: 30 }, squats: 116, isLighter: true },
  { day: 80, pull: { type: "chinups", count: 22 }, push: { type: "pike pushups", count: 42 }, squats: 158, isLighter: false },
  { day: 81, pull: { type: "chinups", count: 16 }, push: { type: "pike pushups", count: 32 }, squats: 118, isLighter: true },
  { day: 82, pull: { type: "chinups", count: 24 }, push: { type: "pike pushups", count: 44 }, squats: 161, isLighter: false },
  { day: 83, pull: { type: "chinups", count: 18 }, push: { type: "pike pushups", count: 33 }, squats: 120, isLighter: true },
  { day: 84, pull: { type: "chinups", count: 26 }, push: { type: "pike pushups", count: 46 }, squats: 164, isLighter: false },
  
  // Week 13
  { day: 85, pull: { type: "chinups", count: 30 }, push: { type: "pike pushups", count: 55 }, squats: 200, isLighter: false },
  { day: 86, pull: { type: "chinups", count: 22 }, push: { type: "pike pushups", count: 41 }, squats: 150, isLighter: true },
  { day: 87, pull: { type: "chinups", count: 32 }, push: { type: "pike pushups", count: 58 }, squats: 205, isLighter: false },
  { day: 88, pull: { type: "chinups", count: 33 }, push: { type: "pike pushups", count: 43 }, squats: 154, isLighter: true },
  { day: 89, pull: { type: "chinups", count: 35 }, push: { type: "pike pushups", count: 61 }, squats: 210, isLighter: false },
  { day: 90, pull: { type: "chinups", count: 26 }, push: { type: "pike pushups", count: 46 }, squats: 158, isLighter: true },
  { day: 91, pull: { type: "chinups", count: 38 }, push: { type: "pike pushups", count: 64 }, squats: 215, isLighter: false },
  
  // Week 14
  { day: 92, pull: { type: "chinups", count: 41 }, push: { type: "pike pushups", count: 67 }, squats: 220, isLighter: false },
  { day: 93, pull: { type: "chinups", count: 31 }, push: { type: "pike pushups", count: 50 }, squats: 165, isLighter: true },
  { day: 94, pull: { type: "chinups", count: 44 }, push: { type: "pike pushups", count: 70 }, squats: 225, isLighter: false },
  { day: 95, pull: { type: "chinups", count: 33 }, push: { type: "pike pushups", count: 52 }, squats: 169, isLighter: true },
  { day: 96, pull: { type: "chinups", count: 47 }, push: { type: "pike pushups", count: 73 }, squats: 230, isLighter: false },
  { day: 97, pull: { type: "chinups", count: 35 }, push: { type: "pike pushups", count: 55 }, squats: 173, isLighter: true },
  { day: 98, pull: { type: "chinups", count: 50 }, push: { type: "pike pushups", count: 76 }, squats: 235, isLighter: false },
  
  // Week 15
  { day: 99, pull: { type: "chinups", count: 53 }, push: { type: "pike pushups", count: 80 }, squats: 240, isLighter: false },
  { day: 100, pull: { type: "chinups", count: 40 }, push: { type: "pike pushups", count: 60 }, squats: 180, isLighter: true },
  { day: 101, pull: { type: "chinups", count: 56 }, push: { type: "pike pushups", count: 84 }, squats: 245, isLighter: false },
  { day: 102, pull: { type: "chinups", count: 42 }, push: { type: "pike pushups", count: 63 }, squats: 184, isLighter: true },
  { day: 103, pull: { type: "chinups", count: 59 }, push: { type: "pike pushups", count: 88 }, squats: 250, isLighter: false },
  { day: 104, pull: { type: "chinups", count: 44 }, push: { type: "pike pushups", count: 66 }, squats: 188, isLighter: true },
  { day: 105, pull: { type: "chinups", count: 62 }, push: { type: "pike pushups", count: 92 }, squats: 255, isLighter: false },
  
  // Week 16
  { day: 106, pull: { type: "chinups", count: 65 }, push: { type: "pike pushups", count: 96 }, squats: 260, isLighter: false },
  { day: 107, pull: { type: "chinups", count: 49 }, push: { type: "pike pushups", count: 72 }, squats: 195, isLighter: true },
  { day: 108, pull: { type: "chinups", count: 68 }, push: { type: "pike pushups", count: 100 }, squats: 265, isLighter: false },
  { day: 109, pull: { type: "chinups", count: 51 }, push: { type: "pike pushups", count: 75 }, squats: 199, isLighter: true },
  { day: 110, pull: { type: "chinups", count: 71 }, push: { type: "pike pushups", count: 104 }, squats: 270, isLighter: false },
  { day: 111, pull: { type: "chinups", count: 53 }, push: { type: "pike pushups", count: 78 }, squats: 203, isLighter: true },
  { day: 112, pull: { type: "chinups", count: 74 }, push: { type: "pike pushups", count: 108 }, squats: 275, isLighter: false },
  
  // Week 17 - Recovery Week
  { day: 113, pull: { type: "chinups", count: 59 }, push: { type: "pike pushups", count: 86 }, squats: 220, isLighter: false },
  { day: 114, pull: { type: "chinups", count: 44 }, push: { type: "pike pushups", count: 65 }, squats: 165, isLighter: true },
  { day: 115, pull: { type: "chinups", count: 60 }, push: { type: "pike pushups", count: 88 }, squats: 225, isLighter: false },
  { day: 116, pull: { type: "chinups", count: 45 }, push: { type: "pike pushups", count: 66 }, squats: 169, isLighter: true },
  { day: 117, pull: { type: "chinups", count: 61 }, push: { type: "pike pushups", count: 90 }, squats: 230, isLighter: false },
  { day: 118, pull: { type: "chinups", count: 46 }, push: { type: "pike pushups", count: 67 }, squats: 173, isLighter: true },
  { day: 119, pull: { type: "chinups", count: 62 }, push: { type: "pike pushups", count: 92 }, squats: 235, isLighter: false },
  
  // Week 18
  { day: 120, pull: { type: "chinups", count: 77 }, push: { type: "pike pushups", count: 115 }, squats: 278, isLighter: false },
  { day: 121, pull: { type: "chinups", count: 58 }, push: { type: "pike pushups", count: 86 }, squats: 209, isLighter: true },
  { day: 122, pull: { type: "chinups", count: 80 }, push: { type: "pike pushups", count: 120 }, squats: 281, isLighter: false },
  { day: 123, pull: { type: "chinups", count: 60 }, push: { type: "pike pushups", count: 90 }, squats: 211, isLighter: true },
  { day: 124, pull: { type: "chinups", count: 83 }, push: { type: "pike pushups", count: 125 }, squats: 284, isLighter: false },
  { day: 125, pull: { type: "chinups", count: 62 }, push: { type: "pike pushups", count: 94 }, squats: 213, isLighter: true },
  { day: 126, pull: { type: "chinups", count: 86 }, push: { type: "pike pushups", count: 130 }, squats: 287, isLighter: false },
  
  // Week 19
  { day: 127, pull: { type: "chinups", count: 88 }, push: { type: "pike pushups", count: 135 }, squats: 288, isLighter: false },
  { day: 128, pull: { type: "chinups", count: 66 }, push: { type: "pike pushups", count: 101 }, squats: 216, isLighter: true },
  { day: 129, pull: { type: "chinups", count: 90 }, push: { type: "pike pushups", count: 140 }, squats: 289, isLighter: false },
  { day: 130, pull: { type: "chinups", count: 68 }, push: { type: "pike pushups", count: 105 }, squats: 217, isLighter: true },
  { day: 131, pull: { type: "chinups", count: 92 }, push: { type: "pike pushups", count: 145 }, squats: 290, isLighter: false },
  { day: 132, pull: { type: "chinups", count: 69 }, push: { type: "pike pushups", count: 109 }, squats: 218, isLighter: true },
  { day: 133, pull: { type: "chinups", count: 94 }, push: { type: "pike pushups", count: 150 }, squats: 291, isLighter: false },
  
  // Week 20 - Recovery Week
  { day: 134, pull: { type: "chinups", count: 75 }, push: { type: "pike pushups", count: 120 }, squats: 233, isLighter: false },
  { day: 135, pull: { type: "chinups", count: 56 }, push: { type: "pike pushups", count: 90 }, squats: 175, isLighter: true },
  { day: 136, pull: { type: "chinups", count: 76 }, push: { type: "pike pushups", count: 122 }, squats: 238, isLighter: false },
  { day: 137, pull: { type: "chinups", count: 57 }, push: { type: "pike pushups", count: 92 }, squats: 178, isLighter: true },
  { day: 138, pull: { type: "chinups", count: 77 }, push: { type: "pike pushups", count: 124 }, squats: 243, isLighter: false },
  { day: 139, pull: { type: "chinups", count: 58 }, push: { type: "pike pushups", count: 93 }, squats: 182, isLighter: true },
  { day: 140, pull: { type: "chinups", count: 78 }, push: { type: "pike pushups", count: 126 }, squats: 248, isLighter: false },
  
  // Week 21
  { day: 141, pull: { type: "chinups", count: 95 }, push: { type: "pike pushups", count: 155 }, squats: 292, isLighter: false },
  { day: 142, pull: { type: "chinups", count: 71 }, push: { type: "pike pushups", count: 116 }, squats: 219, isLighter: true },
  { day: 143, pull: { type: "chinups", count: 96 }, push: { type: "pike pushups", count: 160 }, squats: 293, isLighter: false },
  { day: 144, pull: { type: "chinups", count: 72 }, push: { type: "pike pushups", count: 120 }, squats: 220, isLighter: true },
  { day: 145, pull: { type: "chinups", count: 97 }, push: { type: "pike pushups", count: 165 }, squats: 294, isLighter: false },
  { day: 146, pull: { type: "chinups", count: 73 }, push: { type: "pike pushups", count: 124 }, squats: 221, isLighter: true },
  { day: 147, pull: { type: "chinups", count: 98 }, push: { type: "pike pushups", count: 170 }, squats: 295, isLighter: false },
  
  // Week 22
  { day: 148, pull: { type: "chinups", count: 98 }, push: { type: "pike pushups", count: 175 }, squats: 296, isLighter: false },
  { day: 149, pull: { type: "chinups", count: 74 }, push: { type: "pike pushups", count: 131 }, squats: 222, isLighter: true },
  { day: 150, pull: { type: "chinups", count: 99 }, push: { type: "pike pushups", count: 180 }, squats: 297, isLighter: false },
  { day: 151, pull: { type: "chinups", count: 74 }, push: { type: "pike pushups", count: 135 }, squats: 223, isLighter: true },
  { day: 152, pull: { type: "chinups", count: 99 }, push: { type: "pike pushups", count: 185 }, squats: 298, isLighter: false },
  { day: 153, pull: { type: "chinups", count: 74 }, push: { type: "pike pushups", count: 139 }, squats: 224, isLighter: true },
  { day: 154, pull: { type: "chinups", count: 100 }, push: { type: "pike pushups", count: 190 }, squats: 299, isLighter: false },
  
  // Week 23 - Pre-Final Recovery Week
  { day: 155, pull: { type: "chinups", count: 80 }, push: { type: "pike pushups", count: 152 }, squats: 240, isLighter: false },
  { day: 156, pull: { type: "chinups", count: 60 }, push: { type: "pike pushups", count: 114 }, squats: 180, isLighter: true },
  { day: 157, pull: { type: "chinups", count: 82 }, push: { type: "pike pushups", count: 156 }, squats: 245, isLighter: false },
  { day: 158, pull: { type: "chinups", count: 62 }, push: { type: "pike pushups", count: 117 }, squats: 184, isLighter: true },
  { day: 159, pull: { type: "chinups", count: 84 }, push: { type: "pike pushups", count: 160 }, squats: 250, isLighter: false },
  { day: 160, pull: { type: "chinups", count: 63 }, push: { type: "pike pushups", count: 120 }, squats: 188, isLighter: true },
  { day: 161, pull: { type: "chinups", count: 86 }, push: { type: "pike pushups", count: 164 }, squats: 255, isLighter: false },
  
  // Week 24 - Final Goal Week
  { day: 162, pull: { type: "chinups", count: 95 }, push: { type: "pike pushups", count: 190 }, squats: 290, isLighter: false },
  { day: 163, pull: { type: "chinups", count: 71 }, push: { type: "pike pushups", count: 143 }, squats: 218, isLighter: true },
  { day: 164, pull: { type: "chinups", count: 97 }, push: { type: "pike pushups", count: 194 }, squats: 295, isLighter: false },
  { day: 165, pull: { type: "chinups", count: 73 }, push: { type: "pike pushups", count: 146 }, squats: 221, isLighter: true },
  { day: 166, pull: { type: "chinups", count: 99 }, push: { type: "pike pushups", count: 198 }, squats: 298, isLighter: false },
  { day: 167, pull: { type: "chinups", count: 74 }, push: { type: "pike pushups", count: 148 }, squats: 224, isLighter: true },
  { day: 168, pull: { type: "chinups", count: 100 }, push: { type: "pike pushups", count: 200 }, squats: 300, isLighter: false, isFinalDay: true }
];

export default workoutData;