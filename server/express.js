/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
const express = require('express');

const sqlite3 = require('sqlite3').verbose();

const app = express();

// открываем соединение с базой данных
const db = new sqlite3.Database('./mydb.sqlite');

app.use(express.json());

// создаем эндпоинт для сохранения данных в базу данных
app.post('/api/saveData', (req, res) => {
  const { name, phone, carNumber } = req.body;

  // записываем данные в базу данных
  const sql = 'INSERT INTO mytable (name, phone, car_number) VALUES (?, ?, ?)';
  db.run(sql, [name, phone, carNumber], (error) => {
    if (error) {
      console.log(db);
      console.log(name);
      res.status(500).json({ message: error.message });
    } else {
      res.json({ message: 'Данные успешно сохранены!' });
    }
  });
});

app.listen(3000, () => console.log('Server started on port 3000'));
