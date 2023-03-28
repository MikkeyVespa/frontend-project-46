import path from 'node:path';
import parser from './parsers.js';
import buildAST from './buildAST.js';
import formatter from './formatters/index.js';

const resolvePath = (filepath) => (filepath.includes('__fixtures__')
  ? path.resolve(process.cwd(), filepath)
  : path.resolve(process.cwd(), (`__fixtures__/${filepath}`))
);

export default function showDiff(filepath1, filepath2, format = 'stylish') {
  const path1 = resolvePath(filepath1);
  const path2 = resolvePath(filepath2);

  const obj1 = parser(path1);
  const obj2 = parser(path2);

  const AST = buildAST(obj1, obj2);
  return formatter(AST, format);
}
