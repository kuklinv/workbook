(()=>{"use strict";const t={previousCount:0,currentCount:0,totalCount:0};let e=0;const n=document.createElement("button");document.body.appendChild(n);const o=document.getElementById("previous"),u=document.getElementById("current"),c=document.getElementById("total");n.innerText="Click me",n.addEventListener("click",(()=>{var n,r;e++,n=e,r=e-1,t.previousCount=r,t.currentCount=n,t.totalCount+=n,o.innerText=countCache.previousCount,u.innerText=countCache.currentCount,c.innerText=countCache.total()}))})();