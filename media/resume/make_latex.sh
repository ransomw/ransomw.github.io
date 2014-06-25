#! /bin/sh

TEX_FILE=resume.tex

node bin/build-latex > $TEX_FILE
pdflatex $TEX_FILE
