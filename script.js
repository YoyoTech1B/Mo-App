const input = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const chatBox = document.getElementById("chatBox");

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

// Suggestion buttons
document.querySelectorAll(".suggestion").forEach(button => {

    button.addEventListener("click", () => {

        input.value = prompts[button.textContent.trim()];
        input.focus();

    });

});

// Send button
sendBtn.onclick = sendMessage;

// Press Enter
input.addEventListener("keypress", function(e){

    if(e.key === "Enter"){
        sendMessage();
    }

});

// Main function
function sendMessage(){

    if(input.value.trim() === "") return;

    // User message
    const user = document.createElement("div");
    user.className = "message user";
    user.textContent = input.value;

    chatBox.appendChild(user);

    // Add to sidebar history
    const history = document.querySelector(".chat-history");

    const item = document.createElement("div");

    item.className = "history-item";

    let title = user.textContent;

    if(title.length > 25){
        title = title.substring(0,25) + "...";
    }

    item.textContent = "💬 " + title;

    history.appendChild(item);

    // AI message
    const ai = document.createElement("div");
    ai.className = "message ai";
    ai.textContent = "🤖 Moar is thinking...";

    chatBox.appendChild(ai);

    input.value = "";

    chatBox.scrollTop = chatBox.scrollHeight;

}

// New Chat buttons
document.getElementById("newChat").onclick = () => {
    location.reload();
};

document.getElementById("newChatSide").onclick = () => {
    location.reload();
};

sendBtn.onclick = async () => {

const message = input.value.trim();

if(message === "") return;

// User message
chatBox.innerHTML += `
<div class="message user">
${message}
</div>
`;

input.value = "";

// Thinking message
chatBox.innerHTML += `
<div class="message ai" id="thinking">
Moar is thinking...
</div>
`;

chatBox.scrollTop = chatBox.scrollHeight;

};
