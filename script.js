function isElementInViewport (el) {
    //special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
}

function onVisibilityChange(el, callback) {
    var old_visible;
    return function () {
        var visible = isElementInViewport(el);
        if (visible != old_visible) {
            old_visible = visible;
            if (typeof callback == 'function') {
                callback();
            }
        }
    }
}

var animationTime = 3000;



var s0 = Snap('#animated0');
var progress0 = s0.select('#progress0');

var handler0 = onVisibilityChange($('#progress0'), function() {
  progress0.attr({strokeDasharray: '0, 251.2'});
  Snap.animate(0,135, function( value ) {
      progress0.attr({ 'stroke-dasharray':value+',251.2'});
  }, animationTime);
});



var s1 = Snap('#animated1');
var progress1 = s1.select('#progress1');

var handler1 = onVisibilityChange($('#progress1'), function() {
  progress1.attr({strokeDasharray: '0, 251.2'});
  Snap.animate(0,62, function( value ) {
      progress1.attr({ 'stroke-dasharray':value+',251.2'});
  }, animationTime);
});



var s2 = Snap('#animated2');
var progress2 = s2.select('#progress2');

var handler2 = onVisibilityChange($('#progress2'), function() {
  progress2.attr({strokeDasharray: '0, 251.2'});
  Snap.animate(0,70, function( value ) {
      progress2.attr({ 'stroke-dasharray':value+',251.2'});
  }, animationTime);
});





//jQuery
$(window).on('DOMContentLoaded load resize scroll', handler0);
$(window).on('DOMContentLoaded load resize scroll', handler1);
$(window).on('DOMContentLoaded load resize scroll', handler2);
