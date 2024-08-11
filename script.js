// 1. CONFIGURATION: Add or remove variables here.
// 1. CONFIGURATION: Add or remove variables here.
const config = {
    encounterTypes: ['Combat', 'Social', 'Exploration', 'Environmental Hazard', 'Quest Hook'],
    npcRaces: {
        'Human': ["Aldric", "Brunhild", "Cedric", "Diana", "Edgar", "Fiona", "Gwen", "Hugh", "Ivy", "Jasper",
        "Kendra", "Lena", "Mordecai", "Nora", "Oswin", "Pippa", "Quentin", "Renaud", "Selma", "Tobias",
        "Ursula", "Vera", "Winston", "Xena", "Yvonne", "Zachary", "Aveline", "Bernard", "Clara", "Derek",
        "Elena", "Frederick", "Greta", "Hilda", "Ivor", "Jocelyn", "Kurt", "Lydia", "Mabel", "Norman"],
        
        'Elf': ["Elowen", "Thalion", "Aeloria", "Faelan", "Lirael", "Rhiannon", "Eldrin", "Seraphina", "Aelar", "Lyra",
        "Arannis", "Galen", "Elandra", "Tauron", "Vanya", "Lorian", "Eldara", "Fingon", "Mirelle", "Orin",
        "Nimriel", "Selendir", "Isolde", "Riven", "Cyrian", "Aelwen", "Tiriel", "Elion", "Alura", "Varian",
        "Lysandra", "Darian", "Aerin", "Calen", "Nymeria", "Sylas", "Elara", "Theron", "Maeve", "Valen"],
        
        'Dwarf': ["Thorin", "Dwalin", "Balin", "Fili", "Kili", "Gimli", "Durin", "Oin", "Gloin", "Bofur",
        "Bombur", "Bifur", "Dori", "Nori", "Ori", "Grimbeorn", "Bruni", "Haldor", "Krag", "Rurik",
        "Gunnar", "Eirik", "Ragnar", "Brenna", "Sigrid", "Astrid", "Dagmar", "Leif", "Bjarni", "Hilda",
        "Jorund", "Kara", "Olaf", "Yrsa", "Svein", "Freya", "Thrain", "Yngvar"],
        
        'Orc': ["Grom", "Uruk", "Krag", "Borg", "Gruk", "Thok", "Ragnor", "Zog", "Morg", "Gor",
        "Drok", "Karg", "Krug", "Skar", "Ruk", "Groth", "Vark", "Borgar", "Thrak", "Lurg",
        "Hruk", "Gorak", "Mog", "Rok", "Grim", "Gorg", "Kragor", "Narg", "Korth", "Skorg",
        "Bruk", "Horg", "Varg", "Drak", "Zurg", "Murk", "Garn", "Rokar", "Thorn", "Gorak"],
        
        'Tiefling': ["Azura", "Zephyros", "Riven", "Nyx", "Lilith", "Darius", "Sable", "Eris", "Kael", "Morgana",
        "Jareth", "Isara", "Thorne", "Vesper", "Lucian", "Seraphine", "Kieran", "Nyssa", "Draven", "Ariella",
        "Zara", "Jax", "Evelyn", "Lysander", "Selene", "Ronan", "Cyra", "Valen", "Rowan", "Dante",
        "Orin", "Sienna", "Zane", "Lyra", "Korath", "Evelin", "Kaelith", "Rael", "Nyra", "Talon"],
        
        'Goblin': [ "Grizzle", "Snik", "Ruk", "Zog", "Glim", "Krag", "Murk", "Borg", "Snag", "Grub",
            "Trix", "Rok", "Fizzle", "Drek", "Skar", "Vog", "Zib", "Blitz", "Grok", "Skrit",
            "Nix", "Bark", "Grit", "Vrek", "Fuzz", "Jinx", "Rag", "Skulk", "Drib", "Mog",
            "Krogg", "Zek", "Grub", "Krub", "Froth", "Wik", "Miz", "Gurk", "Trog", "Sniks", "Griefer"],
        
        'Dragonborn': ["Tharax", "Zephyros", "Rathgar", "Kalista", "Draknar", "Syrin", "Vorath", "Zara", "Korrik", "Talon",
        "Myrak", "Lyria", "Aric", "Vesper", "Gorath", "Seraphis", "Rylor", "Aurelia", "Korak", "Elara",
        "Balthar", "Nerath", "Jorik", "Rynna", "Draxil", "Kara", "Valthor", "Nyssa", "Thorin", "Zorath",
        "Kyran", "Eldra", "Draven", "Raida", "Vyris", "Sorin", "Thalric", "Ilyana", "Goran", "Tirza"]
    },
    npcClasses: [ "Fighter", "Mage", "Rogue", "Bard", "Cleric", "Ranger",
        "Barbarian", "Druid", "Monk", "Paladin", "Sorcerer", "Warlock", "Wizard"],
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
        'Survive': [
            { type: 'Survive', subtype: 'Avoid traps' },
            { type: 'Survive', subtype: 'Escape enemies' },
            { type: 'Survive', subtype: 'Find shelter' },
            { type: 'Survive', subtype: 'Outlast a storm' }
        ],
        'Negotiate': [
            { type: 'Negotiate', subtype: 'Trade goods' },
            { type: 'Negotiate', subtype: 'Forge an alliance' },
            { type: 'Negotiate', subtype: 'End a conflict' },
            { type: 'Negotiate', subtype: 'Secure passage' }
        ],
        'Retrieve an Item': [
            { type: 'Retrieve an Item', subtype: 'A magical artifact' },
            { type: 'Retrieve an Item', subtype: 'A stolen heirloom' },
            { type: 'Retrieve an Item', subtype: 'Lost knowledge' },
            { type: 'Retrieve an Item', subtype: 'A rare ingredient' }
        ],
        'Solve a Puzzle': [
            { type: 'Solve a Puzzle', subtype: 'Strength' },
            { type: 'Solve a Puzzle', subtype: 'Intelligence' },
            { type: 'Solve a Puzzle', subtype: 'Wisdom' },
            { type: 'Solve a Puzzle', subtype: 'Constitution' },
            { type: 'Solve a Puzzle', subtype: 'Charisma ' },
            { type: 'Solve a Puzzle', subtype: 'Dexterity' }
        ],
        'Escape': [
            { type: 'Escape', subtype: 'Escape from a prison' },
            { type: 'Escape', subtype: 'Escape from a collapsing cave' },
            { type: 'Escape', subtype: 'Escape from an enemy stronghold' },
            { type: 'Escape', subtype: 'Escape from a cursed forest' }
        ]
    },
    encounterObstacles: {
        'Locked Doors': [
            { type: 'Locked Door', subtype: 'Easy (DC 10)' },
            { type: 'Locked Door', subtype: 'Moderate (DC 15)' },
            { type: 'Locked Door', subtype: 'Hard (DC 20)' },
            { type: 'Locked Door', subtype: 'Masterwork (DC 25)' }
        ],
        'Riddles': [
            { type: 'Riddle', subtype: 'Give the player a Riddle' }
        ],
        'Strong Enemies': [
            { type: 'Strong Enemy', subtype: 'Orc Warlord' },
            { type: 'Strong Enemy', subtype: 'Dragon' },
            { type: 'Strong Enemy', subtype: 'Necromancer' },
            { type: 'Strong Enemy', subtype: 'Giant' },
            { type: 'Strong Enemy', subtype: 'Dark Sorcerer' },
            { type: 'Strong Enemy', subtype: 'Vampire Lord' },
            { type: 'Strong Enemy', subtype: 'Troll Chieftain' },
            { type: 'Strong Enemy', subtype: 'Demon Overlord' },
            { type: 'Strong Enemy', subtype: 'Werewolf Alpha' },
            { type: 'Strong Enemy', subtype: 'Warlock' },
            { type: 'Strong Enemy', subtype: 'Undead General' },
            { type: 'Strong Enemy', subtype: 'Shadow Assassin' }
        ],
        'Moral Dilemmas': [
            { type: 'Moral Dilemma', subtype: 'Save one life or many?' },
            { type: 'Moral Dilemma', subtype: 'Betray a friend or a cause?' },
            { type: 'Moral Dilemma', subtype: 'Steal to save a village?' },
            { type: 'Moral Dilemma', subtype: 'Lie to protect the innocent?' }
        ]
    },
    encounterRewards: {
        'Gold': ['10 Gold Pieces', '50 Gold Pieces', '100 Gold Pieces', '500 Gold Pieces'],
        'Items': ['Health Potion', 'Magic Sword', 'Enchanted Armor', 'Spellbook'],
        'Experience': ['100 XP', '200 XP', '500 XP', '1000 XP'],
        'Magic': ['Ring of Strength', 'Cloak of Invisibility', 'Wand of Fireballs', 'Amulet of Protection']
    },
    randomModifiers: ['Increased difficulty', 'Additional traps', 'Hidden clues', 'Extra enemies'],
    timedEvents: ['Ambush', 'Natural disaster', 'Encounter with a famous NPC', 'Race against time']
};

// 2. UTILITIES: Functions for random selection and conditional inclusion.
function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomSubElement(obj, key) {
    return getRandomElement(obj[key]);
}

function maybeInclude(chance) {
    return Math.random() < chance;
}

// 3. GENERATE ENCOUNTER: Function to build and display the encounter.
function generateEncounter() {
    const encounterType = getRandomElement(config.encounterTypes);
    const environment = maybeInclude(0.3) ? getRandomElement(config.environments) : null; // 30% chance to include
    const weather = maybeInclude(0.1) ? getRandomElement(config.weatherConditions) : null; // 10% chance to include
    const terrain = maybeInclude(0.7) ? getRandomElement(config.terrainFeatures) : null; // 70% chance to include
    const goal = getRandomSubElement(config.encounterGoals, getRandomElement(Object.keys(config.encounterGoals)));
    const obstacleKey = getRandomElement(Object.keys(config.encounterObstacles));
    const obstacle = getRandomSubElement(config.encounterObstacles, obstacleKey);
    const rewardType = getRandomElement(Object.keys(config.encounterRewards));
    const rewardList = config.encounterRewards[rewardType];
    const reward = getRandomElement(rewardList);
    const modifier = maybeInclude(0.1) ? getRandomElement(config.randomModifiers) : null; // 10% chance to include
    const timedEvent = maybeInclude(0.01) ? getRandomElement(config.timedEvents) : null; // 10% chance to include

    // NPC Generation if required by encounter type
    let npc = null;
    if (['Combat', 'Social'].includes(encounterType)) {
        const race = getRandomElement(Object.keys(config.npcRaces));
        const motivationType = getRandomElement(Object.keys(config.npcMotivations));
        const motivationList = config.npcMotivations[motivationType];

        npc = {
            race: race,
            name: getRandomSubElement(config.npcRaces, race),
            class: getRandomElement(config.npcClasses),
            disposition: getRandomElement(config.npcDispositions),
            motivation: `${motivationType}: ${getRandomElement(motivationList)}`
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

    encounterDescription += `Goal: ${goal.type} - ${goal.subtype}\n`;
    encounterDescription += `Obstacle: ${obstacle.type} - ${obstacle.subtype}\n`;
    encounterDescription += `Reward: ${rewardType} - ${reward}\n`;

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
