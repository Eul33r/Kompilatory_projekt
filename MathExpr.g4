grammar MathExpr;

expression
    : term
    | expression PLUS term
    | expression MINUS term
    ;

term
    : factor
    | term MUL factor
    | term DIV factor
    | term MOD factor
    ;

factor
    : primary
    | factor EXP primary
    | primary POW primary
    ;

primary
    : number
    | variable
    | function_call
    | LPAREN expression RPAREN
    ;

function_call
    : SIN LPAREN expression RPAREN
    | COS LPAREN expression RPAREN
    | TAN LPAREN expression RPAREN
    | SQRT LPAREN expression RPAREN
    | ABS PIPE expression PIPE
    | EXPONENTIAL LPAREN expression RPAREN
    | LN LPAREN expression RPAREN
    | LOG LPAREN expression (COMMA expression)? RPAREN
    ;

number
    : INTEGER
    | FLOAT
    | PI
    | EULER
    | IMAGINARY_UNIT
    ;

variable
    : IDENTIFIER
    ;

PLUS: '+';
MINUS: '-';
MUL: '*';
DIV: '/';
MOD: '%';
EXP: '^';
POW: '**';
LPAREN: '(';
RPAREN: ')';
PIPE: '|';
COMMA: ',';
SIN: 'sin';
COS: 'cos';
TAN: 'tan';
SQRT: 'sqrt';
ABS: 'abs';
EXPONENTIAL: 'exp';
LN: 'ln';
LOG: 'log';
INTEGER: [0-9]+;
FLOAT: [0-9]+ '.' [0-9]+;
PI: 'pi';
EULER: 'e';
IMAGINARY_UNIT: 'i';
IDENTIFIER: [a-zA-Z]+;
WS: [ \t\r\n]+ -> skip;
