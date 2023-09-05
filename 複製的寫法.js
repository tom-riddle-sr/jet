//舊寫法
const copy_function = () => {
  const npm_text = npm.current.textContent;
  const textArea = document.createElement("textarea");
  textArea.value = npm_text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
};



//新寫法
const copy_function = () => {
  navigator.clipboard
    .writeText(npm.current.textContent)
    .then(() => {
      console.log("Text copied to clipboard");
    })
    .catch((error) => {
      console.error("Copy failed:", error);
    });
};
