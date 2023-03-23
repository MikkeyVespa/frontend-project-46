install:
	npm ci

run:
	node bin/gendiff.js ./__fixtures__/file1.yaml ./__fixtures__/file2.yaml

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

lint:
	npx eslint .
