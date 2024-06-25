document.addEventListener("DOMContentLoaded", function () {
  const codeDiv = document.querySelectorAll("div#code");
  codeDiv.forEach((div, index) => {
    const ogHTML = div.innerHTML;
    const ogText = div.textContent;
    div.innerHTML = `<a><svg xmlns='http://www.w3.org/2000/svg' style='position:relative;top:4px;' height='20px' viewBox='0 -960 960 960' width='24px' fill='#fff'><path d='M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z'/></svg>Copy Code</a>`;
    div.querySelector("a").addEventListener(
      "click",
      (function () {
        copy(ogText);
      })()
    );
    div.innerHTML += ogHTML;
  });
});

function copy(text) {
  navigator.clipboard.writeText(text);
  alert("Code copied to clipboard");
}