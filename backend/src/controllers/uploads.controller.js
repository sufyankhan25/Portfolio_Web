
const { getPresignedUrl } = require('../services/s3.service');
const { v4: uuidv4 } = require('uuid');

exports.getPresign = async (req, res, next) => {
  try {
    const { filename, contentType } = req.query;
    if (!filename) return res.status(400).json({ ok:false, error: 'filename required' });
    const key = `projects/${Date.now()}-${uuidv4()}-${filename}`;
    const url = await getPresignedUrl(key, contentType || 'application/octet-stream', 900);
    res.json({ ok:true, data: { key, url } });
  } catch (err) { next(err); }
};
