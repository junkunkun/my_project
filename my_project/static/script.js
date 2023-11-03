document.getElementById("showButton").addEventListener("click", function() {
    document.getElementById("overlay").style.display = "flex";
});

document.getElementById("overlay").addEventListener("click", function() {
    this.style.display = "none";
});

