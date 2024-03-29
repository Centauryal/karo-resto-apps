const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images');
const destination = path.resolve(__dirname, 'dist/images');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

fs.readdirSync(target).forEach((image) => {
  if (image !== '.DS_Store') {
    if (image !== 'placeholder.png') {
      sharp(`${target}/${image}`)
        .resize(800)
        .toFile(
          path.resolve(
            __dirname,
            `${destination}/${image.split('.').slice(0, -1).join('.')}-large.jpg`,
          ),
        );

      sharp(`${target}/${image}`)
        .resize(400)
        .toFile(
          path.resolve(
            __dirname,
            `${destination}/${image.split('.').slice(0, -1).join('.')}-small.jpg`,
          ),
        );
    } else {
      sharp(`${target}/${image}`)
        .resize(50, 29)
        .toFile(
          path.resolve(
            __dirname,
            `${destination}/${image.split('.').slice(0, -1).join('.')}.png`,
          ),
        );
    }
  }
});
