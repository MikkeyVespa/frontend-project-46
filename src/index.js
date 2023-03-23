import path from 'node:path';
import _ from 'lodash';
import parser from './parsers.js';

const resolvePath = (filepath) => path.resolve(process.cwd(), filepath);

function getDiff(obj1, obj2) {
  const keys = _.union(Object.keys(obj1), Object.keys(obj2)).sort();
  const result = ['{'];
  for (let i = 0; i < keys.length; i += 1) {
    if (Object.hasOwn(obj1, keys[i]) && !Object.hasOwn(obj2, keys[i])) {
      result.push(`  - ${keys[i]}: ${obj1[keys[i]]}`);
    } else if (!Object.hasOwn(obj1, keys[i]) && Object.hasOwn(obj2, keys[i])) {
      result.push(`  + ${keys[i]}: ${obj2[keys[i]]}`);
    } else if (Object.hasOwn(obj1, keys[i]) && Object.hasOwn(obj2, keys[i])) {
      if (obj1[keys[i]] === obj2[keys[i]]) {
        result.push(`    ${keys[i]}: ${obj1[keys[i]]}`);
      } else if (obj1[keys[i]] !== obj2[keys[i]]) {
        result.push(`  - ${keys[i]}: ${obj1[keys[i]]}`);
        result.push(`  + ${keys[i]}: ${obj2[keys[i]]}`);
      }
    }
  }
  result.push('}');
  return result.join('\n');
}

export default function showDiff(filepath1, filepath2) {
  const path1 = resolvePath(filepath1);
  const path2 = resolvePath(filepath2);

  const data1 = parser(path1);
  const data2 = parser(path2);

  return getDiff(data1, data2);
}
