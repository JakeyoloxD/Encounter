// 1. CONFIGURATION: Add or remove variables here.
const config = {
    encounterTypes: ['Combat', 'Social', 'Exploration', 'Environmental Hazard', 'Quest Hook'],
    npcRaces: {
        'Human': ['John', 'Sarah', 'Mike', 'Anna'],
        'Elf': ['Eldar', 'Luthien', 'Galad', 'Finar'],
        'Dwarf': ['Thorin', 'Gimli', 'Durin', 'Baldr'],
        'Orc': ['Gorbag', 'Ugluk', 'Muzgash', 'Snaga'],
        'Tiefling': ['Azazel', 'Lilith', 'Bael', 'Zariel'],
        'Goblin': ['Grimtooth', 'Sniv', 'Nog', 'Fang'],
        'Dragonborn': ['Drake', 'Smaug', 'Tiamat', 'Fafnir']
    },
    npcClasses: ['Fighter', 'Mage', 'Rogue', 'Bard', 'Cleric', 'Ranger'],
    npcDispositions: ['Hostile', 'Neutral', 'Friendly'],
    npcMotivations: {
        'Greed': ['Gold', 'Jewels', 'Ancient Artifacts', 'Power'],
        'Fear': ['A specific enemy', 'A curse', 'A prophecy', 'Losing a loved one'],
        'Duty': ['Serving a lord', 'Protecting a secret', 'Completing a mission', 'Defending a location'],
        'Curiosity': ['Exploring the unknown', 'Learning ancient knowledge', 'Discovering secrets', 'Meeting new people'],
        'Revenge': ['Against a rival', 'For a lost family member', 'For a betrayal', 'For an ancient grudge']
    },
    environments: ['Forest', 'Dungeon', 'City', 'Desert', 'Mountains', 'Underwater'],
    weatherConditions: ['Sunny', 'Rainy', 'Snowy', 'Nighttime', 'Foggy'],
    terrainFeatures: ['Cliffs', 'Rivers', 'Dense Foliage', 'Narrow Paths', 'Ruins'],
    encounterGoals: {
        'Survive': ['Avoid traps', 'Escape enemies', 'Find shelter', 'Outlast a storm'],
        'Negotiate': ['Trade goods', 'Forge an alliance', 'End a conflict', 'Secure passage'],
        'Retrieve an Item': ['A magical artifact', 'A stolen heirloom', 'Lost knowledge', 'A rare ingredient'],
        'Solve a Puzzle': ['Riddle of the Sphinx', 'Ancient mechanism', 'Magical illusion', 'Complex cipher'],
        'Escape': ['Escape from a prison', 'Escape from a collapsing cave', 'Escape from an enemy stronghold', 'Escape from a cursed forest']
    },
    encounterObstacles: {
        'Locked Doors': ['Locked Door:Easy (DC 10)', 'Locked Door: Moderate (DC 15)', 'Locked Door: Hard (DC 20)', 'Locked Door: Masterwork (DC 25)'],
        'Riddles': ['A Riddle'],
        'Strong Enemies': [
        'Orc Warlord',
        'Dragon',
        'Necromancer',
        'Giant',
        'Dark Sorcerer',
        'Vampire Lord',
        'Troll Chieftain',
        'Demon Overlord',
        'Werewolf Alpha',
        'Warlock',        
        'Undead General',        
        'Shadow Assassin'        
        ],
        'Moral Dilemmas': ['Save one life or many?', 'Betray a friend or a cause?', 'Steal to save a village?', 'Lie to protect the innocent?']
    },
    encounterRewards: {
        'Experience Points': ['100 XP', '250 XP', '500 XP', '1000 XP'],
        'Loot': ['Gold coins', 'Magic weapon', 'Potion of healing', 'Scroll of fireball'],
        'Information': ['A secret location', 'Enemy plans', 'Ancient history', 'A hidden weakness for an upcoming boss fight'],
        'Alliances': ['A local tribe', 'A guild', 'A noble house', 'A mysterious stranger']
    },
    randomModifiers: ['Reinforcements Arrive', 'A Hidden Trap is Triggered', 'Weather Change'],
    timedEvents: ['Rescue within a Time Limit', 'Defend Against Waves of Enemies', 'Reach a Location Before Sunrise']
};

// 2. HELPER FUNCTIONS: Utility functions to select random elements.
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function getRandomSubElement(obj, key) {
    const subArray = obj[key];
    return getRandomElement(subArray);
}

// Helper function to determine if a feature should be included
function maybeInclude(probability) {
    return Math.random() < probability;
}

// 3. GENERATE ENCOUNTER: The core logic to create a random encounter.
function generateEncounter() {
    const encounterType = getRandomElement(config.encounterTypes);
    const environment = maybeInclude(0.3) ? getRandomElement(config.environments) : null; // 30% chance to include
    const weather = maybeInclude(0.1) ? getRandomElement(config.weatherConditions) : null; // 10% chance to include
    const terrain = maybeInclude(0.7) ? getRandomElement(config.terrainFeatures) : null; // 70% chance to include
    const goal = getRandomSubElement(config.encounterGoals, getRandomElement(Object.keys(config.encounterGoals)));
    const obstacleKey = getRandomElement(Object.keys(config.encounterObstacles));
    const obstacle = getRandomSubElement(config.encounterObstacles, obstacleKey);
    const rewardKey = getRandomElement(Object.keys(config.encounterRewards));
    const reward = getRandomSubElement(config.encounterRewards, rewardKey);
    const modifier = maybeInclude(0.1) ? getRandomElement(config.randomModifiers) : null; // 60% chance to include
    const timedEvent = maybeInclude(0.01) ? getRandomElement(config.timedEvents) : null; // 50% chance to include

    // NPC Generation if required by encounter type
    let npc = null;
    if (['Combat', 'Social'].includes(encounterType)) {
        const race = getRandomElement(Object.keys(config.npcRaces));
        npc = {
            race: race,
            name: getRandomSubElement(config.npcRaces, race),
            class: getRandomElement(config.npcClasses),
            disposition: getRandomElement(config.npcDispositions),
            motivation: `${getRandomElement(Object.keys(config.npcMotivations))}: ${getRandomSubElement(config.npcMotivations, getRandomElement(Object.keys(config.npcMotivations)))}`
        };
    }

    // 4. OUTPUT ENCOUNTER: Build the encounter description.
    let encounterDescription = `Encounter Type: ${encounterType}\n`;
    
    if (environment || weather || terrain) {
        encounterDescription += 'Environment: ';
        if (environment) {
            encounterDescription += environment;
        }
        if (weather) {
            encounterDescription += ` (${weather})`;
        }
        if (terrain) {
            encounterDescription += ` (${terrain})`;
        }
        encounterDescription += '\n';
    }

    encounterDescription += `Goal: ${goal}\n`;
    encounterDescription += `Obstacle: ${obstacle}\n`;
    encounterDescription += `Reward: ${reward}\n`;

    if (modifier) {
        encounterDescription += `Random Modifier: ${modifier}\n`;
    }

    if (timedEvent) {
        encounterDescription += `Timed Event: ${timedEvent}\n`;
    }

    if (npc) {
        encounterDescription += `NPC Encountered:\n  - Race: ${npc.race}\n  - Name: ${npc.name}\n  - Class: ${npc.class}\n  - Disposition: ${npc.disposition}\n  - Motivation: ${npc.motivation}\n`;
    }

    // Display the encounter
    document.getElementById('encounter-output').innerText = encounterDescription;
}

function adjustFontSize() {
    const textbox = document.querySelector('.textbox');
    const maxHeight = textbox.clientHeight; // Get the height of the container
    let fontSize = parseFloat(window.getComputedStyle(textbox).fontSize);

    // Decrease font size if content height exceeds container height
    while (textbox.scrollHeight > maxHeight && fontSize > 10) { // Stop if fontSize gets too small
        fontSize -= 1; // Decrease font size
        textbox.style.fontSize = fontSize + 'px';
    }
}

// Call the function when the document is ready
document.addEventListener('DOMContentLoaded', adjustFontSize);

// Re-run the function on window resize to adjust accordingly
window.addEventListener('resize', adjustFontSize);

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
