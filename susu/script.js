document.addEventListener("DOMContentLoaded", () => {
    const menuLogo = document.getElementById("menuLogo");
    const overlayMenu = document.getElementById("overlayMenu");
    const exhibitionContent = document.getElementById("exhibitionContent");

    // Show overlay menu when hovering over the logo
    menuLogo.addEventListener("mouseenter", () => {
        overlayMenu.style.display = "flex";
    });

    // Hide overlay menu when the mouse moves away from the left quarter of the screen
    document.addEventListener("mousemove", (event) => {
        const screenWidth = window.innerWidth;
        const leftQuarterBoundary = screenWidth * 0.25;

        if (event.clientX > leftQuarterBoundary) {
            overlayMenu.style.display = "none";
        }
    });

    // Exhibition data
const exhibitions = {
    exhibitionA: {
        title: "the calm wind shapes the boat",
        subtitle: "Blue Oyster, 2024", // New subtitle added without \n
        heroImage: "path/to/hero-image-a.jpg",
        relatedLinks: [
            "<a href='#'>View work via Blue Oyster</a>",
        ],
        mainImageInfo: "Info, year, medium",
        images: [
            { src: "path/to/image1.jpg", info: "Image 1 - Description and details" },
            { src: "path/to/image2.jpg", info: "Image 2 - Description and details" }
        ]
    },
    exhibitionB: {
        title: "Skin in craters like the Moon",
        subtitle: "Te Tuhi, Tāmaki Makaurau Auckland, Aotearoa NZ 2024", // New subtitle added without \n
        heroImage: "path/to/hero-image-b.jpg",
        relatedLinks: [],
        mainImageInfo: "Info, year, medium",
        images: [
            { src: "path/to/image3.jpg", info: "Image 3 - Description and details" },
            { src: "path/to/image4.jpg", info: "Image 4 - Description and details" }
        ]
    },
    exhibitionC: {
        title: "promising.space",
        subtitle: "Window Gallery, Tāmaki Makaurau Auckland, Aotearoa NZ 2021", // New subtitle added without \n
        heroImage: "path/to/hero-image-c.jpg",
        relatedLinks: [],
        mainImageInfo: "Info, year, medium",
        images: [
            { src: "path/to/image5.jpg", info: "Image 5 - Description and details" },
            { src: "path/to/image6.jpg", info: "Image 6 - Description and details" }
        ]
    },
    exhibitionD: {
        title: "and my roarings are poured out like the waters",
        subtitle: "Robert Heald Gallery, Pōneke Wellington, NZ 2023", // New subtitle added without \n
        heroImage: "path/to/hero-image-d.jpg",
        relatedLinks: [],
        mainImageInfo: "Info, year, medium",
        images: [
            { src: "path/to/image7.jpg", info: "Image 7 - Description and details" },
            { src: "path/to/image8.jpg", info: "Image 8 - Description and details" }
        ]
    },
    exhibitionE: {
        title: "Rooting for you",
        subtitle: "SCAPE Public Art, Ōtautahi Christchurch, NZ 2023", // New subtitle added without \n
        heroImage: "path/to/hero-image-e.jpg",
        relatedLinks: [],
        mainImageInfo: "Info, year, medium",
        images: [
            { src: "path/to/image9.jpg", info: "Image 9 - Description and details" },
            { src: "path/to/image10.jpg", info: "Image 10 - Description and details" }
        ]
    },
    exhibitionF: {
        title: "The Moon and the Pavement",
        subtitle: "The Physics Room and Ashburton Art Gallery, Hakatere Ashburton, Aotearoa NZ 2022", // New subtitle added without \n
        heroImage: "path/to/hero-image-f.jpg",
        relatedLinks: [],
        mainImageInfo: "Info, year, medium",
        images: [
            { src: "path/to/image11.jpg", info: "Image 11 - Description and details" },
            { src: "path/to/image12.jpg", info: "Image 12 - Description and details" }
        ]
    },
    exhibitionG: {
        title: "Music Video",
        subtitle: "play_station, Pōneke Wellington, Aotearoa NZ 2022", // New subtitle added without \n
        heroImage: "path/to/hero-image-g.jpg",
        relatedLinks: [],
        mainImageInfo: "Info, year, medium",
        images: [
            { src: "path/to/image13.jpg", info: "Image 13 - Description and details" },
            { src: "path/to/image14.jpg", info: "Image 14 - Description and details" }
        ]
    },
    exhibitionH: {
        title: "Between the Gift and its Reprisal",
        subtitle: "Artspace Aotearoa, Tāmaki Makaurau Auckland, Aotearoa NZ 2022", // New subtitle added without \n
        heroImage: "BGR1.jpg",
        relatedLinks: [],
        mainImageInfo: "Info, year, medium",
        images: [
            { src: "BGR2.jpg", info: "Image 16 - Description and details" },
            { src: "BGR3.jpg", info: "Image 16 - Description and details" }

        ]
    }
};

    // Load exhibition content
window.loadExhibition = function(exhibitionKey) {
    const exhibition = exhibitions[exhibitionKey];
    if (!exhibition) return;

    // Generate exhibition HTML
    const html = `
        <h1 class="exhibition-title">${exhibition.title}</h1>
        <h2 class="exhibition-subtitle">${exhibition.subtitle}</h2> <!-- New Subtitle -->
        <div class="related-links">${exhibition.relatedLinks.join(" | ")}</div>
        <div class="exhibition-main-image">
            <img src="${exhibition.heroImage}" alt="${exhibition.title}">
            <div class="image-info">${exhibition.mainImageInfo}</div>
        </div>
        <div class="additional-images">
            ${exhibition.images.map(img => `
                <div class="additional-image">
                    <img src="${img.src}" alt="${img.info}">
                    <div class="image-info">${img.info}</div>
                </div>
            `).join("")}
        </div>
    `;

    // Set content and display it
    exhibitionContent.innerHTML = html;
    exhibitionContent.style.display = "block";
    overlayMenu.style.display = "none";
    document.getElementById("backgroundVideo").style.display = "none";
    
    // Add class to exhibition content wrapper for styling
    exhibitionContent.classList.add("exhibition-content-active");
};
});