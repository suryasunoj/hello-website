const greetings = [
  { text: "Hello!", lang: "English" },
  { text: "Bonjour!", lang: "French" },
  { text: "¡Hola!", lang: "Spanish" },
  { text: "Ciao!", lang: "Italian" },
  { text: "こんにちは!", lang: "Japanese" },
  { text: "Guten Tag!", lang: "German" },
  { text: "Olá!", lang: "Portuguese" },
  { text: "Namaste!", lang: "Hindi" },
  { text: "안녕하세요!", lang: "Korean" }
];

let currentIndex = 0;

const greetingEl = document.getElementById("greeting");
const langNameEl = document.getElementById("lang-name");
const buttonEl = document.getElementById("change-greeting-btn");

buttonEl.addEventListener("click", () => {
  // Fade out effect
  greetingEl.style.opacity = "0";
  greetingEl.style.transform = "scale(0.95)";

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % greetings.length;
    const current = greetings[currentIndex];
    
    greetingEl.textContent = current.text;
    langNameEl.textContent = current.lang;
    
    // Fade in effect
    greetingEl.style.opacity = "1";
    greetingEl.style.transform = "scale(1)";
  }, 150);
});
