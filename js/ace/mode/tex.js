/*
 *  _       _                     _   
 * | |     | |                   | |  
 * | | __ _| |__   ___ ___   __ _| |_               Labcoat (R)
 * | |/ _` | '_ \ / __/ _ \ / _` | __|              Powerful development environment for Quirrel.
 * | | (_| | |_) | (_| (_) | (_| | |_               Copyright (C) 2010 - 2013 SlamData, Inc.
 * |_|\__,_|_.__/ \___\___/ \__,_|\__|              All Rights Reserved.
 *
 *
 * This program is free software: you can redistribute it and/or modify it under the terms of the 
 * GNU Affero General Public License as published by the Free Software Foundation, either version 
 * 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; 
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See 
 * the GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License along with this 
 * program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
/*
 * tex.js
 *
 * Copyright (C) 2009-11 by RStudio, Inc.
 *
 * The Initial Developer of the Original Code is
 * Ajax.org B.V.
 * Portions created by the Initial Developer are Copyright (C) 2010
 * the Initial Developer. All Rights Reserved.
 *
 * This program is licensed to you under the terms of version 3 of the
 * GNU Affero General Public License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * AGPL (http://www.gnu.org/licenses/agpl-3.0.txt) for more details.
 *
 */
define(function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
var TextMode = require("./text").Mode;
var Tokenizer = require("../tokenizer").Tokenizer;
var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
var TexHighlightRules = require("./tex_highlight_rules").TexHighlightRules;
var MatchingBraceOutdent = require("./matching_brace_outdent").MatchingBraceOutdent;

var Mode = function(suppressHighlighting) {
	if (suppressHighlighting)
    	this.$tokenizer = new Tokenizer(new TextHighlightRules().getRules());
	else
    	this.$tokenizer = new Tokenizer(new TexHighlightRules().getRules());
    this.$outdent = new MatchingBraceOutdent();
};
oop.inherits(Mode, TextMode);

(function() {
   this.getNextLineIndent = function(state, line, tab) {
      return this.$getIndent(line);
   };

   this.allowAutoInsert = function() {
      return false;
   };
}).call(Mode.prototype);

exports.Mode = Mode;
});
