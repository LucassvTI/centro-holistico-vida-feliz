'use strict';
const functions  = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors');

const Credentials = require('./credentials.json');

const whitelist = ['centroholistico-17a4a.web.app', 'centroholistico-17a4a.firebaseapp.com']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      // eslint-disable-next-line callback-return
      callback(null, true)
    } else {
      // eslint-disable-next-line callback-return
      callback(new Error('Not allowed by CORS'))
    }
  }
}

exports.enviarEmail = functions.https.onRequest( cors(corsOptions), (req, res) => {
  // eslint-disable-next-line consistent-return
  cors(req, res, () => {
    if( req.method !== "POST" ){
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