const letterEmoji = document.getElementById("letter");
const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const card4 = document.getElementById("card4");
const message1 = document.getElementById("message1");
const message2 = document.getElementById("message2");
const message3 = document.getElementById("message3");
const message4 = document.getElementById("message4");
const tooltip = document.getElementById("tooltip"); // Assuming tooltip is an element with id 'tooltip'
const gifContainer = document.getElementById("gif-container"); // GIF container element


let typingFinished = false;
let currentCard = null;
let nextCard = null;
let messageElement = null;

letterEmoji.addEventListener("click", (event) => {
  handleLetterClicked(event);
});
letterEmoji.addEventListener("touchstart", (event) => {
  handleLetterClicked(event);
});

card1.addEventListener("click", () => {
  handleCardClicked(card1, card2, `Before I met you, I never open up myself to anyone not even consider my feelings are important. I hated my life cause whatever I do always goes bad and end up disappointing my friends. My relationship with my family is not even all that good, i often quarrel with my parents because of my incompetence. One time my friends said something that's hurtful for me like "go to hell or anak setan", but that's how she's been talking to me. She doesn't have any filter and i thought it was normal for most of households, that's why sometimes I'm being straight forward to my friends without even consider they're feelings.`);
});
card2.addEventListener("click", () => {
  handleCardClicked(card2, card3, `I used to see you as another friends to play together. One day, you suddenly talked to me about your trip in Penang and how you got lost in there. At first, I just want to help you calm down until you get into your room. I also don't know when my feelings to you grow so much, but when I talk about myself you always take it seriously. Meeting you I was finally able to open up and say things that I'd never thought will come out from my mouth. Talking about your dreams, my goals, the future, it was a beautiful and precious memory for me.`);
});
card3.addEventListener("click", () => {
  handleCardClicked(card3, card4, `Relationship is never easy for me. I need to find someone who fits my parent's standard and if they don't i should ask myself if I really want to convince my parents so that i can spend my entire life with my partner. I'm willing to convince and discuss my relationship with my parents even if they don't agree with it, but your father is right. I'm still young and all my words come from someone who can't face the reality. I wish you all the best in your university and your future, you can always talk to me again when you're ready and I will be there for you.\n\n Best regards, \n\n Your Senior`);
});

function handleLetterClicked(event) {
  event.preventDefault();
  letterEmoji.style.display = "none";
  card1.classList.remove("hidden");
  card1.classList.add("visible");
  typeMessage(`Dear Christa,\n\nI bought this gift as a farewell gift for you, and to be honest i don't know what you really like so i hope you like it. I want to apologize also for not trusting you and disrespecting your decision. You're right i wanted us to be more than just friends, but i don't realise it's hurting you so badly and i end up becoming selfish. I'm truly sorry for how i treat you this past few days. Honestly, i don't really want to lose you as a friend because to me you've already become someone special in my life.`, message1);
}

function handleCardClicked(current, next, message) {
  if (!typingFinished) return; // Prevent card switch until typing is finished

  current.classList.remove("visible");
  current.classList.add("hidden");
  next.classList.remove("hidden");
  next.classList.add("visible");
  typeMessage(message, next.querySelector(".message"), next);
}

function typeMessage(text, messageElement, nextCard) {
  let index = 0;
  const speed = 10; // typing speed in milliseconds

  tooltip.classList.add("hidden"); // Hide tooltip when typing starts

  function type() {
    if (index < text.length) {
      messageElement.innerHTML += text.charAt(index);
      index++;
      setTimeout(type, speed);
    } else {
      typingFinished = true; // Mark typing as finished when done
      if (nextCard === card4) { // Check if the next card is card4
        gifContainer.classList.remove("hidden"); // Show the GIF container
      } else {
        showTooltip(); // Show tooltip for other cards
      }
    }
  }

  typingFinished = false; // Reset typing status
  type();
}

function showTooltip() {
  tooltip.classList.remove("hidden");
}

letterEmoji.addEventListener("click", () => {
  tooltip.classList.add("hidden"); // Hide tooltip when letter is clicked
});
