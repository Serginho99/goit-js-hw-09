const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),l=document.querySelector("body");let r=null;e.addEventListener("click",(function(){e.setAttribute("disabled","disabled"),t.removeAttribute("disabled","disabled"),r=setInterval((()=>{l.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),t.addEventListener("click",(function(){e.removeAttribute("disabled","disabled"),t.setAttribute("disabled","disabled"),clearInterval(r)})),e.style.borderRadius="5px",t.style.borderRadius="5px",e.style.borderColor="transparent",t.style.borderColor="transparent",e.style.padding="10px 20px",t.style.padding="10px 20px",e.style.display="flex",t.style.display="flex",e.style.margin="0px auto 10px 650px",t.style.margin="0px auto",e.style.fontFamily="montserrat",e.style.fontSize="20px",t.style.fontFamily="montserrat",t.style.fontSize="20px";
//# sourceMappingURL=01-color-switcher.30e8ca88.js.map