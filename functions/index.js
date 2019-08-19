'use strict';
const functions  = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});

const Credentials = require('./credentials.json');
const { token } = require('./token.json');

exports.enviarEmail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    if(( req.method !== "POST" ) || ( req.body['token'] !== token )){
      return res.status(500).json({
        message: "Você está fazendo isto de forma errada"
      })
    }

    let transporter = nodemailer.createTransport(Credentials);
    
    let email = {
      from: req.body['remetente'],
      to: req.body['destinatarios'],
      subject: req.body['assunto'],
      text: req.body['corpo'],
    };
    
    transporter.sendMail(email);
    res.status(200).json({ message: "E-mail enviado" });
  });
});