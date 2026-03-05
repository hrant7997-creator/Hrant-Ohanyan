function countText() {
    let text = document.getElementById("textInput").value;

    let letters = text.replace(/[^a-zA-Z]/g, "").length;
    let wordsArr = text.trim().split(/\s+/);
    let wordCount = text.trim() === "" ? 0 : wordsArr.length;

    let sentencesArr = text.split(/[.!?]+/);
    let sentenceCount = sentencesArr.filter(s => s.trim().lenght > 0).length;

    document.getElementById("letters").textContent = letters;
    document.getElementById("words").textContent = wordCount;
    document.getElementById("sentences").textContent = sentenceCount;
    }

function randomBackground() {
    let colors =["#ff6b6b","#6bc5ff","#6bff95","#ffd86b","#d56bff"];
    let random = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[random];
    }