
const express = require('express');
const path = require('path');
const app = express();

// Serve arquivos da pasta public
app.use(express.static(path.join(__dirname, 'public')));

// Garante que / abra o index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor rodando");
});
