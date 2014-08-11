define(function(require) {
	'use strict';

	var Album = require('../album/album');

	return {
		find: function(id, onSuccess) {
//			$.ajax('http://localhost:8080/album/' + id, {
//				type: 'GET',
//				headers: {
//					Authorization: 'Basic cmlja3k6Ym9iYnk='
//				},
//				success: function(res) {
//					if (onSuccess) {
//						onSuccess(new Album(res));
//					}
//				},
//				error: console.error
//			});
			onSuccess({
				id: 1,
				title: "Fight For Yout Mind",
				artistId: 1
			});

		}
	};

});