install:
	npm ci

run:
	node bin/gendiff.js file1.json ./__fixtures__/file2.json

run2:
	node bin/gendiff.js -f plain file1copy.json file2copy.json

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

lint:
	npx eslint .
