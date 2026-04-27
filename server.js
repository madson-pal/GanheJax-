;
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
        background: linear-gradient(135deg, #0f172a, #1e293b);
        color: white;
      }
      .container {
        padding: 20px;
        text-align: center;
      }
      h1 {
        font-size: 32px;
      }
      .card {
        background: #1e293b;
        padding: 20px;
        border-radius: 15px;
        margin-top: 20px;
      }
      .btn {
        display: block;
        margin: 15px auto;
        padding: 15px;
        background: #22c55e;
        color: black;
        text-decoration: none;
        border-radius: 10px;
        font-weight: bold;
        width: 80%;
      }
      .btn2 {
        background: #3b82f6;
        color: white;
      }
      .saldo {
        font-size: 24px;
        margin-top: 10px;
        color: #22c55e;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>GanheJa 🚀</h1>
      <p>Ganhe dinheiro fazendo tarefas simples</p>

      <div class="card">
        <p>Seu saldo:</p>
        <div class="saldo">R$ 0,00</div>
      </div>

      <a class="btn" href="/tarefas">💰 Fazer tarefas</a>
      <a class="btn btn2" href="/saque">💸 Sacar dinheiro</a>
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
      body { margin:0; font-family:Arial; }
      h1 { text-align:center; }
    </style>
  </head>
  <body>
    <h1>Tarefas disponíveis</h1>
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
      }
    </style>
  </head>
  <body>
    <h1>Saque</h1>
    <div class="card">
      <p>Saldo disponível: R$ 0,00</p>
      <p>Mínimo para saque: R$ 25,00</p>
      <button disabled>Solicitar saque</button>
    </div>
  </body>
  </html>
  `);
});

app.listen(3000, () => console.log("Rodando"));
