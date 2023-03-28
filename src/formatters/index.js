import makeStylish from './stylish.js';

export default function formatter(tree, format) {
  switch (format) {
    case 'stylish':
      return makeStylish(tree);
    default:
      throw new Error('vvedite format');
  }
}
