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
        subtitle: "Blue Oyster, 2024, Solo show, Online",
        relatedLinks: [
            "<a href='https://blueoyster.org.nz/exhibitions/the-calm-wind-shapes-the-boat/'>View work via Blue Oyster</a>",
        ],
        images: [
            { src: "calmwind1.png", info: "Still from website, photo, text, animation." },
            { src: "calmwind2.png", info: "Still from website, photo, text, animation." },
            { src: "CalmWind3.jpg", info: "Research Image."},
        ]
    },
    exhibitionB: {
        title: "and my roarings are poured out like the waters",
        subtitle: "Robert Heald Gallery, 2023, Group Show, Te Whanganui-a-Tara Wellington, NZ",
        relatedLinks: [
            "<a href='https://roberthealdgallery.com/2023/and-my-roarings-are-poured-out-like-the-waters-curated-by-owen-connors'>George Kuchar, p. Walters, susu (curated by Owen Connors)</a>",
        ],
        images: [
            { src: "RH1.jpg", info: "Seeing a reflection, 2023, plaster, diatomaceous earth and fiberglass (edition of 3), 95 x 67.5 x 3cm" },
            { src: "RH2.jpg", info: "Seeing a reflection (detail), 2023, plaster, diatomaceous earth and fiberglass (edition of 3)" },
            { src: "RH3.jpg", info: "Walking under a spectrum, 2023, plaster and diatomaceous earth (unique edition of 13), 12.5 x 10 x 10cm each" },
            { src: "RH4.jpg", info: "Walking under a spectrum (detail), 2023, plaster and diatomaceous earth (unique edition of 13)" },
            { src: "RH5.jpg", info: "Flying past a beam, 2023, PLA and ready made rubber foot, 352 x 6 x 6cm" },
            { src: "RH6.jpg", info: "Flying past a beam, 2023, PLA and ready made rubber foot, 352 x 6 x 6cm" },
        ]
    },
    exhibitionC: {
        title: "Rooting for you",
        subtitle: "SCAPE Public Art Season 2023, Ōtautahi Christchurch, NZ",
        relatedLinks: [
            "<a href='https://www.scapepublicart.org.nz/artwork/rooting-for-you/'>Scape Public Art</a>",
        ],
        images: [
            { src: "scape1.jpg", info: "Installation view" },
            { src: "scape2.jpg", info: "Installation view" },
            { src: "scape3.jpg", info: "Research image, epoxy resin, photosensitive crystal (strontium aluminate)" },
        ]
    },
    exhibitionD: {
        title: "Between the Gift and its Reprisal",
        subtitle: "Artspace Aotearoa, 2022, Tāmaki Makaurau Auckland, Aotearoa NZ",
        relatedLinks: [
            "<a href='https://artspace-aotearoa.nz/exhibitions/between-the-gift-and-its-reprisal'>View Exhibition</a>",
        ],
        images: [
            { src: "BGR1.jpg", info: "‘Remember to Dive 回溯潛水’ (detail), Video projection (08:45 min), plaster, soft pastel, fiberglass, water; coins from viewer interaction." },
            { src: "BGR2.jpg", info: "‘Remember to Dive 回溯潛水’ (installation view), plaster, soft pastel, fiberglass, water." },
            { src: "BGR3.jpg", info: "‘Remember to Dive 回溯潛水’ (installation view), plaster, soft pastel, fiberglass, water." },
        ]
    },
    exhibitionE: {
        title: "Music Video",
        subtitle: "play_station, 2022, Te Whanganui-a-Tara Wellington, Aotearoa NZ",
        relatedLinks: [
            "<a href='https://playstationartistrun.space/music-video'>Susu and Jamie Rhiannon Howse, Curated by Angel C. Fitzgerald</a>",
        ],
        images: [
            { src: "PS1.jpg", info: "Video projection (6:30 min), sound (4:30 min), laser cut MDF, soft pastel, steel, acrylic wheels. Image Courtesy of play_station." },
            { src: "PS2.jpg", info: "Video projection (6:30 min), sound (4:30 min), laser cut MDF, soft pastel, steel, acrylic wheels. Image Courtesy of play_station." },
            { src: "PS3.jpg", info: "Video projection (6:30 min), sound (4:30 min), laser cut MDF, soft pastel, steel, acrylic wheels. Image Courtesy of play_station." },
            { src: "PS4.jpg", info: "Video projection (6:30 min), sound (4:30 min), laser cut MDF, soft pastel, steel, acrylic wheels. Image Courtesy of play_station." },
            { src: "PS5.jpg", info: "Video projection (6:30 min), sound (4:30 min), laser cut MDF, soft pastel, steel, acrylic wheels. Image Courtesy of play_station." },
            { src: "PS6.jpg", info: "Video projection (6:30 min), sound (4:30 min), laser cut MDF, soft pastel, steel, acrylic wheels. Image Courtesy of play_station." },
            { src: "PS7.jpg", info: "Video projection (6:30 min), sound (4:30 min), laser cut MDF, soft pastel, steel, acrylic wheels. Image Courtesy of play_station." },
        ]
    },
    exhibitionF: {
        title: "The Moon and the Pavement",
        subtitle: "2022, A partnership between The Physics Room and Ashburton Art Gallery, Hakatere Ashburton, Aotearoa NZ",
        relatedLinks: [
            "<a href='https://physicsroom.org.nz/exhibitions/the-moon-and-the-pavement'>Teresa Collins, Yukari Kaihori, Susu, and Sam Towse, Curated by Abby Cunnane</a>",
        ],
        images: [
            { src: "moon1.jpg", info: "Remember to Dive 回溯潛水 (video still), 2022." },
            { src: "moon2.jpg", info: "The moon and the pavement (installation view), 2022. Photo by Nancy Zhou." },
            { src: "moon3.jpg", info: "The moon and the pavement (installation view), 2022. Photo by Nancy Zhou." },
            { src: "moon4.jpg", info: "The moon and the pavement (installation view), 2022. Photo by Nancy Zhou." },
            { src: "moon5.jpg", info: "The moon and the pavement (installation view), 2022. Photo by Nancy Zhou." },
        ]
    },
    exhibitionG: {
        title: "promising.space",
        subtitle: "Window Gallery, 2021, Online",
        relatedLinks: [
            "<a href='https://vimeo.com/870919488?share=copy'>Documentation (7:17)</a>",
            "<a href='https://www.the-art-paper.com/journal/susu-window-online'>In conversation with Bonnie Lee, the Art Paper</a>"
        ],
        images: [
            { src: "ProSpa1.png", info: "promising.space (still), 2021, HTML website. Window Gallery Online, 2021." },
            { src: "ProSpa2.png", info: "promising.space (still), 2021, HTML website. Window Gallery Online, 2021." },
            { src: "ProSpa3.png", info: "promising.space (still), 2021, HTML website. Window Gallery Online, 2021." },
            { src: "ProSpa4.png", info: "promising.space (still), 2021, HTML website. Window Gallery Online, 2021." },
            { src: "ProSpa5.png", info: "promising.space (still), 2021, HTML website. Window Gallery Online, 2021." },
            { src: "ProSpa6.png", info: "promising.space (still), 2021, HTML website. Window Gallery Online, 2021." },
            { src: "ProSpa7.jpg", info: "promising.space (still), 2021, HTML website. Window Gallery Online, 2021." },
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

// Function to load exhibition content
window.loadExhibition = function(exhibitionKey) {
    const exhibition = exhibitions[exhibitionKey];
    if (!exhibition) return;

    // Generate exhibition HTML
    const html = `
        <h1 class="exhibition-title">${exhibition.title}</h1>
        <h2 class="exhibition-subtitle">${exhibition.subtitle}</h2>
        <div class="related-links">${exhibition.relatedLinks.join(" | ")}</div>
        <div class="additional-images">
            ${exhibition.images.map(img => `
                <div class="image-wrapper">
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
    exhibitionContent.classList.add("exhibition-content-active");
};
// Press data
const pressArticles = [
    {
        year: "2024",
        title: "Review: Skin in craters like the moon",
        link: "https://www.circuit.org.nz/writing-and-podcast/skin-in-craters-like-the-moon",
        description: "Reviewed by Samuel Te Kani, CIRCUIT Artist Moving Image"
    },
    {
        year: "2024",
        title: "Satellite Artist Profile",
        link: "https://www.satellites.co.nz/archive/people/su-su",
        description: "Satellite, Aotearoa NZ"
    },
    {
        year: "2021",
        title: "Interview: promising.space",
        link: "https://www.the-art-paper.com/journal/susu-window-online?srsltid=AfmBOor_wpDmIRnDcCLZUh2ENAzhrtnd1PSrzxC8eKeZXvKXuIxWDalV",
        description: "In conversation with Bonnie Lee, The Art Paper"
    }
];

// Function to load press content
function loadPress() {
    const pressHTML = `
        <h1 class="exhibition-title">Press</h1>
        <ul class="press-list">
            ${pressArticles.map(article => `
                <li>${article.year} - <a href="${article.link}" target="_blank">${article.title}</a> - ${article.description}</li>
            `).join('')}
        </ul>
    `;

    // Display press content in the exhibition content area
    exhibitionContent.innerHTML = pressHTML;
    exhibitionContent.style.display = "block";
    overlayMenu.style.display = "none";
    document.getElementById("backgroundVideo").style.display = "none";
    exhibitionContent.classList.add("exhibition-content-active");
}
