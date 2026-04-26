const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <h1>GanheJa 🚀</h1>
    <p>Ganhe dinheiro fazendo tarefas online</p>
    <a href="/tarefas">Ir para tarefas</a>
  `);
});

app.get('/tarefas', (req, res) => {
  const url = "https://offers.cpx-research.com/index.php?app_id=32644&ext_user_id=1";

  res.send(`
    <h1>Tarefas disponíveis</h1>
    <iframe src="${url}" width="100%" height="600"></iframe>
  `);
});

app.listen(3000, () => console.log("Rodando"));
