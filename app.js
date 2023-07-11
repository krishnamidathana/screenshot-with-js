const container = document.getElementById("container");
const prevContainer = document.getElementById("prev-container");
const capBtn = document.getElementById("cap-btn");
const downloadBtn = document.getElementById("download-button");

capBtn.addEventListener("click", async () => {
  downloadBtn.classList.remove("hide");
  const canvas = await html2canvas(container);
  const imgUrl = await canvas.toDataURL();

  prevContainer.innerHTML = `<img src="${imgUrl}" id="iamge" />`;
  prevContainer.style.display = "block";
  downloadBtn.href = imgUrl;
  downloadBtn.download = "image.png";
});
window.onload = () => {
  prevContainer.style.display = "none";
  downloadBtn.classList.add("hide");
};
