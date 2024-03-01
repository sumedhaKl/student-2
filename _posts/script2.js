document.addEventListener("DOMContentLoaded", function() {
    const createStoryBtn = document.getElementById("createStoryBtn");
    const storyModal = document.getElementById("storyModal");
    const closeBtn = document.getElementsByClassName("close")[0];
    const submitStoryBtn = document.getElementById("submitStoryBtn");
    const addPartBtn = document.getElementById("addPartBtn");
    const storyList = document.getElementById("storyList");

    createStoryBtn.addEventListener("click", function() {
        storyModal.style.display = "block";
    });

    closeBtn.addEventListener("click", function() {
        storyModal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target == storyModal) {
            storyModal.style.display = "none";
        }
    });

    submitStoryBtn.addEventListener("click", function() {
        const title = document.getElementById("storyTitle").value;
        const content = document.getElementById("storyContent").innerHTML;
        if (title.trim() !== "" && content.trim() !== "") {
            createStory(title, content);
            storyModal.style.display = "none";
            document.getElementById("storyTitle").value = "";
            document.getElementById("storyContent").innerHTML = "";
        } else {
            alert("Please enter a title and content for your story.");
        }
    });

    addPartBtn.addEventListener("click", function() {
        const storyContent = document.getElementById("storyContent");
        storyContent.innerHTML += "<hr><div class='editable' contenteditable='true' placeholder='Write the next part of your story here'></div>";
    });

    function createStory(title, content) {
        const storyCard = document.createElement("div");
        storyCard.classList.add("storyCard");
        const titleElement = document.createElement("h3");
        titleElement.textContent = title;
        const contentElement = document.createElement("div");
        contentElement.innerHTML = content;
        contentElement.classList.add("storyContent");
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("deleteBtn");
        deleteBtn.addEventListener("click", function() {
            storyCard.remove();
        });
        storyCard.appendChild(titleElement);
        storyCard.appendChild(contentElement);
        storyCard.appendChild(deleteBtn);
        storyList.appendChild(storyCard);

        const parts = contentElement.querySelectorAll('.editable');
        parts.forEach(part => {
            part.removeAttribute('contenteditable');
        });
    }
});