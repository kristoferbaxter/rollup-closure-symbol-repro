'use strict';var a=a||{};a.scope={};a.ASSUME_ES5=!1;a.ASSUME_NO_NATIVE_MAP=!1;a.ASSUME_NO_NATIVE_SET=!1;a.defineProperty=a.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(b,c,d){b!=Array.prototype&&b!=Object.prototype&&(b[c]=d.value)};a.getGlobal=function(b){return"undefined"!=typeof window&&window===b?b:"undefined"!=typeof global&&null!=global?global:b};a.global=a.getGlobal(this);a.SYMBOL_PREFIX="jscomp_symbol_";
a.initSymbol=function(){a.initSymbol=function(){};a.global.Symbol||(a.global.Symbol=a.Symbol)};a.Symbol=function(){var b=0;return function(c){return a.SYMBOL_PREFIX+(c||"")+b++}}();a.initSymbolIterator=function(){a.initSymbol();var b=a.global.Symbol.iterator;b||(b=a.global.Symbol.iterator=a.global.Symbol("iterator"));"function"!=typeof Array.prototype[b]&&a.defineProperty(Array.prototype,b,{configurable:!0,writable:!0,value:function(){return a.arrayIterator(this)}});a.initSymbolIterator=function(){}};
a.initSymbolAsyncIterator=function(){a.initSymbol();var b=a.global.Symbol.asyncIterator;b||(b=a.global.Symbol.asyncIterator=a.global.Symbol("asyncIterator"));a.initSymbolAsyncIterator=function(){}};a.arrayIterator=function(b){var c=0;return a.iteratorPrototype(function(){return c<b.length?{done:!1,value:b[c++]}:{done:!0}})};a.iteratorPrototype=function(b){a.initSymbolIterator();b={next:b};b[a.global.Symbol.iterator]=function(){return this};return b};Object.defineProperty(exports,"__esModule",{value:!0});
a.initSymbol();var e=Symbol.for("smth");exports.isSmth=function(b){return b&&b[e]};