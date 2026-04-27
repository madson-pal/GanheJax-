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
        font-family: Arial;
        background: #0f172a;
        color: white;
      }

      .top {
        background: #111827;
        padding: 15px;
        text-align: center;
        font-weight: bold;
      }

      .container {
        padding: 15px;
        padding-bottom: 80px;
      }

      .saldo-box {
        background: linear-gradient(135deg, #22c55e, #16a34a);
        padding: 20px;
        border-radius: 15px;
        text-align: center;
      }

      .saldo {
        font-size: 28px;
        font-weight: bold;
      }

      .section {
        margin-top: 20px;
      }

      .card {
        background: #1e293b;
        padding: 15px;
        border-radius: 10px;
        margin-top: 10px;
      }

      .btn {
        display: block;
        width: 100%;
        padding: 15px;
        margin-top: 10px;
        border-radius: 10px;
        text-align: center;
        text-decoration: none;
        font-weight: bold;
      }

      .btn-blue { background: #3b82f6; color: white; }
      .btn-green { background: #22c55e; color: black; }

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

    <div class="top">GanheJa 🚀</div>

    <div class="container">
      ${content}
    </div>

    <div class="nav">
      <a href="/">🏠 Início</a>
      <a href="/tarefas">💰 Tarefas</a>
      <a href="/saque">💸 Saque</a>
      <a href="/suporte">📞 Suporte</a>
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

    <div class="section">
      <a class="btn btn-blue" href="/tarefas">Fazer tarefas</a>
      <a class="btn btn-green" href="/saque">Sacar dinheiro</a>
    </div>

    <div class="section">
      <div class="card">✔ Ganhe respondendo pesquisas</div>
      <div class="card">✔ Tarefas todos os dias</div>
      <div class="card">✔ Saque via PIX em breve</div>
    </div>
  `));
});

// TAREFAS
app.get('/tarefas', (req, res) => {
  const url = "https://offers.cpx-research.com/index.php?app_id=32644&ext_user_id=1";

  res.send(layout(`
    <h2>Tarefas disponíveis</h2>

    <div class="card">
      <p>💰 Pesquisas remuneradas</p>
    </div>

    <iframe src="${url}" width="100%" height="600"></iframe>
  `));
});

// SAQUE
app.get('/saque', (req, res) => {
  res.send(layout(`
    <h2>Saque</h2>

    <div class="card">
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
    <h2>Suporte</h2>

    <div class="card">
      <p>Email: suporte@ganheja.com</p>
      <p>Resposta em até 24h</p>
    </div>

    <div class="card">
      <p>Perguntas frequentes:</p>
      <p>- Como sacar?</p>
      <p>- Como ganhar?</p>
    </div>
  `));
});

app.listen(3000, () => console.log("Rodando"));
        
