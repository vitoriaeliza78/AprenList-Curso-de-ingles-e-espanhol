// Importa os módulos necessários
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

// 1. Carrega as variáveis de ambiente do arquivo .env
require('dotenv').config();

// Cria o app principal do Express
const app = express();
// 4. Usa uma porta de desenvolvimento ou a porta definida pelo ambiente
const PORT = process.env.PORT || 3000;

// Configuração dos middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 2. Configuração do serviço de e-mail com variáveis de ambiente
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Vem do .env
    pass: process.env.EMAIL_PASS  // Vem do .env
  }
});

// Rota que recebe os dados do formulário
app.post('/inscrever', async (req, res) => {
  // Nota: A senha está sendo recebida, mas não usada.
  const { nome, email, senha, linguas } = req.body;
  
  console.log("Dados recebidos:", { nome, email, linguas }); // Removido a senha do log por segurança

  // 3. O 'from' DEVE ser o mesmo do 'user' da autenticação
  const mailOptions = {
    from: `"Equipe AprenList" <${process.env.EMAIL_USER}>`, // E-mail e nome de exibição
    to: email,                                 // Para quem o e-mail será enviado
    subject: '🎉 Bem-vindo ao nosso curso!',
    html: `
      <h2>Olá, ${nome}!</h2>
      <p>Obrigado por se inscrever em nosso curso!</p>
      <p>Você selecionou: <strong>${linguas.join(', ')}</strong></p>
      <p>Nosso time entrará em contato em breve.</p>
      <br>
      <p>Abraços,</p>
      <p><strong>Equipe AprenList</strong></p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("E-mail enviado com sucesso!");
    res.json({ mensagem: "Inscrição feita e e-mail enviado!" });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    // Log mais detalhado do erro pode ajudar a depurar (ex: senha de app errada)
    console.log("Detalhes do Erro:", error.message);
    res.status(500).json({ mensagem: "Erro ao enviar e-mail." });
  }
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});