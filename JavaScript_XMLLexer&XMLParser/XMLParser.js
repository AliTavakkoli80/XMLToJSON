// Generated from D:/College/Classes And Terms/1400-1/Compiler Construction/Project\XMLParser.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import XMLParserListener from './XMLParserListener.js';
import XMLParserVisitor from './XMLParserVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u0014b\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0003\u0002\u0005\u0002\u0014\n\u0002\u0003",
    "\u0002\u0007\u0002\u0017\n\u0002\f\u0002\u000e\u0002\u001a\u000b\u0002",
    "\u0003\u0002\u0003\u0002\u0007\u0002\u001e\n\u0002\f\u0002\u000e\u0002",
    "!\u000b\u0002\u0003\u0003\u0003\u0003\u0007\u0003%\n\u0003\f\u0003\u000e",
    "\u0003(\u000b\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0005\u0004",
    "-\n\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0005\u00044\n\u0004\u0003\u0004\u0005\u00047\n\u0004\u0007\u00049",
    "\n\u0004\f\u0004\u000e\u0004<\u000b\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0007\u0005A\n\u0005\f\u0005\u000e\u0005D\u000b\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0007\u0005P\n\u0005\f\u0005\u000e",
    "\u0005S\u000b\u0005\u0003\u0005\u0005\u0005V\n\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003",
    "\b\u0003\t\u0003\t\u0003\t\u0002\u0002\n\u0002\u0004\u0006\b\n\f\u000e",
    "\u0010\u0002\u0005\u0003\u0002\u0006\u0007\u0004\u0002\b\b\u000b\u000b",
    "\u0005\u0002\u0003\u0003\b\b\u0014\u0014\u0002g\u0002\u0013\u0003\u0002",
    "\u0002\u0002\u0004\"\u0003\u0002\u0002\u0002\u0006,\u0003\u0002\u0002",
    "\u0002\bU\u0003\u0002\u0002\u0002\nW\u0003\u0002\u0002\u0002\fY\u0003",
    "\u0002\u0002\u0002\u000e]\u0003\u0002\u0002\u0002\u0010_\u0003\u0002",
    "\u0002\u0002\u0012\u0014\u0005\u0004\u0003\u0002\u0013\u0012\u0003\u0002",
    "\u0002\u0002\u0013\u0014\u0003\u0002\u0002\u0002\u0014\u0018\u0003\u0002",
    "\u0002\u0002\u0015\u0017\u0005\u0010\t\u0002\u0016\u0015\u0003\u0002",
    "\u0002\u0002\u0017\u001a\u0003\u0002\u0002\u0002\u0018\u0016\u0003\u0002",
    "\u0002\u0002\u0018\u0019\u0003\u0002\u0002\u0002\u0019\u001b\u0003\u0002",
    "\u0002\u0002\u001a\u0018\u0003\u0002\u0002\u0002\u001b\u001f\u0005\b",
    "\u0005\u0002\u001c\u001e\u0005\u0010\t\u0002\u001d\u001c\u0003\u0002",
    "\u0002\u0002\u001e!\u0003\u0002\u0002\u0002\u001f\u001d\u0003\u0002",
    "\u0002\u0002\u001f \u0003\u0002\u0002\u0002 \u0003\u0003\u0002\u0002",
    "\u0002!\u001f\u0003\u0002\u0002\u0002\"&\u0007\n\u0002\u0002#%\u0005",
    "\f\u0007\u0002$#\u0003\u0002\u0002\u0002%(\u0003\u0002\u0002\u0002&",
    "$\u0003\u0002\u0002\u0002&\'\u0003\u0002\u0002\u0002\')\u0003\u0002",
    "\u0002\u0002(&\u0003\u0002\u0002\u0002)*\u0007\r\u0002\u0002*\u0005",
    "\u0003\u0002\u0002\u0002+-\u0005\u000e\b\u0002,+\u0003\u0002\u0002\u0002",
    ",-\u0003\u0002\u0002\u0002-:\u0003\u0002\u0002\u0002.4\u0005\b\u0005",
    "\u0002/4\u0005\n\u0006\u000204\u0007\u0004\u0002\u000214\u0007\u0014",
    "\u0002\u000224\u0007\u0003\u0002\u00023.\u0003\u0002\u0002\u00023/\u0003",
    "\u0002\u0002\u000230\u0003\u0002\u0002\u000231\u0003\u0002\u0002\u0002",
    "32\u0003\u0002\u0002\u000246\u0003\u0002\u0002\u000257\u0005\u000e\b",
    "\u000265\u0003\u0002\u0002\u000267\u0003\u0002\u0002\u000279\u0003\u0002",
    "\u0002\u000283\u0003\u0002\u0002\u00029<\u0003\u0002\u0002\u0002:8\u0003",
    "\u0002\u0002\u0002:;\u0003\u0002\u0002\u0002;\u0007\u0003\u0002\u0002",
    "\u0002<:\u0003\u0002\u0002\u0002=>\u0007\t\u0002\u0002>B\u0007\u0012",
    "\u0002\u0002?A\u0005\f\u0007\u0002@?\u0003\u0002\u0002\u0002AD\u0003",
    "\u0002\u0002\u0002B@\u0003\u0002\u0002\u0002BC\u0003\u0002\u0002\u0002",
    "CE\u0003\u0002\u0002\u0002DB\u0003\u0002\u0002\u0002EF\u0007\f\u0002",
    "\u0002FG\u0005\u0006\u0004\u0002GH\u0007\t\u0002\u0002HI\u0007\u000f",
    "\u0002\u0002IJ\u0007\u0012\u0002\u0002JK\u0007\f\u0002\u0002KV\u0003",
    "\u0002\u0002\u0002LM\u0007\t\u0002\u0002MQ\u0007\u0012\u0002\u0002N",
    "P\u0005\f\u0007\u0002ON\u0003\u0002\u0002\u0002PS\u0003\u0002\u0002",
    "\u0002QO\u0003\u0002\u0002\u0002QR\u0003\u0002\u0002\u0002RT\u0003\u0002",
    "\u0002\u0002SQ\u0003\u0002\u0002\u0002TV\u0007\u000e\u0002\u0002U=\u0003",
    "\u0002\u0002\u0002UL\u0003\u0002\u0002\u0002V\t\u0003\u0002\u0002\u0002",
    "WX\t\u0002\u0002\u0002X\u000b\u0003\u0002\u0002\u0002YZ\u0007\u0012",
    "\u0002\u0002Z[\u0007\u0010\u0002\u0002[\\\u0007\u0011\u0002\u0002\\",
    "\r\u0003\u0002\u0002\u0002]^\t\u0003\u0002\u0002^\u000f\u0003\u0002",
    "\u0002\u0002_`\t\u0004\u0002\u0002`\u0011\u0003\u0002\u0002\u0002\r",
    "\u0013\u0018\u001f&,36:BQU"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map((ds, index) => new antlr4.dfa.DFA(ds, index));

const sharedContextCache = new antlr4.PredictionContextCache();

export default class XMLParser extends antlr4.Parser {

    static grammarFileName = "XMLParser.g4";
    static literalNames = [null, null, null, null, null, null, null, "'<'",
        null, null, "'>'", null, "'/>'", "'/'", "'='"];
    static symbolicNames = [null, "COMMENT", "CDATA", "DTD", "EntityRef",
        "CharRef", "SEA_WS", "OPEN", "XMLDeclOpen",
        "TEXT", "CLOSE", "SPECIAL_CLOSE", "SLASH_CLOSE",
        "SLASH", "EQUALS", "STRING", "Name", "S", "PI"];
    static ruleNames = ["document", "prolog", "content", "element", "reference",
        "attribute", "chardata", "misc"];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = XMLParser.ruleNames;
        this.literalNames = XMLParser.literalNames;
        this.symbolicNames = XMLParser.symbolicNames;
    }

    get atn() {
        return atn;
    }


    document() {
        let localctx = new DocumentContext(this, this._ctx, this.state);
        this.enterRule(localctx, 0, XMLParser.RULE_document);
        var _la = 0; // Token type
        try {
            this.enterOuterAlt(localctx, 1);
            this.state = 17;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === XMLParser.XMLDeclOpen) {
                this.state = 16;
                this.prolog();
            }

            this.state = 22;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while ((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << XMLParser.COMMENT) | (1 << XMLParser.SEA_WS) | (1 << XMLParser.PI))) !== 0)) {
                this.state = 19;
                this.misc();
                this.state = 24;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 25;
            this.element();
            this.state = 29;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while ((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << XMLParser.COMMENT) | (1 << XMLParser.SEA_WS) | (1 << XMLParser.PI))) !== 0)) {
                this.state = 26;
                this.misc();
                this.state = 31;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
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


    prolog() {
        let localctx = new PrologContext(this, this._ctx, this.state);
        this.enterRule(localctx, 2, XMLParser.RULE_prolog);
        var _la = 0; // Token type
        try {
            this.enterOuterAlt(localctx, 1);
            this.state = 32;
            this.match(XMLParser.XMLDeclOpen);
            this.state = 36;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === XMLParser.Name) {
                this.state = 33;
                this.attribute();
                this.state = 38;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 39;
            this.match(XMLParser.SPECIAL_CLOSE);
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


    content() {
        let localctx = new ContentContext(this, this._ctx, this.state);
        this.enterRule(localctx, 4, XMLParser.RULE_content);
        var _la = 0; // Token type
        try {
            this.enterOuterAlt(localctx, 1);
            this.state = 42;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === XMLParser.SEA_WS || _la === XMLParser.TEXT) {
                this.state = 41;
                this.chardata();
            }

            this.state = 56;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input, 7, this._ctx)
            while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    this.state = 49;
                    this._errHandler.sync(this);
                    switch (this._input.LA(1)) {
                        case XMLParser.OPEN:
                            this.state = 44;
                            this.element();
                            break;
                        case XMLParser.EntityRef:
                        case XMLParser.CharRef:
                            this.state = 45;
                            this.reference();
                            break;
                        case XMLParser.CDATA:
                            this.state = 46;
                            this.match(XMLParser.CDATA);
                            break;
                        case XMLParser.PI:
                            this.state = 47;
                            this.match(XMLParser.PI);
                            break;
                        case XMLParser.COMMENT:
                            this.state = 48;
                            this.match(XMLParser.COMMENT);
                            break;
                        default:
                            throw new antlr4.error.NoViableAltException(this);
                    }
                    this.state = 52;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === XMLParser.SEA_WS || _la === XMLParser.TEXT) {
                        this.state = 51;
                        this.chardata();
                    }

                }
                this.state = 58;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
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


    element() {
        let localctx = new ElementContext(this, this._ctx, this.state);
        this.enterRule(localctx, 6, XMLParser.RULE_element);
        var _la = 0; // Token type
        try {
            this.state = 83;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input, 10, this._ctx);
            switch (la_) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    this.state = 59;
                    this.match(XMLParser.OPEN);
                    this.state = 60;
                    this.match(XMLParser.Name);
                    this.state = 64;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === XMLParser.Name) {
                        this.state = 61;
                        this.attribute();
                        this.state = 66;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 67;
                    this.match(XMLParser.CLOSE);
                    this.state = 68;
                    this.content();
                    this.state = 69;
                    this.match(XMLParser.OPEN);
                    this.state = 70;
                    this.match(XMLParser.SLASH);
                    this.state = 71;
                    this.match(XMLParser.Name);
                    this.state = 72;
                    this.match(XMLParser.CLOSE);
                    break;

                case 2:
                    this.enterOuterAlt(localctx, 2);
                    this.state = 74;
                    this.match(XMLParser.OPEN);
                    this.state = 75;
                    this.match(XMLParser.Name);
                    this.state = 79;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === XMLParser.Name) {
                        this.state = 76;
                        this.attribute();
                        this.state = 81;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 82;
                    this.match(XMLParser.SLASH_CLOSE);
                    break;

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


    reference() {
        let localctx = new ReferenceContext(this, this._ctx, this.state);
        this.enterRule(localctx, 8, XMLParser.RULE_reference);
        var _la = 0; // Token type
        try {
            this.enterOuterAlt(localctx, 1);
            this.state = 85;
            _la = this._input.LA(1);
            if (!(_la === XMLParser.EntityRef || _la === XMLParser.CharRef)) {
                this._errHandler.recoverInline(this);
            } else {
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


    attribute() {
        let localctx = new AttributeContext(this, this._ctx, this.state);
        this.enterRule(localctx, 10, XMLParser.RULE_attribute);
        try {
            this.enterOuterAlt(localctx, 1);
            this.state = 87;
            this.match(XMLParser.Name);
            this.state = 88;
            this.match(XMLParser.EQUALS);
            this.state = 89;
            this.match(XMLParser.STRING);
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


    chardata() {
        let localctx = new ChardataContext(this, this._ctx, this.state);
        this.enterRule(localctx, 12, XMLParser.RULE_chardata);
        var _la = 0; // Token type
        try {
            this.enterOuterAlt(localctx, 1);
            this.state = 91;
            _la = this._input.LA(1);
            if (!(_la === XMLParser.SEA_WS || _la === XMLParser.TEXT)) {
                this._errHandler.recoverInline(this);
            } else {
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


    misc() {
        let localctx = new MiscContext(this, this._ctx, this.state);
        this.enterRule(localctx, 14, XMLParser.RULE_misc);
        var _la = 0; // Token type
        try {
            this.enterOuterAlt(localctx, 1);
            this.state = 93;
            _la = this._input.LA(1);
            if (!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << XMLParser.COMMENT) | (1 << XMLParser.SEA_WS) | (1 << XMLParser.PI))) !== 0))) {
                this._errHandler.recoverInline(this);
            } else {
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


}

XMLParser.EOF = antlr4.Token.EOF;
XMLParser.COMMENT = 1;
XMLParser.CDATA = 2;
XMLParser.DTD = 3;
XMLParser.EntityRef = 4;
XMLParser.CharRef = 5;
XMLParser.SEA_WS = 6;
XMLParser.OPEN = 7;
XMLParser.XMLDeclOpen = 8;
XMLParser.TEXT = 9;
XMLParser.CLOSE = 10;
XMLParser.SPECIAL_CLOSE = 11;
XMLParser.SLASH_CLOSE = 12;
XMLParser.SLASH = 13;
XMLParser.EQUALS = 14;
XMLParser.STRING = 15;
XMLParser.Name = 16;
XMLParser.S = 17;
XMLParser.PI = 18;

XMLParser.RULE_document = 0;
XMLParser.RULE_prolog = 1;
XMLParser.RULE_content = 2;
XMLParser.RULE_element = 3;
XMLParser.RULE_reference = 4;
XMLParser.RULE_attribute = 5;
XMLParser.RULE_chardata = 6;
XMLParser.RULE_misc = 7;

class DocumentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if (parent === undefined) {
            parent = null;
        }
        if (invokingState === undefined || invokingState === null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XMLParser.RULE_document;
    }

    element() {
        return this.getTypedRuleContext(ElementContext, 0);
    };

    prolog() {
        return this.getTypedRuleContext(PrologContext, 0);
    };

    misc = function (i) {
        if (i === undefined) {
            i = null;
        }
        if (i === null) {
            return this.getTypedRuleContexts(MiscContext);
        } else {
            return this.getTypedRuleContext(MiscContext, i);
        }
    };

    enterRule(listener) {
        if (listener instanceof XMLParserListener) {
            listener.enterDocument(this);
        }
    }

    exitRule(listener) {
        if (listener instanceof XMLParserListener) {
            listener.exitDocument(this);
        }
    }

    accept(visitor) {
        if (visitor instanceof XMLParserVisitor) {
            return visitor.visitDocument(this);
        } else {
            return visitor.visitChildren(this);
        }
    }


}


class PrologContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if (parent === undefined) {
            parent = null;
        }
        if (invokingState === undefined || invokingState === null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XMLParser.RULE_prolog;
    }

    XMLDeclOpen() {
        return this.getToken(XMLParser.XMLDeclOpen, 0);
    };

    SPECIAL_CLOSE() {
        return this.getToken(XMLParser.SPECIAL_CLOSE, 0);
    };

    attribute = function (i) {
        if (i === undefined) {
            i = null;
        }
        if (i === null) {
            return this.getTypedRuleContexts(AttributeContext);
        } else {
            return this.getTypedRuleContext(AttributeContext, i);
        }
    };

    enterRule(listener) {
        if (listener instanceof XMLParserListener) {
            listener.enterProlog(this);
        }
    }

    exitRule(listener) {
        if (listener instanceof XMLParserListener) {
            listener.exitProlog(this);
        }
    }

    accept(visitor) {
        if (visitor instanceof XMLParserVisitor) {
            return visitor.visitProlog(this);
        } else {
            return visitor.visitChildren(this);
        }
    }


}


class ContentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if (parent === undefined) {
            parent = null;
        }
        if (invokingState === undefined || invokingState === null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XMLParser.RULE_content;
    }

    chardata = function (i) {
        if (i === undefined) {
            i = null;
        }
        if (i === null) {
            return this.getTypedRuleContexts(ChardataContext);
        } else {
            return this.getTypedRuleContext(ChardataContext, i);
        }
    };

    element = function (i) {
        if (i === undefined) {
            i = null;
        }
        if (i === null) {
            return this.getTypedRuleContexts(ElementContext);
        } else {
            return this.getTypedRuleContext(ElementContext, i);
        }
    };

    reference = function (i) {
        if (i === undefined) {
            i = null;
        }
        if (i === null) {
            return this.getTypedRuleContexts(ReferenceContext);
        } else {
            return this.getTypedRuleContext(ReferenceContext, i);
        }
    };

    CDATA = function (i) {
        if (i === undefined) {
            i = null;
        }
        if (i === null) {
            return this.getTokens(XMLParser.CDATA);
        } else {
            return this.getToken(XMLParser.CDATA, i);
        }
    };


    PI = function (i) {
        if (i === undefined) {
            i = null;
        }
        if (i === null) {
            return this.getTokens(XMLParser.PI);
        } else {
            return this.getToken(XMLParser.PI, i);
        }
    };


    COMMENT = function (i) {
        if (i === undefined) {
            i = null;
        }
        if (i === null) {
            return this.getTokens(XMLParser.COMMENT);
        } else {
            return this.getToken(XMLParser.COMMENT, i);
        }
    };


    enterRule(listener) {
        if (listener instanceof XMLParserListener) {
            listener.enterContent(this);
        }
    }

    exitRule(listener) {
        if (listener instanceof XMLParserListener) {
            listener.exitContent(this);
        }
    }

    accept(visitor) {
        if (visitor instanceof XMLParserVisitor) {
            return visitor.visitContent(this);
        } else {
            return visitor.visitChildren(this);
        }
    }


}


class ElementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if (parent === undefined) {
            parent = null;
        }
        if (invokingState === undefined || invokingState === null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XMLParser.RULE_element;
    }

    OPEN = function (i) {
        if (i === undefined) {
            i = null;
        }
        if (i === null) {
            return this.getTokens(XMLParser.OPEN);
        } else {
            return this.getToken(XMLParser.OPEN, i);
        }
    };


    Name = function (i) {
        if (i === undefined) {
            i = null;
        }
        if (i === null) {
            return this.getTokens(XMLParser.Name);
        } else {
            return this.getToken(XMLParser.Name, i);
        }
    };


    CLOSE = function (i) {
        if (i === undefined) {
            i = null;
        }
        if (i === null) {
            return this.getTokens(XMLParser.CLOSE);
        } else {
            return this.getToken(XMLParser.CLOSE, i);
        }
    };


    content() {
        return this.getTypedRuleContext(ContentContext, 0);
    };

    SLASH() {
        return this.getToken(XMLParser.SLASH, 0);
    };

    attribute = function (i) {
        if (i === undefined) {
            i = null;
        }
        if (i === null) {
            return this.getTypedRuleContexts(AttributeContext);
        } else {
            return this.getTypedRuleContext(AttributeContext, i);
        }
    };

    SLASH_CLOSE() {
        return this.getToken(XMLParser.SLASH_CLOSE, 0);
    };

    enterRule(listener) {
        if (listener instanceof XMLParserListener) {
            listener.enterElement(this);
        }
    }

    exitRule(listener) {
        if (listener instanceof XMLParserListener) {
            listener.exitElement(this);
        }
    }

    accept(visitor) {
        if (visitor instanceof XMLParserVisitor) {
            return visitor.visitElement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }


}


class ReferenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if (parent === undefined) {
            parent = null;
        }
        if (invokingState === undefined || invokingState === null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XMLParser.RULE_reference;
    }

    EntityRef() {
        return this.getToken(XMLParser.EntityRef, 0);
    };

    CharRef() {
        return this.getToken(XMLParser.CharRef, 0);
    };

    enterRule(listener) {
        if (listener instanceof XMLParserListener) {
            listener.enterReference(this);
        }
    }

    exitRule(listener) {
        if (listener instanceof XMLParserListener) {
            listener.exitReference(this);
        }
    }

    accept(visitor) {
        if (visitor instanceof XMLParserVisitor) {
            return visitor.visitReference(this);
        } else {
            return visitor.visitChildren(this);
        }
    }


}


class AttributeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if (parent === undefined) {
            parent = null;
        }
        if (invokingState === undefined || invokingState === null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XMLParser.RULE_attribute;
    }

    Name() {
        return this.getToken(XMLParser.Name, 0);
    };

    EQUALS() {
        return this.getToken(XMLParser.EQUALS, 0);
    };

    STRING() {
        return this.getToken(XMLParser.STRING, 0);
    };

    enterRule(listener) {
        if (listener instanceof XMLParserListener) {
            listener.enterAttribute(this);
        }
    }

    exitRule(listener) {
        if (listener instanceof XMLParserListener) {
            listener.exitAttribute(this);
        }
    }

    accept(visitor) {
        if (visitor instanceof XMLParserVisitor) {
            return visitor.visitAttribute(this);
        } else {
            return visitor.visitChildren(this);
        }
    }


}


class ChardataContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if (parent === undefined) {
            parent = null;
        }
        if (invokingState === undefined || invokingState === null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XMLParser.RULE_chardata;
    }

    TEXT() {
        return this.getToken(XMLParser.TEXT, 0);
    };

    SEA_WS() {
        return this.getToken(XMLParser.SEA_WS, 0);
    };

    enterRule(listener) {
        if (listener instanceof XMLParserListener) {
            listener.enterChardata(this);
        }
    }

    exitRule(listener) {
        if (listener instanceof XMLParserListener) {
            listener.exitChardata(this);
        }
    }

    accept(visitor) {
        if (visitor instanceof XMLParserVisitor) {
            return visitor.visitChardata(this);
        } else {
            return visitor.visitChildren(this);
        }
    }


}


class MiscContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if (parent === undefined) {
            parent = null;
        }
        if (invokingState === undefined || invokingState === null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XMLParser.RULE_misc;
    }

    COMMENT() {
        return this.getToken(XMLParser.COMMENT, 0);
    };

    PI() {
        return this.getToken(XMLParser.PI, 0);
    };

    SEA_WS() {
        return this.getToken(XMLParser.SEA_WS, 0);
    };

    enterRule(listener) {
        if (listener instanceof XMLParserListener) {
            listener.enterMisc(this);
        }
    }

    exitRule(listener) {
        if (listener instanceof XMLParserListener) {
            listener.exitMisc(this);
        }
    }

    accept(visitor) {
        if (visitor instanceof XMLParserVisitor) {
            return visitor.visitMisc(this);
        } else {
            return visitor.visitChildren(this);
        }
    }


}


XMLParser.DocumentContext = DocumentContext;
XMLParser.PrologContext = PrologContext;
XMLParser.ContentContext = ContentContext;
XMLParser.ElementContext = ElementContext;
XMLParser.ReferenceContext = ReferenceContext;
XMLParser.AttributeContext = AttributeContext;
XMLParser.ChardataContext = ChardataContext;
XMLParser.MiscContext = MiscContext; 
