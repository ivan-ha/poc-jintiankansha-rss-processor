# poc-jintiankansha-rss-processor
RSS processor of 今天看啥

# Installation

```shell
yarn

cp .env.sample .env
# and fill in a valid jintiankansha RSS url
```

# Uasge

```shell
node index.js
```

It will
1. Log the article title and content (plain text) to the console
2. Download all the images to `/images/${article_title}` directories

# Clean Up

```shell
rm -rf images
```
