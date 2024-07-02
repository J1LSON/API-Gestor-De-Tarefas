const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api/auth', authRoutes);
app.use('/api', taskRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Servidor na Porta 3000');
  });
}).catch((error) => {
  console.log('Falha ao sincronizar a BD:', error);
});
