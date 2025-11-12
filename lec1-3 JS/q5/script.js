// Weather Alert System
// Purpose: Suggest safety decisions based on weather data.

let temperature = 38;
let humidity = 65;
let windSpeed = 20;

// Check weather alerts
if (temperature > 35 && humidity > 70) {
  console.log("Cancel: Heat Alert.");
} else if (temperature < 10 || windSpeed > 40) {
  console.log("Cancel: Cold/Windy Alert.");
} else {
  console.log("Event Approved.");
}

// Clothing suggestion
if (temperature < 20) console.log("Wear Jacket");
else if (temperature <= 30) console.log("Comfortable");
else console.log("Stay Hydrated");
