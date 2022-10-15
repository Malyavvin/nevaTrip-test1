const yetBtn = document.querySelector(".yet");
const hiddenCruise = document.querySelectorAll(".hidden__block");

yetBtn.onclick = e => {
    e.preventDefault(); 
    hiddenCruise.forEach(item => {
        item.style.display = "flex";
        yetBtn.style.display = "none";
	});
}