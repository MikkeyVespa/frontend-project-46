import _ from 'lodash';

const buildAST = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const keys = _.sortBy(_.union(keys1, keys2));

  const children = keys.map((key) => {
    if (!_.has(data1, key)) {
      return { type: 'added', key, value: data2[key] };
    } if (!_.has(data2, key)) {
      return { type: 'removed', key, value: data1[key] };
    } if (_.isPlainObject(data1[key]) && _.isPlainObject(data2[key])) {
      return { type: 'nested', key, children: buildAST(data1[key], data2[key]) };
    }
    if (data1[key] === data2[key]) {
      return { type: 'unchanged', key, value: data1[key] };
    } return {
      type: 'changed', key, value: data1[key], value2: data2[key],
    };
  });
  return children;
};

const getDifferenceTree = (data1, data2) => ({
  type: 'root',
  children: buildAST(data1, data2),
});

export default getDifferenceTree;
