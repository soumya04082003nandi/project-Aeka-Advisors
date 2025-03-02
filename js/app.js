let imgContainer = document.querySelector(".proifle-images");
let inputImg = document.querySelector("#input-img"); 

function createDiv(url) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("uploaded-img");
    newDiv.style.backgroundImage = `url('${url}')`;
    imgContainer.appendChild(newDiv);
}

inputImg.addEventListener("change", function () {
    let file = this.files[0]; 
    if (file) {
        let reader = new FileReader();
        reader.onload = function (e) {
            createDiv(e.target.result);
        };
        reader.readAsDataURL(file); 
    }
});
