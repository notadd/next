import yaml from 'js-yaml';
import fs from 'fs';

const notaddYamlFilePath = __dirname+'/../.notadd.yml';
let config = yaml.load(fs.readFileSync(notaddYamlFilePath));

export config;
export default config;
