import makeStylish from './stylish.js';
import makePlain from './plain.js';

export default function formatter(tree, format) {
  switch (format) {
    case 'stylish':
      return makeStylish(tree);
    case 'plain':
      return makePlain(tree);
    default:
      throw new Error('vvedite format');
  }
}
