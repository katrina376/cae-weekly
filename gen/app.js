var fs = require("fs");

var file_name = process.argv[2];
var output_file_name = process.argv[3];

var template = fs.readFileSync("./template.html", "utf-8");
var content  = fs.readFileSync("../src/" + file_name, "utf-8");

var output = template.replace("{{title}}",   title)
                     .replace("{{content}}", content);

fs.writeFileSync("../" + output_file_name, output, "utf-8");
