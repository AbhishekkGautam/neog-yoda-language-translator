const serverURL = "https://api.funtranslations.com/translate/yoda.json";

var inputTextArea = document.querySelector("#text-input");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output-div");

function urlWithText(text) {
  return `${serverURL}?text=${text}`;
}

function errorHandler(error) {
  outputDiv.innerHTML = `<p style="color: red;">Some error occured: ${error.message}</p>
  `;
}

function btnTranslateHandler() {
  let inputText = inputTextArea.value;
  fetch(urlWithText(inputText))
    .then((response) => response.json())
    .then((json) => {
      let translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", btnTranslateHandler);
