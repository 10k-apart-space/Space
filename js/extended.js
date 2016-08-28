var addClass = function(el, class_name) {
    if (el.classList) {
        el.classList.add(class_name);
    } else {
        el.className += ' ' + class_name;
    }
};

var comets = [
    'images/comet.svg',
    'images/comet-1.svg'
];

var createComet = function(index) {
    var comet = document.createElement('img');

    addClass(comet, 'comet');
    comet.src = comets[index];
    document.body.appendChild(comet);

    return comet;
};

var getDocSize = function() {
    var
        w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth,
        b = d.body,
        y = Math.max(
            b.scrollHeight,
            b.offsetHeight,
            e.clientHeight,
            e.scrollHeight,
            e.offsetHeight
        );

    return [x, y];
};

var random = function(min, max) {
    return Math.floor((Math.random() * max) + min);
};

var spawnComent1 = function() {
    var comet = createComet(0);
    var window_size = getDocSize();
    var seed = random(1, Math.max(window_size[1] - 1002, 2));
    var time = random(10, 100);

    comet.style.top = '' + seed + 'px';
    comet.style.left = '-100px';

    TweenLite.to(comet, time, {
        top: '' + (seed + 1000) + 'px',
        left: '' + (window_size[0] + 100) + 'px',
        onComplete: function(el) {
            console.log('complete!');
            el.parentNode.removeChild(el);
        },
        onCompleteParams: [comet],
    });
};

var spawnComent2 = function() {
    var comet = createComet(1);
    var window_size = getDocSize();
    var seed = random(1, Math.max(window_size[1] - 1202, 2));
    var time = random(10, 100);

    comet.style.top = '' + seed + 'px';
    comet.style.left = '' + (window_size[0] + 100) + 'px';

    TweenLite.to(comet, time, {
        top: '' + (seed + 1200) + 'px',
        left: '-100px',
        onComplete: function(el) {
            console.log('complete!');
            el.parentNode.removeChild(el);
        },
        onCompleteParams: [comet],
    });
};

var runner1 = function() {
    var seed = random(5000, 10000);

    setTimeout(function() {
        spawnComent1();
        runner1();
    }, seed);
};

spawnComent1();
runner1();

var runner2 = function() {
    var seed = random(5000, 10000);

    setTimeout(function() {
        spawnComent2();
        runner2();
    }, seed);
};

spawnComent2();
runner2();
