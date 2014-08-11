define(function(require) {
	'use strict';

	var album = function(data) {
		this._id = data.id;
		this._artistId = data.artistId;
		this._title = data.title;
	};

	album.prototype.getId = function() {
		return this._id;
	};

	album.prototype.getArtistId = function() {
		return this._artistId;
	};

	album.prototype.getTitle = function() {
		return this._title;
	};

	return album;
});
