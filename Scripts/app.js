/*global define*/

define(['jquery', 'window', 'subscribe', 'dirty'], function ($, window, subscribe) {
	'use strict';

	subscribe('dirty', 'input[data-track-dirty]', function (e) {
		$(e.target).addClass('dirty');
	});

	subscribe('clean', 'input[data-track-dirty]', function (e) {
		$(e.target).removeClass('dirty');
	});
});