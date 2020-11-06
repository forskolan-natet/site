![logo](img/logo.png)

![Eleventy Build on Push](https://github.com/forskolan-natet/site/workflows/Eleventy%20Build%20on%20Push/badge.svg)

Main site for the cooperation Friluftsförskolan Nätet, https://forskolannatet.se.

Built with [11ty](https://www.11ty.dev/).

# Deploying changes

Just push to main!

A GitHub Action defined in [`deploy.yml`](.github/workflows/deploy.yml) will build the site and publish it to GitHub Pages. The generated site resides in the branch `gh-pages`.
