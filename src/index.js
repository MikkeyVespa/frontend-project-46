import { readFileSync } from 'node:fs';
import path from 'node:path';
import _ from 'lodash';
import { cwd } from 'node:process';

export default function showDiff (filepath1, filepath2) {
const path1 = resolvePath(filepath1)
const path2 = resolvePath(filepath2)
    const data1 = readFileSync(path1, 'utf-8')
    const data2 = readFileSync(path2, 'utf-8')

    const parseObj1 = JSON.parse(data1)
    const parseObj2 = JSON.parse(data2)

    getDiff(parseObj1, parseObj2)
}

function resolvePath (filepath) {
    return filepath.includes('fixtures') ? filepath : path.resolve() + `/__fixtures__/${filepath}`
}

function getDiff(obj1, obj2) {
    const keys = _.union(Object.keys(obj1), Object.keys(obj2)).sort()
    const result = ['{']
    for (const key of keys) {
        if (Object.hasOwn(obj1, key) && !Object.hasOwn(obj2, key)) {
           result.push(`  - ${key}: ${obj1[key]}`)
        } else if (!Object.hasOwn(obj1, key) && Object.hasOwn(obj2, key)) {
            result.push(`  + ${key}: ${obj2[key]}`)
        } else if (Object.hasOwn(obj1, key) && Object.hasOwn(obj2, key)) {
            if (obj1[key] === obj2[key]) {
                result.push(`    ${key}: ${obj1[key]}`)
            } else if (obj1[key] !== obj2[key]) {
                result.push(`  - ${key}: ${obj1[key]}`)
                result.push(`  + ${key}: ${obj2[key]}`)
            }
        }
    }
    result.push('}')
    console.log(result.join('\n'))
}