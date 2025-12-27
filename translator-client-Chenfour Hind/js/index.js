function sendPrompt() {
    let prompt = getInputValue("prompt");
    let url = "http://localhost:8080/api/translator?prompt=" + prompt;

    url.replace(" ", "%20")

    printHtmlPrompt(prompt);
    emptyInput("prompt")
    
    fetch(url)
    .then(res => res.text())
    .then(response => printHtmlResponse(response))
    .catch(err => console.log(err))
}

function handleKeyPress(event) {
    if(event.key == "Enter") sendPrompt();
}

function printHtmlPrompt(prompt) {
    let div = `
        <div class="prompt-message">${prompt}</div>
        <div class="bot-message" id="loading">...</div>
    `;
    getElement("chat-box").innerHTML += div;
    flexElement("loading")
}

function printHtmlResponse(response) {
    let div = `<div class="bot-message">${response}</div>`;
    getElement("loading").remove();
    getElement("chat-box").innerHTML += div;
}