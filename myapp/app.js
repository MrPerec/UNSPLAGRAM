// const express = require('express')
import express from 'express';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
