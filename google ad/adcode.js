(function() {
	var p = this,
		aa = function(a) {
			var b = typeof a;
			return "object" == b && null != a || "function" == b
		}, ba = function(a, b, c) {
			return a.call.apply(a.bind, arguments)
		}, ca = function(a, b, c) {
			if (!a) throw Error();
			if (2 < arguments.length) {
				var d = Array.prototype.slice.call(arguments, 2);
				return function() {
					var c = Array.prototype.slice.call(arguments);
					Array.prototype.unshift.apply(c, d);
					return a.apply(b, c)
				}
			}
			return function() {
				return a.apply(b, arguments)
			}
		}, q = function(a, b, c) {
			q = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ba : ca;
			return q.apply(null, arguments)
		}, t = function(a, b) {
			var c = Array.prototype.slice.call(arguments, 1);
			return function() {
				var b = c.slice();
				b.push.apply(b, arguments);
				return a.apply(this, b)
			}
		}, da = Date.now || function() {
			return +new Date
		}, ea = function(a, b) {
			function c() {}
			c.prototype = b.prototype;
			a.Ka = b.prototype;
			a.prototype = new c;
			a.Ja = function(a, c, g) {
				for (var f = Array(arguments.length - 2), h = 2; h < arguments.length; h++) f[h - 2] = arguments[h];
				return b.prototype[c].apply(a, f)
			}
		};
	var fa = (new Date).getTime();
	var ga = String.prototype.trim ? function(a) {
			return a.trim()
		} : function(a) {
			return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
		}, ha = /&/g,
		ia = /</g,
		ja = />/g,
		la = /"/g,
		ma = /'/g,
		na = /\x00/g,
		oa = {
			"\x00": "\\0",
			"\b": "\\b",
			"\f": "\\f",
			"\n": "\\n",
			"\r": "\\r",
			"\t": "\\t",
			"\x0B": "\\x0B",
			'"': '\\"',
			"\\": "\\\\",
			"<": "<"
		}, pa = {
			"'": "\\'"
		}, qa = function(a, b) {
			return a < b ? -1 : a > b ? 1 : 0
		};
	var ra = function(a, b) {
		this.start = a < b ? a : b;
		this.end = a < b ? b : a
	};
	var sa = function(a, b) {
		this.width = a;
		this.height = b
	};
	sa.prototype.floor = function() {
		this.width = Math.floor(this.width);
		this.height = Math.floor(this.height);
		return this
	};
	sa.prototype.round = function() {
		this.width = Math.round(this.width);
		this.height = Math.round(this.height);
		return this
	};
	var ta = function(a) {
		ta[" "](a);
		return a
	};
	ta[" "] = function() {};
	var ua = function(a, b, c, d) {
		a.addEventListener ? a.addEventListener(b, c, d || !1) : a.attachEvent && a.attachEvent("on" + b, c)
	};
	var va = function(a) {
		try {
			var b;
			if (b = !! a && null != a.location.href) a: {
				try {
					ta(a.foo);
					b = !0;
					break a
				} catch (c) {}
				b = !1
			}
			return b
		} catch (c) {
			return !1
		}
	}, wa = function() {
		var a = window;
		return va(a.top) ? a.top : null
	}, xa = function(a, b) {
		return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
	}, v = function(a, b) {
		if (!(1E-4 > Math.random())) {
			var c = Math.random();
			if (c < b) return c = ya(window), a[Math.floor(c * a.length)]
		}
		return null
	}, ya = function(a) {
		try {
			var b = new Uint32Array(1);
			a.crypto.getRandomValues(b);
			return b[0] / 65536 / 65536
		} catch (c) {
			return Math.random()
		}
	},
	za = function(a, b) {
		for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
	}, Aa = /^([0-9.]+)px$/,
		Ba = /^(-?[0-9.]{1,30})$/,
		Ca = function(a) {
			return Ba.test(a) && (a = Number(a), !isNaN(a)) ? a : null
		}, Da = function(a) {
			return (a = Aa.exec(a)) ? +a[1] : null
		};
	var Ea = function(a) {
		var b;
		try {
			b = parseInt(a.localStorage.getItem("google_experiment_mod"), 10)
		} catch (c) {
			return null
		}
		if (0 <= b && 1E3 > b) return b;
		b = Math.floor(1E3 * ya(a));
		try {
			return a.localStorage.setItem("google_experiment_mod", "" + b), b
		} catch (c) {
			return null
		}
	};
	var Ha = function(a, b, c, d, e, g) {
		try {
			if ((d ? a.ca : Math.random()) < (e || a.U)) {
				var f = a.T + b + Fa(c),
					f = f.substring(0, 2E3);
				"undefined" === typeof g ? Ga(f) : Ga(f, g)
			}
		} catch (h) {}
	}, Fa = function(a) {
		var b = "";
		za(a, function(a, d) {
			if (0 === a || a) b += "&" + d + "=" + encodeURIComponent(String(a))
		});
		return b
	}, Ga = function(a, b) {
		p.google_image_requests || (p.google_image_requests = []);
		var c = p.document.createElement("img");
		if (b) {
			var d = function(a) {
				b(a);
				a = d;
				c.removeEventListener ? c.removeEventListener("load", a, !1) : c.detachEvent && c.detachEvent("onload",
				a);
				a = d;
				c.removeEventListener ? c.removeEventListener("error", a, !1) : c.detachEvent && c.detachEvent("onerror", a)
			};
			ua(c, "load", d);
			ua(c, "error", d)
		}
		c.src = a;
		p.google_image_requests.push(c)
	};
	var Ia = function(a, b, c) {
		this.$ = a;
		this.W = b;
		this.P = c;
		this.J = null;
		this.V = this.u;
		this.ia = !1
	}, Ja = function(a, b, c) {
		this.message = a;
		this.fileName = b || "";
		this.lineNumber = c || -1
	}, La = function(a, b, c, d, e, g) {
		var f;
		try {
			f = c()
		} catch (k) {
			var h = a.P;
			try {
				var l = Ka(k),
					h = (g || a.V).call(a, b, l, void 0, d)
			} catch (m) {
				a.u("pAR", m)
			}
			if (!h) throw k;
		} finally {
			if (e) try {
				e()
			} catch (k) {}
		}
		return f
	}, y = function(a, b, c) {
		var d = w;
		return function() {
			var e = arguments;
			return La(d, a, function() {
				return b.apply(void 0, e)
			}, void 0, c)
		}
	};
	Ia.prototype.u = function(a, b, c, d, e) {
		var g = {};
		g.context = a;
		b instanceof Ja || (b = Ka(b));
		g.msg = b.message.substring(0, 512);
		b.fileName && (g.file = b.fileName);
		0 < b.lineNumber && (g.line = b.lineNumber.toString());
		a = p.document;
		g.url = a.URL.substring(0, 512);
		g.ref = a.referrer.substring(0, 512);
		Ma(this, g, d);
		Ha(this.$, e || this.W, g, this.ia, c);
		return this.P
	};
	var Ma = function(a, b, c) {
		if (a.J) try {
			a.J(b)
		} catch (d) {}
		if (c) try {
			c(b)
		} catch (d) {}
	}, Ka = function(a) {
		var b = a.toString();
		a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
		a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
		if (a.stack) {
			var c = a.stack,
				d = b;
			try {
				-1 == c.indexOf(d) && (c = d + "\n" + c);
				for (var e; c != e;) e = c, c = c.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
				b = c.replace(/\n */g, "\n")
			} catch (g) {
				b = d
			}
		}
		return new Ja(b, a.fileName, a.lineNumber)
	};
	var A;
	a: {
		var Na = p.navigator;
		if (Na) {
			var Oa = Na.userAgent;
			if (Oa) {
				A = Oa;
				break a
			}
		}
		A = ""
	}
	var C = function(a) {
		return -1 != A.indexOf(a)
	};
	var Pa = C("Opera") || C("OPR"),
		D = C("Trident") || C("MSIE"),
		Qa = C("Edge"),
		Ra = C("Gecko") && !(-1 != A.toLowerCase().indexOf("webkit") && !C("Edge")) && !(C("Trident") || C("MSIE")) && !C("Edge"),
		Sa = -1 != A.toLowerCase().indexOf("webkit") && !C("Edge"),
		Ta = function() {
			var a = A;
			if (Ra) return /rv\:([^\);]+)(\)|;)/.exec(a);
			if (Qa) return /Edge\/([\d\.]+)/.exec(a);
			if (D) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
			if (Sa) return /WebKit\/(\S+)/.exec(a)
		}, Ua = function() {
			var a = p.document;
			return a ? a.documentMode : void 0
		}, Va = function() {
			if (Pa && p.opera) {
				var a;
				var b = p.opera.version;
				try {
					a = b()
				} catch (c) {
					a = b
				}
				return a
			}
			a = "";
			(b = Ta()) && (a = b ? b[1] : "");
			return D && (b = Ua(), b > parseFloat(a)) ? String(b) : a
		}(),
		Wa = {}, Xa = function(a) {
			if (!Wa[a]) {
				for (var b = 0, c = ga(String(Va)).split("."), d = ga(String(a)).split("."), e = Math.max(c.length, d.length), g = 0; 0 == b && g < e; g++) {
					var f = c[g] || "",
						h = d[g] || "",
						l = RegExp("(\\d*)(\\D*)", "g"),
						k = RegExp("(\\d*)(\\D*)", "g");
					do {
						var m = l.exec(f) || ["", "", ""],
							n = k.exec(h) || ["", "", ""];
						if (0 == m[0].length && 0 == n[0].length) break;
						b = qa(0 == m[1].length ? 0 : parseInt(m[1],
						10), 0 == n[1].length ? 0 : parseInt(n[1], 10)) || qa(0 == m[2].length, 0 == n[2].length) || qa(m[2], n[2])
					} while (0 == b)
				}
				Wa[a] = 0 <= b
			}
		}, Ya = p.document,
		Za = Ya && D ? Ua() || ("CSS1Compat" == Ya.compatMode ? parseInt(Va, 10) : 5) : void 0;
	var $a;
	if (!($a = !Ra && !D)) {
		var ab;
		if (ab = D) ab = 9 <= Za;
		$a = ab
	}
	$a || Ra && Xa("1.9.1");
	D && Xa("9");
	var bb = document,
		F = window;
	var cb = function(a, b) {
		for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(null, a[c], c, a)
	}, G = function(a) {
		return !!a && "function" == typeof a && !! a.call
	}, db = function(a, b) {
		if (!(2 > arguments.length)) for (var c = 1, d = arguments.length; c < d; ++c) a.push(arguments[c])
	}, I = function(a, b) {
		if (a.indexOf) {
			var c = a.indexOf(b);
			return 0 < c || 0 === c
		}
		for (c = 0; c < a.length; c++) if (a[c] === b) return !0;
		return !1
	}, eb = function(a, b, c) {
		ua(a, b, c, void 0)
	}, fb = function(a) {
		a.google_unique_id ? ++a.google_unique_id : a.google_unique_id = 1
	}, gb = function(a) {
		a = a.google_unique_id;
		return "number" == typeof a ? a : 0
	}, hb = function(a) {
		var b = a.length;
		if (0 == b) return 0;
		for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
		return 0 < c ? c : 4294967296 + c
	}, ib = !! window.google_async_iframe_id,
		jb = /(^| )adsbygoogle($| )/;
	var kb, w;
	kb = new function() {
		this.T = "http" + ("http:" == F.location.protocol ? "" : "s") + "://pagead2.googlesyndication.com/pagead/gen_204?id=";
		this.U = .01;
		this.ca = Math.random()
	};
	w = new Ia(kb, "jserror", !0);
	var lb = function(a, b, c, d) {
		La(w, a, c, d, void 0, b)
	}, mb = w.u,
		nb = function(a, b, c) {
			Ha(kb, a, b, "jserror" != a, c, void 0)
		}, ob = function(a) {
			return y("aa:reactiveTag", a, void 0)
		};
	var pb = null,
		qb = function() {
			if (!pb) {
				for (var a = window, b = a, c = 0; a && a != a.parent;) if (a = a.parent, c++, va(a)) b = a;
				else break;
				pb = b
			}
			return pb
		};
	var J = {
		Ha: {
			j: "453848100",
			i: "453848101"
		},
		ua: {
			j: "828064124",
			i: "828064125"
		},
		ta: {
			j: "828064127",
			i: "828064128"
		},
		va: {
			j: "828064170",
			i: "828064171"
		},
		la: {
			j: "453848130",
			i: "453848131",
			Fa: "453848132",
			Ga: "453848133"
		},
		xa: {
			j: "24819308",
			i: "24819309",
			ka: "24819320"
		},
		wa: {
			j: "24819330",
			i: "24819331"
		},
		za: {
			j: "828064162",
			i: "828064163"
		},
		ya: {
			j: "828064164",
			i: "828064165",
			oa: "828064166"
		},
		ra: {
			j: "86724438",
			i: "86724439"
		},
		sa: {
			j: "828064190",
			i: "828064191"
		},
		Ba: {
			j: "10573505",
			i: "10573506"
		},
		D: {
			j: "10573595",
			i: "10573596"
		},
		Ea: {
			j: "10573511",
			i: "10573512"
		},
		F: {
			j: "10573581",
			i: "10573582"
		},
		Ca: {
			j: "10573531",
			i: "10573532"
		},
		v: {
			j: "10573561",
			i: "10573562"
		},
		Da: {
			j: "10573551",
			i: "10573552"
		},
		Aa: {
			j: "312815002",
			i: "312815003"
		},
		C: {
			j: "312815102",
			i: "312815103"
		},
		na: {
			j: "26835103",
			i: "26835104"
		},
		qa: {
			j: "35923720",
			i: "35923721"
		},
		G: {
			j: "35923760",
			i: "35923761"
		},
		Ia: {
			j: "27415001",
			i: "27415002"
		},
		H: {
			j: "20040000",
			i: "20040001"
		},
		ma: {
			j: "20040016",
			i: "20040017"
		},
		pa: {
			j: "828064202",
			i: "828064203"
		}
	};
	var M = function(a) {
		a = parseFloat(a);
		return isNaN(a) || 1 < a || 0 > a ? 0 : a
	}, rb = function(a, b) {
		var c = parseInt(a, 10);
		return isNaN(c) ? b : c
	}, sb = function(a, b) {
		return /^true$/.test(a) ? !0 : /^false$/.test(a) ? !1 : b
	}, tb = /^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,
		ub = function(a, b) {
			if (!a) return b;
			var c = a.match(tb);
			return c ? c[0] : b
		};
	var vb = M("0.15"),
		wb = rb("101", -1),
		xb = rb("10", 0),
		yb = M("0.05"),
		zb = M("0.001"),
		Ab = M("0.0"),
		Bb = M(""),
		Cb = M("0.001"),
		Db = sb("true", !0),
		Eb = M(""),
		Fb = M("0.001"),
		Gb = M(""),
		Hb = M("0.1");
	var Jb = sb("false", !1),
		Kb = sb("false", !1),
		Lb = Kb || !Jb;
	var Mb = function() {
		return ub("", "pagead2.googlesyndication.com")
	};
	var Nb = function() {}, Pb = function(a, b, c) {
		switch (typeof b) {
			case "string":
				Ob(b, c);
				break;
			case "number":
				c.push(isFinite(b) && !isNaN(b) ? b : "null");
				break;
			case "boolean":
				c.push(b);
				break;
			case "undefined":
				c.push("null");
				break;
			case "object":
				if (null == b) {
					c.push("null");
					break
				}
				if (b instanceof Array || void 0 != b.length && b.splice) {
					var d = b.length;
					c.push("[");
					for (var e = "", g = 0; g < d; g++) c.push(e), Pb(a, b[g], c), e = ",";
					c.push("]");
					break
				}
				c.push("{");
				d = "";
				for (e in b) b.hasOwnProperty(e) && (g = b[e], "function" != typeof g && (c.push(d), Ob(e,
				c), c.push(":"), Pb(a, g, c), d = ","));
				c.push("}");
				break;
			case "function":
				break;
			default:
				throw Error("Unknown type: " + typeof b);
		}
	}, Qb = {
		'"': '\\"',
		"\\": "\\\\",
		"/": "\\/",
		"\b": "\\b",
		"\f": "\\f",
		"\n": "\\n",
		"\r": "\\r",
		"\t": "\\t",
		"\x0B": "\\u000b"
	}, Rb = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g,
		Ob = function(a, b) {
			b.push('"');
			b.push(a.replace(Rb, function(a) {
				if (a in Qb) return Qb[a];
				var b = a.charCodeAt(0),
					e = "\\u";
				16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
				return Qb[a] = e + b.toString(16)
			}));
			b.push('"')
		};
	var Sb = null,
		Tb = Ra || Sa || Pa || "function" == typeof p.atob;
	var Ub = {
		google_ad_modifications: !0,
		google_analytics_domain_name: !0,
		google_analytics_uacct: !0
	}, Vb = function(a) {
		a.google_page_url && (a.google_page_url = String(a.google_page_url));
		var b = [];
		cb(a, function(a, d) {
			if (null != a) {
				var e;
				try {
					var g = [];
					Pb(new Nb, a, g);
					e = g.join("")
				} catch (f) {}
				e && (e = e.replace(/\//g, "\\$&"), db(b, d, "=", e, ";"))
			}
		});
		return b.join("")
	};
	var Wb = function(a, b, c) {
		lb("files::getSrc", mb, function() {
			if ("https:" == F.location.protocol && "http" == c) throw c = "https", Error("Requested url " + a + b);
		});
		return [c, "://", a, b].join("")
	}, Xb = function(a, b, c) {
		c || (c = Lb ? "https" : "http");
		return Wb(a, b, c)
	};
	var Yb = {
		overlays: 1,
		interstitials: 2,
		vignettes: 2,
		inserts: 3,
		immersives: 4
	};
	var N = function(a) {
		a = a.document;
		return ("CSS1Compat" == a.compatMode ? a.documentElement : a.body) || {}
	};
	var Zb = new function() {
			this.aa = new ra(100, 199)
		};
	var P = function(a) {
		return (a = a.google_ad_modifications) ? a.loeids || [] : []
	}, $b = function(a, b, c) {
		if (!a) return null;
		for (var d = 0; d < a.length; ++d) if ((a[d].ad_slot || b) == b && (a[d].ad_tag_origin || c) == c) return a[d];
		return null
	};
	var ac = function(a, b, c) {
		return F.location && F.location.hash == "#google_plle_" + c ? c : v([b, c], a)
	}, bc = function(a, b, c, d) {
		a = a.google_active_plles = a.google_active_plles || [];
		return I(P(b), c) ? (a.push(c), c) : I(P(b), d) ? (a.push(d), d) : null
	};
	var cc = null;
	var dc = function(a) {
		this.s = a;
		a.google_iframe_oncopy || (a.google_iframe_oncopy = {
			handlers: {},
			upd: q(this.ha, this)
		});
		this.ea = a.google_iframe_oncopy
	}, ec;
	var Q = "var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}";
	/[\x00&<>"']/.test(Q) && (-1 != Q.indexOf("&") && (Q = Q.replace(ha, "&amp;")), -1 != Q.indexOf("<") && (Q = Q.replace(ia, "&lt;")), -1 != Q.indexOf(">") && (Q = Q.replace(ja, "&gt;")), -1 != Q.indexOf('"') && (Q = Q.replace(la, "&quot;")), -1 != Q.indexOf("'") && (Q = Q.replace(ma, "&#39;")), -1 != Q.indexOf("\x00") && (Q = Q.replace(na, "&#0;")));
	ec = Q;
	dc.prototype.set = function(a, b) {
		this.ea.handlers[a] = b;
		this.s.addEventListener && this.s.addEventListener("load", q(this.X, this, a), !1)
	};
	dc.prototype.X = function(a) {
		a = this.s.document.getElementById(a);
		try {
			var b = a.contentWindow.document;
			if (a.onload && b && (!b.body || !b.body.firstChild)) a.onload()
		} catch (c) {}
	};
	dc.prototype.ha = function(a, b) {
		var c = fc("rx", a),
			d;
		a: {
			if (a && (d = a.match("dt=([^&]+)")) && 2 == d.length) {
				d = d[1];
				break a
			}
			d = ""
		}
		d = (new Date).getTime() - d;
		c = c.replace(/&dtd=(\d+|M)/, "&dtd=" + (1E4 > d ? d + "" : "M"));
		this.set(b, c);
		return c
	};
	var fc = function(a, b) {
		var c = new RegExp("\\b" + a + "=(\\d+)"),
			d = c.exec(b);
		d && (b = b.replace(c, a + "=" + (+d[1] + 1 || 1)));
		return b
	};
	var gc = !1,
		hc = function(a, b, c) {
			var d = ["<iframe"],
				e;
			for (e in a) a.hasOwnProperty(e) && db(d, e + "=" + a[e]);
			e = "left:0;position:absolute;top:0;";
			gc && (e = e + "width:" + b + "px;height:" + c + "px;");
			d.push('style="' + e + '"');
			d.push("></iframe>");
			a = a.id;
			b = "border:none;height:" + c + "px;margin:0;padding:0;position:relative;visibility:visible;width:" + b + "px;background-color:transparent";
			return ['<ins id="', a + "_expand", '" style="display:inline-table;', b, '"><ins id="', a + "_anchor", '" style="display:block;', b, '">', d.join(" "), "</ins></ins>"].join("")
		};
	var ic = function(a) {
		if (!a) return "";
		(a = a.toLowerCase()) && "ca-" != a.substring(0, 3) && (a = "ca-" + a);
		return a
	};
	var jc = {
		"120x90": !0,
		"160x90": !0,
		"180x90": !0,
		"200x90": !0,
		"468x15": !0,
		"728x15": !0
	};
	var kc = "google_ad_client google_ad_format google_ad_height google_ad_width google_city google_country google_encoding google_language google_page_url".split(" "),
		lc = function(a) {
			try {
				var b = a.top.google_ads_params_store;
				if (b) return b;
				b = a.top.google_ads_params_store = {};
				if (b === a.top.google_ads_params_store) return b
			} catch (c) {}
			return null
		};
	var mc, T = function(a) {
		this.B = [];
		this.s = a || window;
		this.o = 0;
		this.A = null;
		this.S = 0
	}, nc = function(a, b) {
		this.Y = a;
		this.ja = b
	};
	T.prototype.enqueue = function(a, b) {
		0 != this.o || 0 != this.B.length || b && b != window ? this.K(a, b) : (this.o = 2, this.O(new nc(a, window)))
	};
	T.prototype.K = function(a, b) {
		this.B.push(new nc(a, b || this.s));
		oc(this)
	};
	T.prototype.Z = function(a) {
		this.o = 1;
		if (a) {
			var b = q(this.N, this, !0);
			this.A = this.s.setTimeout(y("sjr::timeout", b, void 0), a)
		}
	};
	T.prototype.N = function(a) {
		a && ++this.S;
		1 == this.o && (null != this.A && (this.s.clearTimeout(this.A), this.A = null), this.o = 0);
		oc(this)
	};
	T.prototype.da = function() {
		return !(!window || !Array)
	};
	T.prototype.fa = function() {
		return this.S
	};
	T.prototype.nq = T.prototype.enqueue;
	T.prototype.nqa = T.prototype.K;
	T.prototype.al = T.prototype.Z;
	T.prototype.rl = T.prototype.N;
	T.prototype.sz = T.prototype.da;
	T.prototype.tc = T.prototype.fa;
	var oc = function(a) {
		var b = q(a.ga, a);
		a.s.setTimeout(y("sjr::tryrun", b, void 0), 0)
	};
	T.prototype.ga = function() {
		if (0 == this.o && this.B.length) {
			var a = this.B.shift();
			this.o = 2;
			var b = q(this.O, this, a);
			a.ja.setTimeout(y("sjr::run", b, void 0), 0);
			oc(this)
		}
	};
	T.prototype.O = function(a) {
		this.o = 0;
		a.Y()
	};
	var pc = function(a) {
		try {
			return a.sz()
		} catch (b) {
			return !1
		}
	}, qc = function(a) {
		return !!a && ("object" == typeof a || "function" == typeof a) && pc(a) && G(a.nq) && G(a.nqa) && G(a.al) && G(a.rl)
	}, rc = function() {
		if (mc && pc(mc)) return mc;
		var a = qb(),
			b = a.google_jobrunner;
		return qc(b) ? mc = b : a.google_jobrunner = mc = new T(a)
	}, sc = function(a, b) {
		rc().nq(a, b)
	}, tc = function(a, b) {
		rc().nqa(a, b)
	};
	var U = function(a) {
		this.name = "TagError";
		this.message = a || "";
		Error.captureStackTrace ? Error.captureStackTrace(this, U) : this.stack = Error().stack || ""
	};
	ea(U, Error);
	var uc = ib ? 1 == gb(F) : !gb(F),
		vc = function() {
			var a = Kb ? "https" : "http",
				b = ta("script");
			return ["<", b, ' src="', Xb(Mb(), "/pagead/js/r20151027/r20151006/show_ads_impl.js", a), '"></', b, ">"].join("")
		}, wc = function(a, b, c, d) {
			return function() {
				var e = !1;
				d && rc().al(3E4);
				var g = a.document.getElementById(b);
				g && !va(g.contentWindow) && 3 == a.google_top_js_status && (a.google_top_js_status = 6);
				try {
					var f = a.document.getElementById(b).contentWindow;
					if (va(f)) {
						var h = a.document.getElementById(b).contentWindow,
							l = h.document;
						l.body && l.body.firstChild || (l.open(), h.google_async_iframe_close = !0, l.write(c))
					} else {
						for (var k = a.document.getElementById(b).contentWindow, g = c, g = String(g), f = ['"'], h = 0; h < g.length; h++) {
							var m = g.charAt(h),
								n = m.charCodeAt(0),
								l = h + 1,
								E;
							if (!(E = oa[m])) {
								var H;
								if (31 < n && 127 > n) H = m;
								else {
									var x = m;
									if (x in pa) H = pa[x];
									else if (x in oa) H = pa[x] = oa[x];
									else {
										var u = x,
											r = x.charCodeAt(0);
										if (31 < r && 127 > r) u = x;
										else {
											if (256 > r) {
												if (u = "\\x", 16 > r || 256 < r) u += "0"
											} else u = "\\u", 4096 > r && (u += "0");
											u += r.toString(16).toUpperCase()
										}
										H = pa[x] = u
									}
								}
								E = H
							}
							f[l] = E
						}
						f.push('"');
						k.location.replace("javascript:" + f.join(""))
					}
					e = !0
				} catch (z) {
					k = qb().google_jobrunner, qc(k) && k.rl()
				}
				e && (e = fc("google_async_rrc", c), (new dc(a)).set(b, wc(a, b, e, !1)))
			}
		}, xc = function(a) {
			var b = ["<iframe"];
			cb(a, function(a, d) {
				null != a && b.push(" " + d + '="' + a + '"')
			});
			b.push("></iframe>");
			return b.join("")
		}, zc = function(a, b, c) {
			yc(a, b, c, function(a, b, g) {
				for (var f = a.document, h = b.id, l = 0; !h || f.getElementById(h);) h = "aswift_" + l++;
				b.id = h;
				b.name = h;
				var h = Number(g.google_ad_width),
					l = Number(g.google_ad_height),
					k = J.G;
				bc(g, a, k.j, k.i);
				gc = I(P(a), k.i);
				16 == g.google_reactive_ad_format ? (a = f.createElement("div"), a.innerHTML = hc(b, h, l), c.appendChild(a.firstChild)) : c.innerHTML = hc(b, h, l);
				return b.id
			})
		}, yc = function(a, b, c, d) {
			var e = ta("script"),
				g, f;
			a: {
				try {
					var h = a.top.google_pubvars_reuse_experiment;
					if ("undefined" !== typeof h) {
						f = h;
						break a
					}
					h = v(["C", "E"], Eb) || null;
					a.top.google_pubvars_reuse_experiment = h;
					if (a.top.google_pubvars_reuse_experiment === h) {
						f = h;
						break a
					}
				} catch (ka) {}
				f = null
			}
			if ("E" === f) {
				g = null != b.google_ad_client;
				f = null != b.google_ad_width;
				var h = null != b.google_ad_height,
					l = lc(a);
				if (l) {
					for (var k = 0; k < kc.length; k++) {
						var m = kc[k];
						null != b[m] && (l[m] = b[m])
					}
					if (l = lc(a)) {
						var k = l.google_ad_width,
							m = l.google_ad_height,
							n = l.google_ad_format;
						k && m && n && (n = (n = n && n.match(/(\d+)x(\d+)/)) ? {
							width: n[1],
							height: n[2]
						} : null, !n || n.width == k && n.height == m || delete l.google_ad_format)
					}
				}
				if (l = lc(a)) for (k = 0; k < kc.length; k++) m = kc[k],
				null == b[m] && null != l[m] && (b[m] = l[m]);
				l = null != b.google_ad_client;
				k = null != b.google_ad_width;
				m = null != b.google_ad_height;
				g = [g ? "c2" : l ? "c1" : "c0", f ? "w2" : k ? "w1" : "w0", h ? "h2" : m ? "h1" : "h0"].join()
			}
			f = {};
			h = b.google_ad_height;
			f.width = '"' + b.google_ad_width + '"';
			f.height = '"' + h + '"';
			f.frameborder = '"0"';
			f.marginwidth = '"0"';
			f.marginheight = '"0"';
			f.vspace = '"0"';
			f.hspace = '"0"';
			f.allowtransparency = '"true"';
			f.scrolling = '"no"';
			f.allowfullscreen = '"true"';
			f.onload = '"' + ec + '"';
			d = d(a, f, b);
			h = b.google_ad_output;
			f = b.google_ad_format;
			f || "html" != h && null != h || (f = b.google_ad_width + "x" + b.google_ad_height, b.google_ad_format_suffix && (f += b.google_ad_format_suffix));
			h = !b.google_ad_slot || b.google_override_format || !jc[b.google_ad_width + "x" + b.google_ad_height] && "aa" == b.google_loader_used;
			f = f && h ? f.toLowerCase() : "";
			b.google_ad_format = f;
			f = [b.google_ad_slot, b.google_ad_format, b.google_ad_type, b.google_ad_width, b.google_ad_height];
			h = [];
			l = 0;
			for (k = c; k && 25 > l; k = k.parentNode, ++l) h.push(9 != k.nodeType && k.id || "");
			(h = h.join()) && f.push(h);
			b.google_ad_unit_key = hb(f.join(":")).toString();
			f = a.google_adk2_experiment = a.google_adk2_experiment || v(["C", "E"], Cb) || "N";
			if ("E" == f) {
				f = [];
				for (h = 0; c && 25 > h; ++h) {
					l = "";
					l = (l = 9 != c.nodeType && c.id) ? "/" + l : "";
					a: {
						if (c && c.nodeName && c.parentElement) for (var k = c.nodeName.toString().toLowerCase(), m = c.parentElement.childNodes, E = n = 0; E < m.length; ++E) {
							var H = m[E];
							if (H.nodeName && H.nodeName.toString().toLowerCase() == k) {
								if (c == H) {
									k = "." + n;
									break a
								}++n
							}
						}
						k = ""
					}
					f.push((c.nodeName && c.nodeName.toString().toLowerCase()) + l + k);
					c = c.parentElement
				}
				c = f.join() +
					":";
				f = a;
				h = [];
				if (f) try {
					for (var x = f.parent, l = 0; x && x != f && 25 > l; ++l) {
						for (var u = x.frames, k = 0; k < u.length; ++k) if (f == u[k]) {
							h.push(k);
							break
						}
						f = x;
						x = f.parent
					}
				} catch (ka) {}
				b.google_ad_unit_key_2 = hb(c + h.join()).toString()
			} else "C" == f && (b.google_ad_unit_key_2 = "ctrl");
			x = Vb(b);
			u = null;
			c = v(["C", "E"], Fb);
			if ("E" == c) {
				a: {
					try {
						if (window.JSON && window.JSON.stringify && window.encodeURIComponent) {
							var r = encodeURIComponent(window.JSON.stringify(b)),
								z;
							if (Tb) z = p.btoa(r);
							else {
								f = [];
								for (l = h = 0; l < r.length; l++) {
									for (var O = r.charCodeAt(l); 255 < O;) f[h++] = O & 255, O >>= 8;
									f[h++] = O
								}
								if (!Sb) for (Sb = {}, r = 0; 65 > r; r++) Sb[r] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(r);
								r = Sb;
								O = [];
								for (h = 0; h < f.length; h += 3) {
									var K = f[h],
										R = h + 1 < f.length,
										S = R ? f[h + 1] : 0,
										Y = h + 2 < f.length,
										Ib = Y ? f[h + 2] : 0,
										l = K >> 2,
										k = (K & 3) << 4 | S >> 4,
										m = (S & 15) << 2 | Ib >> 6,
										n = Ib & 63;
									Y || (n = 64, R || (m = 64));
									O.push(r[l], r[k], r[m], r[n])
								}
								z = O.join("")
							}
							u = z;
							break a
						}
						nb("sblob", {
							json: window.JSON ? 1 : 0,
							eURI: window.encodeURIComponent ? 1 : 0
						})
					} catch (ka) {
						w.u("sblob", ka, void 0, void 0)
					}
					u = ""
				}
				u || (u = "{X}")
			} else "C" == c && (u = "{C}");
			var B;
			b = b.google_ad_client;
			if (z = uc) {
				if (!cc) b: {
					K = [p.top];
					z = [];
					for (R = 0; S = K[R++];) {
						z.push(S);
						try {
							if (S.frames) for (var L = S.frames.length, Y = 0; Y < L && 1024 > K.length; ++Y) K.push(S.frames[Y])
						} catch (ka) {}
					}
					for (L = 0; L < z.length; L++) try {
						if (B = z[L].frames.google_esf) {
							cc = B;
							break b
						}
					} catch (ka) {}
					cc = null
				}
				z = !cc
			}
			z ? (B = {
				style: "display:none"
			}, B["data-ad-client"] = ic(b), B.id = "google_esf", B.name = "google_esf", B.src = Xb(ub("", "googleads.g.doubleclick.net"), "/pagead/html/r20151027/r20151006/zrt_lookup.html"),
			B = xc(B)) : B = "";
			L = fa;
			b = (new Date).getTime();
			z = a.google_top_experiment;
			if (K = a.google_async_for_oa_experiment) a.google_async_for_oa_experiment = void 0;
			R = a.google_always_use_delayed_impressions_experiment;
			B = ["<!doctype html><html><body>", B, "<", e, ">", x, "google_show_ads_impl=true;google_unique_id=", gb(a), ';google_async_iframe_id="', d, '";google_start_time=', L, ";", c ? 'google_pub_vars = "' + u + '";' : "", g ? 'google_pubvars_reuse_experiment_result = "' + g + '";' : "", z ? 'google_top_experiment="' + z + '";' : "", K ? 'google_async_for_oa_experiment="' + K + '";' : "", R ? 'google_always_use_delayed_impressions_experiment="' + R + '";' : "", "google_bpp=", b > L ? b - L : 1, ";google_async_rrc=0;</", e, ">", vc(), "</body></html>"].join("");
			(a.document.getElementById(d) ? sc : tc)(wc(a, d, B, !0))
		}, Ac = Math.floor(1E6 * Math.random()),
		Bc = function(a) {
			var b;
			try {
				b = {};
				for (var c = a.data.split("\n"), d = 0; d < c.length; d++) {
					var e = c[d].indexOf("="); - 1 != e && (b[c[d].substr(0, e)] = c[d].substr(e + 1))
				}
			} catch (g) {}
			c = b[3];
			if (b[1] == Ac && (window.google_top_js_status = 4, a.source == top && 0 == c.indexOf(a.origin) && (window.google_top_values = b, window.google_top_js_status = 5), window.google_top_js_callbacks)) {
				for (a = 0; a < window.google_top_js_callbacks.length; a++) window.google_top_js_callbacks[a]();
				window.google_top_js_callbacks.length = 0
			}
		}, Cc = function(a, b) {
			var c = navigator;
			if (Db && a && b && c) {
				var d = a.document,
					c = d.createElement("script"),
					e = ic(b);
				c.async = !0;
				c.type = "text/javascript";
				c.src = Xb("pagead2.googlesyndication.com", "/pub-config/" + e + ".js");
				d = d.getElementsByTagName("script")[0];
				d.parentNode.insertBefore(c, d)
			}
		};
	var V = function(a, b) {
		this.M = a;
		this.L = b
	};
	V.prototype.minWidth = function() {
		return this.M
	};
	V.prototype.height = function() {
		return this.L
	};
	V.prototype.w = function(a) {
		return 300 < a && 300 < this.L ? this.M : 1200 < a ? 1200 : Math.round(a)
	};
	var Dc = {
		rectangle: 1,
		horizontal: 2,
		vertical: 4,
		autorelaxed: 1
	}, W = function(a, b, c) {
		V.call(this, a, b);
		this.ba = c
	};
	ea(W, V);
	var Ec = function(a) {
		return function(b) {
			return !!(b.ba & a)
		}
	}, Fc = [new W(970, 90, 2), new W(728, 90, 2), new W(468, 60, 2), new W(336, 280, 1), new W(320, 100, 2), new W(320, 50, 2), new W(300, 600, 4), new W(300, 250, 1), new W(250, 250, 1), new W(234, 60, 2), new W(200, 200, 1), new W(180, 150, 1), new W(160, 600, 4), new W(125, 125, 1), new W(120, 600, 4), new W(120, 240, 4)];
	var Gc = function(a, b) {
		for (var c = ["width", "height"], d = 0; d < c.length; d++) {
			var e = "google_ad_" + c[d];
			if (!b.hasOwnProperty(e)) {
				var g;
				g = Da(a[c[d]]);
				g = null === g ? null : Math.round(g);
				null != g && (b[e] = g)
			}
		}
	}, Hc = function(a, b) {
		try {
			var c = b.document.documentElement.getBoundingClientRect(),
				d = a.getBoundingClientRect();
			return {
				x: d.left - c.left,
				y: d.top - c.top
			}
		} catch (e) {
			return null
		}
	}, Ic = function(a) {
		var b = 0,
			c;
		for (c in Dc) - 1 != a.indexOf(c) && (b |= Dc[c]);
		return b
	};
	var Jc = function(a) {
		return function(b) {
			return b.minWidth() <= a
		}
	}, Lc = function(a, b, c) {
		var d = a && Kc(c, b);
		return function(a) {
			return !(d && 250 <= a.height())
		}
	}, Kc = function(a, b) {
		var c = Math.min(N(b).clientHeight, 16 * N(b).clientWidth / 9),
			d = Hc(a, b);
		return (d ? d.y : 0) < c - 100
	}, Nc = function(a, b) {
		var c = b,
			d = Infinity;
		do {
			var e = Mc(c, a, "height");
			e && (d = Math.min(d, e));
			(e = Mc(c, a, "maxHeight")) && (d = Math.min(d, e))
		} while ((c = c.parentElement) && "HTML" != c.tagName);
		return d
	}, Mc = function(a, b, c) {
		if (a.style) {
			var d = Da(a.style[c]);
			if (d) return d
		}
		if (a = xa(a, b)) if (d = Da(a[c])) return d;
		return null
	};
	var Oc = function(a) {
		return function(b) {
			for (var c = a.length - 1; 0 <= c; --c) if (!a[c](b)) return !1;
			return !0
		}
	}, Pc = function(a, b, c) {
		for (var d = a.length, e = null, g = 0; g < d; ++g) {
			var f = a[g];
			if (b(f)) {
				if (!c || c(f)) return f;
				null === e && (e = f)
			}
		}
		return e
	};
	var Rc = function(a, b, c, d) {
		var e = Fc.slice(0);
		if (I(P(c), J.F.i)) for (var g = Math.random, f = e.length - 1; 0 < f; f--) {
			var h = Math.floor(g() * (f + 1)),
				l = e[f];
			e[f] = e[h];
			e[h] = l
		}
		g = 488 > N(c).clientWidth;
		b = [Jc(a), Qc(g), Lc(g, c, d), Ec(b)];
		e = Pc(e, Oc(b));
		if (!e) throw new U("adsbygoogle.push() error: No slot size for availableWidth=" + a);
		return e
	}, Qc = function(a) {
		return function(b) {
			return !(320 == b.minWidth() && (a && 50 == b.height() || !a && 100 == b.height()))
		}
	};
	var X = function(a, b) {
		V.call(this, a, b)
	};
	ea(X, V);
	X.prototype.w = function(a) {
		return Math.min(1200, Math.round(a))
	};
	var Sc = [new X(468, 300), new X(414, 828), new X(384, 768), new X(375, 750), new X(360, 720), new X(320, 640), new X(120, 600)],
		Tc = [new X(301, 300), new X(120, 600)],
		Uc = function(a, b) {
			var c = Pc(a, Jc(b));
			if (!c) throw new U("adsbygoogle.push() error: No autorelaxed size for width=" + b + "px");
			return c
		};
	var Wc = function() {
		return !Vc() && (C("iPod") || C("iPhone") || C("Android") || C("IEMobile"))
	}, Vc = function() {
		return C("iPad") || C("Android") && !C("Mobile") || C("Silk")
	};
	var Xc = [{
		l: [3, 0, 0],
		m: [6, 12, 14, 0, 1, 3, 2, 4, 13, 5, 7, 8, 9, 10, 11, 15]
	}, {
		l: [3, 0, 1],
		m: [6, 15, 0, 1, 2, 3, 4, 13, 5, 7, 8, 9, 10, 11, 12, 14]
	}, {
		l: [3, 0, 2],
		m: [6, 15, 0, 1, 2, 3, 4, 7, 8, 9, 10, 13, 5, 11, 12, 14]
	}, {
		l: [3, 1, 0],
		m: [6, 12, 15, 0, 1, 3, 4, 13, 2, 5, 7, 8, 9, 10, 11, 14]
	}, {
		l: [3, 1, 1],
		m: [6, 15, 0, 1, 7, 8, 11, 2, 3, 4, 5, 9, 10, 12, 13, 14]
	}, {
		l: [3, 1, 2],
		m: [6, 15, 0, 1, 2, 3, 4, 7, 9, 11, 5, 8, 10, 12, 13, 14]
	}, {
		l: [3, 2, 0],
		m: [0, 6, 12, 15, 1, 2, 3, 4, 13, 5, 7, 8, 9, 10, 11, 14]
	}, {
		l: [3, 2, 1],
		m: [0, 6, 12, 14, 1, 2, 3, 4, 13, 5, 7, 8, 9, 10, 11, 15]
	}, {
		l: [3, 2, 2],
		m: [0, 15, 1, 2, 3, 4, 13, 9, 5, 6, 7, 8, 10, 11, 12, 14]
	}, {
		l: [2, 0,
		0],
		m: [6, 15, 0, 1, 3, 2, 7, 8, 10, 13, 9, 4, 5, 11, 12, 14]
	}, {
		l: [2, 0, 1],
		m: [6, 15, 0, 1, 2, 3, 7, 8, 4, 10, 9, 13, 5, 11, 12, 14]
	}, {
		l: [2, 0, 2],
		m: [0, 15, 1, 2, 3, 4, 7, 8, 13, 5, 6, 9, 10, 11, 12, 14]
	}, {
		l: [4, 0, 0],
		m: [6, 12, 14, 15, 0, 1, 7, 2, 8, 11, 9, 3, 4, 5, 10, 13]
	}, {
		l: [4, 0, 1],
		m: [6, 12, 14, 0, 1, 2, 3, 4, 7, 8, 11, 13, 5, 9, 10, 15]
	}, {
		l: [4, 0, 2],
		m: [6, 15, 0, 1, 2, 3, 5, 7, 8, 13, 9, 4, 10, 11, 12, 14]
	}],
		Yc = function(a, b, c) {
			return "auto" == c ? (b /= Math.min(1200, N(a).clientWidth), .6 < b && !(488 > N(a).clientWidth) ? 2 : .25 >= b ? 4 : 3) : Ic(c)
		}, Zc = function(a, b) {
			var c = Nc(a, b);
			return function(a) {
				return a.height() <= c
			}
		}, ad = function(a, b, c, d, e) {
			var g;
			a: {
				var f;
				f = Wc() ? 2 : Vc() ? 4 : 3;
				g = Hc(d, c);
				f = [f, g && 3 == f ? 83 > g.x ? 0 : 265 > g.x ? 1 : 2 : 0, $c(f, g)];
				for (g = 0; g < Xc.length; ++g) {
					var h = Xc[g],
						l;
					b: if (l = h.l, f && "number" == typeof f.length && l && "number" == typeof l.length && f.length == l.length) {
						for (var k = f.length, m = 0; m < k; m++) if (f[m] !== l[m]) {
							l = !1;
							break b
						}
						l = !0
					} else l = !1;
					if (l) {
						g = h.m;
						break a
					}
				}
				throw Error("No format for " + f);
			}
			f = [];
			for (h = 0; h < g.length; ++h) f.push(Fc[g[h]]);
			g = 488 > N(c).clientWidth;
			a = [Zc(c, d), Jc(a), Lc(g, c, d)];
			c = [];
			(e ? c : a).push(Ec(b));
			return Pc(f,
			Oc(a), Oc(c))
		}, $c = function(a, b) {
			if (!b) return 0;
			var c = b.y;
			switch (a) {
				case 2:
					return 285 > c ? 0 : 1396 > c ? 1 : 2;
				case 4:
					return 275 > c ? 0 : 1057 > c ? 1 : 2;
				default:
					return 216 > c ? 0 : 838 > c ? 1 : 2
			}
		};
	var Z = function(a, b) {
		V.call(this, a, b)
	};
	ea(Z, V);
	Z.prototype.w = function() {
		return this.minWidth()
	};
	var bd = [new Z(728, 15), new Z(468, 15), new Z(200, 90), new Z(180, 90), new Z(160, 90), new Z(120, 90)];
	var cd = function(a) {
		return jb.test(a.className) && "done" != a.getAttribute("data-adsbygoogle-status")
	}, ed = function(a, b) {
		var c = window;
		a.setAttribute("data-adsbygoogle-status", "done");
		dd(a, b, c)
	}, dd = function(a, b, c) {
		fd(a, b, c);
		if (!gd(a, b, c)) {
			if (b.google_reactive_ads_config) {
				if (hd) throw new U("adsbygoogle.push() error: Only one 'enable_page_level_ads' allowed per page.");
				hd = !0
			} else fb(c);
			id || (id = !0, Cc(c, b.google_ad_client));
			cb(Ub, function(a, d) {
				b[d] = b[d] || c[d]
			});
			b.google_loader_used = "aa";
			var d = b.google_ad_output;
			if (d && "html" != d) throw new U("adsbygoogle.push() error: No support for google_ad_output=" + d);
			lb("aa::load", mb, function() {
				zc(c, b, a)
			})
		}
	}, gd = function(a, b, c) {
		var d = b.google_reactive_ads_config;
		if (d) var e = d.page_level_pubvars,
			g = (aa(e) ? e : {}).google_tag_origin;
		var f = b.google_ad_slot,
			e = c.google_ad_modifications;
		!e || $b(e.ad_whitelist, f, g || b.google_tag_origin) ? e = null : (g = e.space_collapsing || "none", e = (f = $b(e.ad_blacklist, f)) ? {
			I: !0,
			R: f.space_collapsing || g
		} : e.remove_ads_by_default ? {
			I: !0,
			R: g
		} : null);
		return e && e.I &&
			"on" != b.google_adtest ? ("slot" == e.R && (null !== Ca(a.getAttribute("width")) && a.setAttribute("width", 0), null !== Ca(a.getAttribute("height")) && a.setAttribute("height", 0), a.style.width = "0px", a.style.height = "0px"), !0) : !(e = xa(a, c)) || "none" != e.display || "on" == b.google_adtest || 0 < b.google_reactive_ad_format || d ? !1 : (c.document.createComment && a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")), !0)
	}, jd = function(a, b) {
		var c;
		try {
			c = a.getBoundingClientRect()
		} catch (e) {}
		if (!c || 0 == c.left && 0 == c.right && 0 == c.width && 0 == c.height) return !1;
		var d = xa(a, b);
		if (!d) return !1;
		c = Da(d.width);
		d = Da(d.height);
		return null == c || null == d || jc[c + "x" + d] ? !1 : !0
	}, fd = function(a, b, c) {
		for (var d = a.attributes, e = d.length, g = 0; g < e; g++) {
			var f = d[g];
			if (/data-/.test(f.name)) {
				var h = f.name.replace("data", "google").replace(/-/g, "_");
				if (!b.hasOwnProperty(h)) {
					var f = f.value,
						l = {
							google_reactive_ad_format: rb,
							google_allow_expandable_ads: sb
						}, f = l.hasOwnProperty(h) ? l[h](f, null) : f;
					null === f || (b[h] = f)
				}
			}
		}
		if (b.google_enable_content_recommendations && 1 == b.google_reactive_ad_format) b.google_ad_width = N(c).clientWidth, b.google_ad_height = 50, a.style.display = "none";
		else if (1 == b.google_reactive_ad_format) b.google_ad_width = 320, b.google_ad_height = 50, a.style.display = "none";
		else if (8 == b.google_reactive_ad_format) b.google_ad_width = N(c).clientWidth || 0, b.google_ad_height = N(c).clientHeight || 0, a.style.display = "none";
		else if (9 == b.google_reactive_ad_format) b.google_ad_width = N(c).clientWidth || 0, b.google_ad_height = N(c).clientHeight || 0, a.style.display = "none";
		else {
			d = b.google_ad_format;
			"autorelaxed" == d ? (d = J.C, bc(b, c, d.j, d.i), d = I(P(c), J.C.i) ? 3 : 2) : "auto" == d || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(d) ? (d = J.D, bc(b, c, d.j, d.i), d = I(P(c), J.D.i) || I(P(c), J.v.i) ? 5 : 1) : d = "link" == d ? 4 : void 0;
			if (e = !d) jd(a, c) ? (e = J.v, bc(b, c, e.j, e.i) !== e.i ? e = !1 : (b.google_ad_format = "auto", e = !0)) : e = !1;
			e && (d = 5);
			if (d) {
				var k = a.offsetWidth;
				a: {
					var m = b.google_ad_format;
					switch (d) {
						default:
						case 1:
							var n = "auto" == m ? .25 >= k / Math.min(1200, N(c).clientWidth) ? 4 : 3 : Ic(m);
							b && (b.google_responsive_formats = n, m = J.F, bc(b, c, m.j, m.i));
							c = Rc(k, n, c, a);
							break a;
						case 2:
							c = Uc(Sc, k);
							break a;
						case 3:
							c = Uc(Tc, k);
							break a;
						case 5:
							m = Yc(c, k, m);
							b.google_responsive_formats = m;
							var E = I(P(c), J.v.i);
							b: {
								d = a;
								do if ((e = xa(d, c)) && "fixed" == e.position) {
									d = !1;
									break b
								}
								while (d = d.parentElement);
								d = !0
							}
							d && (n = ad(k, m, c, a, E));
							c = n || Rc(k, m, c, a);
							break a;
						case 4:
							c = Pc(bd, Jc(k));
							if (!c) throw new U("adsbygoogle.push() error: No link unit size for width=" + k + "px");
							b.google_ad_format_suffix = "_0ads_al";
							b.google_override_format = 1
					}
				}
				b.google_ad_width = c.w(k);
				b.google_ad_height = c.height();
				a.style.height = c.height() + "px";
				b.google_ad_resizable = !0;
				delete b.google_ad_format;
				b.google_loader_features_used = 128
			} else {
				n = jd(a, c) ? (n = v(["LC", "LE"], Bb)) ? "LE" == (b.google_responsive_override_logs_experiment = n) : !1 : !1;
				if (n) try {
					m = a.offsetWidth, E = ad(m, Yc(c, m, "auto"), c, a, !0), k = new sa(E.w(m), E.height()), b.google_ember_w = k.width, b.google_ember_h = k.height
				} catch (H) {
					b.google_ember_w = b.google_ember_h = "e"
				}!Ba.test(b.google_ad_width) && !Aa.test(a.style.width) || !Ba.test(b.google_ad_height) && !Aa.test(a.style.height) ? (c = xa(a, c), a.style.width = c.width, a.style.height = c.height, Gc(c, b), b.google_ad_width || (b.google_ad_width = a.offsetWidth), b.google_ad_height || (b.google_ad_height = a.offsetHeight), b.google_loader_features_used = 256) : (Gc(a.style, b), b.google_ad_output && "html" != b.google_ad_output || 300 != b.google_ad_width || 250 != b.google_ad_height || (c = a.style.width, a.style.width = "100%", n = a.offsetWidth, a.style.width = c, b.google_available_width = n))
			}
		}
	}, kd = function(a) {
		for (var b = document.getElementsByTagName("ins"), c = 0, d = b[c]; c < b.length; d = b[++c]) {
			var e = d;
			if (cd(e) && "reserved" != e.getAttribute("data-adsbygoogle-status") && (!a || d.id == a)) return d
		}
		return null
	}, hd = !1,
		id = !1,
		od = function(a) {
			if (Wc() && !p.google_ama) {
				p.google_ama = {};
				var b;
				a: {
					try {
						b = p.JSON.parse(p.localStorage.getItem("google_ama_config") || "");
						break a
					} catch (h) {}
					b = null
				}
				if (b) {
					var c;
					if (c = b.exp > da()) a: {
						var d = b;
						c = Ea(p);
						d = d.mods;
						if (!isNaN(c) && d) for (var e = 0; e < d.length; e++) {
							var g = d[e],
								f = g.max;
							if (c >= g.min && c <= f) {
								c = !0;
								break a
							}
						}
						c = !1
					}
					if (c) p.google_ama.tags = [],
					c = document.createElement("script"),
					d = p.document.getElementsByTagName("script")[0],
					d.parentNode.insertBefore(c, d),
					d = da(),
					c.onload = y("aa::amarn", t(ld, p, d, a), t(md, p)),
					p.setTimeout(y("aa::amaabt", t(nd, p, c, d), t(md, p)), 100),
					c.src = Xb(Mb(), b.lib);
					else try {
						p.localStorage.removeItem("google_ama_config")
					} catch (h) {}
				}
			}
		}, ld = function(a, b, c) {
			a.google_ama.tags && (b = da() - b, nb("ama", {
				stg: !0,
				t: b
			}, .01), (b = a.google_amar) && G(b) && lb("aa::amar", mb, t(b, a, c)), pd(a))
		}, nd = function(a, b, c) {
			a.google_ama.tags && (b.onload = function() {
				var a = da() - c;
				nb("ama", {
					stg: !1,
					t: a
				}, .01)
			}, pd(a))
		}, pd = function(a) {
			var b = a.google_ama.tags;
			a.google_ama.tags = void 0;
			qd(b)
		}, md = function(a) {
			a.google_ama.tags = void 0
		}, qd = function(a) {
			if (a && a.shift) for (var b, c = 20;
			(b = a.shift()) && 0 < c--;) try {
				rd(b)
			} catch (d) {
				throw window.setTimeout(sd, 0), d;
			}
		}, td = function(a, b) {
			var c = {};
			cb(Yb, function(b, d) {
				a.hasOwnProperty(d) && (c[d] = a[d])
			});
			aa(a.enable_page_level_ads) && (c.page_level_pubvars = a.enable_page_level_ads);
			var d = document.createElement("ins");
			d.className = "adsbygoogle";
			d.style.display = "none";
			b ? bb.body.appendChild(d) : bb.documentElement.appendChild(d);
			ed(d, {
				google_reactive_ads_config: c,
				google_ad_client: a.google_ad_client
			})
		}, ud = function(a) {
			if (!wa()) throw new U("adsbygoogle.push() error: Page-level tag does not work inside iframes.");
			var b = I(P(F), J.H.i),
				c = !b;
			bb.body || b ? td(a, c) : eb(bb, "DOMContentLoaded", ob(function() {
				td(a, c)
			}))
		}, vd = function(a, b, c, d) {
			if (0 == b.message.indexOf("TagError")) {
				var e = {};
				Ma(w, e, d);
				e.context = a;
				e.msg = b.message.substring(0, 512);
				a = p.document;
				e.url = a.URL.substring(0, 512);
				e.ref = a.referrer.substring(0,
				512);
				Ha(kb, "puberror", e, !0, c || .01);
				return !1
			}
			return w.u(a, b, c, d)
		}, wd = function(a, b, c, d) {
			return 0 == b.message.indexOf("TagError") ? !1 : w.u(a, b, c, d)
		}, rd = function(a) {
			var b = {};
			lb("aa::hqe", vd, function() {
				xd(a, b)
			}, function(c) {
				c.client = c.client || b.google_ad_client || a.google_ad_client;
				c.slotname = c.slotname || b.google_ad_slot;
				c.tag_origin = c.tag_origin || b.google_tag_origin
			})
		}, xd = function(a, b) {
			fa = (new Date).getTime();
			var c = p.google_ama;
			if (c && c.tags) c.tags.push(a);
			else {
				a: {
					if (a.enable_page_level_ads) {
						if ("string" == typeof a.google_ad_client) {
							c = !0;
							break a
						}
						throw new U("adsbygoogle.push() error: 'google_ad_client' is missing from the tag config.");
					}
					c = !1
				}
				if (c) od(a.google_ad_client),
				ud(a);
				else {
					var c = a.element,
						d = a.params;
					d && cb(d, function(a, c) {
						b[c] = a
					});
					if (c) {
						if (!cd(c) && (c = c.id ? kd(c.id) : null, !c)) throw new U("adsbygoogle.push() error: 'element' has already been filled.");
						if (!("innerHTML" in c)) throw new U("adsbygoogle.push() error: 'element' is not a good DOM element.");
					} else if (c = kd(), !c) throw new U("adsbygoogle.push() error: All ins elements in the DOM with class=adsbygoogle already have ads in them.");
					ed(c, b)
				}
			}
		}, sd = function() {
			lb("aa::main", wd, yd)
		}, yd = function() {
			var a = F.google_ad_modifications = F.google_ad_modifications || {};
			if (!a.plle) {
				a.plle = !0;
				a = a.loeids = a.loeids || [];
				ga("") && a.push("");
				var b = J.D,
					c = b.i;
				if (F.location && F.location.hash == "#google_plle_" + c) b = c;
				else {
					var b = [b.j, c],
						c = new ra(wb, wb + xb - 1),
						d;
					(d = 0 >= xb || xb % b.length) || (d = Zb.aa, d = !(d.start <= c.start && d.end >= c.end));
					d ? b = null : (d = Ea(F), b = null !== d && c.start <= d && c.end >= d ? b[(d - wb) % b.length] : null)
				}
				b && a.push(b);
				b = J.C;
				(b = ac(yb, b.j, b.i)) && a.push(b);
				b = J.F;
				(b = ac(zb, b.j, b.i)) && a.push(b);
				b = J.v;
				(b = ac(Ab, b.j, b.i)) && a.push(b);
				b = J.G;
				(b = ac(Gb, b.j, b.i)) && a.push(b);
				bb.body || (b = J.H, (b = ac(Hb, b.j, b.i)) && a.push(b))
			}
			if (!window.google_top_experiment && !window.google_top_js_status) if (a = window, 2 !== (a.top == a ? 0 : va(a.top) ? 1 : 2)) window.google_top_js_status = 0;
			else if (top.postMessage) {
				var e;
				try {
					e = F.top.frames.google_top_static_frame ? !0 : !1
				} catch (f) {
					e = !1
				}
				if (e) {
					if (window.google_top_experiment = v(["jp_c", "jp_zl", "jp_wfpmr",
						"jp_zlt", "jp_wnt"], vb), "jp_c" !== window.google_top_experiment) {
						eb(window, "message", Bc);
						window.google_top_js_status = 3;
						e = {
							0: "google_loc_request",
							1: Ac
						};
						var a = [],
							g;
						for (g in e) a.push(g + "=" + e[g]);
						top.postMessage(a.join("\n"), "*")
					}
				} else window.google_top_js_status = 2
			} else window.google_top_js_status = 1;
			g = window.adsbygoogle;
			qd(g);
			if (!g || !g.loaded) {
				window.adsbygoogle = {
					push: rd,
					loaded: !0
				};
				g && zd(g.onload);
				try {
					Object.defineProperty(window.adsbygoogle, "onload", {
						set: zd
					})
				} catch (f) {}
			}
		}, zd = function(a) {
			G(a) && window.setTimeout(a,
			0)
		};
	sd();
}).call(this);