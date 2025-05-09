import swaggerJSDoc from 'swagger-jsdoc'
import * as swaggerUi from 'swagger-ui-express'

const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'ZupStar API',
            version: '1.0.0',
            description: 'API documentation for ZupStar application',
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
    },
    apis: ['./src/routes/*.js'],
}

const specs = swaggerJSDoc(options)

export { swaggerUi, specs }



