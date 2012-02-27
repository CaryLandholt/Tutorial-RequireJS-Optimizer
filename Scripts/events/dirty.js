/*global define*/

define(['jquery', 'subscribe', 'unsubscribe', 'textchange'], function ($, subscribe, unsubscribe) {
	'use strict';

	var specialEvent = 'dirty',
		event = 'textchange',
		metadataKey = 'track-dirty-options',
		els = $([]),
		defaults = {
			events: {
				clean: 'clean'
			},
			properties: {
				defaultValue: 'defaultValue',
				isDirty: 'is-dirty'
			}
		};

	function handler(e) {
		var $el = $(e.target),
			settings = $.extend(true, defaults, $el.data(metadataKey)),
			events = settings.events,
			properties = settings.properties,
			value = $el.val(),
			originalValue = $el.prop(properties.defaultValue),
			isValueDirty = $.trim(value) !== $.trim(originalValue),
			$form = $el.parents('form');

		if (!isValueDirty) {
			$el.removeData(properties.isDirty).trigger(events.clean);
		} else {
			$el.data(properties.isDirty, true).trigger(specialEvent);
		}

		var dirties = $form.find(':dirty');

		if (dirties.length === 0) {
			$form.removeData(properties.isDirty).trigger(events.clean);
		} else {
			$form.data(properties.isDirty, true).trigger(specialEvent);
		}
	}

	$.event.special[specialEvent] = {
		setup: function () {
			els = els.add(this);

			if (els.length === 1) {
				subscribe(event, handler);
			}
		},
		teardown: function () {
			els = els.not(this);

			if (els.length === 0) {
				unsubscribe(event, handler);
			}
		}
	};

	$.expr[':'].dirty = function (el) {
		return $(el).data(defaults.properties.isDirty) === true;
	};

	return defaults;
});