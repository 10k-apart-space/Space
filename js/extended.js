var addClass = function(el, class_name) {
    if (el.classList) {
        el.classList.add(class_name);
    } else {
        el.className += ' ' + class_name;
    }
};

var comet = document.createElement('img');
comet.src = 'images/comet.svg';
addClass(comet, 'comet');

document.body.appendChild(comet);

TweenLite.to(comet, 20, {
    top: '100rem',
    left: '100rem',
});
