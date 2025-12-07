
const Message = require('../models/Message.model');
const { sendEmail } = require('../services/ses.service');

exports.sendMessage = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !message) return res.status(400).json({ ok:false, error: 'name, email and message required' });
    const saved = await Message.create({ name, email, subject, message });
    // send notification to site owner (async)
    try {
      await sendEmail({
        to: process.env.SES_FROM,
        from: process.env.SES_FROM,
        subject: `Contact: ${subject || 'No subject'}`,
        body: `From ${name} <${email}>\n\n${message}`
      });
    } catch (e) {
      console.warn('SES send failed:', e.message || e);
    }
    res.status(201).json({ ok:true, data: saved });
  } catch (err) { next(err); }
};
