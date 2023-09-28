const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]");let n;function o(){const e=getRandomHexColor();document.body.style.backgroundColor=e}e.addEventListener("click",(function(){e.disabled=!0,n=setInterval(o,1e3)})),t.addEventListener("click",(function(){e.disabled=!1,clearInterval(n)}));
//# sourceMappingURL=01-color-switcher.3994df37.js.map
