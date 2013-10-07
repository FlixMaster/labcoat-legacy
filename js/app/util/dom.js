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
define([

],

function() {
    return {
        selectText : function(element, start, end) {
            start = start || 0;
            end   = end || $(element).text().length;
            if(element.setSelectionRange) {
                element.focus();
                element.setSelectionRange(start, end);
            } else if(element.createTextRange) {
                var range = element.createTextRange();
                range.collapse(true);
                range.moveEnd('character', end);
                range.moveStart('character', start);
                range.select();
            }
        },
        canSelect : function(element) {
            return !!(element.setSelectionRange || element.createTextRange);
        }
    }
});