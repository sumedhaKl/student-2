document.addEventListener("DOMContentLoaded", function() {
    const createStoryBtn = document.getElementById("createStoryBtn");
    const storyModal = document.getElementById("storyModal");
    const closeBtn = document.getElementsByClassName("close")[0];
    const submitStoryBtn = document.getElementById("submitStoryBtn");
    const addPartBtn = document.getElementById("addPartBtn");
    const startWritingBtn = document.getElementById("startWritingBtn");
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

    document.getElementById("storyDescription").addEventListener("input", function() {
        if (this.value.trim() !== "") {
            startWritingBtn.removeAttribute("disabled");
        } else {
            startWritingBtn.setAttribute("disabled", "disabled");
        }
    });

    startWritingBtn.addEventListener("click", function() {
        const title = document.getElementById("storyTitle").value;
        const description = document.getElementById("storyDescription").value;
        const content = document.getElementById("storyContent").innerHTML;
        if (title.trim() !== "" && description.trim() !== "") {
            window.location.href = "indexsub1.html?title=" + encodeURIComponent(title) + "&description=" + encodeURIComponent(description) + "&content=" + encodeURIComponent(content);
        } else {
            alert("Please enter a title and description for your story.");
        }
    });

    addPartBtn.addEventListener("click", function() {
        const storyContent = document.getElementById("storyContent");
        storyContent.innerHTML += "<hr><div class='editable' contenteditable='true' placeholder='Write the next part of your story here'></div>";
    });

    submitStoryBtn.addEventListener("click", function() {
        const title = document.getElementById("storyTitle").value;
        const description = document.getElementById("storyDescription").value;
        const content = document.getElementById("storyContent").innerHTML;
        if (title.trim() !== "" && description.trim() !== "" && content.trim() !== "") {
            createStory(title, description, content);
            storyModal.style.display = "none";
            document.getElementById("storyTitle").value = "";
            document.getElementById("storyDescription").value = "";
            document.getElementById("storyContent").innerHTML = "";
        } else {
            alert("Please enter a title, description, and content for your story.");
        }
    });

    function createStory(title, description, content) {
        const storyCard = document.createElement("div");
        storyCard.classList.add("storyCard");
        const titleElement = document.createElement("h3");
        titleElement.textContent = title;
        const descriptionElement = document.createElement("p");
        descriptionElement.textContent = description;
        descriptionElement.classList.add("storyDescription");
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
        storyCard.appendChild(descriptionElement);
        storyCard.appendChild(contentElement);
        storyCard.appendChild(deleteBtn);
        storyList.appendChild(storyCard);

        const parts = contentElement.querySelectorAll('.editable');
        parts.forEach(part => {
            part.removeAttribute('contenteditable');
        });
    }
});