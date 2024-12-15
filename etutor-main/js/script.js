window.onscroll = () => {
if (window.scrollY > 100) {
    document.querySelector("#upArrow").style.display = "block";
  } else {
    document.querySelector("#upArrow").style.display = "none";
  }
};

document.querySelector("#upArrow").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});