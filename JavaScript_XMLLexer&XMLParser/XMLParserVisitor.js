// Generated from D:/College/Classes And Terms/1400-1/Compiler Construction/Project\XMLParser.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by XMLParser.

export default class XMLParserVisitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by XMLParser#document.
	visitDocument(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by XMLParser#prolog.
	visitProlog(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by XMLParser#content.
	visitContent(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by XMLParser#element.
	visitElement(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by XMLParser#reference.
	visitReference(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by XMLParser#attribute.
	visitAttribute(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by XMLParser#chardata.
	visitChardata(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by XMLParser#misc.
	visitMisc(ctx) {
	  return this.visitChildren(ctx);
	}



}