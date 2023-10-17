const shakespeareanTexts = [
    "To be or not to be, that is the question.",
    "All the world's a stage, and all the men and women merely players.",
    "Love all, trust a few, do wrong to none.",
    "What's in a name? That which we call a rose by any other name would smell as sweet.",
    "The better part of Valour, is Discretion.",
    "Brevity is the soul of wit.",
    "The lady doth protest too much, methinks.",
    "To thine own self be true, and it must follow, as the night the day, thou canst not then be false to any man.",
    "This above all: to thine own self be true.",
    "Frailty, thy name is woman!",
    "If music be the food of love, play on.",
    "All that glisters is not gold.",
    "Though she be but little, she is fierce.",
    "The course of true love never did run smooth.",
    "To sleep, perchance to dream.",
    "Parting is such sweet sorrow."
    // Add more Shakespearean texts here
];

function printShakespeare() {
    const shakespeareTextElement = document.getElementById("shakespeareText");
    const randomIndex = Math.floor(Math.random() * shakespeareanTexts.length);
    const randomText = shakespeareanTexts[randomIndex];
    shakespeareTextElement.textContent = randomText;
}

document.getElementById("printButton").addEventListener("click", printShakespeare);