import yaml from 'js-yaml';
import fs from 'fs';

const ormConfigFilePath = __dirname+'/../ormconfig.yml';
let config = {
  database: yaml.load(fs.readFileSync(ormConfigFilePath))
};

export config;
export default config;
