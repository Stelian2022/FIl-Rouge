// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password'
  }
});

app.post('/send-quiz', (req, res) => {
  const { quiz, email } = req.body;
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: 'Your Quiz',
    text: JSON.stringify(quiz) // format the quiz as needed
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.send('Quiz sent: ' + info.response);
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
