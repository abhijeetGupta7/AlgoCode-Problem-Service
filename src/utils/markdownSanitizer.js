const marked=require("marked");
const sanitizeHTMLLibrary=require("sanitize-html");
var TurndownService = require('turndown')

function sanitizeMarkDownContent(markdownContent) {
    // 1. conert Markdown to HTML
    const convertedHTML=marked.parse(markdownContent);
    console.log("Converted HTML as",convertedHTML);

    // 2. santiize the converted HTML
    const sanitizedHTML=sanitizeHTMLLibrary(convertedHTML,{
        allowedTags:sanitizeHTMLLibrary.defaults.allowedTags
    });
    console.log("Sanitized HTML as",sanitizedHTML);

    // 3. convert the sanitized HTML to markdown
    const turndownService = new TurndownService();
    const sanitizedMarkdown=turndownService.turndown(sanitizedHTML);
    console.log("Sanitized Markdown ",sanitizedMarkdown);
    return sanitizedMarkdown;
}

module.exports=sanitizeMarkDownContent;

