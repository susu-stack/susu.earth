window.onload = function() {
    const video = document.getElementById('floating-video');
    if (video) {
        video.play().catch(error => {
            console.log("Video failed to play automatically:", error);
        });
    }

    // Start typing the sentences when the page is fully loaded
    typeSentences(sentences);
};

// Function to manually append text without clearing anything
function appendTextManually(containerId, text) {
    const container = document.getElementById(containerId);
    if (container) {
        const newText = document.createElement('div');
        newText.textContent = text;
        container.insertBefore(newText, document.getElementById('typed-text')); // Insert new text before the typed-text element
    }
}

// Function to append a dashed line (section separator)
function appendLineBreak(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        const lineBreak = document.createElement('hr');
        lineBreak.classList.add('line-break');
        container.insertBefore(lineBreak, document.getElementById('typed-text')); // Insert dashed line before typed-text
    }
}

// Function to simulate manual typing of a new sentence at the bottom
function typeSentence(sentence, callback) {
    let index = 0;
    const typedTextElement = document.getElementById('typed-text');

    // Function to gradually append each character like typing with randomized speed
    function typeCharacter() {
        if (index < sentence.length) {
            typedTextElement.textContent += sentence.charAt(index);  // Append the current character
            index++;

            // Randomize the typing interval between 30ms and 100ms
            const randomDelay = getRandomDelay(50, 100);  // Adjust delay to ensure readability
            setTimeout(typeCharacter, randomDelay);  // Use random delay for each character
        } else {
            // After typing the entire sentence, append it permanently and clear 'typed-text'
            appendTextManually('text-container', typedTextElement.textContent);
            typedTextElement.textContent = ''; // Clear the typing area
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
                // If sentence contains '♡', append a dashed line
                if (currentSentence.includes('♡')) {
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

// Function to generate a random delay between a min and max range
function getRandomDelay(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Array of sentences to type (without backspacing)
const sentences = [
"One of the first things I did was getting my nails done",
"as I begin my ‘holiday’ at home which means no work, no physical labour",
"for the next 5 weeks I can have freedom over my fingers",
"This is such a statement",
"I felt so pretty even though I had them done short",
"I go to a lady in Puli, 采臻, who's also my dad’s client",
"My mom gets her nails done there sometimes",
"Even though I know mom has a utilitarian view on cosmetics like pedicure and manicure",
"in recent years she’s loosened up and started getting her nails done as a leisure",
"so I get to go too without getting too much attention at home",
"She would tell me not to choose crazy colours, let alone sparkling adornments",
"because she thinks dad wouldn’t be too comfortable about it",
"(I had green gradient gel done, he didn't say anything, not once for the entire 5 weeks, my nails looked like jade, I felt so fulfilled. I asked my mom if he saw and why he didn’t say anything, they didn’t care for it, I think this is so great)",
" ",
"The lady’s name is 采臻",
"she immigrated from Vietnam more than a decade ago",
"and travels weekly between her family and shops in Taichung City and Puli Town",
"this constant travel between the city and the town is common practice for people in Puli",
"like how mom used to go to high school in Taichung and would take a 90 minute school bus ride everyday",
"采臻’s main clientele in Puli are women like my mother",
"she sees me once a year, and she remembers me by my parents and my long hair",
" ",
"She knows I don’t want to look like a man",
"and she told me this is so chill",
"Which made me instantly rest my back",
"instead of sitting tensely in front of her like I am seeing a doctor",
"Now that she’s made herself clear as an ally, we started a conversation",
" ",
"There are lots of people like you in Vietnam, too",
"And they look so good, I have friends like that, too",
"So you want to look more like a girl?",
"You need to get your nails done, in gel, every three months at least",
"To keep in shape, look at your hands, you still have man hands",
"people can tell that you’re a guy if they see your hands",
"It takes time, it takes the gel to alter the shape of your nails over time",
"you need to be doing your nails",
"How come you don’t get your hair done? You should have a nice perm? some colour?",
"What about makeup, do you usually do makeup?",
"You’re right, there’s no one for you to dress up* for in a town like Puli anyway",
"but you can’t think like that",
"You are not supposed to dress up for other people",
"you are to dress up for yourself",
"If you feel gorgeous you feel good, don’t worry about other people",
" ",
"采臻 tried really hard",
"she speaks exactly like how an auntie, acquainted or not, would speak to me on a surface level",
"But she knows me, she knows what I want and she actually wants me to have it",
"She has my best interest at heart",
"I was able to see her as a god-mother figure of nails and brows",
"even though I hated her hair, nails and makeup",
"it was easy to ignore them and her little comments that would be considered queerphobic in a western setting",
" ",
"Before she started on my nails she talked me into getting my eyebrows done too",
"she tried it last year, too",
"I said yes instantly, without really knowing the ways of micro-needled eyebrows",
"I just know that she’s got a vision for me and I say let’s do it",
"Something about how it takes me so long to come here",
"to come home, making it worthwhile, love yourself",
"I showed her the brows I wanted",
"It was a photo of Minji from NewJeans",
"I want thick brows, I said, please don’t make it too slim or too dark",
"my parents are going to freak out",
"采臻 went for it and she did so well",
"Not like I could complain about anything she’s doing to me anymore",
"she’s my hometown miracle that I didn’t know I needed",
" ",
"The whole time there was another group of customers next to me",
"a mother, her mother, and her crying infant",
"In between doing my brows, 采臻 was removing wots from their feet",
"while answering concerning comments about me",
" ",
" ",
"Guys get their eyebrows done too huh",
"Yes, everyone does it nowadays, I am doing my boyfriend’s eyebrows for him after this",
"he’s going to Vietnam next week, people want to look good, you know?",
"Of course",
"People should get what they want done",
"what matters is if they like it or not, and if they look good",
"if they like it, they should do it, and look good with it",
" ",
"*the word she used was “打扮“ which is a common genderless verb of taking care of your exterior, to look good or presentable",
" ",
" ",
"♡",
" ",
"A prophecy was obtained in June, from Matzu",
"At Puli, Nantou, Taiwan, Republic of",
" ",
"She stirs the ocean, prays to the boat with her fathers, brothers, and her village",
"Stirring the minds into something less obvious and hope to experience a change of mind",
" ",
"Now sometimes it feels rehearsed",
"I think that is the point of a prophecy or a telling dream",
"I try write about everything in the pot",
" ",
" ",
" ",
"Sail when the sea is at peace",
" ",
"It is about the Mid-Autumn period",
"the moon will hang high on top, spreading its light across the earth",
" ",
"There is no need for anxiety and worries",
" ",
"Things will be well when the time comes",
" ",
"福  凡  恰  風",
"祿  是  是  佃",
"自  不  盅  瑯",
"有  須  秋  靜",
"慶  多  燿  可",
"家  憂  一  形",
"門  慮  掄  舟",
" ",
" ",
"I picked out the stick and was given the prophecy",
"After two nights of nightmares about Karangahape Road I finally came to see her",
"I started wondering how I would ever come back if it felt so real",
"On the back of her scooter",
"I like the way my hair flies in the wind of course",
"either place, that’s something I have in common with myself",
" ",
"I got other investments, too, other than the prophecy",
"Hair done",
"Nails done",
"Eyebrows done",
"New glasses",
"New shoes",
"New phone case",
"And when I came back I was the same as the road and the people who stepped on me",
" ",
"The existence of the ghost is not tormenting me, I have to clarify",
"They are really natural thoughts",
"goes on about how many things mean many other things",
"And I can’t just tell him to come back later",
" ",
"But the prophecy carried itself through and many things did happen the day after Moon festival",
"It feels like a funny tradition now",
"how every year I talk about this particular holiday and the moon but never in the right month",
" ",
"At full moon",
"Taiwanese people roast meat outside their houses and eat them with whitebread",
"The eels know where to go",
"The exemption letter for my military service came",
"The dogs bark at the hanging rock in the sky, by the water",
"And I finally decided to leave Auckland",
" ",
"♡",
" ",
"I’ve been travelling between Aotearoa and Taiwan",
"Exercising my citizen rights through these military-service-necessitated-gay-neuro-exam",
"so I don’t have to become a man and serve my country in WWIII",
"They check my IQ and interview me about how I feel about my body",
"It was scary but not soul-crushing",
" ",
"Before I left for Taiwan last time, I told you about my plan of seeing a fortune teller",
"I realised what I wanted from this was just to be comforted",
"I want abstract spiritual words to be told to me like words of comfort from the universe",
"You will be fine.. Keep doing what you’re doing…",
"I asked my mom to take me to this temple up the hill, by the bridge and the highway",
"where an auntie who is a family friend of my grandparents does her sharp and real fortune telling at",
"I’ve had to really convince my mom",
"also it’s not like I can’t go alone by hopping on a scooter with a helmet",
"but if she wasn’t there it would just not be the same",
"But she is very against fortune telling",
"since she was young",
"and she resented fortune telling for the ways that it managed to put restrictions on the lives of her family members",
"She thinks I will be going in free and potentially coming out with boundaries I don’t actually need",
"She thinks the way people rely on their fortune is not chic and limits their potential as free human beings on Earth",
"I so agree with her on that",
"one of my cousins got told that they could never become a doctor since they were a toddler",
"even if they wanted to, it was not an option for them",
"So when they graduated highschool with the highest grade anyone from my mom’s side of family has ever gotten in their University entry exam",
"and even though they had enough points to get into the best med school in the country",
"they very gladly went into pharmacy",
"I don’t know how they feel about this, I have never asked",
"But I know it broke my mom’s heart",
"how they couldn’t fulfil their dream, whatever that could be",
" ",
"♡",
" ",
"When I started my job after uni, my parents wondered why I work at a cafe",
"yet they are happy for me to be picking up new skills",
"They think I will be able to ‘learn a lot’ through this job, and I did",
"Things like how to use a kitchen, which I have not ever been inducted properly",
"I remember cooking at my East Tāmaki homestay, on a weekend when there’s no one home",
"I burned the pot I was using, and it really upset my homestay mom",
"even though she cleaned it to perfection afterwards anyway",
"then presented me with a set of rules on how her kitchen is to be used",
"but mostly she just told me what I can and cannot do",
"Once she realised all I want, would, and knows how to, is boil instant noodles and pan fry scallion pancakes",
"She’s alot like my mom in this sense",
"they take care of their kitchen because no one else in the family would want to claim that space",
"I am not sure if this is the case for my homestay mom",
"but for mom, it was not like she wanted to claim that space, naturally",
"She was made into doing that like her mother, her sisters, by my father, her father",
" ",
"She keeps her kitchen clean, but extremely packed",
"She keeps a collection of things around that space",
"including things I have made, from when I was a toddler all the way til after I finished art school",
"I couldn't really understand this, upon first glance",
"I criticised her for laying out my plaster casts against the wall, right by the stoves",
"Yet they remain in pristine conditions, each time I am home",
"not one spill of oil or condiment can be traced",
"She keeps a perfect archive, is what I am now realising",
"It’s perfect because she did it so naturally, in a space that is hers only",
"It’s her logic, it only has to make sense for her",
"She’s a really great curator, contempt with the photographs on the fridge fading from daily direct sunlight",
" ",
"♡",
" ",
"White boy saw a ghost when we went to see the oppressor’s grave",
"In the middle of Taipei",
"his memorial wall is also a popular tourist attraction that costs a million a year to upkeep",
"We planned the trip poorly and it was horrible to be there on the 28th of February, the White Terror Memorial day",
"A mass persecution that went on for almost 4 decades",
"taken away during the muted times were political dissidents, intellectuals, and anyone seen as a threat to the authoritarian regime",
"They had to close the access to the hall where his actual body was kept because of potential protests",
"There were still lots of people there",
"tourists, teens street dancing and filming tiktoks",
"and people who routinely hung out at the gardens",
" ",
"Chiang Kai-shek led the Nationalist government in their retreat to Taiwan in 1949",
"My unacquainted grandfather was on one of these ships",
"leaving my unacquainted relatives in China behind for good",
"For the next 40 years Chiang and his boy dreamt of taking back the mainland while people suffered",
"First by the Dutch, the Spanish, then the Chinese, and the Japanese, and now the rich Chinese",
"Becoming a part of the cycle, when my grandfather came the island got colonised again",
"Passengers on the ship of those who sought refuge but brought with them a new wave of displacement",
"When the Japanese first came they called this place a ghost island",
"for how many of their people have died in their expeditions, due to a lack of ‘modern infrastructures.’",
"When the Dutch sailors saw the island from afar they called it Formosa, a beautiful island",
" ",
"Currently, me and my country are both confused, for the same and very different reasons",
"I want to say we are both growing, in development of a clearer and undisputed consciousness of identity",
"and that we are both haunted by ghosts",
" ",
"When he saw the ghost, it was not Chiang’s ghost, or my people’s ghosts, but my ghost",
"When he came home with me I could no longer keep up with being my Auckland self only",
"I had no choice",
"And he got spooked just witnessing me unpeel",
"I felt like a sprouting onion getting caught doing natural things like growing",
"instead of a butterfly whose growth was chic and innovative featuring a makeover",
"And when we came back to Auckland, my ghost had followed; as it usually does",
"In the past, it would hover around for the first few weeks of my arrival",
"In Auckland or Taiwan",
"I would wake up speaking Chinese to him",
"or wake up speaking English to my mom",
"But this time it never went away, it wanted me to consider it",
"My own portal now confronts me",
" ",
"On the first day of the seventh lunar month, Taiwanese people open the Gates of the Underworld",
"People called it the ghost month",
"Spirits are freed to the world of the living during this month",
"and enjoy offerings at the temples or what people leave out in front of their houses",
"With food, incense, and the burning of golden joss paper, which is the currency of the spiritual realm",
"On the 15th day of the month, a festival of offerings takes place",
"It is believed that on this day the spirits are the most starved",
"and offerings are to be made",
"To give them a temporary relief from the punishments and challenges",
"a break from the eighteen levels of hell",
"The offerings are for both the spirits who roam free as well as your familial ancestral spirits",
"The spirits that roam free are homeless in the living world",
"孤魂野鬼 has the literal translation of ‘lonely spirits and wild ghosts.’",
"Who are believed to be possessed with more punishment or work to be completed in the afterlife",
"before they can be reincarnated and rejoin the living",
"the offerings and the prayers of the living will help them with their journey in the afterlife",
"These spirits are sometimes believed to have died tragically",
"without proper burial rites",
"or whose families have not made offerings for them",
"Some see them as potentially malevolent",
"like when I was a child, some of my prayers were out of fear",
"I felt like I had to placate them",
"And mom would say they are just like us",
"and reminds me about how I would appreciate a meal like this when it’s my turn in the afterlife",
" ",
"Praying for your ancestors and your loved ones is different",
"Other than the offerings, we burn paper effigies of material items",
"such as houses, clothes",
"to ensure that the ghosts of our loved ones have everything they need in the afterlife",
"I have seen people burn paper models of tech, like karaoke systems with mics, computers, or the latest iPhone",
"or custom paper miniatures of luxury items in season, handbags, watches, shoes",
"items desired by the deceased, like new books, objects embedded with an inside joke, or belated information",
"Things to send to your loved ones are carried and transformed by the fire",
"once the ash is left with the living",
"the spirits can obtain these items",
"The burning, and flying away of the smoke, a postage",
" ",
"Ghost month forces people’s attention to the lingerings",
"the unresolved, the unseen, the silenced",
"The spirits aren’t just external",
"They inhabit the spaces within",
"lingering in the interstices of dislocated identities",
"Like the homeless ghosts",
"iterations of familial and colonial histories were never afforded closure",
"suspended in transition",
"Perhaps this is why they persist",
"occupying the gaps between cultural belonging and personal history",
"waiting for offerings but yearns for recognition",
"To acknowledge the existence of your ghost",
"praying to the spirits and your ancestors",
"When he saw my ghost it was because the gates within me had opened",
"it was a ghost because I had kept it not with the living",
"when I was away it lingered in displacement",
"I have never prayed to it",
"I now leave offerings not only for my ancestors but for the parts of me that became ghosts",
" ",
"Recently, I’ve come to realise that ghosts don’t live in dualities",
"The ghost is my strength",
"the distance is felt and imagined",
"like receiving a punch in a dream",
"Just like how I don’t owe everyone a translation for every thought",
"that not everything has to be translated",
"The ghosts dwell in the spaces where identities fail to reconcile",
"The existence of a ghost does not represent the existence of one’s duality",
"but rather, the failure and the danger of living with the confinement of duality",
"For my ghosts are kept in a pivot of a spinning tunnel",
"held onto it by a thread is the unravelling selves that are fragmented across time and space",
" ",
"The ghost is past, the present and the future",
"The ghost is the light, the shadow, and the way your body absorbs that light",
" ",
"♡",
];
