const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const sendBirthdayMail = async (employee) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: employee.email,
    subject: `🎉 Happy Birthday ${employee.name}!`,
    html: `
      <div style="font-family: Arial, sans-serif; background:#f6f8fb; padding:30px;">
        <div style="max-width:600px; margin:auto; background:white; border-radius:12px; padding:30px; box-shadow:0 4px 10px rgba(0,0,0,0.08);">
          
          <h1 style="color:#ff6b6b; text-align:center;">
            🎂 Happy Birthday ${employee.name}!
          </h1>

          <p style="font-size:16px; color:#333;">
            Dear <b>${employee.name}</b>,
          </p>

          <p style="font-size:16px; color:#333;">
            On behalf of everyone here, we wish you a day filled with happiness,
            laughter, and celebration.
          </p>

          <p style="font-size:16px; color:#333;">
            May this coming year bring you success, good health,
            and exciting new opportunities. Keep shining and inspiring
            those around you!
          </p>

          <p style="font-size:16px; color:#333;">
            Enjoy your special day — you deserve it!
          </p>

          <p style="margin-top:30px; font-weight:bold;">
            — Team HBD Manager
          </p>

        </div>
      </div>
    `
  };

  await transporter.sendMail(mailOptions);
};


module.exports = sendBirthdayMail;
