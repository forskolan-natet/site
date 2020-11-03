const yaml = require("js-yaml");
const markdownIt = require("markdown-it");
const markdownItRenderer = new markdownIt();

module.exports = function (eleventyConfig) {
  eleventyConfig.addDataExtension("yaml", contents => yaml.safeLoad(contents));

  eleventyConfig.addLayoutAlias("default", "layouts/default.liquid");
  eleventyConfig.addLayoutAlias("page", "layouts/page.liquid");
  eleventyConfig.addLayoutAlias("post", "layouts/post.liquid");

  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("documents");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("js");

  eleventyConfig.addFilter("sortByOrder", collection =>
    collection.sort((a, b) => a.data.order - b.data.order)
  );
  eleventyConfig.addFilter("markdownit", markdown =>
    markdownItRenderer.render(markdown)
  );

  return {
    dir: {
      input: "./",
      output: "./_site"
    }
  };
};
