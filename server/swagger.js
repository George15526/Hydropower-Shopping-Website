const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'Rest api docs',
			version: '1.0.0',
			description: 'Rest api docs',
		},
	},
	apis: ['./routes/*.js', './controllers/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = { swaggerUi, swaggerSpec };