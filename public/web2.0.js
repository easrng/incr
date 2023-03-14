var t=(t,e)=>function(){return e||t((e={exports:{}}).exports,e),e.exports},e=t((function(t,e){function n(t){return t.replace(/>\s+/g,">").replace(/<\s+/g,"<").trim()}function i(t){return"number"==typeof t?t:void 0===t||"string"!=typeof t?void 0:t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}var o=class{constructor({name:t,content:e=[],attrs:n={}}){this.name=t,this.content=e,this.attrs=n}render(){const t=Object.entries(this.attrs).map((([t,e])=>` ${t}="${i(e)}"`)).join("");if(this.content.length>0){const e=this.content.map((function(t){return t instanceof o?t.render():i(t)})).join(" ");return n(`<${this.name}${t}>${e}</${this.name}>`)}return n(`<${this.name}${t}/>`)}};e.exports={escapeXml:i,stripXmlWhitespace:n,XmlElement:o}})),n=t((function(t,n){var{XmlElement:i,escapeXml:o}=e();const r=document.createElementNS("http://www.w3.org/1999/xhtml","canvas").getContext("2d");function l({links:t}){const[e,n]=t||[],i=e&&e.length,o=n&&n.length;return{hasLink:i&&o,hasLeftLink:i,hasRightLink:o}}function s({links:t,leftWidth:e,rightWidth:n,height:i,accessibleText:r},s){const a=e+n;return o(t[0]),`\n    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${a}" height="${i}" ${function({accessibleText:t,links:e}){const{hasLink:n}=l({links:e});return n?"":`role="img" aria-label="${o(t)}"`}({links:t,accessibleText:r})} style="user-select:none">\n\n    ${function({accessibleText:t,links:e}){const{hasLink:n}=l({links:e});return n?"":`<title>${o(t)}</title>`}({accessibleText:r,links:t})}\n    <a href="javascript:;" style="cursor:pointer">${s}</a>\n    </svg>`}n.exports={social:function({label:t,message:e,links:n=[],logo:i,logoWidth:a,logoPadding:c,color:d="#4c1",labelColor:f="#555"}){var g;t=`${(g=t).charAt(0).toUpperCase()}${g.slice(1)}`;const{totalLogoWidth:h,renderedLogo:u}=function({logo:t,badgeHeight:e,horizPadding:n,logoWidth:i=14,logoPadding:r=0}){if(t){const l=14;return{hasLogo:!0,totalLogoWidth:i+r,renderedLogo:`<image x="${n}" y="${(e-l)/2}" width="${i}" height="${l}" xlink:href="${o(t)}"/>`}}return{hasLogo:!1,totalLogoWidth:0,renderedLogo:""}}({logo:i,badgeHeight:20,horizPadding:5,logoWidth:a,logoPadding:c}),m=e.length,p=(x=e,$={font:"bold 11px Helvetica"},r.font=$.font,(k=0|r.measureText(x).width)%2==0?k+1:k);var x,$,k;const b=53+h+10,y=p+8;let[L,v]=n;L=o(L),v=o(v);const{hasLeftLink:w,hasRightLink:A,hasLink:E}=l({links:n}),W=function({label:t,message:e}){return(t?`${t}: `:"")+e}({label:t,message:e});return s({links:n,leftWidth:b+1,rightWidth:m?6+y:0,accessibleText:W,height:20},`\n    <style>a:hover #llink{fill:url(#b);stroke:#ccc}a:hover #rlink{fill:#4183c4}.loading #rlink{fill-opacity:0.7;fill:inherit!important}</style>\n    <linearGradient id="a" x2="0" y2="100%">\n      <stop offset="0" stop-color="#fcfcfc" stop-opacity="0"/>\n      <stop offset="1" stop-opacity=".1"/>\n    </linearGradient>\n    <linearGradient id="b" x2="0" y2="100%">\n      <stop offset="0" stop-color="#ccc" stop-opacity=".1"/>\n      <stop offset="1" stop-opacity=".1"/>\n    </linearGradient>\n    <g stroke="#d5d5d5">\n      <rect stroke="none" fill="#fcfcfc" x="0.5" y="0.5" width="${b}" height="19" rx="2"/>\n      ${m?function(){const t=b+6+.5;return`\n      <rect x="${t}" y="0.5" width="${y}" height="19" rx="2" fill="#fafafa"/>\n      <rect x="${b+6}" y="7.5" width="0.5" height="5" stroke="#fafafa"/>\n      <path d="M${t} 6.5 l-3 3v1 l3 3" stroke="d5d5d5" fill="#fafafa"/>\n    `}():""}\n    </g>\n    ${u}\n    <g aria-hidden="${!E}" fill="#333" text-anchor="middle" font-family="Helvetica Neue,Helvetica,Arial,sans-serif" text-rendering="geometricPrecision" font-weight="700" font-size="110px" line-height="14px">\n      <rect id="llink" stroke="#d5d5d5" fill="url(#a)" x=".5" y=".5" width="63" height="19" rx="2"/>\n\t\t\t<text aria-hidden="true" x="315" y="150" fill="#fff" transform="scale(.1)" textLength="530">Increment</text>\n\t\t\t<text x="315" y="140" transform="scale(.1)" textLength="530">Increment</text>\n      ${m?function(){const t=10*(b+6+y/2),n=10*p,i=o(e);return`\n      ${`<text aria-hidden="true" x="${t}" y="150" fill="#fff" transform="scale(.1)" textLength="${n}">${i}</text>`}\n      ${`<text id="rlink" x="${t}" y="140" transform="scale(.1)" textLength="${n}">${i}</text>`}\n    `}():""}\n    </g>\n    `)}}})),{social:i}=n();let o=parseInt(document.querySelector("[data-count]").dataset.count),r=!1;const l=document.querySelector("a");l.addEventListener("click",(async()=>{if(!r){r=!0;try{document.documentElement.classList.add("loading"),await fetch("",{method:"post"}),o++,s()}finally{r=!1}}}));const s=()=>{const t=(new DOMParser).parseFromString(i({label:"Increment",message:o+"",links:["javascript:i()"]}),"image/svg+xml");for(let e of document.documentElement.getAttributeNames())t.documentElement.getAttribute(e)||document.documentElement.removeAttribute(e);for(let e of t.documentElement.getAttributeNames())document.documentElement.setAttribute(e,t.documentElement.getAttribute(e));document.title=t.title;const e=t.querySelector("a");for(let t of l.getAttributeNames())e.getAttribute(t)||l.removeAttribute(t);for(let t of e.getAttributeNames())l.setAttribute(t,e.getAttribute(t));l.innerHTML=e.innerHTML};s();