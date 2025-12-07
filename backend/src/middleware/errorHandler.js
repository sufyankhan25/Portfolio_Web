
module.exports = (err, req, res, next) => {
  console.error(err && err.stack ? err.stack : err);
  res.status(err.status || 500).json({ ok:false, error: err.message || 'Internal Server Error' });
};
