import _ from 'lodash';

const checkNull = (name) => (!name ? 'null' : '[complex value]');
const checkString = (name) => (typeof name === 'boolean' ? `${name}` : `'${name}'`);
const checkVal = (name) => (typeof name === 'object' ? checkNull(name) : checkString(name));
const getPath = (nodeNames) => nodeNames.flat().join('.');

export function makePlainDiff(tree) {
  console.log(tree);
  const iter = (node, path) => node.map((child) => {
    const currentPath = getPath([path, child.key]);
    switch (child.type) {
      case 'nested': {
        return iter(child.children, currentPath);
      }
      case 'added': {
        return `Property '${currentPath}' was added with value: ${checkVal(child.value)}`;
      }
      case 'removed': {
        return `Property '${currentPath}' was removed`;
      }
      case 'changed': {
        return `Property '${currentPath}' was updated. From ${checkVal(child.value)} to ${checkVal(child.value2)}`;
      }
      case 'unchanged': {
        return null;
      }
      default: {
        throw Error('Uncorrect data');
      }
    }
  });

  return iter(tree.children, []);
}

export default function makePlain(data) {
  const result = makePlainDiff(data);
  const flatten = _.flattenDeep(result);
  const filtered = flatten.filter((el) => el);
  return filtered.join('\n');
}
