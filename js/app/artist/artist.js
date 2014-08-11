define(function(require) {
	'use strict';

	var artist = function(data) {
		this._id = data.id;
		this._name = data.name;
		this._albumId = data.albumId;
		this._album = null;
	};

	artist.prototype.getId = function() {
		return this._id;
	};

	artist.prototype.getName = function() {
		return this._name;
	};

	artist.prototype.getAlbumId = function() {
		return this._albumId;
	};

	artist.prototype.getAlbum = function(callback) {
		this.albumProvider(this, callback);
	};

	return artist;
});
