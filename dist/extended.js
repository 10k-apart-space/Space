var addClass=function(e,t){e.classList?e.classList.add(t):e.className+=" "+t},comet=document.createElement("img");comet.src="images/comet.svg",addClass(comet,"comet"),document.body.appendChild(comet),TweenLite.to(comet,20,{top:"100rem",left:"100rem"});