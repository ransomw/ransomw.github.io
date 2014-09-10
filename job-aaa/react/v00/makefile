.PHONY: install

install:
	bower install
	npm install -g jslint

start:
	python -m SimpleHTTPServer 3000

lint:
	jslint $$(find js -name '*.js')