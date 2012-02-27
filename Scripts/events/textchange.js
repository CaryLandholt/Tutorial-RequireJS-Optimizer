/*global define*/

define(['jquery', 'window', 'subscribe', 'unsubscribe'], function ($, window, subscribe, unsubscribe) {
	'use strict';

	// special event name
	var specialEvent = 'textchange',

		// data- attribute used for per-element settings
		metadataKey = 'textchange-options',

		// elements to track
		els = $([]),

		// default options
		defaults = {
			// properties
			properties: {
				defaultValue: 'defaultValue',
				lastValue: 'textchange-last-value'
			}
		};

	function handler(e) {
		// target element
		var $el = $(e.target),

			// merged default settings and metadata (metadata takes precedence)
			settings = $.extend(true, defaults, $el.data(metadataKey)),

			// properties from settings (shortcut)
			properties = settings.properties,

			// target value
			value = $el.val(),

			// trimmed value
			trimmedValue = $.trim(value),

			// last target value or defaultValue
			lastValue = $el.data(properties.lastValue) || $el.prop(properties.defaultValue),

			// has the target value changed compared with the last target value
			hasValueChanged = trimmedValue !== $.trim(lastValue);

		$el.data(properties.lastValue, value);

		if (hasValueChanged) {
			$el.trigger(specialEvent);
		}
	}

	$.event.special[specialEvent] = {
		setup: function () {
			els = els.add(this);

			if (els.length === 1) {
				subscribe('keyup.textchange', handler);
				subscribe('cut.textchange paste.textchange input.textchange', function () {
					window.setTimeout(function () {
						handler(this);
					}, 25);
				});
			}
		},
		teardown: function () {
			els = els.not(this);

			if (els.length === 0) {
				unsubscribe('.textchange');
			}
		}
	};

	return defaults;
});