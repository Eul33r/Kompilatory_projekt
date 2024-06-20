const antlr4 = require('antlr4');
const MathExprLexer = require('./MathExprLexer.js');
const MathExprParser = require('./MathExprParser.js');

/*
// Zamiast:
// import { something } from './module';

// Użyj:
import antlr4 from './node_modules/antlr4'; // zamiast ./node_modules/antlr4/index.js
import MathExprLexer from './MathExprLexer.js';
import MathExprParser from './MathExprParser.js';

const antlr4 = require('./node_modules/antlr4');
const MathExprLexer = require('./MathExprLexer.js');
const MathExprParser = require('./MathExprParser.js');
*/

function parseInput(input) {
    const chars = new antlr4.InputStream(input);
    const lexer = new MathExprLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new MathExprParser(tokens);
    parser.buildParseTrees = true;

    const tree = parser.expression(); // lub inny startowy non-terminal z Twojej gramatyki
    console.log(tree.toStringTree(parser.ruleNames));
}

function main(input) {
    return parseInput(input);
    /*const parser = new Parser(input);
    return parser.parse(); // Zwracamy wynik bezpośrednio z metody parse
    */
}
function clearField() {
    document.getElementById('Field').value = '';
}

function calculate() {
    const inputField = document.getElementById('Field');
    const resultDiv = document.getElementById('result');

    const inputExpression = inputField.value;
    console.log('Input expression:', inputExpression); // Dodane
    const simplifiedExpression = parseInput(inputExpression);
    resultDiv.textContent = 'Wynik: ' + simplifiedExpression;
}

