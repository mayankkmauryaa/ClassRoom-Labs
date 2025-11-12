// Boolean Logic Access System
// Purpose: Determine if smart home is secure.

let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

let secure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

console.log("=== Smart Home Security ===");
console.log("Door Locked:", isDoorLocked);
console.log("Window Closed:", isWindowClosed);
console.log("Alarm On:", isAlarmOn);
console.log("Owner Inside:", isOwnerInside);
console.log("Status:", secure ? "Secure" : "Unsafe");
