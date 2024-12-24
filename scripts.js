
const button = document.getElementById("start-button");
const loading = document.querySelector(".circle-animation");
const resultNumber = document.querySelector(".result-number");

function sortear() {

  const min = Math.ceil(document.querySelector(".input-min").value);
  const max = Math.floor(document.querySelector(".input-max").value);

  loading.style.visibility = "visible"

  setTimeout(() => {
    loading.style.visibility = "hidden"

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    document.querySelector("#result").value = result;
  }, 400)

}

button.addEventListener("click", sortear);