(function() {
    'use strict';

    var exports = {};

    exports.cover = function(sw, sh, dw, dh) {
        var ar = sw / sh;
        if (dh * ar < dw) {
            return {
                width: dw,
                height: dw / ar
            }
        } else {
            return {
                width: dh * ar,
                height: dh
            }
        }
    }

    exports.contain = function(sw, sh, dw, dh) {
        var ar = sw / sh;
        if (dh * ar < dw) {
            return {
                width: dh * ar,
                height: dh
            }
        } else {
            return {
                width: dw,
                height: dw / ar
            }
        }
    }

    exports.fit = function(sw, sh, dw, dh) {
        var mnw = dw > sw ? 0 : dw;
        var mnh = dh > sh ? 0 : dh;
        var mx = this.contain(sw, sh, dw, dh);
        var mn = this.cover(sw, sh, mnw, mnh);
        return {
            width: Math.min(mx.width, Math.max(mn.width, sw)),
            height: Math.min(mx.height, Math.max(mn.height, sh)),
        }
    }

    if (typeof(window.sizeAdjuster) === "undefined") {
        window.sizeAdjuster = exports;
    }
})();