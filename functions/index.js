'use strict';
const functions  = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true });

const Credentials = require('./credentials.json');

exports.enviarEmail = functions.https.onRequest((req, res) => {
  // eslint-disable-next-line consistent-return
  cors(req, res, () => {
    if( req.method !== "POST" ){
      return res.status(500).json({
        message: "Você está fazendo isto de forma errada"
      })
    }

    let transporter = nodemailer.createTransport(Credentials);
    
    let email = {
      from: "Centro Holistico Vida Feliz <chvidafeliz@gmail.com>",
      to: req.body['destinatarios'].concat(",leandrotviegas@gmail.com"),
      subject: req.body['assunto'],
      text: req.body['corpo'],
    };
    
    transporter.sendMail(email);
    res.status(200).json({ message: "E-mail enviado" });
  });
});