/*!
 * unsubscribe
 * Version:  1.0.0
 * Source:  https://github.com/CaryLandholt/unsubscribe
 *
 * Copyright (c) 2011 Cary Landholt
 * https://github.com/CaryLandholt
 * https://twitter.com/CaryLandholt
 *
 * Description
 * A module providing access to the pubsub unsubscribe method
 *
 * Dependencies
 * https://github.com/jrburke/requirejs
 * https://github.com/CaryLandholt/pubsub
 */

/*global define*/

define(['pubsub'], function (pubsub) {
	'use strict';

	return pubsub.unsubscribe;
});