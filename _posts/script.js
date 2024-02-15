// Define fantasy kingdom names
const fantasyKingdomNames = [
    "Eldoria",
    "Avaloria",
    "Emberhold",
    "Celestria",
    "Mythoria",
    "Verdantia",
    "Frostfall",
    "Shadowrealm",
    "Silverpeak",
    "Sunrise Dominion"
];

// Function to select a random fantasy kingdom name
function getRandomKingdomName() {
    return fantasyKingdomNames[Math.floor(Math.random() * fantasyKingdomNames.length)];
}

// Function to generate a random map name
function generateRandomMapName() {
    const adjectives = ["Mystical", "Enchanted", "Forgotten", "Eternal", "Celestial", "Whispering", "Emerald", "Shadowed", "Golden", "Sapphire"];
    const nouns = ["Realm", "Land", "World", "Kingdom", "Empire", "Domain", "Territory", "Province", "Region", "Island"];
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    return randomAdjective + " " + randomNoun;
}

// Function to apply customizations
function applyCustomization() {
    const mapName = document.getElementById('mapName').value;
    const culture = document.getElementById('culture').value;
    const province = document.getElementById('province').value;
    const state = document.getElementById('state').value;

    // Apply customizations to the map
    console.log('Map Name:', mapName);
    console.log('Culture:', culture);
    console.log('Province:', province);
    console.log('State:', state);
}

// Function to generate a random map name and fill into the map name input field
function generateRandomMapNameField() {
    const mapNameInput = document.getElementById('mapName');
    mapNameInput.value = generateRandomMapName();
}

// Get canvas and context
const canvas = document.getElementById('mapCanvas');
const ctx = canvas.getContext('2d');

// Function to draw a region on the canvas
function drawRegion() {
    const regionColor = document.getElementById('regionColor').value;
    const regionName = document.getElementById('regionName').value;

    // Draw a simple rectangle for the region
    const x = Math.random() * (canvas.width - 100);
    const y = Math.random() * (canvas.height - 100);
    const width = 100;
    const height = 100;

    ctx.fillStyle = regionColor;
    ctx.fillRect(x, y, width, height);

    // Draw region name
    ctx.fillStyle = '#000000';
    ctx.font = '14px Arial';
    ctx.fillText(regionName, x + 10, y + 20);
}