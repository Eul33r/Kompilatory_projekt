// Spis tokenów
const TOKEN_TYPES = {
    PLUS: '+',
    MINUS: '-',
    MUL: '*',
    DIV: '/',
    MOD: '%',
    EXP: '^',
    EQUALS: '=',
    NEQUALS: '!=',
    GREATER: '>',
    LESSER: '<',
    NGREATER: '<=',
    NLESSER: '>=',
    COMMA: ',',
    PIPE: '|',
    ABS: '||',
    SIN: 'sin',
    COS: 'cos',
    EXPONENTIAL: 'exp',
    LN: 'ln',
    PI: 'pi',
    EULER: 'e',
    IMAGINARY_UNIT: 'i',
    LPAREN: '(',
    RPAREN: ')',
    INTEGER: 'integer',
    FLOAT: 'float',
    IDENTIFIER: 'identifier',
    DIFF1: 'd/dx',
    EOF: 'eof',
};

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}

function doubleFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    else {
        let result = 1;
        if (n % 2 === 0) {
            for (let i = 2; i <= n; i += 2) {
                result *= i;
            }
            return result;
        } else {
            for (let i = 3; i <= n; i += 2) {
                result *= i;
            }
            return result;
        }

    }
}

function isPrime(number) {
    if (number <= 1 || n % 2 === 0) return false;

    if (number === 2) {
        return true;
    }
    let sqrtNumber = Math.sqrt(number);
    for (let i = 3; i <= sqrtNumber; i += 2) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

function binomial(n, k) {
    if (k === 0) return 1;
    return (n * binomial(n - 1, k - 1)) / k;
}

function modularExponentiation(base, exponent, modulus) { // Szybkie potęgowanie modularne 
    if (modulus === 1) return 0; // Jeśli m = 1, wynik zawsze będzie 0
    let result = 1;
    base = base % modulus;

    while (exponent > 0) {
        // Jeśli exponent jest nieparzysty, mnożymy przez base (z modulusem), pomijając przekroczenie granic
        if (exponent % 2 === 1) {
            result = (result * base) % modulus;
        }
        // Teraz exponent jest parzysty, base = base * base
        exponent = exponent >> 1; // równoważne exponent = Math.floor(exponent / 2)
        base = (base * base) % modulus;
    }
    return result;
}

function legendre(a, p) {
    if (a % p === 0) return 0;
    else {
        exponent = (p - 1) / 2;
        return modularExponentiation(a, exponent, p);
    }
}

function gcd(a, b) {
    // Użycie algorytmu Euklidesa
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function lcm(a, b) {
    // Obliczanie lcm za pomocą gcd
    return (a * b) / gcd(a, b);
}

// Klasa tokena
class Token {
    constructor(type, value) {
        this.type = type;
        this.value = value;
    }
}

// Analizator leksykalny (tokenizator)
class Tokenizer {
    constructor(input) {
        this.input = input;
        this.position = 0;
    }

    getNextToken() {
        if (this.position >= this.input.length) {
            return new Token(TOKEN_TYPES.EOF, null);
        }

        const currentChar = this.input[this.position];

        if (/\d/.test(currentChar)) {
            return this.parseNumber();
        } else if (/[a-zA-Z]/.test(currentChar)) {
            console.log('Identifier token detected'); // Dodane
            return this.parseIdentifier();
        } else if (/\s/.test(currentChar)) {
            this.position++;
            return this.getNextToken();
        } else {
            return this.parseOperator();
        }
    }
    parseNumber() {
        let number = '';

        while (/\d|\./.test(this.input[this.position])) {
            number += this.input[this.position];
            this.position++;
        }

        if (number.includes('.')) {
            return new Token(TOKEN_TYPES.FLOAT, parseFloat(number));
        } else {
            return new Token(TOKEN_TYPES.INTEGER, parseInt(number));
        }
    }

    parseIdentifier() {
        let identifier = '';

        while (/[a-zA-Z]/.test(this.input[this.position])) {
            identifier += this.input[this.position];
            this.position++;
        }

        if (identifier.toLowerCase() === 'pi') {
            return new Token(TOKEN_TYPES.PI, Math.PI);
        } else if (identifier.toLowerCase() === 'e') {
            return new Token(TOKEN_TYPES.EULER, Math.E);
        } else if (identifier !== '') { // Dodany warunek sprawdzający, czy identyfikator nie jest pusty
            return new Token(TOKEN_TYPES.IDENTIFIER, identifier);
        }
        else {
            throw new Error('Invalid identifier');
        }
    }

    parseOperator() {
        const currentChar = this.input[this.position];
        let operatorType;

        switch (currentChar) {
            case '+':
                operatorType = TOKEN_TYPES.PLUS;
                break;
            case '-':
                operatorType = TOKEN_TYPES.MINUS;
                break;
            case '*':
                operatorType = TOKEN_TYPES.MUL;
                break;
            case '/':
                operatorType = TOKEN_TYPES.DIV;
                break;
            case '%':
                operatorType = TOKEN_TYPES.MOD;
                break;
            case '^':
                operatorType = TOKEN_TYPES.EXP;
                break;
            case '(':
                operatorType = TOKEN_TYPES.LPAREN;
                break;
            case ')':
                operatorType = TOKEN_TYPES.RPAREN;
                break;
            case ',':
                operatorType = TOKEN_TYPES.COMMA;
                break;
            case '|':
                operatorType = TOKEN_TYPES.PIPE;
                break;
            default:
                if (currentChar === '^') {
                    operatorType = TOKEN_TYPES.EXP;
                } else {
                    throw new Error(`Unknown operator: ${currentChar}`);
                }
        }

        this.position++;
        return new Token(operatorType, currentChar);
    }
}

// Klasa analizatora składniowego
class Parser {
    constructor(input) {
        this.tokenizer = new Tokenizer(input);
        this.currentToken = this.tokenizer.getNextToken();
    }

    eat(expectedType) {
        if (this.currentToken.type === expectedType) {
            this.currentToken = this.tokenizer.getNextToken();
        } else {
            throw new Error(`Unexpected token: ${this.currentToken.type}, expected: ${expectedType}`);
        }
    }

    factor() {
        const currentToken = this.currentToken;

        if (currentToken.type === TOKEN_TYPES.EULER) {
            this.eat(currentToken.type);
            return currentToken.value;
        } else if (currentToken.type === TOKEN_TYPES.PI) {
            this.eat(currentToken.type);
            return currentToken.value;
        } else if (currentToken.type === TOKEN_TYPES.INTEGER || currentToken.type === TOKEN_TYPES.FLOAT) {
            this.eat(currentToken.type);
            return currentToken.value;
        } else if (currentToken.type === TOKEN_TYPES.PIPE) {
            this.eat(currentToken.type)
            const expr = this.expression();
            console.log(expr);
            this.eat(TOKEN_TYPES.PIPE);
            return Math.abs(expr);

        }
        else if (currentToken.type === TOKEN_TYPES.IDENTIFIER) {
            let functionName = currentToken.value;
            functionName = functionName.toLowerCase();
            this.eat(TOKEN_TYPES.IDENTIFIER); // Eat the function name
            this.eat(TOKEN_TYPES.LPAREN); // Eat the left parenthesis

            const expressionValue = this.expression(); // Przetwarzanie wyrażenia w nawiasach

            /* Obsługa funkcji dwuargumentowych */
            if (functionName === 'binomial') {
                this.eat(TOKEN_TYPES.COMMA); // Eat the comma
                const secondArgument = this.expression(); // Przetwarzanie drugiego argumentu

                return binomial(expressionValue, secondArgument); // Wywołanie funkcji binomial z n i k
            }
            else if (functionName === 'max') {
                this.eat(TOKEN_TYPES.COMMA); // Eat the comma
                const secondArgument = this.expression();
                return Math.max(expressionValue, secondArgument);
            }
            else if (functionName === 'min') {
                this.eat(TOKEN_TYPES.COMMA); // Eat the comma
                const secondArgument = this.expression();
                return Math.min(expressionValue, secondArgument);
            }
            /* FUNKCJE teorioliczbowe */
            else if (functionName === 'legendre') {
                this.eat(TOKEN_TYPES.COMMA); // Eat the comma
                const secondArgument = this.expression();
                return legendre(expressionValue, secondArgument);
            }

            /* FUNKCJE teorioliczbowe END */
            else if (functionName === 'gcd' || functionName === 'hcf') {
                this.eat(TOKEN_TYPES.COMMA); // Eat the comma
                const secondArgument = this.expression();
                return gcd(expressionValue, secondArgument);
            }
            else if (functionName === 'lcm') {
                this.eat(TOKEN_TYPES.COMMA); // Eat the comma
                const secondArgument = this.expression();
                return lcm(expressionValue, secondArgument);
            }

            /* Obsługa funkcji dwuargumentowych END */

            this.eat(TOKEN_TYPES.RPAREN); // Eat the right parenthesis

            // Calculate function value based on the function name
            const epsilon = 1e-12;
            switch (functionName.toLowerCase()) {
                /* FUNKCJE TRYGONOMETRYCZNE */
                case 'sin':
                    const piMultiple = expressionValue / Math.PI;
                    if (Math.abs(piMultiple - Math.round(piMultiple)) < epsilon) {
                        return 0;
                    } else return Math.sin(expressionValue);
                case 'cos':
                    const piOver2Multiple = expressionValue / (Math.PI / 2);
                    if (Math.abs(piOver2Multiple - Math.round(piOver2Multiple)) < epsilon) {
                        return 0;
                    } else {
                        return Math.cos(expressionValue);
                    }
                case 'tan':
                    return Math.tan(expressionValue);
                case 'cot':
                    return 1 / Math.tan(expressionValue);
                case 'csc':
                    return 1 / Math.sin(expressionValue);
                case 'sec':
                    return 1 / Math.cos(expressionValue);
                /* FUNKCJE TRYGONOMETRYCZNE END */

                case 'exp':
                    return Math.exp(expressionValue);
                case 'ln':
                    return Math.log(expressionValue);
                case 'sqrt':
                    if (expressionValue < 0) {
                        alert('Nie wolno wyciągać pierwiastka kwadratowego z liczby ujemnej!');
                        throw new Error('Nie wolno wyciągać pierwiastka kwadratowego z liczby ujemnej!');
                    }
                    return Math.sqrt(expressionValue);
                case 'cbrt':
                    return Math.cbrt(expressionValue);

                /* FUNKCJE HIPERBOLICZNE */
                case 'sinh':
                    return Math.sinh(expressionValue);
                case 'cosh':
                    return Math.cosh(expressionValue);
                case 'tanh':
                    return Math.tanh(expressionValue);
                case 'coth':
                    return 1 / Math.tanh(expressionValue);
                /* FUNKCJE HIPERBOLICZNE END*/

                /* FUNKCJE CYKLOMETRYCZNE */
                case 'arcsin':
                    return Math.asin(expressionValue);
                case 'arccos':
                    return Math.acos(expressionValue);
                case 'arctan':
                    return Math.atan(expressionValue);
                case 'arccot':
                    return 1 / Math.atan(expressionValue);
                /* FUNKCJE CYKLOMETRYCZNE END */

                /* INNE FUNKCJE SPECJALNE */
                case 'factorial':
                    return factorial(expressionValue);
                case 'doublefactorial':
                    return doubleFactorial(expressionValue);
                case 'binomial':
                    //this.eat(TOKEN_TYPES.LPAREN); // Eat the left parenthesis
                    const n = this.expression(); // Pobieramy wartość wyrażenia dla n
                    this.eat(TOKEN_TYPES.COMMA); // Eat the comma
                    const k = this.expression(); // Pobieramy wartość wyrażenia dla k
                    //this.eat(TOKEN_TYPES.RPAREN); // Eat the right parenthesis

                    return binomial(n, k); // Wywołanie funkcji binomial z n i k
                case '||':
                    return Math.abs(expressionValue);
                case 'floor':
                    return Math.floor(expressionValue);
                case 'ceil':
                    return Math.ceil(expressionValue);
                case 'fracpart':
                    return expressionValue - Math.floor(expressionValue);
                case 'trunc':
                    return Math.trunc(expressionValue);
                case 'round':
                    return Math.round(expressionValue);
                case 'sgn':
                    return Math.sign(expressionValue);
                /* INNE FUNKCJE SPECJALNE END */

                default:
                    throw new Error(`Unknown function: ${functionName}`);
            }
        } else if (currentToken.type === TOKEN_TYPES.LPAREN) {
            this.eat(TOKEN_TYPES.LPAREN); // Eat the left parenthesis
            const expressionValue = this.expression();
            this.eat(TOKEN_TYPES.RPAREN); // Eat the right parenthesis
            return expressionValue;
        } else if (currentToken.type === TOKEN_TYPES.MINUS) {
            this.eat(TOKEN_TYPES.MINUS); // Eat the minus sign
            return -this.factor();
        } else {
            throw new Error(`Unexpected token: ${currentToken.type}`);
        }
    }



    term() {
        let result = this.factor();

        while ([TOKEN_TYPES.MUL, TOKEN_TYPES.DIV, TOKEN_TYPES.MOD, TOKEN_TYPES.EXP].includes(this.currentToken.type)) {
            const currentToken = this.currentToken;

            if (currentToken.type === TOKEN_TYPES.MUL) {
                this.eat(TOKEN_TYPES.MUL); // Eat the multiplication sign
                result *= this.factor();
            } else if (currentToken.type === TOKEN_TYPES.DIV) {
                this.eat(TOKEN_TYPES.DIV); // Eat the division sign
                if (result === 0 && this.factor() === 0) {
                    alert('Wyrażenie 0/0 jest nieoznaczone!')
                }
                if (this.factor() === 0) {
                    alert('Nie wolno dzielić przez zero!')
                }
                result /= this.factor();
            } else if (currentToken.type === TOKEN_TYPES.MOD) {
                this.eat(TOKEN_TYPES.MOD); // Eat the modulo sign
                result %= this.factor();
            } else if (currentToken.type === TOKEN_TYPES.EXP) {
                this.eat(TOKEN_TYPES.EXP);
                const exponent = this.factor(); // Parse the exponent
                if (result === 0 && exponent === 0) {
                    alert('Wyrażenie 0^0 jest nieoznaczone!');
                    return NaN; // Return NaN for indeterminate form
                } else if (result === 0 && exponent === -1) {
                    alert('Odwrotność liczby 0 nie istnieje!')
                } else if (result === 'e') return Math.exp(exponent);
                else {
                    result = Math.pow(result, exponent);
                }
            }


        }

        return result;
    }

    expression() {
        let result = this.term();

        while ([TOKEN_TYPES.PLUS, TOKEN_TYPES.MINUS].includes(this.currentToken.type)) {
            const currentToken = this.currentToken;

            if (currentToken.type === TOKEN_TYPES.PLUS) {
                this.eat(TOKEN_TYPES.PLUS); // Eat the plus sign
                result += this.term();
            } else if (currentToken.type === TOKEN_TYPES.MINUS) {
                this.eat(TOKEN_TYPES.MINUS); // Eat the minus sign
                result -= this.term();
            }
        }

        return result;
    }

    parse() {
        return this.expression();
    }
}

// Funkcja główna programu
function main(input) {
    const parser = new Parser(input);
    return parser.parse(); //// Zwracamy wynik bezpośrednio z metody parse
}

function calculate() {
    const inputField = document.getElementById('Field');
    const resultDiv = document.getElementById('result');

    const inputExpression = inputField.value;
    console.log('Input expression:', inputExpression); // Dodane
    const simplifiedExpression = main(inputExpression);
    resultDiv.textContent = 'Wynik: ' + simplifiedExpression;
}

/*
// Nasłuchiwanie zdarzenia wciśnięcia klawisza w polu tekstowym
document.getElementById('Field').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault(); // Zapobiegamy domyśl

        calculate(); // Wywołujemy funkcję obliczającą wynik
    }
});

*/
// Przykładowe użycie
/*const inputExpression = 'sin(pi/2) + ln(exp(1))';
const parser = new Parser(inputExpression);
const result = parser.parse();
console.log('Wynik: ', result);
*/