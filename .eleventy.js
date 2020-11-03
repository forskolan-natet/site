module.exports = function (eleventyConfig) {
  eleventyConfig.addLayoutAlias("default", "layouts/default.liquid");
  eleventyConfig.addLayoutAlias("page", "layouts/page.liquid");
  eleventyConfig.addLayoutAlias("post", "layouts/post.liquid");

  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("documents");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("js");

  eleventyConfig.addFilter("sortByOrder", collection => {
    return collection.sort((a, b) => a.data.order - b.data.order);
  });

  return {
    dir: {
      input: "./",
      output: "./_site"
    }
  };
};
