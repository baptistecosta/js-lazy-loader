require(['artist/artist_factory', 'artist/artist_mapper', 'artist/artist'], function(ArtistFactory, ArtistMapper, Artist) {

	ArtistFactory
		.newInstance(1, function(artist) {
			console.log(artist);

			artist.getAlbum(function() {
				console.log(artist);

				artist.getAlbum(function() {
					console.log(artist);
				})
			});
		});

});