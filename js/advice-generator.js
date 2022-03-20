const adviceId = document.getElementsByClassName("title-id")[0];
const adviceText = document.getElementsByClassName("adviceApp-text")[0];
const adviceDice = document.getElementsByClassName("adviceApp-dice")[0];

const getAdvice = () => {
    fetch("https://api.adviceslip.com/advice").then((response) =>
      response.json().then((advice) => {
         adviceId.textContent = advice.slip.id;
         adviceText.textContent = `“${advice.slip.advice}”`;
      })
    );
}

adviceDice.addEventListener("click", getAdvice);
window.onload = getAdvice;
