import path from 'node:path';
import yaml from 'js-yaml';
import { readFileSync } from 'node:fs';

const getExtention = (filename) => path.extname(filename);
const getName = (filename) => path.basename(filename);
const parser = (filename) => {
  const name = getName(filename);
  const extention = getExtention(name);
  return extention !== '.json'
    ? yaml.load(readFileSync(filename, 'utf-8'))
    : JSON.parse(readFileSync(filename, 'utf-8'));
};

export default parser;
