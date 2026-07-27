const request = require('supertest');
const express = require('express');
const app = express();
app.use(express.json());

app.post('/api/auth/login', (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ error: 'Payload invalido' });
  }
  res.status(200).json({ token: 'jwt-token' });
});

app.get('/api/juegos', (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ error: 'No autorizado' });
  }
  res.status(200).json([]);
});

describe('Pruebas de integracion - API GameCollection', () => {

  it('POST /api/auth/login con payload invalido -> 400', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({});

    expect(res.status).toBe(400);
  });

  it('GET /api/juegos sin autorizacion -> 401', async () => {
    const res = await request(app)
      .get('/api/juegos');

    expect(res.status).toBe(401);
  });

});