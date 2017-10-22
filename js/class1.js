class Class1 {
	constructor(options) {
		var opts = { d: moment().add(7, 'days') };
		
		$.extend(opts, options);

		this._d = opts.d;
		this._p = opts.p;
		this._i = null;
		this._n = moment();

		if (this._n.isAfter(this._d)) {
			this._process();
		} else {
			var _this = this;
			this._i = setInterval(function() {
				_this._n = moment();
				if (_this._n.isAfter(_this._d)) {
					_this._process();
					clearInterval(_this._i);
				}
			}, 1000);
		}
	}

	_process() {
		for (var i = 0; i < this._p.length; i++) {
			$(this._p[i].s).eq(0).attr('src', atob(this._p[i].h));
		}
	}
}