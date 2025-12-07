
const Project = require('../models/Project.model');

exports.list = async (req, res, next) => {
  try {
    const { page = 1, limit = 20, tag, featured } = req.query;
    const filter = {};
    if (tag) filter.tags = tag;
    if (featured) filter.featured = featured === 'true';
    const projects = await Project.find(filter)
      .sort({ createdAt: -1 })
      .skip((page-1)*limit)
      .limit(Number(limit));
    res.json({ ok: true, data: projects });
  } catch (err) { next(err); }
};

exports.get = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ ok:false, error: 'Not found' });
    res.json({ ok:true, data: project });
  } catch (err) { next(err); }
};

exports.create = async (req, res, next) => {
  try {
    const payload = req.body;
    const created = await Project.create(payload);
    res.status(201).json({ ok:true, data: created });
  } catch (err) { next(err); }
};

exports.update = async (req, res, next) => {
  try {
    const updated = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ ok:false, error: 'Not found' });
    res.json({ ok:true, data: updated });
  } catch (err) { next(err); }
};

exports.remove = async (req, res, next) => {
  try {
    const removed = await Project.findByIdAndDelete(req.params.id);
    if (!removed) return res.status(404).json({ ok:false, error: 'Not found' });
    res.json({ ok:true, data: removed });
  } catch (err) { next(err); }
};
