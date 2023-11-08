let images = [
    "/img/1.jpg",
    "/img/1.jpg",
    "/img/2.jpg",
    "/img/2.jpg",
    "/img/3.jpg",
    "/img/3.jpg",
    "/img/4.jpg",
    "/img/4.jpg",
    "/img/5.jpg",
    "/img/5.jpg",
    "/img/6.jpg",
    "/img/6.jpg",
];
let usedIndexes = [];
let imagesDiv= document.querySelector(".images");

for(let i=0; i<images.length; i++)
{
    let randomIndex = Math.floor(Math.random() * images.length);
    while(usedIndexes.includes(randomIndex))
    {
        randomIndex = Math.floor(Math.random() * images.length);
    }
    usedIndexes.push(randomIndex);
    let imageDiv = document.createElement("div");
    let backDiv = document.createElement("div");
    let img = document.createAttribute("img");
    imageDiv.classList.add("image", "selected");
    backDiv.classList.add("back");
    img.setAttribute("src", images[randomIndex]);
    imageDiv.append(backDiv, img);

    imagesDiv.append(imageDiv);
}








