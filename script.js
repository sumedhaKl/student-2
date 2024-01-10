document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("generateBtn").addEventListener("click", generateStory);
});

function generateStory() {
    // Get selected values
    const selectedCharacter = document.getElementById("character").value;
    const selectedPersonality = document.getElementById("personality").value;
    const selectedSetting = document.getElementById("setting").value;

    // Generate a story based on selected values
    const story = `${selectedCharacter} is a ${selectedPersonality} person who decides to explore the ${selectedSetting}.`;

    // Display the story
    document.getElementById("story").innerText = story;
}
