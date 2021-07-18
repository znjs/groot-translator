var buttonTranslate = document.querySelector("#btn-translate");

var txtInput = document.querySelector("#txt-input");

var outputArea = document.querySelector("#output");

var url = "https://api.funtranslations.com/translate/groot.json?text=";

function getTranslation(text) {
  return url + text;
}

function errorHandler(error) {
  console.log("error occured" + error);
}

buttonTranslate.addEventListener("click", function () {
  //   console.log(txtInput.value);
  if (txtInput.value === "") {
    alert("The Text area is empty!!!");
  }

  fetch(getTranslation(txtInput.value))
    .then((response) => response.json())
    .then((data) => {
      outputArea.innerHTML = data.contents.translated;
      console.log(data);
    })
    .catch(errorHandler);
});
