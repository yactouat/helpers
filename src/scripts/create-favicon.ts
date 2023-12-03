import sharp from "sharp";
import path from "path";

const createFavicon = async (imagePath: string): Promise<void> => {
    const faviconPath: string = `${path.dirname(imagePath)}/favicon.ico`;
    try {
        await sharp(imagePath)
        .resize(32, 32, {
            fit: "cover",
            position: "center"
        })
        .toFile(faviconPath);
        
        console.info(`Favicon has been saved at '${faviconPath}'`);
    } catch (err) {
        console.error(`Error creating favicon: ${err}`);
    }
};

const imagePath = process.argv[2];
createFavicon(imagePath);
