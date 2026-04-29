
const express = require('express');
const app = express();

app.get('/', (req, res) => {

  const url = "https://offers.cpx-research.com/index.php?app_id=32644&ext_user_id=1";

  res.send(`
  <html>
  <head>
    <title>GanheJa</title>

    <style>
      body {
        margin:0;
        font-family: Arial;
        background:#0f172a;
        color:white;
      }

      header {
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:15px;
        background:#020617;
      }

      .saldo {
        background:#22c55e;
        padding:8px 12px;
        border-radius:10px;
        font-weight:bold;
      }

      .container {
        padding:10px;
        padding-bottom:80px;
      }

      iframe {
        width:100%;
        height:70vh;
        border:none;
        border-radius:15px;
        background:white;
      }

      .hidden {
        display:none;
      }

      /* MENU INFERIOR */
      .menu {
        position:fixed;
        bottom:0;
        width:100%;
        background:#020617;
        display:flex;
        justify-content:space-around;
        padding:10px 0;
      }

      .menu button {
        background:none;
        border:none;
        color:white;
        font-size:14px;
      }

      .active {
        color:#22c55e;
      }

      .card {
        background:#1e293b;
        padding:15px;
        border-radius:15px;
        margin-top:10px;
      }

      .btn {
        background:#22c55e;
        padding:12px;
        border:none;
        border-radius:10px;
        width:100%;
        color:white;
        font-weight:bold;
        margin-top:10px;
      }
    </style>

  </head>

  <body>

    <header>
      <h3>GanheJa 🚀</h3>
      <div class="saldo">R$ 0,00</div>
    </header>

    <div class="container">

      <!-- TELA TAREFAS -->
      <div id="tarefas">
        <h3>💰 Ganhe dinheiro</h3>
        <iframe src="${url}"></iframe>
      </div>

      <!-- TELA SAQUE -->
      <div id="saque" class="hidden">
        <h3>💸 Sacar dinheiro</h3>

        <div class="card">
          <p>Saldo disponível: <b>R$ 0,00</b></p>

          <input placeholder="Sua chave PIX" style="width:100%; padding:10px; border-radius:10px; border:none; margin-top:10px;">
          
          <button class="btn">Solicitar saque</button>
        </div>
      </div>

      <!-- TELA PERFIL -->
      <div id="perfil" class="hidden">
        <h3>👤 Minha conta</h3>

        <div class="card">
          <p>ID do usuário: 1</p>
          <p>Status: Ativo</p>
        </div>
      </div>

    </div>

    <!-- MENU -->
    <div class="menu">
      <button onclick="trocar('tarefas')" class="active" id="btn-tarefas">🏠</button>
      <button onclick="trocar('saque')" id="btn-saque">💰</button>
      <button onclick="trocar('perfil')" id="btn-perfil">👤</button>
    </div>

    <script>
      function trocar(tela) {
        document.getElementById('tarefas').classList.add('hidden');
        document.getElementById('saque').classList.add('hidden');
        document.getElementById('perfil').classList.add('hidden');

        document.getElementById(tela).classList.remove('hidden');

        document.getElementById('btn-tarefas').classList.remove('active');
        document.getElementById('btn-saque').classList.remove('active');
        document.getElementById('btn-perfil').classList.remove('active');

        document.getElementById('btn-' + tela).classList.add('active');
      }
    </script>

  </body>
  </html>
  `);
});

app.listen(3000, () => console.log("Rodando"));
