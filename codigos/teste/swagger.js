const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Minha API',
            version: '1.0.0',
            description: 'API de exemplo para a disciplina de Programação Web II'
        }
    },
    apis: ['./index.js']
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;