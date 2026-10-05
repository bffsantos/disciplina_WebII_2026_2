const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

const app = express();

const PORT = 3000;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Lista todos os usuários
 *     responses:
 *       200:
 *         description: Lista de usuários
 */
app.get('/users', (req, res) => {
    res.json([
        {
            id: 1,
            name: 'Bruno',
            email: 'bruno@email.com'
        },
        {
            id: 2,
            name: 'João',
            email: 'joao@email.com'
        }
    ]);
});


/**
 * @swagger
 * /users:
 *   post:
 *     summary: Cria um novo usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 */
app.post('/users', (req, res) => {
    res.status(201).json({
        message: 'Usuário criado com sucesso!'
    });
});


/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Atualiza um usuário
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do usuário
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso
 *       404:
 *         description: Usuário não encontrado
 */
app.put('/users/:id', (req, res) => {
    const id = req.params.id;

    res.json({
        message: 'Usuário atualizado com sucesso!',
        id: id
    });
});


/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Remove um usuário
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do usuário
 *     responses:
 *       204:
 *         description: Usuário removido com sucesso
 *       404:
 *         description: Usuário não encontrado
 */
app.delete('/users/:id', (req, res) => {
    const id = req.params.id;

    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
