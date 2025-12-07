
const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  tags: { type: [String], default: [] },
  images: { type: [String], default: [] }, // S3 keys or full URLs
  demoUrl: String,
  repoUrl: String,
  featured: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Project', ProjectSchema);
