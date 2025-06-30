const codeSnippets = [
  'SELECT * FROM skills WHERE level = "expert";',
  "const developer = new Franklin();",
  'git commit -m "Another day, another solution"',
  "function buildAmazingThings() { return true; }",
  "CREATE DATABASE innovation;",
  'let passion = "coding" + "learning";',
  'console.log("Hello, World!");',
  "UPDATE skills SET level = level + 1;",
];

function createFloatingCode() {
  const bgAnimation = document.getElementById("bgAnimation");
  const code = document.createElement("div");
  code.className = "floating-code";
  code.textContent =
    codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
  code.style.left = Math.random() * 100 + "vw";
  code.style.animationDuration = Math.random() * 10 + 15 + "s";
  code.style.animationDelay = Math.random() * 5 + "s";

  bgAnimation.appendChild(code);

  setTimeout(() => {
    code.remove();
  }, 25000);
}

setInterval(createFloatingCode, 3000);

for (let i = 0; i < 5; i++) {
  setTimeout(createFloatingCode, i * 1000);
}

const title = document.querySelector(".title");
const originalText = title.textContent;
title.textContent = "";

let i = 0;
function typeWriter() {
  if (i < originalText.length) {
    title.textContent += originalText.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}

setTimeout(typeWriter, 1000);
