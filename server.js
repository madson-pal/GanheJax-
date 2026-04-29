
const express = require('express');
const app = express();

app.get('/', (req, res) => {

  const url = "https://offers.cpx-research.com/index.php?app_id=32644&ext_user_id=1";

  res.send(`
  <html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GanheJa</title>

    <style>
      * { margin:0; padding:0; box-sizing:border-box; font-family:Arial; }

      body {
        background:#0f172a;
        color:white;
      }

      header {
        display:flex;
        justify-content:space-between;
        padding:15px;
        background:#020617;
      }

      .saldo {
        background:#22c55e;
        padding:8px 12px;
        border-radius:10px;
      }

      .container {
        padding:15px;
        padding-bottom:90px;
      }

      iframe {
        width:100%;
        height:75vh;
        border:none;
        border-radius:15px;
        background:white;
      }

      .hidden { display:none; }

      .menu {
        position:fixed;
        bottom:0;
        width:100%;
        background:#020617;
        display:flex;
        justify-content:space-around;
        padding:10px;
      }

      .menu button {
        background:none;
        border:none;
        color:white;
      }

      .card {
        background:#1e293b;
        padding:15px;
        border-radius:10px;
        margin-top:10px;
      }

      input {
        width:100%;
        padding:10px;
        border:none;
        border-radius:10px;
        margin-top:10px;
      }

      .btn {
        background:#22c55e;
        padding:12px;
        border:none;
        border-radius:10px;
        width:100%;
        margin-top:10px;
        color:white;
      }

      /* LOGIN */
      #login {
        position:fixed;
        width:100%;
        height:100%;
        background:#0f172a;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
      }

      /* LOADING */
      #loading {
        position:fixed;
        width:100%;
        height:100%;
        background:#0f172a;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:20px;
      }

    </style>
  </head>

  <body>

    <div id="loading">Carregando...</div>

    <div id="login" class="hidden">
      <h2>GanheJa 🚀</h2>
      <input id="user" placeholder="Digite seu nome">
      <button class="btn" onclick="entrar()">Entrar</button>
    </div>

    <div id="app" class="hidden">

      <header>
        <h3>GanheJa</h3>
        <div class="saldo" id="saldo">R$ 0,00</div>
      </header>

      <div class="container">

        <!-- TAREFAS -->
        <div id="tarefas">
          <iframe src="${url}"></iframe>
        </div>

        <!-- SAQUE -->
        <div id="saque" class="hidden">
          <div class="card">
            <p>Saldo: <span id="saldo2">R$ 0,00</span></p>
            <input placeholder="Chave PIX">
            <button class="btn" onclick="sacar()">Solicitar saque</button>
          </div>
        </div>

        <!-- PERFIL -->
        <div id="perfil" class="hidden">
          <div class="card">
            <p>Usuário: <span id="nome"></span></p>
            <p>Ganhos: R$ <span id="ganho">0</span></p>
          </div>
        </div>

      </div>

      <div class="menu">
        <button onclick="trocar('tarefas')">🏠</button>
        <button onclick="trocar('saque')">💰</button>
        <button onclick="trocar('perfil')">👤</button>
      </div>

    </div>

    <script>
      let saldo = localStorage.getItem('saldo') || 0;
      let nome = localStorage.getItem('nome');

      setTimeout(() => {
        document.getElementById('loading').style.display = 'none';

        if(nome){
          iniciarApp();
        } else {
          document.getElementById('login').classList.remove('hidden');
        }

      }, 1500);

      function entrar(){
        const user = document.getElementById('user').value;
        localStorage.setItem('nome', user);
        iniciarApp();
      }

      function iniciarApp(){
        document.getElementById('login').classList.add('hidden');
        document.getElementById('app').classList.remove('hidden');

        document.getElementById('nome').innerText = nome;
        atualizarSaldo();
      }

      function atualizarSaldo(){
        document.getElementById('saldo').innerText = "R$ " + saldo;
        document.getElementById('saldo2').innerText = "R$ " + saldo;
      }

      function sacar(){
        alert("Pedido de saque enviado!");
      }

      function trocar(tela){
        document.getElementById('tarefas').classList.add('hidden');
        document.getElementById('saque').classList.add('hidden');
        document.getElementById('perfil').classList.add('hidden');

        document.getElementById(tela).classList.remove('hidden');
      }
    </script>

  </body>
  </html>
  `);
});

app.listen(3000);
