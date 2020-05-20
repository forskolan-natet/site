# Förskolan Nätet

Main site (https://forskolannatet.se) for the cooperation.

Built in Jekyll (https://jekyllrb.com/) v3.8.3.

## Config

> The `config.yaml` is for our (Accoding to you) build system and should not be changed. If you do change it it will probably break the automatic builds.

The `_config.yml` file is the main Jekyll config. You can not use whatever plugins you want, since the plugins have to be supported by the build image. The supported plugins are:

* jekyll-assets
* jekyll-default-layout
* jekyll-feed
* jekyll-optional-front-matter
* jekyll-paginate
* jekyll-readme-index
* jekyll-redirect-from
* jekyll-relative-links
* jekyll-seo-tag
* jekyll-sitemap
* jekyll-titles-from-headings
* jekyll-gist
* jekyll-include-cache

You can also build your own and include as part of the site.

# Deploying changes

Update the source and push it to `master`. We sync the changes every 15m and a new version will be built and deployed (takes about 1 minute) as soon as a new version is available.

If the update has not happened 20 minutes after the change was pushed to Github something has gone wrong. Please contact support at support@accodeing.com and tell us about it.
