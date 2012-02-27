/*global require*/

require.config({
	paths: {
		//core
		'doc': 'core/doc',
		'document': 'core/document',
		'publish': 'core/publish',
		'pubsub': 'core/pubsub',
		'subscribe': 'core/subscribe',
		'unsubscribe': 'core/unsubscribe',
		'window': 'core/window',

		// events
		'dirty': 'events/dirty',
		'textchange': 'events/textchange',

		// libs
		'jquery': 'libs/jquery'
	}
});

require(['app']);