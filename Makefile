install:
	npm ci

run:
	node bin/gendiff.js file1.json file2.json

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

lint:
	npx eslint .
