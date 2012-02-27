/*!
 * document
 * Version:  1.0.0
 * Source:  https://github.com/CaryLandholt/document
 *
 * Copyright (c) 2011 Cary Landholt
 * https://github.com/CaryLandholt
 * https://twitter.com/CaryLandholt
 *
 * Description
 * A module providing access to the window.document object
 *
 * Dependencies
 * https://github.com/jrburke/requirejs
 * https://github.com/CaryLandholt/window
 */

/*global define*/

define(['window'], function (window) {
	'use strict';

	return window.document;
});