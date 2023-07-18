let bgSvgs = document.querySelectorAll(".bg-icon");
let svgs = document.querySelectorAll(".svgClass");
bgSvgs.addEventListener("mouseover", function (){ 
    for (let i = 0; i < bgSvgs.length; i++) {
        bgSvgs[i].style.backgroundColor = "#bead8e";
        svgs[i].style.fill = "#FFF";
      }
})