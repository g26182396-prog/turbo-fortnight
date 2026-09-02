let currentPage = 1;
const totalPages = 11;

const pages = document.querySelectorAll(".page");

function showPage(number) {
  pages.forEach(page => {
    page.classList.remove("active");
  });

  const page = document.getElementById(`page${number}`);

  if (page) {
    page.classList.add("active");
  }

  currentPage = number;

  if (number === 4) {
    startTyping();
  }
}

function nextPage() {
  if (currentPage < totalPages) {
    showPage(currentPage + 1);
  }
}

/* Typing animation */
const letterText =
`I want you to know something.

I never wanted you to feel that I don't trust you.

I believed the prank for a moment, but that moment does not define how I feel about you.

You are someone I genuinely value.

Your loyalty means a lot to me.

And more than anything, I want you to know that I believe in you.

This little website is my way of saying:

I'm sorry for the misunderstanding.

You are special to me. ♥`;

let typingStarted = false;

function startTyping() {
  if (typingStarted) return;

  typingStarted = true;

  const element = document.getElementById("typingText");
  let index = 0;

  function type() {
    if (index < letterText.length) {
      element.textContent += letterText.charAt(index);
      index++;
      setTimeout(type, 35);
    }
  }

  type();
}

/* Curtain animation */
function openCurtain() {
  const wrapper = document.querySelector(".curtain-wrapper");
  const message = document.getElementById("curtainMessage");

  wrapper.classList.add("open");

  message.textContent = "And behind the curtain... something special is waiting.";

  setTimeout(() => {
    nextPage();
  }, 2200);
}

/* Award stamp */
function giveAward() {
  const stamp = document.getElementById("stamp");
  const message = document.getElementById("awardMessage");

  stamp.classList.add("show");

  message.textContent =
    "✓ Award officially validated and presented.";

  createHearts();
}

/* Floating hearts */
function createHearts() {
  for (let i = 0; i < 25; i++) {
    const heart = document.createElement("div");

    heart.textContent = "♥";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-30px";
    heart.style.fontSize = 15 + Math.random() * 25 + "px";
    heart.style.color = "#ff477e";
    heart.style.zIndex = "9999";
    heart.style.pointerEvents = "none";

    document.body.appendChild(heart);

    const duration = 2500 + Math.random() * 2500;

    heart.animate(
      [
        {
          transform: "translateY(0) scale(.5)",
          opacity: 0
        },
        {
          transform: "translateY(-40vh) scale(1)",
          opacity: 1
        },
        {
          transform: "translateY(-110vh) scale(.7)",
          opacity: 0
        }
      ],
      {
        duration: duration,
        easing: "ease-out"
      }
    );

    setTimeout(() => {
      heart.remove();
    }, duration);
  }
}

/* Restart */
function restartStory() {
  currentPage = 1;

  const typing = document.getElementById("typingText");
  const stamp = document.getElementById("stamp");

  typing.textContent = "";
  stamp.classList.remove("show");

  typingStarted = false;

  document
    .querySelector(".curtain-wrapper")
    .classList.remove("open");

  showPage(1);
}

/* Start */
showPage(1);
