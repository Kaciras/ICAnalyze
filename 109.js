(self.webpackChunkic_analyze=self.webpackChunkic_analyze||[]).push([[109],{9870:(t,e,r)=>{"use strict";r.d(e,{Jj:()=>u});const a=Symbol("Comlink.proxy"),i=Symbol("Comlink.endpoint"),n=Symbol("Comlink.releaseProxy"),d=Symbol("Comlink.thrown"),o=t=>"object"==typeof t&&null!==t||"function"==typeof t,h=new Map([["proxy",{canHandle:t=>o(t)&&t[a],serialize(t){const{port1:e,port2:r}=new MessageChannel;return u(t,e),[r,[r]]},deserialize:t=>(t.start(),l(t,[],undefined))}],["throw",{canHandle:t=>o(t)&&d in t,serialize({value:t}){let e;return e=t instanceof Error?{isError:!0,value:{message:t.message,name:t.name,stack:t.stack}}:{isError:!1,value:t},[e,[]]},deserialize(t){if(t.isError)throw Object.assign(new Error(t.value.message),t.value);throw t.value}}]]);function u(t,e=self){e.addEventListener("message",(function r(i){if(!i||!i.data)return;const{id:n,type:o,path:h}=Object.assign({path:[]},i.data),f=(i.data.argumentList||[]).map(g);let l;try{const e=h.slice(0,-1).reduce(((t,e)=>t[e]),t),r=h.reduce(((t,e)=>t[e]),t);switch(o){case 0:l=r;break;case 1:e[h.slice(-1)[0]]=g(i.data.value),l=!0;break;case 2:l=r.apply(e,f);break;case 3:l=function(t){return Object.assign(t,{[a]:!0})}(new r(...f));break;case 4:{const{port1:e,port2:r}=new MessageChannel;u(t,r),l=function(t,e){return c.set(t,e),t}(e,[e])}break;case 5:l=void 0}}catch(t){l={value:t,[d]:0}}Promise.resolve(l).catch((t=>({value:t,[d]:0}))).then((t=>{const[a,i]=w(t);e.postMessage(Object.assign(Object.assign({},a),{id:n}),i),5===o&&(e.removeEventListener("message",r),s(e))}))})),e.start&&e.start()}function s(t){(function(t){return"MessagePort"===t.constructor.name})(t)&&t.close()}function f(t){if(t)throw new Error("Proxy has been released and is not useable")}function l(t,e=[],r=function(){}){let a=!1;const d=new Proxy(r,{get(r,i){if(f(a),i===n)return()=>p(t,{type:5,path:e.map((t=>t.toString()))}).then((()=>{s(t),a=!0}));if("then"===i){if(0===e.length)return{then:()=>d};const r=p(t,{type:0,path:e.map((t=>t.toString()))}).then(g);return r.then.bind(r)}return l(t,[...e,i])},set(r,i,n){f(a);const[d,o]=w(n);return p(t,{type:1,path:[...e,i].map((t=>t.toString())),value:d},o).then(g)},apply(r,n,d){f(a);const o=e[e.length-1];if(o===i)return p(t,{type:4}).then(g);if("bind"===o)return l(t,e.slice(0,-1));const[h,u]=v(d);return p(t,{type:2,path:e.map((t=>t.toString())),argumentList:h},u).then(g)},construct(r,i){f(a);const[n,d]=v(i);return p(t,{type:3,path:e.map((t=>t.toString())),argumentList:n},d).then(g)}});return d}function v(t){const e=t.map(w);return[e.map((t=>t[0])),(r=e.map((t=>t[1])),Array.prototype.concat.apply([],r))];var r}const c=new WeakMap;function w(t){for(const[e,r]of h)if(r.canHandle(t)){const[a,i]=r.serialize(t);return[{type:3,name:e,value:a},i]}return[{type:0,value:t},c.get(t)||[]]}function g(t){switch(t.type){case 3:return h.get(t.name).deserialize(t.value);case 0:return t.value}}function p(t,e,r){return new Promise((a=>{const i=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");t.addEventListener("message",(function e(r){r.data&&r.data.id&&r.data.id===i&&(t.removeEventListener("message",e),a(r.data))})),t.start&&t.start(),t.postMessage(Object.assign({id:i},e),r)}))}},556:t=>{self,t.exports=(()=>{"use strict";var t={132:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.bezkrovnySsim=void 0;var a=r(490),i=r(971);function n(t,e,r){var i=t.data,n=e.data,d=r.bitDepth,o=r.k1,h=r.k2,u=Math.pow(2,d)-1,s=Math.pow(o*u,2),f=Math.pow(h*u,2),l=a.average(i),v=a.average(n),c=a.variance(i,l),w=a.variance(n,v);return(2*l*v+s)*(2*a.covariance(i,n,l,v)+f)/((Math.pow(l,2)+Math.pow(v,2)+s)*(c+w+f))}e.bezkrovnySsim=function(t,e,r){for(var a=r.windowSize,d=Math.ceil(t.width/a),o=Math.ceil(t.height/a),h=new Array(d*o),u=0,s=0;s<t.height;s+=a)for(var f=0;f<t.width;f+=a){var l=Math.min(a,t.width-f),v=Math.min(a,t.height-s),c=i.sub(t,f,v,s,l),w=i.sub(e,f,v,s,l);h[u++]=n(c,w,r)}return{data:h,width:d,height:o}}},63:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.defaults=void 0,e.defaults={windowSize:11,k1:.01,k2:.03,bitDepth:8,downsample:"original",ssim:"weber",maxSize:256,rgb2grayVersion:"integer"}},441:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.downsample=void 0;var a=r(490),i=r(971);function n(t,e,r){var a=i.imfilter(t,e,"symmetric","same");return i.skip2d(a,[0,r,a.height],[0,r,a.width])}e.downsample=function(t,e){return"original"===e.downsample?function(t,e,r){void 0===r&&(r=256);var d=Math.min(t.width,e.height)/r,o=Math.round(d);if(o>1){var h=i.ones(o);t=n(t,h=a.divide2d(h,a.sum2d(h)),o),e=n(e,h,o)}return[t,e]}(t[0],t[1],e.maxSize):t}},607:function(t,e,r){var a=this&&this.__assign||function(){return(a=Object.assign||function(t){for(var e,r=1,a=arguments.length;r<a;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.ssim=e.getOptions=void 0;var i=r(971),n=r(490),d=r(773),o=r(595),h=r(132),u=r(441),s=r(63),f=r(535),l={fast:d.ssim,original:o.originalSsim,bezkrovny:h.bezkrovnySsim,weber:f.weberSsim};function v(t){var e=a(a({},s.defaults),t);return function(t){if(Object.keys(t).forEach((function(t){if(!(t in s.defaults))throw new Error('"'+t+'" is not a valid option')})),"k1"in t&&("number"!=typeof t.k1||t.k1<0))throw new Error("Invalid k1 value. Default is "+s.defaults.k1);if("k2"in t&&("number"!=typeof t.k2||t.k2<0))throw new Error("Invalid k2 value. Default is "+s.defaults.k2);if(!(t.ssim in l))throw new Error("Invalid ssim option (use: "+Object.keys(l).join(", ")+")")}(e),e}function c(t,e,r){var a,d,o,h,s=(new Date).getTime(),f=function(t){var e=t[0],r=t[1],a=t[2];return l[a.ssim](e,r,a)}(function(t){var e=t[0],r=t[1],a=t[2],i=u.downsample([e,r],a);return[i[0],i[1],a]}((d=(a=function(t){var e=t[0],r=t[1],a=t[2];if(e.width!==r.width||e.height!==r.height)throw new Error("Image dimensions do not match");return[e,r,a]}([t,e,v(r)]))[0],o=a[1],"original"===(h=a[2]).rgb2grayVersion?[i.rgb2gray(d),i.rgb2gray(o),h]:[i.rgb2grayInteger(d),i.rgb2grayInteger(o),h])));return{mssim:void 0!==f.mssim?f.mssim:n.mean2d(f),ssim_map:f,performance:(new Date).getTime()-s}}e.getOptions=v,e.ssim=c,e.default=c},490:(t,e)=>{function r(t){return a(t)/t.length}function a(t){for(var e=0,r=0;r<t.length;r++)e+=t[r];return e}function i(t){for(var e=t.data,r=0,a=0;a<e.length;a++)r+=e[a];return r}function n(t,e){for(var r=t.data,a=t.width,i=t.height,n=new Array(r.length),d=0;d<r.length;d++)n[d]=r[d]+e;return{data:n,width:a,height:i}}function d(t,e){return"number"==typeof e?function(t,e){for(var r=t.data,a=t.width,i=t.height,n=new Array(r.length),d=0;d<r.length;d++)n[d]=r[d]*e;return{data:n,width:a,height:i}}(t,e):function(t,e){for(var r=t.data,a=t.width,i=t.height,n=e.data,d=new Array(r.length),o=0;o<r.length;o++)d[o]=r[o]*n[o];return{data:d,width:a,height:i}}(t,e)}Object.defineProperty(e,"__esModule",{value:!0}),e.covariance=e.variance=e.mean2d=e.square2d=e.multiply2d=e.divide2d=e.subtract2d=e.add2d=e.sum2d=e.floor=e.sum=e.average=void 0,e.average=r,e.sum=a,e.floor=function(t){for(var e=new Array(t.length),r=0;r<t.length;r++)e[r]=Math.floor(t[r]);return e},e.sum2d=i,e.add2d=function(t,e){return"number"==typeof e?n(t,e):function(t,e){for(var r=t.data,a=t.width,i=t.height,n=e.data,d=new Array(r.length),o=0;o<i;o++)for(var h=o*a,u=0;u<a;u++)d[h+u]=r[h+u]+n[h+u];return{data:d,width:a,height:i}}(t,e)},e.subtract2d=function(t,e){return"number"==typeof e?n(t,-e):function(t,e){for(var r=t.data,a=t.width,i=t.height,n=e.data,d=new Array(r.length),o=0;o<i;o++)for(var h=o*a,u=0;u<a;u++)d[h+u]=r[h+u]-n[h+u];return{data:d,width:a,height:i}}(t,e)},e.divide2d=function(t,e){return"number"==typeof e?function(t,e){for(var r=t.data,a=t.width,i=t.height,n=new Array(r.length),d=0;d<r.length;d++)n[d]=r[d]/e;return{data:n,width:a,height:i}}(t,e):function(t,e){for(var r=t.data,a=t.width,i=t.height,n=e.data,d=new Array(r.length),o=0;o<r.length;o++)d[o]=r[o]/n[o];return{data:d,width:a,height:i}}(t,e)},e.multiply2d=d,e.square2d=function(t){return d(t,t)},e.mean2d=function(t){return i(t)/t.data.length},e.variance=function(t,e){void 0===e&&(e=r(t));for(var a=0,i=t.length;i--;)a+=Math.pow(t[i]-e,2);return a/t.length},e.covariance=function(t,e,a,i){void 0===a&&(a=r(t)),void 0===i&&(i=r(e));for(var n=0,d=t.length;d--;)n+=(t[d]-a)*(e[d]-i);return n/t.length}},687:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.conv2=void 0;var a=r(490),i=r(298),n=r(118),d=r(799);function o(t,e,r){var a=t.data,i=t.width,n=t.height;void 0===r&&(r="full");for(var o=i+e.width-1,h=n+e.height-1,u=d.zeros(h,o).data,s=0;s<e.height;s++)for(var l=0;l<e.width;l++){var v=e.data[s*e.width+l];if(v)for(var c=0;c<n;c++)for(var w=0;w<i;w++)u[(c+s)*o+w+l]+=a[c*i+w]*v}return f({data:u,width:o,height:h},r,n,e.height,i,e.width)}function h(t,e,r){var n=e.data,d=e.width,o=e.height;void 0===r&&(r="full");var h=s(t,i.ones(o,1),i.ones(1,d),r);return a.multiply2d(h,n[0])}function u(t){for(var e=t.data,r=e[0],a=1;a<e.length;a++)if(e[a]!==r)return!1;return!0}function s(t,e,r,a){void 0===a&&(a="full");var i=Math.max(e.height,e.width),n=Math.max(r.height,r.width),d=o(t,e,"full");return f(o(d,r,"full"),a,t.height,i,t.width,n)}function f(t,e,r,a,i,d){if("full"===e)return t;if("same"===e){var o=Math.ceil((t.height-r)/2),h=Math.ceil((t.width-i)/2);return n.sub(t,o,r,h,i)}return n.sub(t,a-1,r-a+1,d-1,i-d+1)}e.conv2=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return t[2]&&t[2].data?s.apply(void 0,t):u(t[1])?h.apply(void 0,t):o.apply(void 0,t)}},346:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.filter2=void 0;var a=r(687);e.filter2=function(t,e,r){return void 0===r&&(r="same"),a.conv2(e,function(t){for(var e=t.data,r=t.width,a=t.height,i=new Array(e.length),n=0;n<a;n++)for(var d=0;d<r;d++)i[n*r+d]=e[(a-1-n)*r+r-1-d];return{data:i,width:r,height:a}}(t),r)}},470:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.fspecial=void 0;var a=r(490);e.fspecial=function(t,e,r){void 0===e&&(e=3),void 0===r&&(r=1.5);var i=function(t,e){for(var r=t.data,a=t.width,i=t.height,n=new Array(r.length),d=0;d<r.length;d++)n[d]=Math.exp(-r[d]/(2*Math.pow(e,2)));return{data:n,width:a,height:i}}(function(t){for(var e=2*t+1,r=new Array(Math.pow(e,2)),a=0;a<e;a++)for(var i=0;i<e;i++)r[a*e+i]=Math.pow(a-t,2)+Math.pow(i-t,2);return{data:r,width:e,height:e}}(e=(e-1)/2),r),n=a.sum2d(i);return a.divide2d(i,n)}},521:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.imfilter=void 0;var a=r(20),i=r(389),n=r(490),d=r(346);e.imfilter=function(t,e,r,o){return void 0===r&&(r="symmetric"),void 0===o&&(o="same"),t=function(t,e,r,d){if(t=i.padarray(t,n.floor([e/2,r/2]),d),0===a.mod(e,2)&&(t.data=t.data.slice(0,-t.width),t.height--),0===a.mod(r,2)){for(var o=[],h=0;h<t.data.length;h++)(h+1)%t.width!=0&&o.push(t.data[h]);t.data=o,t.width--}return t}(t,e.width,e.height,r),o=function(t){return"same"===t&&(t="valid"),t}(o),d.filter2(e,t,o)}},971:function(t,e,r){var a=this&&this.__createBinding||(Object.create?function(t,e,r,a){void 0===a&&(a=r),Object.defineProperty(t,a,{enumerable:!0,get:function(){return e[r]}})}:function(t,e,r,a){void 0===a&&(a=r),t[a]=e[r]}),i=this&&this.__exportStar||function(t,e){for(var r in t)"default"===r||Object.prototype.hasOwnProperty.call(e,r)||a(e,t,r)};Object.defineProperty(e,"__esModule",{value:!0}),i(r(687),e),i(r(346),e),i(r(470),e),i(r(521),e),i(r(150),e),i(r(298),e),i(r(389),e),i(r(582),e),i(r(439),e),i(r(118),e),i(r(240),e),i(r(799),e)},928:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.numbers=void 0,e.numbers=function(t,e,r){for(var a=e*t,i=new Array(a),n=0;n<a;n++)i[n]=r;return{data:i,width:e,height:t}}},20:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.mod=void 0,e.mod=function(t,e){return t-e*Math.floor(t/e)}},150:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.normpdf=void 0,e.normpdf=function(t,e,r){var a=t.data,i=t.width,n=t.height;void 0===e&&(e=0),void 0===r&&(r=1);for(var d=new Array(a.length),o=0;o<a.length;o++){var h=(a[o]-e)/r;d[o]=Math.exp(-Math.pow(h,2)/2)/(2.5066282746310007*r)}return{data:d,width:i,height:n}}},298:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.ones=void 0;var a=r(928);e.ones=function(t,e){return void 0===e&&(e=t),a.numbers(t,e,1)}},389:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.padarray=void 0;var a=r(20);e.padarray=function(t,e,r,i){var n=e[0],d=e[1];return t.height>=n&&t.width>=d?function(t,e){for(var r=e[0],a=e[1],i=t.width+2*a,n=t.height+2*r,d=new Array(i*n),o=-r;o<0;o++){for(var h=-a;h<0;h++)d[(o+r)*i+h+a]=t.data[(Math.abs(o)-1)*t.width+Math.abs(h)-1];for(h=0;h<t.width;h++)d[(o+r)*i+h+a]=t.data[(Math.abs(o)-1)*t.width+h];for(h=t.width;h<t.width+a;h++)d[(o+r)*i+h+a]=t.data[(Math.abs(o)-1)*t.width+2*t.width-h-1]}for(o=0;o<t.height;o++){for(h=-a;h<0;h++)d[(o+r)*i+h+a]=t.data[o*t.width+Math.abs(h)-1];for(h=0;h<t.width;h++)d[(o+r)*i+h+a]=t.data[o*t.width+h];for(h=t.width;h<t.width+a;h++)d[(o+r)*i+h+a]=t.data[o*t.width+2*t.width-h-1]}for(o=t.height;o<t.height+r;o++){for(h=-a;h<0;h++)d[(o+r)*i+h+a]=t.data[(2*t.height-o-1)*t.width+Math.abs(h)-1];for(h=0;h<t.width;h++)d[(o+r)*i+h+a]=t.data[(2*t.height-o-1)*t.width+h];for(h=t.width;h<t.width+a;h++)d[(o+r)*i+h+a]=t.data[(2*t.height-o-1)*t.width+2*t.width-h-1]}return{data:d,width:i,height:n}}(t,[n,d]):function(t,e){for(var r=function(t,e){return{data:t.data.concat(e.data),height:t.height+e.height,width:t.width}}(t,function(t){for(var e=t.data,r=t.width,a=t.height,i=new Array(e.length),n=0;n<a;n++)for(var d=0;d<r;d++)i[n*r+d]=e[(a-1-n)*r+d];return{data:i,width:r,height:a}}(t)),i=t.height+2*e,n=new Array(t.width*i),d=-e;d<t.height+e;d++)for(var o=0;o<t.width;o++)n[(d+e)*t.width+o]=r.data[a.mod(d,r.height)*t.width+o];return{data:n,width:t.width,height:i}}(function(t,e){for(var r=t.width+2*e,i=new Array(r*t.height),n=function(t,e){for(var r=t.width+e.width,a=new Array(t.height*r),i=0;i<t.height;i++){for(var n=0;n<t.width;n++)a[i*r+n]=t.data[i*t.width+n];for(n=0;n<e.width;n++)a[i*r+n+t.width]=e.data[i*e.width+n]}return{data:a,width:r,height:t.height}}(t,function(t){for(var e=t.data,r=t.width,a=t.height,i=new Array(e.length),n=0;n<a;n++)for(var d=0;d<r;d++)i[n*r+d]=e[n*r+r-1-d];return{data:i,width:r,height:a}}(t)),d=0;d<t.height;d++)for(var o=-e;o<t.width+e;o++)i[d*r+o+e]=n.data[d*n.width+a.mod(o,n.width)];return{data:i,width:r,height:t.height}}(t,d),n)}},582:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.rgb2grayInteger=e.rgb2gray=void 0,e.rgb2gray=function(t){for(var e=t.data,r=t.width,a=t.height,i=new Uint8Array(r*a),n=0;n<e.length;n+=4)i[n/4]=.29894*e[n]+.58704*e[n+1]+.11402*e[n+2]+.5;return{data:Array.from(i),width:r,height:a}},e.rgb2grayInteger=function(t){for(var e=t.data,r=t.width,a=t.height,i=new Array(r*a),n=0;n<e.length;n+=4)i[n/4]=77*e[n]+150*e[n+1]+29*e[n+2]+128>>8;return{data:i,width:r,height:a}}},439:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.skip2d=void 0,e.skip2d=function(t,e,r){for(var a=e[0],i=e[1],n=e[2],d=r[0],o=r[1],h=r[2],u=Math.ceil((h-d)/o),s=Math.ceil((n-a)/i),f=new Array(u*s),l=0;l<s;l++)for(var v=0;v<u;v++){var c=a+l*i,w=d+v*o;f[l*u+v]=t.data[c*t.width+w]}return{data:f,width:u,height:s}}},118:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.sub=void 0,e.sub=function(t,e,r,a,i){for(var n=t.data,d=t.width,o=new Array(i*r),h=0;h<r;h++)for(var u=0;u<i;u++)o[h*i+u]=n[(a+h)*d+e+u];return{data:o,width:i,height:r}}},240:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.transpose=void 0,e.transpose=function(t){for(var e=t.data,r=t.width,a=t.height,i=new Array(r*a),n=0;n<a;n++)for(var d=0;d<r;d++)i[d*a+n]=e[n*r+d];return{data:i,height:r,width:a}}},799:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.zeros=void 0;var a=r(928);e.zeros=function(t,e){return void 0===e&&(e=t),a.numbers(t,e,0)}},595:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.originalSsim=void 0;var a=r(490),i=r(971);e.originalSsim=function(t,e,r){var n=i.fspecial("gaussian",r.windowSize,1.5),d=Math.pow(2,r.bitDepth)-1,o=Math.pow(r.k1*d,2),h=Math.pow(r.k2*d,2);n=a.divide2d(n,a.sum2d(n));var u=i.filter2(n,t,"valid"),s=i.filter2(n,e,"valid"),f=a.square2d(u),l=a.square2d(s),v=a.multiply2d(u,s),c=a.square2d(t),w=a.square2d(e),g=a.subtract2d(i.filter2(n,c,"valid"),f),p=a.subtract2d(i.filter2(n,w,"valid"),l),m=a.subtract2d(i.filter2(n,a.multiply2d(t,e),"valid"),v);if(o>0&&h>0){var y=a.add2d(a.multiply2d(v,2),o),b=a.add2d(a.multiply2d(m,2),h),M=a.add2d(a.add2d(f,l),o),_=a.add2d(a.add2d(g,p),h);return a.divide2d(a.multiply2d(y,b),a.multiply2d(M,_))}var k=a.multiply2d(v,2),O=a.multiply2d(m,2),j=a.add2d(f,l),A=a.add2d(g,p);return a.divide2d(a.multiply2d(k,O),a.multiply2d(j,A))}},773:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.ssim=void 0;var a=r(490),i=r(971);e.ssim=function(t,e,r){var n=i.normpdf(function(t){for(var e=Math.floor(t/2),r=new Array(2*e+1),a=-e;a<=e;a++)r[a+e]=Math.abs(a);return{data:r,width:r.length,height:1}}(r.windowSize),0,1.5),d=Math.pow(2,r.bitDepth)-1,o=Math.pow(r.k1*d,2),h=Math.pow(r.k2*d,2);n=a.divide2d(n,a.sum2d(n));var u=i.transpose(n),s=i.conv2(t,n,u,"valid"),f=i.conv2(e,n,u,"valid"),l=a.square2d(s),v=a.square2d(f),c=a.multiply2d(s,f),w=a.square2d(t),g=a.square2d(e),p=a.subtract2d(i.conv2(w,n,u,"valid"),l),m=a.subtract2d(i.conv2(g,n,u,"valid"),v),y=a.subtract2d(i.conv2(a.multiply2d(t,e),n,u,"valid"),c);return o>0&&h>0?function(t,e,r,i,n,d,o,h){var u=a.add2d(a.multiply2d(t,2),o),s=a.add2d(a.multiply2d(e,2),h),f=a.add2d(a.add2d(r,i),o),l=a.add2d(a.add2d(n,d),h);return a.divide2d(a.multiply2d(u,s),a.multiply2d(f,l))}(c,y,l,v,p,m,o,h):function(t,e,r,i,n,d){var o=a.multiply2d(t,2),h=a.multiply2d(e,2),u=a.add2d(r,i),s=a.add2d(n,d);return a.divide2d(a.multiply2d(o,h),a.multiply2d(u,s))}(c,y,l,v,p,m)}},535:function(t,e){var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,r=1,a=arguments.length;r<a;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};function a(t,e,r,a){return{rightEdge:r[e*a+t+1],bottomEdge:r[(e+1)*a+t],bottomRightEdge:r[(e+1)*a+t+1]}}function i(t,e){for(var r=t.width,i=t.height,n=t.data,d=r+1,o=i+1,h=new Int32Array(d*o),u=i-1;u>=0;--u)for(var s=r-1;s>=0;--s){var f=a(s,u,h,d),l=f.rightEdge,v=f.bottomEdge,c=f.bottomRightEdge;h[u*d+s]=e(n[u*r+s],s,u)+l+v-c}return{data:h,height:o,width:d}}function n(t,e,r){for(var i=t.width,n=t.height,d=t.data,o=e.data,h=i+1,u=n+1,s=new Int32Array(h*u),f=n-1;f>=0;--f)for(var l=i-1;l>=0;--l){var v=a(l,f,s,h),c=v.rightEdge,w=v.bottomEdge,g=v.bottomRightEdge,p=f*i+l;s[f*h+l]=r(d[p],o[p],l,f)+c+w-g}return{data:s,height:u,width:h}}function d(t,e,r){for(var a=t.width,i=t.height,n=t.data,d=a-1,o=i-1,h=d-e+1,u=o-e+1,s=new Int32Array(h*u),f=0;f<o;++f)for(var l=0;l<d;++l)if(l<h&&f<u){var v=n[a*f+l]-n[a*f+l+e]-n[a*(f+e)+l]+n[a*(f+e)+l+e];s[f*h+l]=v/r}return{height:u,width:h,data:s}}function o(t,e){return d(i(t,(function(t){return t})),e,1)}function h(t,e,r){for(var a=r*r,n=d(i(t,(function(t){return t*t})),r,1),o=0;o<e.data.length;++o){var h=e.data[o]/a,u=n.data[o]/a,s=h*h;n.data[o]=1024*(u-s)}return n}function u(t,e,r,a,i){for(var o=i*i,h=d(n(t,e,(function(t,e){return t*e})),i,1),u=0;u<r.data.length;++u)h.data[u]=1024*(h.data[u]/o-r.data[u]/o*(a.data[u]/o));return h}Object.defineProperty(e,"__esModule",{value:!0}),e.weberSsim=e.windowCovariance=e.windowVariance=e.windowSums=e.windowMatrix=e.partialSumMatrix2=e.partialSumMatrix1=void 0,e.partialSumMatrix1=i,e.partialSumMatrix2=n,e.windowMatrix=d,e.windowSums=o,e.windowVariance=h,e.windowCovariance=u,e.weberSsim=function(t,e,a){for(var i=a.bitDepth,n=a.k1,d=a.k2,s=a.windowSize,f=Math.pow(2,i)-1,l=n*f*(n*f),v=d*f*(d*f),c=s*s,w=r(r({},t),{data:Int32Array.from(t.data,(function(t){return t+.5}))}),g=r(r({},e),{data:Int32Array.from(e.data,(function(t){return t+.5}))}),p=o(w,s),m=h(w,p,s),y=o(g,s),b=h(g,y,s),M=u(w,g,p,y,s),_=p.data.length,k=0,O=new Array(_),j=0;j<_;++j){var A=p.data[j]/c,S=y.data[j]/c,P=m.data[j]/1024,E=b.data[j]/1024,x=(2*A*S+l)*(M.data[j]/1024*2+v)/(A*A+S*S+l)/(P+E+v);O[j]=x,0==j?k=x:k+=(x-k)/(j+1)}return{data:O,width:p.width,height:p.height,mssim:k}}}},e={};return function r(a){if(e[a])return e[a].exports;var i=e[a]={exports:{}};return t[a].call(i.exports,i,i.exports,r),i.exports}(607)})()}}]);
//# sourceMappingURL=109.js.map