var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Meetup = new keystone.List('Meetup');

Meetup.add({
	name: { type: String, required: true, initial: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	date: { type: Types.Date, required: true, initial: true, index: true },
	time: { type: String, required: true, initial: true, width: 'short', note: 'e.g. 6pm - 9pm' },
	place: { type: String, required: true, initial: true, width: 'medium', note: 'usually Level 6, 341 George St Atlassian' },
	description: { type: Types.Html, wysiwyg: true }
});

Meetup.relationship({ ref: 'Talk', refPath: 'meetup', path: 'talks' });

Meetup.addPattern('standard meta');
Meetup.defaultColumns = 'name, state|20%, date|20%';
Meetup.register();
