const swaggerJsdoc = require('swagger-jsdoc')

const spec = {
    definition:{
        openapi: '3.0.0',
        info: {
            title: 'Api-doc',
            versoin: '1.0v',
            description: 'API de exemplo da disciplina de prog web II'
        }
    },
    apis: ['./index.js']
}

const swaggerSpec = swaggerJsdoc(spec)

module.exports = swaggerSpec