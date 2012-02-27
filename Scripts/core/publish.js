/*!
 * publish
 * Version:  1.0.0
 * Source:  https://github.com/CaryLandholt/publish
 *
 * Copyright (c) 2011 Cary Landholt
 * https://github.com/CaryLandholt
 * https://twitter.com/CaryLandholt
 *
 * Description
 * A module providing access to the pubsub publish method
 *
 * Dependencies
 * https://github.com/CaryLandholt/pubsub
 * https://github.com/jrburke/requirejs
 */

/*global define*/

define(['pubsub'], function (pubsub) {
	'use strict';

	return pubsub.publish;
});