import * as fs from 'fs';
import * as ts from 'typescript';

const inputFile = process.argv[2];
const ast_json = fs.readFileSync(inputFile, 'utf-8');
console.log("hey there")
console.log(JSON.parse(ast_json))
