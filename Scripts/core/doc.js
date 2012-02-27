/*!
 * doc
 * Version:  1.0.0
 * Source:  https://github.com/CaryLandholt/doc
 *
 * Copyright (c) 2011 Cary Landholt
 * https://github.com/CaryLandholt
 * https://twitter.com/CaryLandholt
 *
 * Description
 * A module providing access to the jQuery wrapped window.document
 *
 * Dependencies
 * https://github.com/CaryLandholt/document
 * https://github.com/jquery/jquery
 * https://github.com/jrburke/requirejs
 */

/*global define*/

define(['jquery', 'document'], function ($, document) {
	'use strict';

	return $(document);
});