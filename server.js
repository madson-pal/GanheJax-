const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <html>
    <head>
      <title>GanheJa</title>
      <style>
        body {
          margin: 0;
          font-family: Arial;
          background: #0f172a;
          color: white;
          text-align: center;
        }
        .container {
          margin-top: 100px;
        }
        h1 {
          font-size: 40px;
        }
        p {
          color: #cbd5f5;
        }
        a {
          display: inline-block;
          margin-top: 20px;
          padding: 15px 30px;
          background: #22c55e;
          color: black;
          text-decoration: none;
          border-radius: 10px;
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>GanheJa 🚀</h1>
        <p>Ganhe dinheiro fazendo tarefas online</p>
        <a href="/tarefas">Começar agora</a>
      </div>
    </body>
    </html>
  `);
});

app.get('/tarefas', (req, res) => {
  const url = "https://offers.cpx-research.com/index.php?app_id=32644&ext_user_id=1";

  res.send(`
    <h1 style="text-align:center;">Tarefas disponíveis</h1>
    <iframe src="${url}" width="100%" height="600"></iframe>
  `);
});

app.listen(3000, () => console.log("Rodando"));
