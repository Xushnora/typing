document.addEventListener("DOMContentLoaded", function () {
    let letter = 0;
    const text = `Hey #frontend developers!
Please work #better
    `; 
    function typeText() {
      if (letter < text.length) {
        document.getElementById("textArea").innerHTML += text.charAt(letter);
        letter++;
        let speed = Math.floor(Math.random() * 150) + 50;
        setTimeout(typeText, speed);
      }
    }
    typeText();
  });