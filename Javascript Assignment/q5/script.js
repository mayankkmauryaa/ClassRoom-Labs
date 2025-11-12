// ==========================================================================
//  WEATHER ALERT SYSTEM
//  Purpose: Determine if outdoor events should be approved or cancelled
//           based on temperature, humidity, and wind speed.
// ==========================================================================

// --- Input Variables ---
let temperature = 36;   // in °C
let humidity = 75;      // in %
let windSpeed = 15;     // in km/h

// --- Step 1: Determine Event Safety ---
let weatherMessage = "";

// Rule 1: Heat Alert → temperature > 35°C and humidity > 70%
if (temperature > 35 && humidity > 70) {
    weatherMessage = "Cancel: Heat Alert.";
}

// Rule 2: Cold/Windy Alert → temperature < 10°C or windSpeed > 40 km/h
else if (temperature < 10 || windSpeed > 40) {
    weatherMessage = "Cancel: Cold/Windy Alert.";
}

// Otherwise → Safe for event
else {
    weatherMessage = "Event Approved.";
}

// --- Step 2: Clothing/Health Recommendation ---
let advice = "";

if (temperature < 20) {
    advice = "Wear Jacket.";
} else if (temperature >= 20 && temperature <= 30) {
    advice = "Comfortable.";
} else {
    advice = "Stay Hydrated.";
}

// --- Step 3: Output the Results ---
console.log("=================================================");
console.log("🌤️ WEATHER ALERT SYSTEM");
console.log("-------------------------------------------------");
console.log(`Temperature : ${temperature}°C`);
console.log(`Humidity    : ${humidity}%`);
console.log(`Wind Speed  : ${windSpeed} km/h`);
console.log("-------------------------------------------------");
console.log(`⚠️ Status    : ${weatherMessage}`);
console.log(`💡 Advice    : ${advice}`);
console.log("=================================================");
