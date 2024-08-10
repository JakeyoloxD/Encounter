// 1. CONFIGURATION: Add or remove variables here.
const config = {
    encounterTypes: ['Combat', 'Social', 'Exploration', 'Environmental Hazard', 'Quest Hook'],
    npcRaces: ['Human', 'Elf', 'Dwarf', 'Orc', 'Tiefling', 'Goblin', 'Dragonborn'],
    npcClasses: ['Fighter', 'Mage', 'Rogue', 'Bard', 'Cleric', 'Ranger'],
    npcDispositions: ['Hostile', 'Neutral', 'Friendly'],
    npcMotivations: ['Greed', 'Fear', 'Duty', 'Curiosity', 'Revenge'],
    environments: ['Forest', 'Dungeon', 'City', 'Desert', 'Mountains', 'Underwater'],
    weatherConditions: ['Sunny', 'Rainy', 'Snowy', 'Nighttime', 'Foggy'],
    terrainFeatures: ['Cliffs', 'Rivers', 'Dense Foliage', 'Narrow Paths', 'Ruins'],
    encounterGoals: ['Survive', 'Negotiate', 'Retrieve an Item', 'Solve a Puzzle', 'Escape'],
    encounterObstacles: ['Locked Doors', 'Riddles', 'Strong Enemies', 'Moral Dilemmas'],
    encounterRewards: ['Experience Points', 'Loot', 'Information', 'Alliances'],
    randomModifiers: ['Reinforcements Arrive', 'A Hidden Trap is Triggered', 'Weather Change'],
    timedEvents: ['Rescue within a Time Limit', 'Defend Against Waves of Enemies', 'Reach a Location Before Sunrise'],
    // Add more variables as needed
};

// 2. HELPER FUNCTIONS: Utility functions to select random elements.
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// 3. GENERATE ENCOUNTER: The core logic to create a random encounter.
function generateEncounter() {
    const encounterType = getRandomElement(config.encounterTypes);
    const environment = getRandomElement(config.environments);
    const weather = getRandomElement(config.weatherConditions);
    const terrain = getRandomElement(config.terrainFeatures);
    const goal = getRandomElement(config.encounterGoals);
    const obstacle = getRandomElement(config.encounterObstacles);
    const reward = getRandomElement(config.encounterRewards);
    const modifier = getRandomElement(config.randomModifiers);
    const timedEvent = getRandomElement(config.timedEvents);

    // NPC Generation if required by encounter type
    let npc = null;
    if (['Combat', 'Social'].includes(encounterType)) {
        npc = {
            race: getRandomElement(config.npcRaces),
            class: getRandomElement(config.npcClasses),
            disposition: getRandomElement(config.npcDispositions),
            motivation: getRandomElement(config.npcMotivations),
        };
    }

    // 4. OUTPUT ENCOUNTER: Build the encounter description.
    let encounterDescription = `Encounter Type: ${encounterType}\n`;
    encounterDescription += `Environment: ${environment} (${weather}, ${terrain})\n`;
    encounterDescription += `Goal: ${goal}\n`;
    encounterDescription += `Obstacle: ${obstacle}\n`;
    encounterDescription += `Reward: ${reward}\n`;
    encounterDescription += `Random Modifier: ${modifier}\n`;
    encounterDescription += `Timed Event: ${timedEvent}\n`;

    if (npc) {
        encounterDescription += `NPC Encountered:\n  - Race: ${npc.race}\n  - Class: ${npc.class}\n  - Disposition: ${npc.disposition}\n  - Motivation: ${npc.motivation}\n`;
    }

    // Display the encounter
    document.getElementById('encounter-output').innerText = encounterDescription;
}

function adjustFontSize(textElement) {
    let parentHeight = textElement.clientHeight;
    let lineHeight = parseInt(window.getComputedStyle(textElement).lineHeight, 10);
    let lines = Math.ceil(textElement.scrollHeight / lineHeight);

    if (lines * lineHeight > parentHeight) {
        textElement.style.fontSize = '0.9em'; // Reduce font size if text is overflowing
    } else {
        textElement.style.fontSize = '1.2em'; // Otherwise, set a normal size
    }
}

// Function to toggle fullscreen mode
function toggleFullscreen() {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        document.documentElement.requestFullscreen();
    }
}

// Event listener for generating an encounter
document.getElementById('generate-encounter').addEventListener('click', () => {
    generateEncounter();
    playButtonSound();
});

// Function to play button sound
function playButtonSound() {
    let audio = new Audio('tap.mp3');
    audio.play();
}

// Variables for handling the "YOU BROKE THE APP" logic
let lastClickTime = 0;
const clickThreshold = 20; // Number of clicks needed to trigger the "broke the app"
const lockDuration = 5000; // Time (in milliseconds) for which the app is "broken"
let clickCount = 0;
let isLocked = false;

// Function to handle the click event for breaking the app
function handleYourTurnClick() {
    if (isLocked) {
        return; // If the app is locked, do nothing
    }

    clickCount++;
    const now = Date.now();

    // Reset click count if more than 1 second has passed since the last click
    if (now - lastClickTime > 1000) {
        clickCount = 1;
    }

    lastClickTime = now;

    if (clickCount >= clickThreshold) {
        isLocked = true;
        const button = document.getElementById("generate-encounter");
        const image = document.getElementById("broken-image");

        // Display the "YOU BROKE THE APP" message
        button.textContent = "YOU BROKE THE APP";
        button.disabled = true;
        image.style.display = "block";

        // Play explosion sound
        let explosionAudio = new Audio('explosion.mp3');
        explosionAudio.play();

        // Reset everything after lockDuration milliseconds
        setTimeout(() => {
            isLocked = false;
            clickCount = 0;
            button.textContent = "Generate Encounter";
            button.disabled = false;
            image.style.display = "none";
        }, lockDuration);
    } else {
        // Vibrate on click if available
        if (navigator.vibrate) {
            navigator.vibrate(200);
        }

        // Play the tap sound effect
        let tapAudio = new Audio('tap.mp3');
        tapAudio.play();
    }
}

// Attach the event listener for breaking the app
document.getElementById('generate-encounter').addEventListener('click', handleYourTurnClick);
