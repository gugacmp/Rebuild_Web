const express = require('express');
const sqlite3 = require('sqlite3');
const mysql = require('mysql');
const { Pool } = require('pg');
const oracledb = require('oracledb');
const AWS = require('aws-sdk');

const app = express();
const port = 3000;

// Configurações para MySQL
const mysqlConfig = {
  host: 'localhost',
  user: 'root',
  password: 'sua-senha',
  database: 'sua-base-de-dados-mysql'
};

// Configurações para PostgreSQL
const pgConfig = {
  user: 'seu-usuario',
  host: 'localhost',
  database: 'sua-base-de-dados-postgresql',
  password: 'sua-senha',
  port: 5432
};

// Configurações para Oracle
const oracleConfig = {
  user: 'seu-usuario',
  password: 'sua-senha',
  connectString: 'localhost:1521/sua-instancia-oracle'
};

// Configurações para AWS RDS (MySQL)
AWS.config.update({
  region: 'us-east-1',
  accessKeyId: 'sua-chave-de-acesso',
  secretAccessKey: 'seu-segredo-de-acesso'
});

const awsRDSConfig = {
  host: 'sua-instancia-aws-rds.crxzm08ltp8d.us-east-1.rds.amazonaws.com',
  user: 'seu-usuario',
  password: 'sua-senha',
  database: 'sua-base-de-dados-aws-rds'
};

// Configurações para SQLite
const sqliteDB = new sqlite3.Database('./sqlite-db.db', (err) => {
  if (err) {
    console.error('Erro ao conectar ao SQLite:', err.message);
  } else {
    console.log('Conectado ao SQLite');
  }
});

// Rotas
app.get('/sqlite', (req, res) => {
  sqliteDB.all('SELECT * FROM sua_tabela', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ data: rows });
  });
});

app.get('/mysql', (req, res) => {
  const connection = mysql.createConnection(mysqlConfig);

  connection.connect();

  connection.query('SELECT * FROM sua_tabela', (error, results, fields) => {
    if (error) {
      res.status(500).json({ error: error.message });
      return;
    }
    res.json({ data: results });
  });

  connection.end();
});

app.get('/postgresql', async (req, res) => {
  const pool = new Pool(pgConfig);

  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM sua_tabela');
    const results = { 'results': (result) ? result.rows : null };
    res.json({ data: results.results });
    client.release();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/oracle', async (req, res) => {
  try {
    const connection = await oracledb.getConnection(oracleConfig);
    const result = await connection.execute('SELECT * FROM sua_tabela');
    res.json({ data: result.rows });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/aws-rds', (req, res) => {
  const connection = mysql.createConnection(awsRDSConfig);

  connection.connect();

  connection.query('SELECT * FROM sua_tabela', (error, results, fields) => {
    if (error) {
      res.status(500).json({ error: error.message });
      return;
    }
    res.json({ data: results });
  });

  connection.end();
});

// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
