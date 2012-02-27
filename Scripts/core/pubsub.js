/*!
 * pubsub
 * Version:  1.2.2
 * Source:  https://github.com/CaryLandholt/pubsub
 *
 * Copyright (c) 2012 Cary Landholt
 * https://github.com/CaryLandholt
 * https://twitter.com/CaryLandholt
 *
 * Description
 * A simple pub/sub implementation
 *
 * Dependencies
 * https://github.com/CaryLandholt/doc
 * https://github.com/jquery/jquery
 * https://github.com/jrburke/requirejs
 */

/*global define*/

define(['jquery', 'doc'], function ($, $doc) {
	'use strict';

	var $o = $({}),
		subscribe = function () {
			$doc.on.apply($doc, arguments);
			$o.on.apply($o, arguments);
		},
		unsubscribe = function () {
			$doc.off.apply($doc, arguments);
			$o.off.apply($o, arguments);
		},
		publish = function () {
			$o.trigger.apply($o, arguments);
		};

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe,
		publish: publish
	};
});