const yaml = require("js-yaml");
const markdownIt = require("markdown-it");
module.exports = function(eleventyConfig){
    eleventyConfig.setTemplateFormats([
        "jpg",
        "pdf",
        "md",
        "njk",
        "webp",
        "png",
        "css",
        "js"
      ]);

      eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));
      
      const md = new markdownIt({
            html: true
        });

        eleventyConfig.addPairedShortcode("markdown", (content) => {
            return md.render(content);
        });

    return {
        markdownTemplateEngine: "njk",    
    dir: {
        layouts: "_layouts"

    },
    }

    
   
};