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
    console.log(req.body);
    const ext = `.${file.originalname.split('.').pop()}`;
    const filename = crypto.createHash('md5').update(Date.now() + file.originalname).digest('hex') + ext;
    req.body.filehash = filename;
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
  const regex = /(jpg|gif|jpeg|png|webp|x-png|pjpeg)$/;
  if (regex.test(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

export default multer({
  storage,
  fileFilter,
});
