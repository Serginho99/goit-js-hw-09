!function(){var t=document.querySelector("[data-start]");t.classList.add("btn");var e=document.querySelector("[data-stop]");e.classList.add("btn");var d=document.querySelector("body"),a=null;t.addEventListener("click",(function(){t.setAttribute("disabled","disabled"),e.removeAttribute("disabled","disabled"),a=setInterval((function(){d.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),e.addEventListener("click",(function(){t.removeAttribute("disabled","disabled"),e.setAttribute("disabled","disabled"),clearInterval(a)}))}();
//# sourceMappingURL=01-color-switcher.b2b912c9.js.map