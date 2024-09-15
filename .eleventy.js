module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addWatchTarget("./src/styles.css");

  eleventyConfig.addFilter("formatDate", function(date) {
    var d = date.getDate();
    var m = date.getMonth() + 1;
    var y = date.getFullYear();
    return "" + y + "-" + (m<=9 ? '0' + m : m) + "-" + d;
  })

  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "output",
      includes: "_includes",
    },
  };
};