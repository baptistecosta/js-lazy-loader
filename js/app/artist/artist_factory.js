(function() {
	'use strict';

	define(function(require) {
		var Artist = require('artist/artist'),
			artistMapper = require('../artist/artist_mapper'),
			albumMapper = require('../album/album_mapper');

		return {
			newInstance: function(artistId, onArtistLoadSuccess) {
				artistMapper.find(artistId, function(data) {
					var artist = new Artist(data);

					artist['albumProvider'] = function(artist, onAlbumLoadSuccess) {
						if (artist._album) {
							onAlbumLoadSuccess(artist._album)
						} else {
							albumMapper
								.find(artist.albumId, function(album) {
									artist._album = album;
									onAlbumLoadSuccess(album);
								}.bind(this));
						}
					};

					onArtistLoadSuccess(artist);
				});
			}
		};
	});

})();