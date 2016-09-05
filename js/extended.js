var getTop = function() {
    return window.pageYOffset || document.documentElement.scrollTop;
};

var getOffset = function(el) {
    var rect = el.getBoundingClientRect();

    return {
        top: rect.top + document.body.scrollTop,
        left: rect.left + document.body.scrollLeft
    };
};

var spaceship = document.getElementById('spaceship');
var earth = document.getElementById('earth');

var last_top_thrusters = getTop();
var last_top_rot = getTop();
var thrusters_on = false;

window.onscroll = function() {
    var current_top = getTop();
    var earth_offset = getOffset(earth);
    var transform = '';
    var distance = earth_offset.top - current_top - 945;

    if (current_top > last_top_rot) {
        transform += 'rotate(0deg) ';
    } else {
        transform += 'rotate(180deg) ';
    }

    if (distance < 1000) {
        transform += 'scale(' + distance / 1000 + ')';
    }

    if (distance < 300) {
        spaceship.style.opacity = '0';
    } else {
        spaceship.style.opacity = '1';
    }

    spaceship.style.transform = transform;
    last_top_rot = current_top;
};

var animator = function() {
    setTimeout(function() {
        var current_top = getTop();

        if (current_top !== last_top_thrusters && false === thrusters_on) {
            spaceship.src = 'images/space-ship-thrusters.svg';
            thrusters_on = true;
        } else if (current_top === last_top_thrusters && true === thrusters_on) {
            spaceship.src = 'images/space-ship.svg';
            thrusters_on = false;
        }

        last_top_thrusters = getTop();

        animator();
    }, 100);
};

animator();
