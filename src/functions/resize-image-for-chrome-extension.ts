import sharp from "sharp";

const resizeImageForChromeExtension = (imagePath: string, sideLength: number): void => {
    // get the image name without its extension
    const imagePathArray = imagePath.split(".");
    const imageExt = imagePathArray.pop();

    // removing the image name from the array
    const imageBasePathArray = imagePathArray.join(".").split("/");
    imageBasePathArray.pop();
    const imageBasePath = imageBasePathArray.join("/");
    

    console.info(`saving new icon at '${imageBasePath}/images/icon-${sideLength}.${imageExt}'`);

    sharp(imagePath)
        .resize(sideLength, sideLength, {
            fit: "cover",
            position: "center"
        })
        .toFile(`${imageBasePath}/images/icon-${sideLength}.${imageExt}`, (err, info) => {
            if (err) {
                console.error(err);
            } else {
                console.info(info);
            }
        });
};

export default resizeImageForChromeExtension;