# ransomw.github.io

[Astro](http://astro.build) homepage

##### deploy

create empty `gh-pages` branch (one-time only):

```shell
git checkout --orphan gh-pages
git rm -rf .
echo "Hello World" > index.html
git add index.html
git commit -m "Initial gh-pages commit"
git push origin gh-pages
git checkout master
```

force push build output to the branch

```shell
astro$ ./deploy.sh
```
