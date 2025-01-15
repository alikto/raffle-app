const transporter = require('../config/nodemailerConfig.js');

const sendEmail = async (req, res) => {
  const { recipient, subject, text } = req.body;

  const mailOptions = {
    from: process.env.APP_EMAIL,
    to: recipient,
    subject: subject,
    text: text,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!', messageId: info.messageId });
    //res.status(200).json({ message: 'Email sent successfully!', data: mailOptions });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
};

module.exports = sendEmail