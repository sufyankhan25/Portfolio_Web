
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const dotenv = require('dotenv');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();
const app = express();

app.use(helmet());
app.use(express.json({ limit: '5mb' }));
app.use(cors({ origin: process.env.FRONTEND_URL || true }));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/projects', require('./routes/projects'));
app.use('/api/contact', require('./routes/contact'));
app.use('/api/uploads', require('./routes/uploads'));

// Health
app.get('/health', (req, res) => res.json({ ok: true, env: process.env.NODE_ENV || 'development' }));

// Error handler (last middleware)
app.use(errorHandler);

module.exports = app;
