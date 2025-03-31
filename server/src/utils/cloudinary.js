const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});


const getStorage = (folderName) => {
  return new CloudinaryStorage({
    cloudinary,
    params: async (req, file) => ({
      folder: folderName,  
      format: 'png', 
      public_id: `file_${Date.now()}`
    })
  });
};

// Middleware to create a dynamic uploader
const upload = (folderName) => multer({ storage: getStorage(folderName) });

module.exports = upload;
