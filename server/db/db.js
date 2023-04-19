const sqlite3 = require('sqlite3').verbose();

// открываем соединение с базой данных
const db = new sqlite3.Database('./mydb.sqlite');

// создаем таблицу для хранения данных
db.run(`CREATE TABLE IF NOT EXISTS mytable (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  phone TEXT,
  car_number TEXT
)`);


