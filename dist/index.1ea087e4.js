window.dom={create:function(e){const t=document.createElement("template");return t.innerHTML=e,t.content.firstChild},style:function(e,t,n){if(2===arguments.length){if(t instanceof Object)for(let n in t)e.style[n]=t[n];else if("string"==typeof t)return e.style[t]}else 3===arguments.length&&(e.style[t]=n)},find:function(e,t){return(t||document).querySelectorAll(e)},each:function(e,t){for(let n=0;n<e.length;n++)t.call(null,e[n])}};
//# sourceMappingURL=index.1ea087e4.js.map
