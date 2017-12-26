import * as yaml from 'js-yaml';
import * as fs from 'fs';

const ormConfigFilePath = process.cwd()+'/ormconfig.yml';
export const database = yaml.load(fs.readFileSync(ormConfigFilePath));

export default {
  database,
};
