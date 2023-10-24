import resizeImageForChromeExtension from "../functions/resize-image-for-chrome-extension";

// get image path and desired square side length from command line
const imagePath = process.argv[2];

[16, 32, 48, 128].forEach(sideLength => {
    resizeImageForChromeExtension(imagePath, sideLength);
});


