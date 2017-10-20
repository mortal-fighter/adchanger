'use strict';

function isb(d1, d2) {
	if (d1.getFullYear() > d2.getFullYear()) {
		return true;
	} else if (d1.getFullYear() < d2.getFullYear()) {
		return false;
	} else {
		if (d1.getMonth() > d2.getMonth()) {
			return true;
		} else if (d1.getMonth() < d2.getMonth()) {
			return false;
		} else {
			if (d1.getDate() > d2.getDate()) {
				return true;
			} else if (d1.getDate() < d2.getDate()) {
				return false;
			} else {
				if (d1.getHours() > d2.getHours()) {
					return true;
				} else if (d1.getHours() < d2.getHours()) {
					return false;
				} else {
					if (d1.getMinutes() > d2.getMinutes()) {
						return true;
					} else if (d1.getMinutes() < d2.getMinutes()) {
						return false;
					} else {
						if (d1.getSeconds() >= d2.getSeconds()) {
							return true;
						} else {
							return false;
						}
					}
				}
			}
		}
	}
}

class _Factory {
	constructor(options) {
		var now = new Date();
		var t0 = new Date();
		
		t0.setDate(t0.getDate() + 7);
		var defaultTime = new Date(t0.getTime());

		var opts = { d: defaultTime };
		
		$.extend(opts, options);

		this._d = opts.d;
		this._p = opts.p;
		this._i = null;
		
		console.log('now=', now, ', triggerTime=', this._d);
		if (isb(now, this._d)) {
			console.log('first isb true');
			this._process();
		} else {
			console.log('first isb false');
			var _this = this;
			this._i = setInterval(function() {
				var now = new Date();
				if (isb(now, _this._d)) {
					console.log('isb true');
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