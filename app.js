let form = document.querySelector("#meme-form");
let gallery = document.querySelector("#gallery");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    let image = document.querySelector("#url").value;
    let top_text = document.querySelector("#top").value;
    let bottom_text = document.querySelector("#bottom").value;

    let image_container = document.createElement("div");
    image_container.className = "img-container";
    let meme = document.createElement("img");
    meme.src = image;
    
    let top = document.createElement("h1");
    let btm = document.createElement("h1");
    top.className = "top-text";
    btm.className = "bottom-text";
    top.innerText = top_text;
    btm.innerText = bottom_text;

    let overlay = document.createElement("div");
    let overlay_txt = document.createElement("h1");
    overlay.className = "overlay";
    overlay_txt.innerText = "Click to delete";
    overlay.appendChild(overlay_txt);

    overlay.addEventListener("click", del);

    image_container.appendChild(meme);
    image_container.appendChild(top);
    image_container.appendChild(btm);
    image_container.appendChild(overlay);
    gallery.appendChild(image_container);

    form.reset();

});

const del = function(e) {
    if (e.target.parentElement.className === "img-container"){
        e.target.parentElement.remove();
    }
}