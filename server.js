const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
  <html>
  <head>
    <title>GanheJa</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      body {
        margin: 0;
        font-family: Arial;
        background: #0f172a;
        color: white;
      }

      .header {
        background: #111827;
        padding: 15px;
        text-align: center;
        font-size: 20px;
        font-weight: bold;
      }

      .saldo-box {
        background: linear-gradient(135deg, #22c55e, #16a34a);
        margin: 20px;
        padding: 20px;
        border-radius: 15px;
        text-align: center;
      }

      .saldo {
        font-size: 28px;
        font-weight: bold;
      }

      .container {
        padding: 20px;
      }

      .btn {
        display: block;
        width: 100%;
        padding: 15px;
        margin-top: 15px;
        border-radius: 10px;
        text-align: center;
        text-decoration: none;
        font-weight: bold;
      }

      .btn-tarefa {
        background: #3b82f6;
        color: white;
      }

      .btn-saque {
        background: #22c55e;
        color: black;
      }

      .card {
        background: #1e293b;
        padding: 15px;
        border-radius: 10px;
        margin-top: 15px;
      }
    </style>
  </head>
  <body>

    <div class="header">GanheJa 🚀</div>

    <div class="saldo-box">
      <p>Seu saldo</p>
      <div class="saldo">R$ 0,00</div>
    </div>

    <div class="container">
      <a class="btn btn-tarefa" href="/tarefas">💰 Fazer tarefas</a>
      <a class="btn btn-saque" href="/saque">💸 Sacar dinheiro</a>

      <div class="card">
        <p>✔ Ganhe respondendo pesquisas</p>
        <p>✔ Saque via PIX (em breve)</p>
      </div>
    </div>

  </body>
  </html>
  `);
});

app.get('/tarefas', (req, res) => {
  const url = "https://offers.cpx-research.com/index.php?app_id=32644&ext_user_id=1";

  res.send(`
  <html>
  <head>
    <title>Tarefas</title>
    <style>
      body {
        margin: 0;
        font-family: Arial;
      }
      .top {
        background: #111827;
        color: white;
        padding: 15px;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div class="top">Tarefas disponíveis</div>
    <iframe src="${url}" width="100%" height="700"></iframe>
  </body>
  </html>
  `);
});

app.get('/saque', (req, res) => {
  res.send(`
  <html>
  <head>
    <title>Saque</title>
    <style>
      body {
        font-family: Arial;
        background: #0f172a;
        color: white;
        text-align: center;
        padding: 20px;
      }

      .card {
        background: #1e293b;
        padding: 20px;
        border-radius: 15px;
      }

      button {
        margin-top: 20px;
        padding: 15px;
        background: #22c55e;
        border: none;
        border-radius: 10px;
        font-weight: bold;
        width: 100%;
      }
    </style>
  </head>
  <body>
    <h1>Saque</h1>

    <div class="card">
      <p>Saldo disponível: R$ 0,00</p>
      <p>Mínimo: R$ 25,00</p>
      <button disabled>Solicitar saque</button>
    </div>
  </body>
  </html>
  `);
});

app.listen(3000, () => console.log("Rodando"));
