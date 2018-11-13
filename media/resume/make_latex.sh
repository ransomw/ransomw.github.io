#! /bin/sh

TEX_FILE=resume.tex

node bin/build-latex > $TEX_FILE
lualatex -halt-on-error $TEX_FILE
