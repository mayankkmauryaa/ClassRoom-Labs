// Game Reward System
// Purpose: Calculate player coins, rank, and mission bonuses.

let level = 12;
let performanceScore = 80;
let missionsCompleted = true;

let coins = (level * 50) + (performanceScore * 10);

// Double coins if all missions completed
if (missionsCompleted) coins *= 2;

let rank = coins > 1000 ? "Elite" : "Regular";

console.log("=== Game Rewards ===");
console.log("Level:", level);
console.log("Performance Score:", performanceScore);
console.log("Missions Completed:", missionsCompleted);
console.log("Total Coins:", coins);
console.log("Rank:", rank);
