const sharp = require('sharp');

sharp('public/falah-lion-logo.jpg')
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true })
  .then(({ data, info }) => {
    
    // Create a copy for the light version (for dark backgrounds)
    const lightData = Buffer.from(data);

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i+1];
      const b = data[i+2];
      
      // Make ivory/white background transparent in BOTH
      if (r > 230 && g > 230 && b > 230) {
        data[i+3] = 0;
        lightData[i+3] = 0;
      } else {
        // If it's a dark color (charcoal text/lines), make it white in the light version
        // We preserve the vermilion (red > 150, g < 100)
        if (r < 100 && g < 100 && b < 100) {
          lightData[i] = 255;   // R
          lightData[i+1] = 255; // G
          lightData[i+2] = 255; // B
        }
      }
    }

    return Promise.all([
      sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } }).toFile('public/lion-transparent.png'),
      sharp(lightData, { raw: { width: info.width, height: info.height, channels: 4 } }).toFile('public/lion-transparent-light.png')
    ]);
  })
  .then(() => console.log('Successfully created both dark and light transparent PNGs!'))
  .catch(err => console.error('Error:', err));
