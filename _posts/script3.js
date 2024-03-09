document.addEventListener("DOMContentLoaded", function() {
    const storyTitle = document.getElementById("storyTitle");
    const storyDescription = document.getElementById("storyDescription");
    const storyContent = document.getElementById("storyContent");
    const addPartBtn = document.getElementById("addPartBtn");
    const saveStoryBtn = document.getElementById("saveStoryBtn");

    // Get story details from query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const title = urlParams.get('title');
    const description = urlParams.get('description');
    const content = urlParams.get('content');

    // Set story title and description
    storyTitle.textContent = title;
    storyDescription.textContent = description;

    // Initialize story content with existing content
    storyContent.innerHTML = content;

    addPartBtn.addEventListener("click", function() {
        storyContent.innerHTML += "<hr><div class='editable' contenteditable='true' placeholder='Write the next part of your story here'></div>";
    });

    saveStoryBtn.addEventListener("click", function() {
        const newContent = storyContent.innerHTML;
        // You can implement saving functionality here, e.g., send data to a server or save to localStorage

        // Redirect to main site after saving
        window.location.href = "index.html";
    });
});