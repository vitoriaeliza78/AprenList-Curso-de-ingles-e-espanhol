// Importa os módulos necessários para o servidor
const express = require('express');       // Framework que facilita criar o servidor e rotas
const bodyParser = require('body-parser'); // Converte os dados que vêm do formulário em JSON
const cors = require('cors');             // Permite que o front-end (HTML) se comunique com o servidor
const nodemailer = require('nodemailer'); // Biblioteca usada para enviar e-mails
