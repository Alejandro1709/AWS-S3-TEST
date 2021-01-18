const express = require('express');
const router = express.Router();
const User = require('../models/User');
const upload = require('../services/file-upload');

const singleUpload = upload.single('image');

router.post('/image-upload', (req, res) => {
  singleUpload(req, res, async function (err) {
    if (err) {
      return res.status(422).send({
        errors: [{ title: 'File Upload Error', detail: err.message }],
      });
    }

    const fields = {
      imageUrl: req.file.location,
    };

    const newUser = new User(fields);

    try {
      await newUser.save();

      return res.json({ imageUrl: req.file.location });
    } catch (error) {
      console.error(error);
      res.json(error);
    }
  });
});

module.exports = router;
