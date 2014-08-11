define(function(require) {
	'use strict';

	var Artist = require('../artist/artist');

	return {
		find: function(id, onSuccess) {
//			return $.ajax('http://localhost:8080/artist/' + id, {
//				type: 'GET',
//				headers: {
//					Authorization: 'Basic cmlja3k6Ym9iYnk='
//				},
//				success: function(res) {
//					var artist = new Artist(res);
//					if (onSuccess) {
//						onSuccess(artist);
//					}
//				},
//				error: console.error
//			});
			onSuccess({
				id: 1,
				name: "Ben Harper",
				albumId: 1
			});
		}
	};

});