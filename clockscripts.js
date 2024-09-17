const upperTextPages = ["This place is not a boat",
						"This place is",
						"one fixed piece of",
						"land on earth",
						"",
						"I used her money for another keyboard.",
						"One with these symbols on them.",
						"Symbols that allow a different way of breathing, communicating, tool-portal.",
						"So I carry it over, it was all heavy, keycaps, even though I type faster in English.",
						"When things first arrive, you find it uneasy for them.",
						"Materials or objects with functions or information from a different scene.",
						"Their odd placement makes up sentiment.",
						"Fragile for the mind to toss around, so they stay still like sediments in my bedroom, the physicality of it all.",
						"I can’t even throw things away, things she gave me on the way to the airport.",
						"Masks, tissue, airline tags, a mini fan.",
						"They are embedded with her words before we said bye and other things, like the truth.",
						"Before this; we had a run around town to get things I needed.",
						"It makes me cry thinking about this because it is so nice.",
						"Everything about this action is nice, joyful.",
						"We are spending time together, gathering materials, even down to little gadgets like a replacement lid for my 冰霸杯.",
						"On the back of her scooter, she doesn’t know this but every time I get a ride from her it makes me so happy instantly.",
						"Even though the materials were gathered for my departure, I am only realising sitting in Ponsonby.",
						"I tell people I find riding motos around town to be the most liberating.",
						"On the back of her scooter, being taken care of, to a destination and another, talking, breeze, sun, rain, people, speed.",
						"Judging how others drive or ride.",
						"She tells me about the shops, changes around town, reminds me of people, sharing information, gossip.",
						"If I keep writing about the past the future would never come.",
						"If I don’t write about the past, the future would have to wait.",
						"These are not letters, but notes.",
						"And this was how we pass them.",
						"",
						 "Distance as a mad man walks on the moon and back.",
						  "He walks on the coast on both sides, once in the ocean and once on the land.",
						  "He’s been to the core and was taken aback.",
						  "He went to my market and didn’t buy shit.",
						  "Distance makes me mad.",
						  "I am not a mad man, nor am I a mad man nor am I a man.",
						  "I am madness, distance didn’t like that.",
						  "So mad he threw me from mid air.",
						  "So I dropped.",
						  "When I landed I told him he was a bad friend.",
						  "He just laughed and made a goofy face.",
						  "I pretend to write a letter about his crime."];

const lowerTextPages = ["這裡不是一條船",
						"這裡是",
						"一塊固定在",
						"地球上的土地",
						"",
						  "我用她的錢買了另一個鍵盤。",
						  "上面有這些符號。",
						  "允許不同的呼吸方式、溝通方式、工具入口網站的符號。",
						  "所以我把它帶了過去，雖然我英文打字速度更快，但它很重，鍵帽。",
						  "當東西剛到的時候，你會發現它們很不安。",
						  "具有來自不同場景的功能或資訊的材料或物件。",
						  "他們奇怪的位置彌補了情緒。",
						  "對於思想的翻騰來說，它們很脆弱，所以它們就像我臥室裡的沉積物一樣保持靜止，這一切都是物質性的。",
						  "我甚至不能扔掉她在去機場的路上給我的東西。",
						  "口罩、紙巾、航空公司標籤、迷你風扇。",
						  "它們嵌入了我們說再見之前她說的話和其他事情，比如真相。",
						  "在此之前；我們在城裡跑了一圈去買我需要的東西。",
						  "想到這我就哭了，因為它太美好了。",
						  "這個動作的一切都很好，很快樂。",
						  "我們花時間在一起，收集材料，甚至是小玩意兒，例如我的冰霸杯的替換蓋子。",
						  "在她的踏板車後面，她不知道這一點，但每次我搭她的車，我都會立即感到高興。",
						  "儘管我離開時已經收集了材料，但我只是意識到坐在龐森比。",
						  "我告訴人們我發現在城裡騎摩托車是最自由的。",
						  "騎在她的摩托車後面，被照顧，去一個又一個目的地，說話，微風，陽光，雨，人，速度。",
						  "判斷別人如何駕駛或騎車。",
						  "她告訴我有關商店的資訊、城鎮周圍的變化、讓我想起人們、分享資訊、八卦。",
						  "如果我繼續寫過去，未來就永遠不會到來。",
						  "如果我不寫過去，未來就只能等待。",
						  "這些不是信件，而是筆記。",
						  "這就是我們通過它們的方式。",
						  "",
						  "一個瘋子在月球上行走並返回的距離。",
  "他走在兩邊的海岸上，一次在海洋，一次在陸地。",
  "他已經深入了核心並且大吃一驚。",
  "他去了我的市場，但沒有買任何東西。",
  "距離讓我生氣。",
  "我不是一個瘋子，我也不是一個瘋子，我也不是一個人。",
  "我很瘋狂，距離不喜歡那樣。",
  "他太生氣了，把我從半空中扔了下去。",
  "所以我放棄了。",
  "當我著陸時我告訴他他是個壞朋友。",
  "他只是笑了笑，做了個鬼臉。",
  "我假裝寫一封信講述他的罪行。"];

let currentUpperPage = 0;
let currentLowerPage = 0;

function getRandomDuration(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function flipTextPages() {
    const upperTextElement = document.getElementById('upper-text-page');
    const lowerTextElement = document.getElementById('lower-text-page');

    // Start the flip animation
    upperTextElement.classList.add('flip');
    lowerTextElement.classList.add('flip');

    // Change the text in the middle of the flip (0.25s into the flip)
    setTimeout(() => {
        upperTextElement.innerText = upperTextPages[currentUpperPage];
        lowerTextElement.innerText = lowerTextPages[currentLowerPage];

        // Set color for upperTextElement based on index
        if (currentUpperPage >= 0 && currentUpperPage < 4) {
            upperTextElement.style.color = "black";
        } else if (currentUpperPage >= 4 && currentUpperPage < 20) {
            upperTextElement.style.color = "black";
        } else {
            upperTextElement.style.color = "black";
        }

        // Set color for lowerTextElement based on index
        if (currentLowerPage >= 0 && currentLowerPage < 4) {
            lowerTextElement.style.color = "black";
        } else if (currentLowerPage >= 4 && currentLowerPage < 20) {
            lowerTextElement.style.color = "black";
        } else {
            lowerTextElement.style.color = "black";
        }

        currentUpperPage = (currentUpperPage + 1) % upperTextPages.length;
        currentLowerPage = (currentLowerPage + 1) % lowerTextPages.length;
    }, 250);  // Change the text at the halfway point (250ms)

    // Remove the flip class after the flip is complete (0.5s)
    setTimeout(() => {
        upperTextElement.classList.remove('flip');
        lowerTextElement.classList.remove('flip');
    }, 500); // Reset flip after 500ms

    // Set a new random duration for the next flip
    const nextDuration = getRandomDuration(3000, 7000); // Random time between 3-7 seconds
    setTimeout(flipTextPages, nextDuration);
}

// Initialize flipping once the page loads
window.onload = () => {
    flipTextPages();
};
