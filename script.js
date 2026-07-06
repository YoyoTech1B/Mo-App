const input = document.getElementById("userInput");

const prompts = {

"✍️ Write a story":
"Write me an exciting story about...",

"📚 Help with homework":
"Help me understand this homework step by step:",

"💻 Write code":
"Create a modern website using HTML, CSS, and JavaScript.",

"🧠 Explain something":
"Explain this topic in a simple way:",

"🎨 Generate ideas":
"Give me 10 creative ideas for...",

"🌎 Translate languages":
"Translate this into English:"

};

document.querySelectorAll(".suggestion").forEach(button=>{

button.addEventListener("click",()=>{

input.value = prompts[button.textContent.trim()];

input.focus();

});

});
