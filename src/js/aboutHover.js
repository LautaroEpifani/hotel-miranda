const whiteIcons = document.querySelectorAll(".normal");
const brownIcons = document.querySelectorAll(".hover");
const card = document.querySelectorAll(".card");

for (let i = 0; i < card.length; i++) {
  card[i].addEventListener("mouseover", function () {
    whiteIcons[i].style.display = "none";
    brownIcons[i].style.display = "block";
  });

  card[i].addEventListener("mouseout", function () {
    brownIcons[i].style.display = "none";
    whiteIcons[i].style.display = "block";
  });
}
