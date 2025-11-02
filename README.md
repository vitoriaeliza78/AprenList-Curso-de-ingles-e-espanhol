<strong>AprenList<strong/> - Plataforma de Cursos de Idiomas<br>

Projeto de landing page para o AprenList, uma plataforma fictícia para o aprendizado de Inglês e Espanhol. O foco principal deste projeto é a criação de um formulário de inscrição full-stack, que captura os dados do usuário no front-end e os envia para um servidor back-end que, por sua vez, dispara um e-mail de boas-vindas.


⚠️ Projeto em desenvolvimento ⚠️<br>
Este projeto ainda está sendo construído. As funcionalidades atuais representam a primeira fase de desenvolvimento.
<br>


🚀 Tecnologias Utilizadas
Este projeto foi construído utilizando as seguintes tecnologias:

Front-End:<br>

HTML5: Estruturação semântica da página.

CSS3: Estilização personalizada.

Bootstrap 5: Framework CSS para agilizar o design responsivo.

JavaScript (ES6+): Manipulação do DOM e comunicação com a API.

Fetch API: Realização de requisições assíncronas (POST) para o back-end.

Back-End:<br>

Node.js: Ambiente de execução do JavaScript no lado do servidor.

Express.js: Framework para criação do servidor e gerenciamento das rotas da API.

Nodemailer: Biblioteca para o envio de e-mails de forma simplificada.

Dotenv: Para gerenciamento de variáveis de ambiente (proteção de senhas e dados sensíveis).

CORS: Middleware para permitir requisições entre o front-end e o back-end.

<br>
✨ Funcionalidades Atuais (v1.0)<br>
[x] Página de Apresentação: Landing page estática e responsiva construída com HTML e Bootstrap.

[x] Formulário de Inscrição: Coleta de dados do usuário (Nome, E-mail, Senha e Idiomas de interesse).

[x] Comunicação Front-Back: Envio dos dados do formulário para o servidor Node.js sem recarregar a página, utilizando a fetch API.

[x] Servidor de E-mail: O servidor back-end recebe os dados e utiliza o Nodemailer para enviar um e-mail de boas-vindas para o usuário que acabou de se cadastrar.

[x] Segurança: As credenciais do e-mail de envio (Gmail) são protegidas e não ficam expostas no código, sendo carregadas através de um arquivo .env.

📂 Como Rodar o Projeto Localmente<br>
Para testar o projeto na sua máquina, siga os passos abaixo:

Clone o repositório:

Bash

git clone https://github.com/vitoriaeliza78/seu-repositorio.git
(Troque seu-repositorio pelo nome real do seu repositório)

Navegue até a pasta do projeto e instale as dependências do back-end:

Bash

cd seu-repositorio
npm install
Crie as Variáveis de Ambiente:

Crie um arquivo chamado .env na raiz do projeto.

Adicione as seguintes variáveis com suas credenciais do Gmail:

EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=sua-senha-de-app-de-16-digitos
Importante: Para o EMAIL_PASS, você precisa gerar uma "Senha de App" na sua conta Google. Não use sua senha normal do Gmail.

Inicie o servidor back-end:

Bash

node server.js
(O servidor estará rodando em http://localhost:3000)

Abra o front-end:

Basta abrir o arquivo index.html diretamente no seu navegador.

Preencha o formulário e teste a inscrição. Você deverá receber o e-mail na conta que cadastrou.
<br>

🛠️ Próximos Passos (Em breve)<br>
[ ] Integração com um banco de dados (MongoDB ou PostgreSQL) para salvar os usuários.

[ ] Criptografia da senha do usuário antes de salvar no banco (usando bcrypt).

[ ] Criação de uma área de login (autenticação).

👩‍💻 Autor
Vitória Santana<br>
✅LinkedIn<br>
✅GitHub<br>

