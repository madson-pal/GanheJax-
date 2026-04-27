const express = require('express');
const app = express();

function layout(content) {
  return `
  <html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GanheJa</title>
    <style>
      body {
        margin: 0;
        font-family: 'Segoe UI', Arial;
        background: #0b1220;
        color: white;
      }

      .header {
        display: flex;
        justify-content: space-between;
        padding: 15px;
        background: #111827;
        align-items: center;
      }

      .logo {
        font-weight: bold;
        font-size: 18px;
      }

      .saldo-mini {
        background: #22c55e;
        padding: 8px 12px;
        border-radius: 8px;
        color: black;
        font-weight: bold;
      }

      .container {
        padding: 15px;
        padding-bottom: 80px;
      }

      .card {
        background: #1f2937;
        border-radius: 15px;
        padding: 15px;
        margin-top: 15px;
      }

      .saldo-box {
        background: linear-gradient(135deg, #22c55e, #16a34a);
        border-radius: 15px;
        padding: 20px;
        text-align: center;
      }

      .saldo {
        font-size: 30px;
        font-weight: bold;
      }

      .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        margin-top: 15px;
      }

      .btn {
        padding: 15px;
        border-radius: 10px;
        text-align: center;
        text-decoration: none;
        font-weight: bold;
      }

      .blue { background: #3b82f6; }
      .green { background: #22c55e; color: black; }

      .nav {
        position: fixed;
        bottom: 0;
        width: 100%;
        background: #111827;
        display: flex;
        justify-content: space-around;
        padding: 10px 0;
      }

      .nav a {
        color: white;
        text-decoration: none;
        font-size: 13px;
      }
    </style>
  </head>

  <body>

    <div class="header">
      <div class="logo">GanheJa 🚀</div>
      <div class="saldo-mini">R$ 0,00</div>
    </div>

    <div class="container">
      ${content}
    </div>

    <div class="nav">
      <a href="/">🏠</a>
      <a href="/tarefas">💰</a>
      <a href="/saque">💸</a>
      <a href="/suporte">📞</a>
    </div>

  </body>
  </html>
  `;
}

// HOME
app.get('/', (req, res) => {
  res.send(layout(`
    <div class="saldo-box">
      <p>Saldo disponível</p>
      <div class="saldo">R$ 0,00</div>
    </div>

    <div class="grid">
      <a class="btn blue" href="/tarefas">Tarefas</a>
      <a class="btn green" href="/saque">Sacar</a>
    </div>

    <div class="card">
      <h3>Ganhe dinheiro fácil</h3>
      <p>Responda pesquisas e complete tarefas.</p>
    </div>

    <div class="card">
      <p>✔ Atualizações diárias</p>
      <p>✔ Saque rápido</p>
      <p>✔ Plataforma segura</p>
    </div>
  `));
});

// TAREFAS
app.get('/tarefas', (req, res) => {
  const url = "https://offers.cpx-research.com/index.php?app_id=32644&ext_user_id=1";

  res.send(layout(`
    <h3>Tarefas disponíveis</h3>
    <iframe src="${url}" width="100%" height="600"></iframe>
  `));
});

// SAQUE
app.get('/saque', (req, res) => {
  res.send(layout(`
    <div class="card">
      <h3>Saque</h3>
      <p>Saldo: R$ 0,00</p>
      <p>Mínimo: R$ 25,00</p>
      <button style="width:100%; padding:15px; border:none; border-radius:10px; background:#22c55e;">
        Solicitar saque
      </button>
    </div>
  `));
});

// SUPORTE
app.get('/suporte', (req, res) => {
  res.send(layout(`
    <div class="card">
      <h3>Suporte</h3>
      <p>Email: suporte@ganheja.com</p>
      <p>Tempo de resposta: até 24h</p>
    </div>
  `));
});

app.listen(3000);
        
