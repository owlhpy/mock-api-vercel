const fs = require('fs');
const path = require('path');

const schemaDir = path.join(__dirname, '../mock-schemas');
const apiDir = path.join(__dirname, '../api');

fs.readdirSync(schemaDir).forEach(file => {
  const name = path.basename(file, '.json');
  const schema = fs.readFileSync(path.join(schemaDir, file), 'utf-8');

  const content = `
export default function handler(req, res) {
  res.status(200).json(${schema});
}
  `;

  fs.writeFileSync(path.join(apiDir, `${name}.js`), content.trim());
});