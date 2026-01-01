#!/bin/bash

# 1. Build your Astro site
npm run build

# 2. Enter the build folder
cd dist

# 3. Create a brand new git repo inside 'dist'
git init
git add -A
git commit -m "Deploy to GitHub Pages"

# 4. Force push this brand new history to your repo's gh-pages branch
# Replace the URL with your actual repo URL
git push -f git@github.com:ransomw/ransomw.github.io.git master:gh-pages

# 5. Leave the folder
cd ..
