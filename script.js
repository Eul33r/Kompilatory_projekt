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
    LCURLYBRACKET: '{',
    RCURLYBRACKET: '}',
    INTEGER: 'integer',
    FLOAT: 'float',
    IDENTIFIER: 'identifier',
    DIFF1: 'd/dx',
    EOF: 'eof',
};

function calculateLogBase(base, expression) {
    // Obliczanie logarytmu o podstawie 'base' dla 'expression'
    const log_base_x = Math.log(expression) / Math.log(base);
    return log_base_x;
}

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

function expandPower(base, exponent) {
    if (exponent === 0) {
        return '1';
    } else if (exponent === 1) {
        return base;
    }

    let result = '';
    for (let i = 0; i <= exponent; i++) {
        let coeff = binomialCoefficient(exponent, i);
        if (coeff !== 1) {
            result += coeff;
        }

        if (i > 0) {
            result += base;
        }

        if (i < exponent) {
            result += `*${base}`;
        }
    }

    return result;
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

function gcd2(a, b) {
    // Użycie algorytmu Euklidesa
    if (a === 0 && b === 0) {
        alert('Największy wspólny dzielnik dwóch zer nie istnieje!');
        return NaN;
    }
    else if (!Number.isInteger(a) || !Number.isInteger(b)) {
        alert('Funkcja nwd przyjmuje argumenty całkowite!')
    }
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function gcd(...numbers) {
    if (numbers.length === 0) return null;
    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        result = gcd2(result, numbers[i]);
    }
    return result;
}
function lcm(...numbers) {
    if (numbers.length === 0) return null;
    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        result = lcm2(result, numbers[i]);
    }
    return result;
}

// Funkcja pomocnicza obliczająca LCM dwóch liczb
function lcm2(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        alert('Funkcja nww przyjmuje argumenty całkowite!')
    }
    return Math.abs(a * b) / gcd2(a, b);
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
        }
        else if (identifier.toLowerCase() === 'i') {
            return new Token(TOKEN_TYPES.IMAGINARY_UNIT, 'i');
        }
        else if (identifier !== '') { // Dodany warunek sprawdzający, czy identyfikator nie jest pusty
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
            case '{':
                operatorType = TOKEN_TYPES.LCURLYBRACKET;
                break;
            case '}':
                operatorType = TOKEN_TYPES.RCURLYBRACKET;
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
                let maxValue = expressionValue;
                while (this.currentToken.type === TOKEN_TYPES.COMMA) {
                    this.eat(TOKEN_TYPES.COMMA); // Eat the comma
                    const nextValue = this.expression();
                    maxValue = Math.max(maxValue, nextValue);
                }
                return maxValue;
            }
            else if (functionName === 'min') {
                let minValue = expressionValue;
                while (this.currentToken.type === TOKEN_TYPES.COMMA) {
                    this.eat(TOKEN_TYPES.COMMA); // Eat the comma
                    const nextValue = this.expression();
                    minValue = Math.min(maxValue, nextValue);
                }
                return minValue;
            }
            /* FUNKCJE TEORIOLICZBOWE */
            else if (functionName === 'legendre') {
                this.eat(TOKEN_TYPES.COMMA); // Eat the comma
                const secondArgument = this.expression();
                return legendre(expressionValue, secondArgument);
            }


            else if (functionName === 'gcd' || functionName === 'hcf') {
                let greatestDivisor = expressionValue;
                while (this.currentToken.type === TOKEN_TYPES.COMMA) {
                    this.eat(TOKEN_TYPES.COMMA); // Eat the comma
                    const nextValue = this.expression();
                    greatestDivisor = gcd(greatestDivisor, nextValue);
                }
                return greatestDivisor;
            }
            else if (functionName === 'lcm') {
                let lowestMultiple = expressionValue;
                while (this.currentToken.type === TOKEN_TYPES.COMMA) {
                    this.eat(TOKEN_TYPES.COMMA); // Eat the comma
                    const nextValue = this.expression();
                    lowestMultiple = lcm(lowestMultiple, nextValue); ///FIX ME!!!
                }
                return lowestMultiple;
            }
            /* FUNKCJE TEORIOLICZBOWE END */
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
                case 'ln': // naturalny
                    if (expressionValue <= 0) {
                        alert('Liczba logarytmowana musi być dodatnia!');
                        return NaN;
                    } else return Math.log(expressionValue);
                case 'log': // zwykły, dziesiętny
                    if (expressionValue <= 0) {
                        alert('Liczba logarytmowana musi być dodatnia!');
                        return NaN;
                    } else return log_base_x(10, expressionValue);
                case 'log_':
                    this.eat(TOKEN_TYPES.LPAREN); // Eat the left parenthesis after log_

                    // Sprawdź czy jest podstawa logarytmu
                    let base = 10; // Domyślna podstawa logarytmu (np. 10)
                    if (this.currentToken.type === TOKEN_TYPES.LPAREN) {
                        // Jeśli jest nawias po log_, parsujemy wyrażenie jako podstawę
                        this.eat(TOKEN_TYPES.LPAREN); // Eat the left parenthesis after log_(

                        const baseExpression = this.expression(); // Pobieramy wartość wyrażenia dla podstawy
                        base = baseExpression;

                        this.eat(TOKEN_TYPES.RPAREN); // Eat the right parenthesis after podstawa
                        console.log(base);
                    }

                    this.eat(TOKEN_TYPES.LCURLYBRACKET); // Eat the left parenthesis before logarytmowana liczba
                    const logExpression = this.expression(); // Pobieramy wartość wyrażenia logarytmowanego

                    this.eat(TOKEN_TYPES.RCURLYBRACKET); // Eat the right parenthesis after logarytmowana liczba
                    console.log(logExpression);
                    // Oblicz logarytm o podanej podstawie
                    if (logExpression <= 0 || base <= 0 || base === 1) {
                        alert('Niepoprawne argumenty logarytmu!');
                        return NaN;
                    } else {
                        return Math.log(logExpression) / Math.log(base);
                    }

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
                else if (result === 'i') {
                    let reducedExponent = exponent % 4;
                    switch (reducedExponent) {
                        case 0:
                            result = 1;
                        case 1:
                            result = i;
                        case 2:
                            result = -1;
                        default:
                            result = -i;
                    }
                    return result;
                }
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

function clearField() {
    document.getElementById('Field').value = '';
}

function handleEnter(event) {
    if (event.key === 'Enter') {
        calculate();
    }
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