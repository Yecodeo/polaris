import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

/**
 * Configuring the diskstorage
 */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../avatars/'));
  },
  filename: (req, file, cb) => {
    const ext = `.${file.originalname.split('.').pop()}`;
    const filename = crypto.createHash('md5').update(Date.now() + file.originalname).digest('hex') + ext;
    cb(null, filename);
  },
});
/**
 * define here the accepted file type
 * @param {*} req
 * @param {*} file
 * @param {*} cb
 */
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

export default function updateFile() {
  return multer({
    storage,
    fileFilter,
  });
}