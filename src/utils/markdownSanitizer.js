const marked=require("marked");
const sanitizeHTMLLibrary=require("sanitize-html");
var TurndownService = require('turndown')

function sanitizeMarkDownContent(markdownContent) {
    // 1. conert Markdown to HTML
    const convertedHTML=marked.parse(markdownContent);

    // 2. santiize the converted HTML
    const sanitizedHTML=sanitizeHTMLLibrary(convertedHTML,{
        allowedTags:sanitizeHTMLLibrary.defaults.allowedTags
    });

    // 3. convert the sanitized HTML to markdown
    const turndownService = new TurndownService();
    const sanitizedMarkdown=turndownService.turndown(sanitizedHTML);
    return sanitizedMarkdown;
}

module.exports=sanitizeMarkDownContent;

