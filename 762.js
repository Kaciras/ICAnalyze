(self.webpackChunkic_analyze=self.webpackChunkic_analyze||[]).push([[762],{8762:(n,r,e)=>{"use strict";e.r(r),e.d(r,{default:()=>t});const t=("file:///home/runner/work/ICAnalyze/ICAnalyze/deps/squoosh/codecs/avif/enc/avif_enc.js",function(n){var r,e,t;n=n||{},r||(r=void 0!==n?n:{}),r.ready=new Promise((function(n,r){e=n,t=r}));var a,i={};for(a in r)r.hasOwnProperty(a)&&(i[a]=r[a]);var o,u="";u=self.location.href,u=0!==(u="file:///home/runner/work/ICAnalyze/ICAnalyze/deps/squoosh/codecs/avif/enc/avif_enc.js").indexOf("blob:")?u.substr(0,u.lastIndexOf("/")+1):"",o=function(n){var r=new XMLHttpRequest;return r.open("GET",n,!1),r.responseType="arraybuffer",r.send(null),new Uint8Array(r.response)};var f=r.print||console.log.bind(console),c=r.printErr||console.warn.bind(console);for(a in i)i.hasOwnProperty(a)&&(r[a]=i[a]);i=null;var l,s=0;r.wasmBinary&&(l=r.wasmBinary),r.noExitRuntime&&r.noExitRuntime,"object"!=typeof WebAssembly&&V("no native wasm support detected");var p,h,y,v,d,m,g,w,b,A,_=!1,T=new TextDecoder("utf8"),C=new TextDecoder("utf-16le");function k(n,r){var e=n>>1;for(r=e+r/2;!(e>=r)&&m[e];)++e;return C.decode(v.subarray(n,e<<1))}function P(n,r,e){if(void 0===e&&(e=2147483647),2>e)return 0;var t=r;e=(e-=2)<2*n.length?e/2:n.length;for(var a=0;a<e;++a)d[r>>1]=n.charCodeAt(a),r+=2;return d[r>>1]=0,r-t}function W(n){return 2*n.length}function E(n,r){for(var e=0,t="";!(e>=r/4);){var a=g[n+4*e>>2];if(0==a)break;++e,65536<=a?(a-=65536,t+=String.fromCharCode(55296|a>>10,56320|1023&a)):t+=String.fromCharCode(a)}return t}function j(n,r,e){if(void 0===e&&(e=2147483647),4>e)return 0;var t=r;e=t+e-4;for(var a=0;a<n.length;++a){var i=n.charCodeAt(a);if(55296<=i&&57343>=i&&(i=65536+((1023&i)<<10)|1023&n.charCodeAt(++a)),g[r>>2]=i,(r+=4)+4>e)break}return g[r>>2]=0,r-t}function R(n){for(var r=0,e=0;e<n.length;++e){var t=n.charCodeAt(e);55296<=t&&57343>=t&&++e,r+=4}return r}function I(n){h=n,r.HEAP8=y=new Int8Array(n),r.HEAP16=d=new Int16Array(n),r.HEAP32=g=new Int32Array(n),r.HEAPU8=v=new Uint8Array(n),r.HEAPU16=m=new Uint16Array(n),r.HEAPU32=w=new Uint32Array(n),r.HEAPF32=b=new Float32Array(n),r.HEAPF64=A=new Float64Array(n)}var F=r.INITIAL_MEMORY||16777216;(p=r.wasmMemory?r.wasmMemory:new WebAssembly.Memory({initial:F/65536,maximum:32768}))&&(h=p.buffer),F=h.byteLength,I(h);var S,U=[],O=[],x=[],M=[];function z(){var n=r.preRun.shift();U.unshift(n)}var B=0,D=null,H=null;function V(n){throw r.onAbort&&r.onAbort(n),c(n),_=!0,n=new WebAssembly.RuntimeError("abort("+n+"). Build with -s ASSERTIONS=1 for more info."),t(n),n}function q(){var n=N;return String.prototype.startsWith?n.startsWith("data:application/octet-stream;base64,"):0===n.indexOf("data:application/octet-stream;base64,")}r.preloadedImages={},r.preloadedAudios={};var N="avif_enc.wasm";if(!q()){var L=N;N=r.locateFile?r.locateFile(L,u):u+L}function G(){try{if(l)return new Uint8Array(l);if(o)return o(N);throw"both async and sync fetching of the wasm failed"}catch(n){V(n)}}function J(n){for(;0<n.length;){var e=n.shift();if("function"==typeof e)e(r);else{var t=e.ia;"number"==typeof t?void 0===e.da?S.get(t)():S.get(t)(e.da):t(void 0===e.da?null:e.da)}}}var X=[null,[],[]],Y={},Z={};function $(n){for(;n.length;){var r=n.pop();n.pop()(r)}}function K(n){return this.fromWireType(w[n>>2])}var Q={},nn={},rn={};function en(n){if(void 0===n)return"_unknown";var r=(n=n.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return 48<=r&&57>=r?"_"+n:n}function tn(n,r){return n=en(n),new Function("body","return function "+n+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(r)}function an(n){var r=Error,e=tn(n,(function(r){this.name=n,this.message=r,void 0!==(r=Error(r).stack)&&(this.stack=this.toString()+"\n"+r.replace(/^Error(:[^\n]*)?\n/,""))}));return e.prototype=Object.create(r.prototype),e.prototype.constructor=e,e.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},e}var on=void 0;function un(n,r,e){function t(r){if((r=e(r)).length!==n.length)throw new on("Mismatched type converter count");for(var t=0;t<n.length;++t)hn(n[t],r[t])}n.forEach((function(n){rn[n]=r}));var a=Array(r.length),i=[],o=0;r.forEach((function(n,r){nn.hasOwnProperty(n)?a[r]=nn[n]:(i.push(n),Q.hasOwnProperty(n)||(Q[n]=[]),Q[n].push((function(){a[r]=nn[n],++o===i.length&&t(a)})))})),0===i.length&&t(a)}function fn(n){switch(n){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+n)}}var cn=void 0;function ln(n){for(var r="";v[n];)r+=cn[v[n++]];return r}var sn=void 0;function pn(n){throw new sn(n)}function hn(n,r,e){if(e=e||{},!("argPackAdvance"in r))throw new TypeError("registerType registeredInstance requires argPackAdvance");var t=r.name;if(n||pn('type "'+t+'" must have a positive integer typeid pointer'),nn.hasOwnProperty(n)){if(e.ma)return;pn("Cannot register type '"+t+"' twice")}nn[n]=r,delete rn[n],Q.hasOwnProperty(n)&&(r=Q[n],delete Q[n],r.forEach((function(n){n()})))}var yn=[],vn=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function dn(n){4<n&&0==--vn[n].ea&&(vn[n]=void 0,yn.push(n))}function mn(n){switch(n){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var r=yn.length?yn.pop():vn.length;return vn[r]={ea:1,value:n},r}}function gn(n){if(null===n)return"null";var r=typeof n;return"object"===r||"array"===r||"function"===r?n.toString():""+n}function wn(n,r){switch(r){case 2:return function(n){return this.fromWireType(b[n>>2])};case 3:return function(n){return this.fromWireType(A[n>>3])};default:throw new TypeError("Unknown float type: "+n)}}function bn(n,e){var t=-1!=(n=ln(n)).indexOf("j")?function(n,e){0<=n.indexOf("j")||V("Assertion failed: getDynCaller should only be called with i64 sigs");var t=[];return function(){t.length=arguments.length;for(var a=0;a<arguments.length;a++)t[a]=arguments[a];return-1!=n.indexOf("j")?t&&t.length?r["dynCall_"+n].apply(null,[e].concat(t)):r["dynCall_"+n].call(null,e):S.get(e).apply(null,t)}}(n,e):S.get(e);return"function"!=typeof t&&pn("unknown function pointer with signature "+n+": "+e),t}var An=void 0;function _n(n){var r=ln(n=Un(n));return Sn(n),r}function Tn(n,r,e){switch(r){case 0:return e?function(n){return y[n]}:function(n){return v[n]};case 1:return e?function(n){return d[n>>1]}:function(n){return m[n>>1]};case 2:return e?function(n){return g[n>>2]}:function(n){return w[n>>2]};default:throw new TypeError("Unknown integer type: "+n)}}var Cn={};function kn(){return"object"==typeof globalThis?globalThis:Function("return this")()}function Pn(n,r){var e=nn[n];return void 0===e&&pn(r+" has unknown type "+_n(n)),e}var Wn={};on=r.InternalError=an("InternalError");for(var En=Array(256),jn=0;256>jn;++jn)En[jn]=String.fromCharCode(jn);cn=En,sn=r.BindingError=an("BindingError"),r.count_emval_handles=function(){for(var n=0,r=5;r<vn.length;++r)void 0!==vn[r]&&++n;return n},r.get_first_emval=function(){for(var n=5;n<vn.length;++n)if(void 0!==vn[n])return vn[n];return null},An=r.UnboundTypeError=an("UnboundTypeError"),O.push({ia:function(){In()}});var Rn={N:function(){},s:function(){return 0},G:function(){return 0},H:function(){},z:function(n){var r=Z[n];delete Z[n];var e=r.na,t=r.oa,a=r.fa;un([n],a.map((function(n){return n.la})).concat(a.map((function(n){return n.qa}))),(function(n){var i={};return a.forEach((function(r,e){var t=n[e],o=r.ja,u=r.ka,f=n[e+a.length],c=r.pa,l=r.ra;i[r.ha]={read:function(n){return t.fromWireType(o(u,n))},write:function(n,r){var e=[];c(l,n,f.toWireType(e,r)),$(e)}}})),[{name:r.name,fromWireType:function(n){var r,e={};for(r in i)e[r]=i[r].read(n);return t(n),e},toWireType:function(n,r){for(var a in i)if(!(a in r))throw new TypeError('Missing field:  "'+a+'"');var o=e();for(a in i)i[a].write(o,r[a]);return null!==n&&n.push(t,o),o},argPackAdvance:8,readValueFromPointer:K,ca:t}]}))},J:function(n,r,e,t,a){var i=fn(e);hn(n,{name:r=ln(r),fromWireType:function(n){return!!n},toWireType:function(n,r){return r?t:a},argPackAdvance:8,readValueFromPointer:function(n){if(1===e)var t=y;else if(2===e)t=d;else{if(4!==e)throw new TypeError("Unknown boolean type size: "+r);t=g}return this.fromWireType(t[n>>i])},ca:null})},I:function(n,r){hn(n,{name:r=ln(r),fromWireType:function(n){var r=vn[n].value;return dn(n),r},toWireType:function(n,r){return mn(r)},argPackAdvance:8,readValueFromPointer:K,ca:null})},v:function(n,r,e){e=fn(e),hn(n,{name:r=ln(r),fromWireType:function(n){return n},toWireType:function(n,r){if("number"!=typeof r&&"boolean"!=typeof r)throw new TypeError('Cannot convert "'+gn(r)+'" to '+this.name);return r},argPackAdvance:8,readValueFromPointer:wn(r,e),ca:null})},y:function(n,e,t,a,i,o){var u=function(n,r){for(var e=[],t=0;t<n;t++)e.push(g[(r>>2)+t]);return e}(e,t);n=ln(n),i=bn(a,i),function(n,e,t){r.hasOwnProperty(n)?((void 0===t||void 0!==r[n].ba&&void 0!==r[n].ba[t])&&pn("Cannot register public name '"+n+"' twice"),function(n,e){var t=r;if(void 0===t[n].ba){var a=t[n];t[n]=function(){return t[n].ba.hasOwnProperty(arguments.length)||pn("Function '"+e+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+t[n].ba+")!"),t[n].ba[arguments.length].apply(this,arguments)},t[n].ba=[],t[n].ba[a.ga]=a}}(n,n),r.hasOwnProperty(t)&&pn("Cannot register multiple overloads of a function with the same number of arguments ("+t+")!"),r[n].ba[t]=e):(r[n]=e,void 0!==t&&(r[n].va=t))}(n,(function(){!function(n,r){var e=[],t={};throw r.forEach((function n(r){t[r]||nn[r]||(rn[r]?rn[r].forEach(n):(e.push(r),t[r]=!0))})),new An(n+": "+e.map(_n).join([", "]))}("Cannot call "+n+" due to unbound types",u)}),e-1),un([],u,(function(t){var a=n,u=n;t=[t[0],null].concat(t.slice(1));var f=i,c=t.length;2>c&&pn("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var l=null!==t[1]&&!1,s=!1,p=1;p<t.length;++p)if(null!==t[p]&&void 0===t[p].ca){s=!0;break}var h="void"!==t[0].name,y="",v="";for(p=0;p<c-2;++p)y+=(0!==p?", ":"")+"arg"+p,v+=(0!==p?", ":"")+"arg"+p+"Wired";u="return function "+en(u)+"("+y+") {\nif (arguments.length !== "+(c-2)+") {\nthrowBindingError('function "+u+" called with ' + arguments.length + ' arguments, expected "+(c-2)+" args!');\n}\n",s&&(u+="var destructors = [];\n");var d=s?"destructors":"null";for(y="throwBindingError invoker fn runDestructors retType classParam".split(" "),f=[pn,f,o,$,t[0],t[1]],l&&(u+="var thisWired = classParam.toWireType("+d+", this);\n"),p=0;p<c-2;++p)u+="var arg"+p+"Wired = argType"+p+".toWireType("+d+", arg"+p+"); // "+t[p+2].name+"\n",y.push("argType"+p),f.push(t[p+2]);if(l&&(v="thisWired"+(0<v.length?", ":"")+v),u+=(h?"var rv = ":"")+"invoker(fn"+(0<v.length?", ":"")+v+");\n",s)u+="runDestructors(destructors);\n";else for(p=l?1:2;p<t.length;++p)c=1===p?"thisWired":"arg"+(p-2)+"Wired",null!==t[p].ca&&(u+=c+"_dtor("+c+"); // "+t[p].name+"\n",y.push(c+"_dtor"),f.push(t[p].ca));if(h&&(u+="var ret = retType.fromWireType(rv);\nreturn ret;\n"),y.push(u+"}\n"),t=function(n){var r=Function;if(!(r instanceof Function))throw new TypeError("new_ called with constructor type "+typeof r+" which is not a function");var e=tn(r.name||"unknownFunctionName",(function(){}));return e.prototype=r.prototype,e=new e,(n=r.apply(e,n))instanceof Object?n:e}(y).apply(null,f),p=e-1,!r.hasOwnProperty(a))throw new on("Replacing nonexistant public symbol");return void 0!==r[a].ba&&void 0!==p?r[a].ba[p]=t:(r[a]=t,r[a].ga=p),[]}))},j:function(n,r,e,t,a){function i(n){return n}r=ln(r),-1===a&&(a=4294967295);var o=fn(e);if(0===t){var u=32-8*e;i=function(n){return n<<u>>>u}}var f=-1!=r.indexOf("unsigned");hn(n,{name:r,fromWireType:i,toWireType:function(n,e){if("number"!=typeof e&&"boolean"!=typeof e)throw new TypeError('Cannot convert "'+gn(e)+'" to '+this.name);if(e<t||e>a)throw new TypeError('Passing a number "'+gn(e)+'" from JS side to C/C++ side to an argument of type "'+r+'", which is outside the valid range ['+t+", "+a+"]!");return f?e>>>0:0|e},argPackAdvance:8,readValueFromPointer:Tn(r,o,0!==t),ca:null})},f:function(n,r,e){function t(n){var r=w;return new a(h,r[1+(n>>=2)],r[n])}var a=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][r];hn(n,{name:e=ln(e),fromWireType:t,argPackAdvance:8,readValueFromPointer:t},{ma:!0})},w:function(n,r){var e="std::string"===(r=ln(r));hn(n,{name:r,fromWireType:function(n){var r=w[n>>2];if(e)for(var t=n+4,a=0;a<=r;++a){var i=n+4+a;if(a==r||0==v[i]){if(t){for(var o=t+(i-t),u=t;!(u>=o)&&v[u];)++u;t=T.decode(v.subarray(t,u))}else t="";if(void 0===f)var f=t;else f+=String.fromCharCode(0),f+=t;t=i+1}}else{for(f=Array(r),a=0;a<r;++a)f[a]=String.fromCharCode(v[n+4+a]);f=f.join("")}return Sn(n),f},toWireType:function(n,r){r instanceof ArrayBuffer&&(r=new Uint8Array(r));var t="string"==typeof r;t||r instanceof Uint8Array||r instanceof Uint8ClampedArray||r instanceof Int8Array||pn("Cannot pass non-string to std::string");var a=(e&&t?function(){for(var n=0,e=0;e<r.length;++e){var t=r.charCodeAt(e);55296<=t&&57343>=t&&(t=65536+((1023&t)<<10)|1023&r.charCodeAt(++e)),127>=t?++n:n=2047>=t?n+2:65535>=t?n+3:n+4}return n}:function(){return r.length})(),i=Fn(4+a+1);if(w[i>>2]=a,e&&t)!function(n,r,e){var t=v;if(0<e){e=r+e-1;for(var a=0;a<n.length;++a){var i=n.charCodeAt(a);if(55296<=i&&57343>=i&&(i=65536+((1023&i)<<10)|1023&n.charCodeAt(++a)),127>=i){if(r>=e)break;t[r++]=i}else{if(2047>=i){if(r+1>=e)break;t[r++]=192|i>>6}else{if(65535>=i){if(r+2>=e)break;t[r++]=224|i>>12}else{if(r+3>=e)break;t[r++]=240|i>>18,t[r++]=128|i>>12&63}t[r++]=128|i>>6&63}t[r++]=128|63&i}}t[r]=0}}(r,i+4,a+1);else if(t)for(t=0;t<a;++t){var o=r.charCodeAt(t);255<o&&(Sn(i),pn("String has UTF-16 code units that do not fit in 8 bits")),v[i+4+t]=o}else for(t=0;t<a;++t)v[i+4+t]=r[t];return null!==n&&n.push(Sn,i),i},argPackAdvance:8,readValueFromPointer:K,ca:function(n){Sn(n)}})},p:function(n,r,e){if(e=ln(e),2===r)var t=k,a=P,i=W,o=function(){return m},u=1;else 4===r&&(t=E,a=j,i=R,o=function(){return w},u=2);hn(n,{name:e,fromWireType:function(n){for(var e,a=w[n>>2],i=o(),f=n+4,c=0;c<=a;++c){var l=n+4+c*r;c!=a&&0!=i[l>>u]||(f=t(f,l-f),void 0===e?e=f:(e+=String.fromCharCode(0),e+=f),f=l+r)}return Sn(n),e},toWireType:function(n,t){"string"!=typeof t&&pn("Cannot pass non-string to C++ string type "+e);var o=i(t),f=Fn(4+o+r);return w[f>>2]=o>>u,a(t,f+4,o+r),null!==n&&n.push(Sn,f),f},argPackAdvance:8,readValueFromPointer:K,ca:function(n){Sn(n)}})},A:function(n,r,e,t,a,i){Z[n]={name:ln(r),na:bn(e,t),oa:bn(a,i),fa:[]}},i:function(n,r,e,t,a,i,o,u,f,c){Z[n].fa.push({ha:ln(r),la:e,ja:bn(t,a),ka:i,qa:o,pa:bn(u,f),ra:c})},K:function(n,r){hn(n,{ua:!0,name:r=ln(r),argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},m:dn,M:function(n){if(0===n)return mn(kn());var r=Cn[n];return n=void 0===r?ln(n):r,mn(kn()[n])},x:function(n){4<n&&(vn[n].ea+=1)},D:function(n,e,t,a){n||pn("Cannot use deleted val. handle = "+n),n=vn[n].value;var i=Wn[e];if(!i){i="";for(var o=0;o<e;++o)i+=(0!==o?", ":"")+"arg"+o;var u="return function emval_allocator_"+e+"(constructor, argTypes, args) {\n";for(o=0;o<e;++o)u+="var argType"+o+" = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + "+o+'], "parameter '+o+'");\nvar arg'+o+" = argType"+o+".readValueFromPointer(args);\nargs += argType"+o+"['argPackAdvance'];\n";i=new Function("requireRegisteredType","Module","__emval_register",u+"var obj = new constructor("+i+");\nreturn __emval_register(obj);\n}\n")(Pn,r,mn),Wn[e]=i}return i(n,t,a)},h:function(){V()},e:function(n,r){throw zn(n,r||1),"longjmp"},E:function(n,r,e){v.copyWithin(n,r,r+e)},k:function(n){n>>>=0;var r=v.length;if(2147483648<n)return!1;for(var e=1;4>=e;e*=2){var t=r*(1+.2/e);t=Math.min(t,n+100663296),0<(t=Math.max(16777216,n,t))%65536&&(t+=65536-t%65536);n:{try{p.grow(Math.min(2147483648,t)-h.byteLength+65535>>>16),I(p.buffer);var a=1;break n}catch(n){}a=void 0}if(a)return!0}return!1},u:function(){return 0},F:function(n,r,e,t){return n=Y.ta(n),r=Y.sa(n,r,e),g[t>>2]=r,0},B:function(){},t:function(n,r,e,t){for(var a=0,i=0;i<e;i++){for(var o=g[r+8*i>>2],u=g[r+(8*i+4)>>2],l=0;l<u;l++){var s=v[o+l],p=X[n];if(0===s||10===s){for(s=0;p[s]&&!(NaN<=s);)++s;s=T.decode(p.subarray?p.subarray(0,s):new Uint8Array(p.slice(0,s))),(1===n?f:c)(s),p.length=0}else p.push(s)}a+=u}return g[t>>2]=a,0},c:function(){return 0|s},r:function(n,r,e){var t=xn();try{return S.get(n)(r,e)}catch(n){if(Mn(t),n!==n+0&&"longjmp"!==n)throw n;zn(1,0)}},C:function(n,r,e,t){var a=xn();try{return S.get(n)(r,e,t)}catch(n){if(Mn(a),n!==n+0&&"longjmp"!==n)throw n;zn(1,0)}},q:function(n,r,e,t,a){var i=xn();try{return S.get(n)(r,e,t,a)}catch(n){if(Mn(i),n!==n+0&&"longjmp"!==n)throw n;zn(1,0)}},l:function(n,r,e,t,a,i,o,u,f){var c=xn();try{return S.get(n)(r,e,t,a,i,o,u,f)}catch(n){if(Mn(c),n!==n+0&&"longjmp"!==n)throw n;zn(1,0)}},o:function(n,r){var e=xn();try{S.get(n)(r)}catch(n){if(Mn(e),n!==n+0&&"longjmp"!==n)throw n;zn(1,0)}},g:function(n,r,e){var t=xn();try{S.get(n)(r,e)}catch(n){if(Mn(t),n!==n+0&&"longjmp"!==n)throw n;zn(1,0)}},d:function(n,r,e,t,a){var i=xn();try{S.get(n)(r,e,t,a)}catch(n){if(Mn(i),n!==n+0&&"longjmp"!==n)throw n;zn(1,0)}},n:function(n,r,e,t,a,i,o,u,f,c,l){var s=xn();try{S.get(n)(r,e,t,a,i,o,u,f,c,l)}catch(n){if(Mn(s),n!==n+0&&"longjmp"!==n)throw n;zn(1,0)}},a:p,b:function(n){s=0|n},L:function(n){var r=Date.now()/1e3|0;return n&&(g[n>>2]=r),r}};!function(){function n(n){r.asm=n.exports,S=r.asm.O,B--,r.monitorRunDependencies&&r.monitorRunDependencies(B),0==B&&(null!==D&&(clearInterval(D),D=null),H&&(n=H,H=null,n()))}function e(r){n(r.instance)}function a(n){return(l||"function"!=typeof fetch?Promise.resolve().then(G):fetch(N,{credentials:"same-origin"}).then((function(n){if(!n.ok)throw"failed to load wasm binary file at '"+N+"'";return n.arrayBuffer()})).catch((function(){return G()}))).then((function(n){return WebAssembly.instantiate(n,i)})).then(n,(function(n){c("failed to asynchronously prepare wasm: "+n),V(n)}))}var i={a:Rn};if(B++,r.monitorRunDependencies&&r.monitorRunDependencies(B),r.instantiateWasm)try{return r.instantiateWasm(i,n)}catch(n){return c("Module.instantiateWasm callback failed with error: "+n),!1}(l||"function"!=typeof WebAssembly.instantiateStreaming||q()||"function"!=typeof fetch?a(e):fetch(N,{credentials:"same-origin"}).then((function(n){return WebAssembly.instantiateStreaming(n,i).then(e,(function(n){return c("wasm streaming compile failed: "+n),c("falling back to ArrayBuffer instantiation"),a(e)}))}))).catch(t)}();var In=r.___wasm_call_ctors=function(){return(In=r.___wasm_call_ctors=r.asm.P).apply(null,arguments)},Fn=r._malloc=function(){return(Fn=r._malloc=r.asm.Q).apply(null,arguments)},Sn=r._free=function(){return(Sn=r._free=r.asm.R).apply(null,arguments)},Un=r.___getTypeName=function(){return(Un=r.___getTypeName=r.asm.S).apply(null,arguments)};r.___embind_register_native_and_builtin_types=function(){return(r.___embind_register_native_and_builtin_types=r.asm.T).apply(null,arguments)};var On,xn=r.stackSave=function(){return(xn=r.stackSave=r.asm.U).apply(null,arguments)},Mn=r.stackRestore=function(){return(Mn=r.stackRestore=r.asm.V).apply(null,arguments)},zn=r._setThrew=function(){return(zn=r._setThrew=r.asm.W).apply(null,arguments)};function Bn(){function n(){if(!On&&(On=!0,r.calledRun=!0,!_)){if(J(O),J(x),e(r),r.onRuntimeInitialized&&r.onRuntimeInitialized(),r.postRun)for("function"==typeof r.postRun&&(r.postRun=[r.postRun]);r.postRun.length;){var n=r.postRun.shift();M.unshift(n)}J(M)}}if(!(0<B)){if(r.preRun)for("function"==typeof r.preRun&&(r.preRun=[r.preRun]);r.preRun.length;)z();J(U),0<B||(r.setStatus?(r.setStatus("Running..."),setTimeout((function(){setTimeout((function(){r.setStatus("")}),1),n()}),1)):n())}}if(r.dynCall_jiiiiiiiii=function(){return(r.dynCall_jiiiiiiiii=r.asm.X).apply(null,arguments)},r.dynCall_jiji=function(){return(r.dynCall_jiji=r.asm.Y).apply(null,arguments)},r.dynCall_jiiiiiiii=function(){return(r.dynCall_jiiiiiiii=r.asm.Z).apply(null,arguments)},r.dynCall_jiiiiii=function(){return(r.dynCall_jiiiiii=r.asm._).apply(null,arguments)},r.dynCall_jiiiii=function(){return(r.dynCall_jiiiii=r.asm.$).apply(null,arguments)},r.dynCall_iiijii=function(){return(r.dynCall_iiijii=r.asm.aa).apply(null,arguments)},H=function n(){On||Bn(),On||(H=n)},r.run=Bn,r.preInit)for("function"==typeof r.preInit&&(r.preInit=[r.preInit]);0<r.preInit.length;)r.preInit.pop()();return Bn(),n.ready})}}]);
//# sourceMappingURL=762.js.map