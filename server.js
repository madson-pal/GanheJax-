
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
  <html>
  <head>
    <title>GanheJá</title>
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
        display: flex;
        justify-content: space-between;
      }

      .saldo {
        color: #22c55e;
        font-weight: bold;
      }

      .container {
        padding: 20px;
      }

      .card {
        background: #1e293b;
        padding: 20px;
        border-radius: 15px;
        margin-bottom: 15px;
      }

      .btn {
        background: #22c55e;
        padding: 12px;
        border-radius: 10px;
        text-align: center;
        margin-top: 10px;
        cursor: pointer;
      }

      .menu {
        position: fixed;
        bottom: 0;
        width: 100%;
        background: #111827;
        display: flex;
        justify-content: space-around;
        padding: 10px;
      }

      iframe {
        width: 100%;
        height: 500px;
        border-radius: 15px;
        border: none;
      }
    </style>
  </head>

  <body>

    <div class="header">
      <h3>GanheJá</h3>
      <div class="saldo">R$ 0.00</div>
    </div>

    <div class="container">

      <div class="card">
        <h2>Ganhe dinheiro online</h2>
        <p>Complete tarefas e aumente seu saldo</p>
        <div class="btn" onclick="window.location.href='/tarefas'">
          Começar
        </div>
      </div>

    </div>

    <div class="menu">
      <div onclick="window.location.href='/'">🏠</div>
      <div onclick="window.location.href='/tarefas'">📋</div>
      <div>💰</div>
      <div>👤</div>
    </div>

  </body>
  </html>
  `);
});

app.get('/tarefas', (req, res) => {
  res.send(`
  <html>
  <head>
    <title>Tarefas</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      body {
        background: #0f172a;
        color: white;
        font-family: Arial;
        padding: 20px;
      }

      iframe {
        width: 100%;
        height: 600px;
        border-radius: 15px;
      }

      a {
        color: #22c55e;
      }
    </style>
  </head>
  <body>

    <h2>Tarefas disponíveis</h2>

    <iframe src="https://offers.cpx-research.com/index.php?app_id=32644&ext_user_id=1"></iframe>

    <br><br>
    <a href="/">← Voltar</a>

  </body>
  </html>
  `);
});

app.listen(process.env.PORT || 3000);
