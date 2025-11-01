// Importa os módulos necessários para o servidor
const express = require('express');       // Framework que facilita criar o servidor e rotas
const bodyParser = require('body-parser'); // Converte os dados que vêm do formulário em JSON
const cors = require('cors');             // Permite que o front-end (HTML) se comunique com o servidor
const nodemailer = require('nodemailer'); // Biblioteca usada para enviar e-mails
// Cria o app principal do Express
const app = express();
const PORT = 80; // Porta em que o servidor vai rodar

// Configuração dos middlewares (camadas que tratam os dados antes das rotas)
app.use(cors()); // Libera o acesso de outras origens (ex: seu HTML)
app.use(bodyParser.urlencoded({ extended: true })); // Permite receber dados de formulários tradicionais
app.use(bodyParser.json()); // Permite receber dados no formato JSON (usado no fetch do front)

// Configuração do serviço de e-mail
const transporter = nodemailer.createTransport({
  service: 'gmail', // Aqui indicamos que vamos usar o Gmail (poderia ser Outlook, Yahoo, etc.)
  auth: {
    user: 'elizangelaps123@gmail.com',        // E-mail que vai enviar as mensagens
    pass: '1234567'  // Senha do app (não a senha normal do Gmail!)
  }
});

// Rota que recebe os dados do formulário
app.post('/inscrever', async (req, res) => {
  const { nome, email, senha, linguas } = req.body;
  console.log("Dados recebidos:");
  console.log({ nome, email, senha, linguas });

    // Cria a mensagem de e-mail que será enviada
  const mailOptions = {
    from: 'elizangelaps123@gmail.com',   // Quem está enviando
    to: email,                    // Para quem o e-mail será enviado (o usuário que se inscreveu)
    subject: '🎉 Bem-vindo ao nosso curso!', // Assunto do e-mail
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
    await transporter.sendMail(mailOptions); // Envia o e-mail usando o transportador configurado
    console.log("E-mail enviado com sucesso!");
    res.json({ mensagem: "Inscrição feita e e-mail enviado!" }); // Responde para o front-end
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    res.status(500).json({ mensagem: "Erro ao enviar e-mail." });
  }
});

// Inicia o servidor e escuta na porta 80
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

