$(document).ready(function () {
    // Initialize the WOW plugin
    new WOW().init();

    // Parallax effect for the banner
    function parallax() {
        const posY = window.pageYOffset;
        const image = document.getElementById("parallax");
        image.style.top = posY * 0.9 + "px";
    }

    window.addEventListener("scroll", parallax);

    // Define a function to generate book elements
    function generateBookElement(book) {
        return `
            <div class="col-md-4 col-sm-6 col-xs-12">
                <a href="${book.link}" target="_blank">
                    <div class="block">
                        <div class="works-thumb" style="background-image: url(${book.imageLink})"></div>
                        <div class="works-caption">${book.bookName}</div>
                    </div>
                </a>
            </div>
        `;
    }

    // Populate the books section
    function generateBooks(books) {
        const container = document.querySelector("#works .container");
        const html = books.map(generateBookElement).join('');

        container.innerHTML = html;
    }

    // Usage
    const books = [
        {
            imageLink: "https://www.takewalks.com/blog/wp-content/uploads/2013/05/gatsby.jpg",
            bookName: "The Great Gatsby!",
            link: "https://example.com/great-gatsby",
        },
        // ... (other book objects)
    ];

    // Wait for the DOM to be fully loaded
    window.addEventListener("DOMContentLoaded", (event) => {
        generateBooks(books);
    });
});
