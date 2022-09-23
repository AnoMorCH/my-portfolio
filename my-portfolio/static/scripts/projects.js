const mainImage = document.getElementsByClassName('container')[0].children[0];
let imagesList = document.getElementsByClassName('images-list')[0].children;

imagesList = Array.from(imagesList);

imagesList.forEach(function(image) {
    image.addEventListener('click', () => { changeMainImage(image) });
});

function changeMainImage(currentImage) {
    const mainImageClassName = 'current';

    mainImage.src = currentImage.src;

    imagesList.forEach(function(image) {
        const imageClassList = Array.from(image.classList);

        if (imageClassList.includes(mainImageClassName)) {
            image.classList.remove(mainImageClassName);
        }
    });

    currentImage.classList.add(mainImageClassName);
}
