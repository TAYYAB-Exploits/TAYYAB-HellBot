const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const writeExif = async (mediaPath, outputPath, packname = 'MegaTron', author = 'Tayyab') => {
  const exifAttr = {
    "sticker-pack-id": "com.megatron.sticker",
    "sticker-pack-name": packname,
    "sticker-pack-publisher": author,
    emojis: ["🦾", "💫"]
  };

  const json = {
    "metadata": exifAttr
  };

  const tmpJson = path.join(__dirname, 'tmp.json');
  const tmpExif = path.join(__dirname, 'megatron.exif');

  fs.writeFileSync(tmpJson, JSON.stringify(json));

  // Build exif using webpmux tool
  try {
    execSync(`webpmux -set exif ${tmpJson} ${mediaPath} -o ${outputPath}`);
    fs.unlinkSync(tmpJson); // Clean up
  } catch (err) {
    console.error("❌ Error adding EXIF:", err);
  }
};

module.exports = {
  writeExif
};