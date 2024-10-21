let autoScrollEnabled = true;  // Start with auto-scroll enabled

window.onload = function() {
    const video = document.getElementById('floating-video');
    video.play().catch(error => {
        console.log("Video failed to play automatically:", error);
    });
};

// Function to manually append text without clearing anything
function appendTextManually(containerId, text) {
  const container = document.getElementById(containerId);
  const newText = document.createElement('div');
  newText.textContent = text;
  container.insertBefore(newText, document.getElementById('typed-text')); // Insert new text before the typed-text element
  forceScrollToBottom(containerId);  // Force auto-scroll to the bottom after new text is appended
}

// Function to append a dashed line (section separator)
function appendLineBreak(containerId) {
  const container = document.getElementById(containerId);
  const lineBreak = document.createElement('hr');
  lineBreak.classList.add('line-break');
  container.insertBefore(lineBreak, document.getElementById('typed-text')); // Insert dashed line before typed-text
  forceScrollToBottom(containerId);  // Force auto-scroll to the bottom after the dashed line is added
}

// Force scroll the container to the bottom
function forceScrollToBottom(containerId) {
  const container = document.getElementById(containerId);
  container.scrollTop = container.scrollHeight;  // Force scroll to bottom
}

// Detect user scroll and toggle auto-scroll based on user position
function handleUserScroll(containerId) {
  const container = document.getElementById(containerId);

  container.addEventListener('scroll', () => {
    // Check if the user is near the bottom of the container (small tolerance)
    const isUserNearBottom = container.scrollHeight - container.clientHeight <= container.scrollTop + 50;

    // Enable auto-scroll if the user is near the bottom
    autoScrollEnabled = isUserNearBottom;
  });
}

// Initialize the auto-scroll handling when the page loads
handleUserScroll('text-container');

// Function to generate a random delay between a min and max range
function getRandomDelay(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to simulate manual typing of a new sentence at the bottom
function typeSentence(sentence, callback) {
  let index = 0;

  // Function to gradually append each character like typing with randomized speed
  function typeCharacter() {
    if (index < sentence.length) {
      document.getElementById('typed-text').textContent += sentence.charAt(index);
      index++;

      // Randomize the typing interval between 30ms and 100ms
      const randomDelay = getRandomDelay(20, 100);
      setTimeout(typeCharacter, randomDelay);  // Use random delay for each character
    } else {
      // After typing the entire sentence, append it permanently and clear 'typed-text'
      appendTextManually('text-container', document.getElementById('typed-text').textContent);
      document.getElementById('typed-text').textContent = ''; // Clear the typing area
      if (callback) callback();  // Call next function if needed
    }
  }
  
  // Start typing characters
  typeCharacter();
}

// Function to handle typing multiple sentences
function typeSentences(sentences) {
  let sentenceIndex = 0;

  // Recursive function to type each sentence sequentially
  function typeNext() {
    if (sentenceIndex < sentences.length) {
      const currentSentence = sentences[sentenceIndex];

      // Type the current sentence
      typeSentence(currentSentence, function() {
        // If sentence contains a period, append a dashed line
        if (currentSentence.includes('.')) {
          appendLineBreak('text-container');
        }

        // Move to the next sentence
        sentenceIndex++;
        typeNext();  // Type the next sentence after the current one is done
      });
    }
  }

  // Start typing the first sentence
  typeNext();
}

// Array of sentences to type (without backspacing)
const sentences = [
"A prophecy was obtained in June, from Matzu",
"At Puli",
" ",
"She stirs the ocean, prays to the boat with her fathers and brothers, her village.",
"Stirring the minds into something less obvious and hope to experience a change of mind",
"I felt like a pot was stirred, at a party, on Saturday",
" ",
"It brings me joy about how I am able to write about two things that relate to each other",
"though apart in time, it rehearsed, I think that is the point of a prophecy or a telling dream",
"I try write about everything in the pot while trying to not let the approaching deadline crumble me",
" ",
"Sail when the sea is at peace. It is about the Mid-Autumn period, the moon will hang high on top, spreading its light across the earth.",
"There is no need for anxiety and worries. Things will be well when the time comes.",
" ",
"福 凡 恰 風",
"祿 是 是 佃",
"自 不 盅 瑯",
"有 須 秋 靜",
"慶 多 燿 可",
"家 憂 一 形",
"門 慮 掄 舟",
" ",
"She had me pick out the stick and I was given the prophecy",
"After two nights of nightmares about Karangahape Road I finally came to see her",
"Because I started wondering how I would ever come back if it felt so real",
"On the back of her scooter",
"I like the way my hair flies in the wind of course, either place, that’s something I have in common with myself",
" ",
"I got other instalments, too, other than the prophecy",
"Hair done",
"Nails done",
"Skin done",
"Eyebrows done",
"New glasses",
"New shoes",
"New phone case",
"And when I came back I was the same as the road and the people who stepped on me.",
" ",
"There is nothing really tormenting me, I have to clarify",
"They are really natural thoughts, goes on about how many things mean many other things",
"And I can’t just tell him to come back later",
" ",
"But the prophecy carried itself through and many things did happen the day after Moon festival",
"It feels like a funny tradition now, how every year I start talking about this particular holiday and the moon and always arrive in the wrong month",
" ",
"The moon is change while anxious but also brings peace to the ocean",
" ",
"At full moon",
"Taiwanese people roast meat outside their houses and eat them with whitebread",
"The eels know where to go",
"The exemption letter for my military service came",
"And I decided to leave Auckland!!",
" ",
" ",
" ",
". ",
" ",
" ",
" ",
"坐船心態",
"Boat-ride mentality",
"與",
"and",
"深耕心態",
"Deep-cultivation mentality.",
" ",
"這裡不是一條船",
"This place is not a boat",
"這裡是",
"This place is",
" ",
"一塊固定",
"one fixed",
"在地球上",
"piece of land",
"的土地",
"on Earth.",
" ",
" ",

"When I started my job after uni,",
"my parents wondered why I work at a cafe,",
"yet they are happy for me to be picking up a new skill",

"They think I will be able to ‘learn a lot’ through this job, and I did",
"Things like how to use a kitchen, which I have not ever been inducted properly",

"I remember cooking at my East Tāmaki homestay,",
"only on weekends and only when there’s no one home",
"I burned the pot I was using, and it really upset my homestay mom",
"even though she cleaned it to perfection afterwards anyway",
"She then presented me with a set of rules on how her kitchen is to be used,",
"but mostly she just told me what I can and cannot do",
"Once she realised all I want and knows how to, is boil instant noodles and pan fry scallion pancakes",

"she’s a lot like my mom in this sense,",
"they take care of their kitchen",
"no one else in the family would want to claim that space",
"I am not sure if this is the case for her,",
"but for mom, it was not like she wanted to claim that space, naturally",
"She was made into doing that like her mother, her sisters,",
"by my father, her father",

"She keeps her kitchen clean, but extremely packed",
"She keeps a collection of things around that space",
"including things I have made, from when I was a toddler all the way til after I finished art school",

"I couldn’t really understand this, upon first glance",
"I criticised her for laying out my plaster casts against the wall, right by the stoves",
"Yet they remain in pristine condition, each time I am home",
"not one spill of oil or condiment can be traced",

"She keeps a perfect archive, is what I am now realising",
"It’s perfect because she did it so naturally",
"in a space that is hers only",
"It’s her logic, it only has to make sense for her",
"She’s a cool curator, content with the photographs on the fridge fading from daily direct sunlight",
"She’s time, still sees the image",
"She sees the image and gets the work",

"I am a low skill migrant with hate and with passion",
"As an artist, level 2; as a barista, level 4",

" ",
" ",
" ",

"大學畢業之後",
"我爸媽無法理解 為什麼我會在咖啡館工作",
"但是他們想說 還好是學一些新東西 恩",

"他們知道這份工作可以學的多 而我確實學到了一些東西",
"比如說  我感覺還沒有人跟我嚴肅地介紹過廚房的正確用法",

"我記得在東區的寄宿家庭時會用廚房",
"只會在周末 而且只會在家裡沒有人的時候",
"第一次 我燒壞了一個鍋子 寄宿媽媽很生氣",
"雖然她很快就把它清到還原的程度",
"然後她給了我一套關於她的廚房規定",
"但其實她只是說 我能做什麼 不能做什麼",
"她很快發現 我只要 而且只會 煮泡麵和煎蔥油餅",

"這點她跟我媽很像",
"這兩個人都很注重於照顧她們的廚房",
"家裡沒有其他人願意占據那個空間",
"我不確定寄宿媽媽是不是這樣",
"但對我媽來說 這並不是她自然想占據的空間",
"她是像她的母親 姐妹 一樣 漸漸地 被迫成為廚房的主宰",
"來源是我父親還有她父親",

"她的廚房很乾淨 但同時放了好多東西",
"那個空間裡充滿了她的收藏",
"其中包含我從幼稚園到大學畢業的作品",

"一開始 我覺得她的收藏方式很難懂",
"我跟她抱怨過 怎麼把我的白石膏作品放在爐子正旁邊啊",
"然而每一次回家 它們都是保持在完美狀態",
"沒有一滴油漬或調料殘留的痕跡",

"現在我才意識到 她有一個完美的檔案室",
"完美 因為她做得好自然",
"在屬於她的空間裡",
"這是她的邏輯 只要她自己懂 其實就足夠了",
"她是一個酷策展人 冰箱上照片的褪色也可以釋懷",
"她是時間 她還看的到照片中的意象",
"她看得懂意象也看得懂我",

"我是一個低技能的移民 帶著憤怒和激情",
"作為藝術家，等級2；作為咖啡師，等級4",
];

// Start typing the sentences
typeSentences(sentences);