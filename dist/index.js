var ready=function(a){"loading"!=document.readyState?a():document.addEventListener?document.addEventListener("DOMContentLoaded",a):document.attachEvent("onreadystatechange",function(){"loading"!=document.readyState&&a()})};ready(function(){LazyLoad.css("https://fonts.googleapis.com/css?family=Raleway:400,700"),LazyLoad.js("https://cdnjs.cloudflare.com/ajax/libs/blazy/1.6.2/blazy.min.js",function(){new Blazy({offset:100})}),LazyLoad.css("dist/extended.css"),LazyLoad.js("https://cdnjs.cloudflare.com/ajax/libs/feature.js/1.0.1/feature.min.js",function(){feature.cssTransform&&feature.cssTransition&&feature.viewportUnit&&LazyLoad.css("dist/full.css")})});