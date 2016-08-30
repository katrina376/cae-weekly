var fs = require("fs");

var file_name = process.argv[2];
var title = process.argv[3];

var template   = fs.readFileSync("./template.html", "utf-8");
var content    = fs.readFileSync("../src/" + file_name + ".md", "utf-8");
var stylesheet = fs.readFileSync("./style.css", "utf-8");

var output = template.replace("{{title}}",      title)
                     .replace("{{stylesheet}}", stylesheet)
                     .replace("{{content}}",    content);

fs.writeFileSync("../" + file_name + ".html", output, "utf-8");
