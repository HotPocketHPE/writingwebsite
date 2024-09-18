module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addWatchTarget("./src/styles.css");

  eleventyConfig.addFilter("formatDate", function(date) {
    var d = date.getUTCDate();
    var m = date.getUTCMonth() + 1;
    var y = date.getUTCFullYear();
    return "" + y + "-" + (m<=9 ? '0' + m : m) + "-" + (d<=9 ? '0' + d : d);
  })

  eleventyConfig.addFilter("scoreToStars", function(score) {
    var fullStars = ["", "★", "★★", "★★★", "★★★★", "★★★★★"];
    var s = fullStars[Math.floor(score)];
    if (score % 1 != 0) {
      s = s + "½"
    }
    return s;
  })

  

  return {
    passthroughFileCopy: true,
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "output",
      includes: "_includes",
    },
  };
};