const fs = require("fs");
const os = require("os");
const { encode } = require("querystring");

let name = process.argv[2];
let inputs = process.argv[3];

fs.appendFileSync(`${name}.lic`, `${name} + "Inputs" + ${inputs} `);
