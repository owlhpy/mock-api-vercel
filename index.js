const express = require('express');
const fs = require('fs');
const path = require('path');
const jsf = require('json-schema-faker');

const app = express();
const port = 3000;

app.get('/api/:name', (req, res) => {
	const schemaPath = path.join(__dirname, 'mock-schemas', `${req.params.name}.json`);
	if (fs.existsSync(schemaPath)) {
		const schema = JSON.parse(fs.readFileSync(schemaPath));
		const result = jsf.generate(schema);
		res.json(result);
	} else {
		res.status(404).json({ error: 'Schema not found' });
	}
});

module.exports = app;
