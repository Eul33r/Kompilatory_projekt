// Generated from MathExpr.g4 by ANTLR 4.13.1
// jshint ignore: start
const antlr4 = require('./node_modules/antlr4');
const MathExprLexer = require('./MathExprLexer.js');
const MathExprParser = require('./MathExprParser.js');
const serializedATN = [4, 1, 26, 121, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7,
	4, 2, 5, 7, 5, 2, 6, 7, 6, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 5, 0, 24, 8, 0, 10, 0, 12,
	0, 27, 9, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 41, 8, 1, 10, 1,
	12, 1, 44, 9, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 3, 2, 52, 8, 2, 1, 2, 1, 2, 1, 2, 5, 2, 57, 8, 2, 10,
	2, 12, 2, 60, 9, 2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 3, 3, 69, 8, 3, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4,
	1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4,
	1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 3, 4,
	111, 8, 4, 1, 4, 1, 4, 3, 4, 115, 8, 4, 1, 5, 1, 5, 1, 6, 1, 6, 1, 6, 0, 3, 0, 2, 4, 7, 0, 2, 4, 6, 8, 10,
	12, 0, 1, 1, 0, 20, 24, 131, 0, 14, 1, 0, 0, 0, 2, 28, 1, 0, 0, 0, 4, 51, 1, 0, 0, 0, 6, 68, 1, 0, 0, 0,
	8, 114, 1, 0, 0, 0, 10, 116, 1, 0, 0, 0, 12, 118, 1, 0, 0, 0, 14, 15, 6, 0, -1, 0, 15, 16, 3, 2, 1, 0,
	16, 25, 1, 0, 0, 0, 17, 18, 10, 2, 0, 0, 18, 19, 5, 1, 0, 0, 19, 24, 3, 2, 1, 0, 20, 21, 10, 1, 0, 0,
	21, 22, 5, 2, 0, 0, 22, 24, 3, 2, 1, 0, 23, 17, 1, 0, 0, 0, 23, 20, 1, 0, 0, 0, 24, 27, 1, 0, 0, 0, 25,
	23, 1, 0, 0, 0, 25, 26, 1, 0, 0, 0, 26, 1, 1, 0, 0, 0, 27, 25, 1, 0, 0, 0, 28, 29, 6, 1, -1, 0, 29, 30,
	3, 4, 2, 0, 30, 42, 1, 0, 0, 0, 31, 32, 10, 3, 0, 0, 32, 33, 5, 3, 0, 0, 33, 41, 3, 4, 2, 0, 34, 35, 10,
	2, 0, 0, 35, 36, 5, 4, 0, 0, 36, 41, 3, 4, 2, 0, 37, 38, 10, 1, 0, 0, 38, 39, 5, 5, 0, 0, 39, 41, 3, 4,
	2, 0, 40, 31, 1, 0, 0, 0, 40, 34, 1, 0, 0, 0, 40, 37, 1, 0, 0, 0, 41, 44, 1, 0, 0, 0, 42, 40, 1, 0, 0,
	0, 42, 43, 1, 0, 0, 0, 43, 3, 1, 0, 0, 0, 44, 42, 1, 0, 0, 0, 45, 46, 6, 2, -1, 0, 46, 52, 3, 6, 3, 0,
	47, 48, 3, 6, 3, 0, 48, 49, 5, 7, 0, 0, 49, 50, 3, 6, 3, 0, 50, 52, 1, 0, 0, 0, 51, 45, 1, 0, 0, 0, 51,
	47, 1, 0, 0, 0, 52, 58, 1, 0, 0, 0, 53, 54, 10, 2, 0, 0, 54, 55, 5, 6, 0, 0, 55, 57, 3, 6, 3, 0, 56, 53,
	1, 0, 0, 0, 57, 60, 1, 0, 0, 0, 58, 56, 1, 0, 0, 0, 58, 59, 1, 0, 0, 0, 59, 5, 1, 0, 0, 0, 60, 58, 1, 0,
	0, 0, 61, 69, 3, 10, 5, 0, 62, 69, 3, 12, 6, 0, 63, 69, 3, 8, 4, 0, 64, 65, 5, 8, 0, 0, 65, 66, 3, 0,
	0, 0, 66, 67, 5, 9, 0, 0, 67, 69, 1, 0, 0, 0, 68, 61, 1, 0, 0, 0, 68, 62, 1, 0, 0, 0, 68, 63, 1, 0, 0,
	0, 68, 64, 1, 0, 0, 0, 69, 7, 1, 0, 0, 0, 70, 71, 5, 12, 0, 0, 71, 72, 5, 8, 0, 0, 72, 73, 3, 0, 0, 0,
	73, 74, 5, 9, 0, 0, 74, 115, 1, 0, 0, 0, 75, 76, 5, 13, 0, 0, 76, 77, 5, 8, 0, 0, 77, 78, 3, 0, 0, 0,
	78, 79, 5, 9, 0, 0, 79, 115, 1, 0, 0, 0, 80, 81, 5, 14, 0, 0, 81, 82, 5, 8, 0, 0, 82, 83, 3, 0, 0, 0,
	83, 84, 5, 9, 0, 0, 84, 115, 1, 0, 0, 0, 85, 86, 5, 15, 0, 0, 86, 87, 5, 8, 0, 0, 87, 88, 3, 0, 0, 0,
	88, 89, 5, 9, 0, 0, 89, 115, 1, 0, 0, 0, 90, 91, 5, 16, 0, 0, 91, 92, 5, 10, 0, 0, 92, 93, 3, 0, 0, 0,
	93, 94, 5, 10, 0, 0, 94, 115, 1, 0, 0, 0, 95, 96, 5, 17, 0, 0, 96, 97, 5, 8, 0, 0, 97, 98, 3, 0, 0, 0,
	98, 99, 5, 9, 0, 0, 99, 115, 1, 0, 0, 0, 100, 101, 5, 18, 0, 0, 101, 102, 5, 8, 0, 0, 102, 103, 3,
	0, 0, 0, 103, 104, 5, 9, 0, 0, 104, 115, 1, 0, 0, 0, 105, 106, 5, 19, 0, 0, 106, 107, 5, 8, 0, 0, 107,
	110, 3, 0, 0, 0, 108, 109, 5, 11, 0, 0, 109, 111, 3, 0, 0, 0, 110, 108, 1, 0, 0, 0, 110, 111, 1, 0,
	0, 0, 111, 112, 1, 0, 0, 0, 112, 113, 5, 9, 0, 0, 113, 115, 1, 0, 0, 0, 114, 70, 1, 0, 0, 0, 114, 75,
	1, 0, 0, 0, 114, 80, 1, 0, 0, 0, 114, 85, 1, 0, 0, 0, 114, 90, 1, 0, 0, 0, 114, 95, 1, 0, 0, 0, 114,
	100, 1, 0, 0, 0, 114, 105, 1, 0, 0, 0, 115, 9, 1, 0, 0, 0, 116, 117, 7, 0, 0, 0, 117, 11, 1, 0, 0, 0,
	118, 119, 5, 25, 0, 0, 119, 13, 1, 0, 0, 0, 9, 23, 25, 40, 42, 51, 58, 68, 110, 114];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map((ds, index) => new antlr4.dfa.DFA(ds, index));

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MathExprParser extends antlr4.Parser {

	static grammarFileName = "MathExpr.g4";
	static literalNames = [null, "'+'", "'-'", "'*'", "'/'", "'%'", "'^'",
		"'**'", "'('", "')'", "'|'", "','", "'sin'",
		"'cos'", "'tan'", "'sqrt'", "'abs'", "'exp'",
		"'ln'", "'log'", null, null, "'pi'", "'e'",
		"'i'"];
	static symbolicNames = [null, "PLUS", "MINUS", "MUL", "DIV", "MOD",
		"EXP", "POW", "LPAREN", "RPAREN", "PIPE", "COMMA",
		"SIN", "COS", "TAN", "SQRT", "ABS", "EXPONENTIAL",
		"LN", "LOG", "INTEGER", "FLOAT", "PI", "EULER",
		"IMAGINARY_UNIT", "IDENTIFIER", "WS"];
	static ruleNames = ["expression", "term", "factor", "primary", "function_call",
		"number", "variable"];

	constructor(input) {
		super(input);
		this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
		this.ruleNames = MathExprParser.ruleNames;
		this.literalNames = MathExprParser.literalNames;
		this.symbolicNames = MathExprParser.symbolicNames;
	}

	sempred(localctx, ruleIndex, predIndex) {
		switch (ruleIndex) {
			case 0:
				return this.expression_sempred(localctx, predIndex);
			case 1:
				return this.term_sempred(localctx, predIndex);
			case 2:
				return this.factor_sempred(localctx, predIndex);
			default:
				throw "No predicate with index:" + ruleIndex;
		}
	}

	expression_sempred(localctx, predIndex) {
		switch (predIndex) {
			case 0:
				return this.precpred(this._ctx, 2);
			case 1:
				return this.precpred(this._ctx, 1);
			default:
				throw "No predicate with index:" + predIndex;
		}
	};

	term_sempred(localctx, predIndex) {
		switch (predIndex) {
			case 2:
				return this.precpred(this._ctx, 3);
			case 3:
				return this.precpred(this._ctx, 2);
			case 4:
				return this.precpred(this._ctx, 1);
			default:
				throw "No predicate with index:" + predIndex;
		}
	};

	factor_sempred(localctx, predIndex) {
		switch (predIndex) {
			case 5:
				return this.precpred(this._ctx, 2);
			default:
				throw "No predicate with index:" + predIndex;
		}
	};



	expression(_p) {
		if (_p === undefined) {
			_p = 0;
		}
		const _parentctx = this._ctx;
		const _parentState = this.state;
		let localctx = new ExpressionContext(this, this._ctx, _parentState);
		let _prevctx = localctx;
		const _startState = 0;
		this.enterRecursionRule(localctx, 0, MathExprParser.RULE_expression, _p);
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 15;
			this.term(0);
			this._ctx.stop = this._input.LT(-1);
			this.state = 25;
			this._errHandler.sync(this);
			var _alt = this._interp.adaptivePredict(this._input, 1, this._ctx)
			while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners !== null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					this.state = 23;
					this._errHandler.sync(this);
					var la_ = this._interp.adaptivePredict(this._input, 0, this._ctx);
					switch (la_) {
						case 1:
							localctx = new ExpressionContext(this, _parentctx, _parentState);
							this.pushNewRecursionContext(localctx, _startState, MathExprParser.RULE_expression);
							this.state = 17;
							if (!(this.precpred(this._ctx, 2))) {
								throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
							}
							this.state = 18;
							this.match(MathExprParser.PLUS);
							this.state = 19;
							this.term(0);
							break;

						case 2:
							localctx = new ExpressionContext(this, _parentctx, _parentState);
							this.pushNewRecursionContext(localctx, _startState, MathExprParser.RULE_expression);
							this.state = 20;
							if (!(this.precpred(this._ctx, 1))) {
								throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
							}
							this.state = 21;
							this.match(MathExprParser.MINUS);
							this.state = 22;
							this.term(0);
							break;

					}
				}
				this.state = 27;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 1, this._ctx);
			}

		} catch (error) {
			if (error instanceof antlr4.error.RecognitionException) {
				localctx.exception = error;
				this._errHandler.reportError(this, error);
				this._errHandler.recover(this, error);
			} else {
				throw error;
			}
		} finally {
			this.unrollRecursionContexts(_parentctx)
		}
		return localctx;
	}


	term(_p) {
		if (_p === undefined) {
			_p = 0;
		}
		const _parentctx = this._ctx;
		const _parentState = this.state;
		let localctx = new TermContext(this, this._ctx, _parentState);
		let _prevctx = localctx;
		const _startState = 2;
		this.enterRecursionRule(localctx, 2, MathExprParser.RULE_term, _p);
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 29;
			this.factor(0);
			this._ctx.stop = this._input.LT(-1);
			this.state = 42;
			this._errHandler.sync(this);
			var _alt = this._interp.adaptivePredict(this._input, 3, this._ctx)
			while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners !== null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					this.state = 40;
					this._errHandler.sync(this);
					var la_ = this._interp.adaptivePredict(this._input, 2, this._ctx);
					switch (la_) {
						case 1:
							localctx = new TermContext(this, _parentctx, _parentState);
							this.pushNewRecursionContext(localctx, _startState, MathExprParser.RULE_term);
							this.state = 31;
							if (!(this.precpred(this._ctx, 3))) {
								throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
							}
							this.state = 32;
							this.match(MathExprParser.MUL);
							this.state = 33;
							this.factor(0);
							break;

						case 2:
							localctx = new TermContext(this, _parentctx, _parentState);
							this.pushNewRecursionContext(localctx, _startState, MathExprParser.RULE_term);
							this.state = 34;
							if (!(this.precpred(this._ctx, 2))) {
								throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
							}
							this.state = 35;
							this.match(MathExprParser.DIV);
							this.state = 36;
							this.factor(0);
							break;

						case 3:
							localctx = new TermContext(this, _parentctx, _parentState);
							this.pushNewRecursionContext(localctx, _startState, MathExprParser.RULE_term);
							this.state = 37;
							if (!(this.precpred(this._ctx, 1))) {
								throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
							}
							this.state = 38;
							this.match(MathExprParser.MOD);
							this.state = 39;
							this.factor(0);
							break;

					}
				}
				this.state = 44;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
			}

		} catch (error) {
			if (error instanceof antlr4.error.RecognitionException) {
				localctx.exception = error;
				this._errHandler.reportError(this, error);
				this._errHandler.recover(this, error);
			} else {
				throw error;
			}
		} finally {
			this.unrollRecursionContexts(_parentctx)
		}
		return localctx;
	}


	factor(_p) {
		if (_p === undefined) {
			_p = 0;
		}
		const _parentctx = this._ctx;
		const _parentState = this.state;
		let localctx = new FactorContext(this, this._ctx, _parentState);
		let _prevctx = localctx;
		const _startState = 4;
		this.enterRecursionRule(localctx, 4, MathExprParser.RULE_factor, _p);
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 51;
			this._errHandler.sync(this);
			var la_ = this._interp.adaptivePredict(this._input, 4, this._ctx);
			switch (la_) {
				case 1:
					this.state = 46;
					this.primary();
					break;

				case 2:
					this.state = 47;
					this.primary();
					this.state = 48;
					this.match(MathExprParser.POW);
					this.state = 49;
					this.primary();
					break;

			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 58;
			this._errHandler.sync(this);
			var _alt = this._interp.adaptivePredict(this._input, 5, this._ctx)
			while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners !== null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					localctx = new FactorContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, MathExprParser.RULE_factor);
					this.state = 53;
					if (!(this.precpred(this._ctx, 2))) {
						throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
					}
					this.state = 54;
					this.match(MathExprParser.EXP);
					this.state = 55;
					this.primary();
				}
				this.state = 60;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
			}

		} catch (error) {
			if (error instanceof antlr4.error.RecognitionException) {
				localctx.exception = error;
				this._errHandler.reportError(this, error);
				this._errHandler.recover(this, error);
			} else {
				throw error;
			}
		} finally {
			this.unrollRecursionContexts(_parentctx)
		}
		return localctx;
	}



	primary() {
		let localctx = new PrimaryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, MathExprParser.RULE_primary);
		try {
			this.state = 68;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case 20:
				case 21:
				case 22:
				case 23:
				case 24:
					this.enterOuterAlt(localctx, 1);
					this.state = 61;
					this.number();
					break;
				case 25:
					this.enterOuterAlt(localctx, 2);
					this.state = 62;
					this.variable();
					break;
				case 12:
				case 13:
				case 14:
				case 15:
				case 16:
				case 17:
				case 18:
				case 19:
					this.enterOuterAlt(localctx, 3);
					this.state = 63;
					this.function_call();
					break;
				case 8:
					this.enterOuterAlt(localctx, 4);
					this.state = 64;
					this.match(MathExprParser.LPAREN);
					this.state = 65;
					this.expression(0);
					this.state = 66;
					this.match(MathExprParser.RPAREN);
					break;
				default:
					throw new antlr4.error.NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	function_call() {
		let localctx = new Function_callContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, MathExprParser.RULE_function_call);
		var _la = 0;
		try {
			this.state = 114;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case 12:
					this.enterOuterAlt(localctx, 1);
					this.state = 70;
					this.match(MathExprParser.SIN);
					this.state = 71;
					this.match(MathExprParser.LPAREN);
					this.state = 72;
					this.expression(0);
					this.state = 73;
					this.match(MathExprParser.RPAREN);
					break;
				case 13:
					this.enterOuterAlt(localctx, 2);
					this.state = 75;
					this.match(MathExprParser.COS);
					this.state = 76;
					this.match(MathExprParser.LPAREN);
					this.state = 77;
					this.expression(0);
					this.state = 78;
					this.match(MathExprParser.RPAREN);
					break;
				case 14:
					this.enterOuterAlt(localctx, 3);
					this.state = 80;
					this.match(MathExprParser.TAN);
					this.state = 81;
					this.match(MathExprParser.LPAREN);
					this.state = 82;
					this.expression(0);
					this.state = 83;
					this.match(MathExprParser.RPAREN);
					break;
				case 15:
					this.enterOuterAlt(localctx, 4);
					this.state = 85;
					this.match(MathExprParser.SQRT);
					this.state = 86;
					this.match(MathExprParser.LPAREN);
					this.state = 87;
					this.expression(0);
					this.state = 88;
					this.match(MathExprParser.RPAREN);
					break;
				case 16:
					this.enterOuterAlt(localctx, 5);
					this.state = 90;
					this.match(MathExprParser.ABS);
					this.state = 91;
					this.match(MathExprParser.PIPE);
					this.state = 92;
					this.expression(0);
					this.state = 93;
					this.match(MathExprParser.PIPE);
					break;
				case 17:
					this.enterOuterAlt(localctx, 6);
					this.state = 95;
					this.match(MathExprParser.EXPONENTIAL);
					this.state = 96;
					this.match(MathExprParser.LPAREN);
					this.state = 97;
					this.expression(0);
					this.state = 98;
					this.match(MathExprParser.RPAREN);
					break;
				case 18:
					this.enterOuterAlt(localctx, 7);
					this.state = 100;
					this.match(MathExprParser.LN);
					this.state = 101;
					this.match(MathExprParser.LPAREN);
					this.state = 102;
					this.expression(0);
					this.state = 103;
					this.match(MathExprParser.RPAREN);
					break;
				case 19:
					this.enterOuterAlt(localctx, 8);
					this.state = 105;
					this.match(MathExprParser.LOG);
					this.state = 106;
					this.match(MathExprParser.LPAREN);
					this.state = 107;
					this.expression(0);
					this.state = 110;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === 11) {
						this.state = 108;
						this.match(MathExprParser.COMMA);
						this.state = 109;
						this.expression(0);
					}

					this.state = 112;
					this.match(MathExprParser.RPAREN);
					break;
				default:
					throw new antlr4.error.NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	number() {
		let localctx = new NumberContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, MathExprParser.RULE_number);
		var _la = 0;
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 116;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1f) === 0 && ((1 << _la) & 32505856) !== 0))) {
				this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
				this.consume();
			}
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}



	variable() {
		let localctx = new VariableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, MathExprParser.RULE_variable);
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 118;
			this.match(MathExprParser.IDENTIFIER);
		} catch (re) {
			if (re instanceof antlr4.error.RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}


}

MathExprParser.EOF = antlr4.Token.EOF;
MathExprParser.PLUS = 1;
MathExprParser.MINUS = 2;
MathExprParser.MUL = 3;
MathExprParser.DIV = 4;
MathExprParser.MOD = 5;
MathExprParser.EXP = 6;
MathExprParser.POW = 7;
MathExprParser.LPAREN = 8;
MathExprParser.RPAREN = 9;
MathExprParser.PIPE = 10;
MathExprParser.COMMA = 11;
MathExprParser.SIN = 12;
MathExprParser.COS = 13;
MathExprParser.TAN = 14;
MathExprParser.SQRT = 15;
MathExprParser.ABS = 16;
MathExprParser.EXPONENTIAL = 17;
MathExprParser.LN = 18;
MathExprParser.LOG = 19;
MathExprParser.INTEGER = 20;
MathExprParser.FLOAT = 21;
MathExprParser.PI = 22;
MathExprParser.EULER = 23;
MathExprParser.IMAGINARY_UNIT = 24;
MathExprParser.IDENTIFIER = 25;
MathExprParser.WS = 26;

MathExprParser.RULE_expression = 0;
MathExprParser.RULE_term = 1;
MathExprParser.RULE_factor = 2;
MathExprParser.RULE_primary = 3;
MathExprParser.RULE_function_call = 4;
MathExprParser.RULE_number = 5;
MathExprParser.RULE_variable = 6;

class ExpressionContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = MathExprParser.RULE_expression;
	}

	term() {
		return this.getTypedRuleContext(TermContext, 0);
	};

	expression() {
		return this.getTypedRuleContext(ExpressionContext, 0);
	};

	PLUS() {
		return this.getToken(MathExprParser.PLUS, 0);
	};

	MINUS() {
		return this.getToken(MathExprParser.MINUS, 0);
	};

	enterRule(listener) {
		if (listener instanceof MathExprListener) {
			listener.enterExpression(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof MathExprListener) {
			listener.exitExpression(this);
		}
	}


}



class TermContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = MathExprParser.RULE_term;
	}

	factor() {
		return this.getTypedRuleContext(FactorContext, 0);
	};

	term() {
		return this.getTypedRuleContext(TermContext, 0);
	};

	MUL() {
		return this.getToken(MathExprParser.MUL, 0);
	};

	DIV() {
		return this.getToken(MathExprParser.DIV, 0);
	};

	MOD() {
		return this.getToken(MathExprParser.MOD, 0);
	};

	enterRule(listener) {
		if (listener instanceof MathExprListener) {
			listener.enterTerm(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof MathExprListener) {
			listener.exitTerm(this);
		}
	}


}



class FactorContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = MathExprParser.RULE_factor;
	}

	primary = function (i) {
		if (i === undefined) {
			i = null;
		}
		if (i === null) {
			return this.getTypedRuleContexts(PrimaryContext);
		} else {
			return this.getTypedRuleContext(PrimaryContext, i);
		}
	};

	POW() {
		return this.getToken(MathExprParser.POW, 0);
	};

	factor() {
		return this.getTypedRuleContext(FactorContext, 0);
	};

	EXP() {
		return this.getToken(MathExprParser.EXP, 0);
	};

	enterRule(listener) {
		if (listener instanceof MathExprListener) {
			listener.enterFactor(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof MathExprListener) {
			listener.exitFactor(this);
		}
	}


}



class PrimaryContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = MathExprParser.RULE_primary;
	}

	number() {
		return this.getTypedRuleContext(NumberContext, 0);
	};

	variable() {
		return this.getTypedRuleContext(VariableContext, 0);
	};

	function_call() {
		return this.getTypedRuleContext(Function_callContext, 0);
	};

	LPAREN() {
		return this.getToken(MathExprParser.LPAREN, 0);
	};

	expression() {
		return this.getTypedRuleContext(ExpressionContext, 0);
	};

	RPAREN() {
		return this.getToken(MathExprParser.RPAREN, 0);
	};

	enterRule(listener) {
		if (listener instanceof MathExprListener) {
			listener.enterPrimary(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof MathExprListener) {
			listener.exitPrimary(this);
		}
	}


}



class Function_callContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = MathExprParser.RULE_function_call;
	}

	SIN() {
		return this.getToken(MathExprParser.SIN, 0);
	};

	LPAREN() {
		return this.getToken(MathExprParser.LPAREN, 0);
	};

	expression = function (i) {
		if (i === undefined) {
			i = null;
		}
		if (i === null) {
			return this.getTypedRuleContexts(ExpressionContext);
		} else {
			return this.getTypedRuleContext(ExpressionContext, i);
		}
	};

	RPAREN() {
		return this.getToken(MathExprParser.RPAREN, 0);
	};

	COS() {
		return this.getToken(MathExprParser.COS, 0);
	};

	TAN() {
		return this.getToken(MathExprParser.TAN, 0);
	};

	SQRT() {
		return this.getToken(MathExprParser.SQRT, 0);
	};

	ABS() {
		return this.getToken(MathExprParser.ABS, 0);
	};

	PIPE = function (i) {
		if (i === undefined) {
			i = null;
		}
		if (i === null) {
			return this.getTokens(MathExprParser.PIPE);
		} else {
			return this.getToken(MathExprParser.PIPE, i);
		}
	};


	EXPONENTIAL() {
		return this.getToken(MathExprParser.EXPONENTIAL, 0);
	};

	LN() {
		return this.getToken(MathExprParser.LN, 0);
	};

	LOG() {
		return this.getToken(MathExprParser.LOG, 0);
	};

	COMMA() {
		return this.getToken(MathExprParser.COMMA, 0);
	};

	enterRule(listener) {
		if (listener instanceof MathExprListener) {
			listener.enterFunction_call(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof MathExprListener) {
			listener.exitFunction_call(this);
		}
	}


}



class NumberContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = MathExprParser.RULE_number;
	}

	INTEGER() {
		return this.getToken(MathExprParser.INTEGER, 0);
	};

	FLOAT() {
		return this.getToken(MathExprParser.FLOAT, 0);
	};

	PI() {
		return this.getToken(MathExprParser.PI, 0);
	};

	EULER() {
		return this.getToken(MathExprParser.EULER, 0);
	};

	IMAGINARY_UNIT() {
		return this.getToken(MathExprParser.IMAGINARY_UNIT, 0);
	};

	enterRule(listener) {
		if (listener instanceof MathExprListener) {
			listener.enterNumber(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof MathExprListener) {
			listener.exitNumber(this);
		}
	}


}



class VariableContext extends antlr4.ParserRuleContext {

	constructor(parser, parent, invokingState) {
		if (parent === undefined) {
			parent = null;
		}
		if (invokingState === undefined || invokingState === null) {
			invokingState = -1;
		}
		super(parent, invokingState);
		this.parser = parser;
		this.ruleIndex = MathExprParser.RULE_variable;
	}

	IDENTIFIER() {
		return this.getToken(MathExprParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
		if (listener instanceof MathExprListener) {
			listener.enterVariable(this);
		}
	}

	exitRule(listener) {
		if (listener instanceof MathExprListener) {
			listener.exitVariable(this);
		}
	}


}




MathExprParser.ExpressionContext = ExpressionContext;
MathExprParser.TermContext = TermContext;
MathExprParser.FactorContext = FactorContext;
MathExprParser.PrimaryContext = PrimaryContext;
MathExprParser.Function_callContext = Function_callContext;
MathExprParser.NumberContext = NumberContext;
MathExprParser.VariableContext = VariableContext; 
