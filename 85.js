(self.webpackChunkic_analyzer=self.webpackChunkic_analyzer||[]).push([[85],{3085:(n,r,e)=>{"use strict";e.r(r),e.d(r,{default:()=>t});const t=("file:///home/runner/work/ICAnalyzer/ICAnalyzer/deps/squoosh/codecs/mozjpeg/enc/mozjpeg_enc.js",function(n){var r,e,t;n=n||{},r||(r=void 0!==n?n:{}),r.ready=new Promise((function(n,r){e=n,t=r}));var o,a={};for(o in r)r.hasOwnProperty(o)&&(a[o]=r[o]);var i="./this.program";function u(n,r){throw r}var f,c="";c=self.location.href,c=0!==(c="file:///home/runner/work/ICAnalyzer/ICAnalyzer/deps/squoosh/codecs/mozjpeg/enc/mozjpeg_enc.js").indexOf("blob:")?c.substr(0,c.lastIndexOf("/")+1):"",f=function(n){var r=new XMLHttpRequest;return r.open("GET",n,!1),r.responseType="arraybuffer",r.send(null),new Uint8Array(r.response)};var s,l,p=r.print||console.log.bind(console),h=r.printErr||console.warn.bind(console);for(o in a)a.hasOwnProperty(o)&&(r[o]=a[o]);a=null,r.thisProgram&&(i=r.thisProgram),r.quit&&(u=r.quit),r.wasmBinary&&(s=r.wasmBinary),r.noExitRuntime&&(l=r.noExitRuntime),"object"!=typeof WebAssembly&&V("no native wasm support detected");var v,y,d,m,g,w,b,A,_,T,E=!1,P=new TextDecoder("utf8"),C=new TextDecoder("utf-16le");function W(n,r){var e=n>>1;for(r=e+r/2;!(e>=r)&&w[e];)++e;return C.decode(m.subarray(n,e<<1))}function k(n,r,e){if(void 0===e&&(e=2147483647),2>e)return 0;var t=r;e=(e-=2)<2*n.length?e/2:n.length;for(var o=0;o<e;++o)g[r>>1]=n.charCodeAt(o),r+=2;return g[r>>1]=0,r-t}function R(n){return 2*n.length}function I(n,r){for(var e=0,t="";!(e>=r/4);){var o=b[n+4*e>>2];if(0==o)break;++e,65536<=o?(o-=65536,t+=String.fromCharCode(55296|o>>10,56320|1023&o)):t+=String.fromCharCode(o)}return t}function F(n,r,e){if(void 0===e&&(e=2147483647),4>e)return 0;var t=r;e=t+e-4;for(var o=0;o<n.length;++o){var a=n.charCodeAt(o);if(55296<=a&&57343>=a&&(a=65536+((1023&a)<<10)|1023&n.charCodeAt(++o)),b[r>>2]=a,(r+=4)+4>e)break}return b[r>>2]=0,r-t}function U(n){for(var r=0,e=0;e<n.length;++e){var t=n.charCodeAt(e);55296<=t&&57343>=t&&++e,r+=4}return r}function j(n){y=n,r.HEAP8=d=new Int8Array(n),r.HEAP16=g=new Int16Array(n),r.HEAP32=b=new Int32Array(n),r.HEAPU8=m=new Uint8Array(n),r.HEAPU16=w=new Uint16Array(n),r.HEAPU32=A=new Uint32Array(n),r.HEAPF32=_=new Float32Array(n),r.HEAPF64=T=new Float64Array(n)}var O=r.INITIAL_MEMORY||16777216;(v=r.wasmMemory?r.wasmMemory:new WebAssembly.Memory({initial:O/65536,maximum:32768}))&&(y=v.buffer),O=y.byteLength,j(y);var S,x=[],M=[],z=[],H=[];function J(){var n=r.preRun.shift();x.unshift(n)}var N=0,B=null,D=null;function V(n){throw r.onAbort&&r.onAbort(n),h(n),E=!0,n=new WebAssembly.RuntimeError("abort("+n+"). Build with -s ASSERTIONS=1 for more info."),t(n),n}function K(){var n=L;return String.prototype.startsWith?n.startsWith("data:application/octet-stream;base64,"):0===n.indexOf("data:application/octet-stream;base64,")}r.preloadedImages={},r.preloadedAudios={};var L="mozjpeg_enc.wasm";if(!K()){var q=L;L=r.locateFile?r.locateFile(q,c):c+q}function G(){try{if(s)return new Uint8Array(s);if(f)return f(L);throw"both async and sync fetching of the wasm failed"}catch(n){V(n)}}function X(n){for(;0<n.length;){var e=n.shift();if("function"==typeof e)e(r);else{var t=e.R;"number"==typeof t?void 0===e.L?S.get(t)():S.get(t)(e.L):t(void 0===e.L?null:e.L)}}}var Y={};function Z(n){for(;n.length;){var r=n.pop();n.pop()(r)}}function $(n){return this.fromWireType(A[n>>2])}var Q={},nn={},rn={};function en(n){if(void 0===n)return"_unknown";var r=(n=n.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return 48<=r&&57>=r?"_"+n:n}function tn(n,r){return n=en(n),new Function("body","return function "+n+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(r)}function on(n){var r=Error,e=tn(n,(function(r){this.name=n,this.message=r,void 0!==(r=Error(r).stack)&&(this.stack=this.toString()+"\n"+r.replace(/^Error(:[^\n]*)?\n/,""))}));return e.prototype=Object.create(r.prototype),e.prototype.constructor=e,e.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},e}var an=void 0;function un(n,r,e){function t(r){if((r=e(r)).length!==n.length)throw new an("Mismatched type converter count");for(var t=0;t<n.length;++t)hn(n[t],r[t])}n.forEach((function(n){rn[n]=r}));var o=Array(r.length),a=[],i=0;r.forEach((function(n,r){nn.hasOwnProperty(n)?o[r]=nn[n]:(a.push(n),Q.hasOwnProperty(n)||(Q[n]=[]),Q[n].push((function(){o[r]=nn[n],++i===a.length&&t(o)})))})),0===a.length&&t(o)}function fn(n){switch(n){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+n)}}var cn=void 0;function sn(n){for(var r="";m[n];)r+=cn[m[n++]];return r}var ln=void 0;function pn(n){throw new ln(n)}function hn(n,r,e){if(e=e||{},!("argPackAdvance"in r))throw new TypeError("registerType registeredInstance requires argPackAdvance");var t=r.name;if(n||pn('type "'+t+'" must have a positive integer typeid pointer'),nn.hasOwnProperty(n)){if(e.V)return;pn("Cannot register type '"+t+"' twice")}nn[n]=r,delete rn[n],Q.hasOwnProperty(n)&&(r=Q[n],delete Q[n],r.forEach((function(n){n()})))}var vn=[],yn=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function dn(n){4<n&&0==--yn[n].M&&(yn[n]=void 0,vn.push(n))}function mn(n){switch(n){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var r=vn.length?vn.pop():yn.length;return yn[r]={M:1,value:n},r}}function gn(n){if(null===n)return"null";var r=typeof n;return"object"===r||"array"===r||"function"===r?n.toString():""+n}function wn(n,r){switch(r){case 2:return function(n){return this.fromWireType(_[n>>2])};case 3:return function(n){return this.fromWireType(T[n>>3])};default:throw new TypeError("Unknown float type: "+n)}}function bn(n,e){var t=-1!=(n=sn(n)).indexOf("j")?function(n,e){0<=n.indexOf("j")||V("Assertion failed: getDynCaller should only be called with i64 sigs");var t=[];return function(){t.length=arguments.length;for(var o=0;o<arguments.length;o++)t[o]=arguments[o];return-1!=n.indexOf("j")?t&&t.length?r["dynCall_"+n].apply(null,[e].concat(t)):r["dynCall_"+n].call(null,e):S.get(e).apply(null,t)}}(n,e):S.get(e);return"function"!=typeof t&&pn("unknown function pointer with signature "+n+": "+e),t}var An=void 0;function _n(n){var r=sn(n=Hn(n));return zn(n),r}function Tn(n,r,e){switch(r){case 0:return e?function(n){return d[n]}:function(n){return m[n]};case 1:return e?function(n){return g[n>>1]}:function(n){return w[n>>1]};case 2:return e?function(n){return b[n>>2]}:function(n){return A[n>>2]};default:throw new TypeError("Unknown integer type: "+n)}}var En={};function Pn(){return"object"==typeof globalThis?globalThis:Function("return this")()}function Cn(n,r){var e=nn[n];return void 0===e&&pn(r+" has unknown type "+_n(n)),e}var Wn={},kn={};function Rn(){if(!In){var n,r={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:i||"./this.program"};for(n in kn)r[n]=kn[n];var e=[];for(n in r)e.push(n+"="+r[n]);In=e}return In}var In,Fn=[null,[],[]];an=r.InternalError=on("InternalError");for(var Un=Array(256),jn=0;256>jn;++jn)Un[jn]=String.fromCharCode(jn);cn=Un,ln=r.BindingError=on("BindingError"),r.count_emval_handles=function(){for(var n=0,r=5;r<yn.length;++r)void 0!==yn[r]&&++n;return n},r.get_first_emval=function(){for(var n=5;n<yn.length;++n)if(void 0!==yn[n])return yn[n];return null},An=r.UnboundTypeError=on("UnboundTypeError"),M.push({R:function(){xn()}});var On={B:function(){},n:function(n){var r=Y[n];delete Y[n];var e=r.W,t=r.X,o=r.N;un([n],o.map((function(n){return n.U})).concat(o.map((function(n){return n.Z}))),(function(n){var a={};return o.forEach((function(r,e){var t=n[e],i=r.S,u=r.T,f=n[e+o.length],c=r.Y,s=r.$;a[r.P]={read:function(n){return t.fromWireType(i(u,n))},write:function(n,r){var e=[];c(s,n,f.toWireType(e,r)),Z(e)}}})),[{name:r.name,fromWireType:function(n){var r,e={};for(r in a)e[r]=a[r].read(n);return t(n),e},toWireType:function(n,r){for(var o in a)if(!(o in r))throw new TypeError('Missing field:  "'+o+'"');var i=e();for(o in a)a[o].write(i,r[o]);return null!==n&&n.push(t,i),i},argPackAdvance:8,readValueFromPointer:$,K:t}]}))},y:function(n,r,e,t,o){var a=fn(e);hn(n,{name:r=sn(r),fromWireType:function(n){return!!n},toWireType:function(n,r){return r?t:o},argPackAdvance:8,readValueFromPointer:function(n){if(1===e)var t=d;else if(2===e)t=g;else{if(4!==e)throw new TypeError("Unknown boolean type size: "+r);t=b}return this.fromWireType(t[n>>a])},K:null})},x:function(n,r){hn(n,{name:r=sn(r),fromWireType:function(n){var r=yn[n].value;return dn(n),r},toWireType:function(n,r){return mn(r)},argPackAdvance:8,readValueFromPointer:$,K:null})},k:function(n,r,e){e=fn(e),hn(n,{name:r=sn(r),fromWireType:function(n){return n},toWireType:function(n,r){if("number"!=typeof r&&"boolean"!=typeof r)throw new TypeError('Cannot convert "'+gn(r)+'" to '+this.name);return r},argPackAdvance:8,readValueFromPointer:wn(r,e),K:null})},g:function(n,e,t,o,a,i){var u=function(n,r){for(var e=[],t=0;t<n;t++)e.push(b[(r>>2)+t]);return e}(e,t);n=sn(n),a=bn(o,a),function(n,e,t){r.hasOwnProperty(n)?((void 0===t||void 0!==r[n].J&&void 0!==r[n].J[t])&&pn("Cannot register public name '"+n+"' twice"),function(n,e){var t=r;if(void 0===t[n].J){var o=t[n];t[n]=function(){return t[n].J.hasOwnProperty(arguments.length)||pn("Function '"+e+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+t[n].J+")!"),t[n].J[arguments.length].apply(this,arguments)},t[n].J=[],t[n].J[o.O]=o}}(n,n),r.hasOwnProperty(t)&&pn("Cannot register multiple overloads of a function with the same number of arguments ("+t+")!"),r[n].J[t]=e):(r[n]=e,void 0!==t&&(r[n].ba=t))}(n,(function(){!function(n,r){var e=[],t={};throw r.forEach((function n(r){t[r]||nn[r]||(rn[r]?rn[r].forEach(n):(e.push(r),t[r]=!0))})),new An(n+": "+e.map(_n).join([", "]))}("Cannot call "+n+" due to unbound types",u)}),e-1),un([],u,(function(t){var o=n,u=n;t=[t[0],null].concat(t.slice(1));var f=a,c=t.length;2>c&&pn("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var s=null!==t[1]&&!1,l=!1,p=1;p<t.length;++p)if(null!==t[p]&&void 0===t[p].K){l=!0;break}var h="void"!==t[0].name,v="",y="";for(p=0;p<c-2;++p)v+=(0!==p?", ":"")+"arg"+p,y+=(0!==p?", ":"")+"arg"+p+"Wired";u="return function "+en(u)+"("+v+") {\nif (arguments.length !== "+(c-2)+") {\nthrowBindingError('function "+u+" called with ' + arguments.length + ' arguments, expected "+(c-2)+" args!');\n}\n",l&&(u+="var destructors = [];\n");var d=l?"destructors":"null";for(v="throwBindingError invoker fn runDestructors retType classParam".split(" "),f=[pn,f,i,Z,t[0],t[1]],s&&(u+="var thisWired = classParam.toWireType("+d+", this);\n"),p=0;p<c-2;++p)u+="var arg"+p+"Wired = argType"+p+".toWireType("+d+", arg"+p+"); // "+t[p+2].name+"\n",v.push("argType"+p),f.push(t[p+2]);if(s&&(y="thisWired"+(0<y.length?", ":"")+y),u+=(h?"var rv = ":"")+"invoker(fn"+(0<y.length?", ":"")+y+");\n",l)u+="runDestructors(destructors);\n";else for(p=s?1:2;p<t.length;++p)c=1===p?"thisWired":"arg"+(p-2)+"Wired",null!==t[p].K&&(u+=c+"_dtor("+c+"); // "+t[p].name+"\n",v.push(c+"_dtor"),f.push(t[p].K));if(h&&(u+="var ret = retType.fromWireType(rv);\nreturn ret;\n"),v.push(u+"}\n"),t=function(n){var r=Function;if(!(r instanceof Function))throw new TypeError("new_ called with constructor type "+typeof r+" which is not a function");var e=tn(r.name||"unknownFunctionName",(function(){}));return e.prototype=r.prototype,e=new e,(n=r.apply(e,n))instanceof Object?n:e}(v).apply(null,f),p=e-1,!r.hasOwnProperty(o))throw new an("Replacing nonexistant public symbol");return void 0!==r[o].J&&void 0!==p?r[o].J[p]=t:(r[o]=t,r[o].O=p),[]}))},d:function(n,r,e,t,o){function a(n){return n}r=sn(r),-1===o&&(o=4294967295);var i=fn(e);if(0===t){var u=32-8*e;a=function(n){return n<<u>>>u}}var f=-1!=r.indexOf("unsigned");hn(n,{name:r,fromWireType:a,toWireType:function(n,e){if("number"!=typeof e&&"boolean"!=typeof e)throw new TypeError('Cannot convert "'+gn(e)+'" to '+this.name);if(e<t||e>o)throw new TypeError('Passing a number "'+gn(e)+'" from JS side to C/C++ side to an argument of type "'+r+'", which is outside the valid range ['+t+", "+o+"]!");return f?e>>>0:0|e},argPackAdvance:8,readValueFromPointer:Tn(r,i,0!==t),K:null})},c:function(n,r,e){function t(n){var r=A;return new o(y,r[1+(n>>=2)],r[n])}var o=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][r];hn(n,{name:e=sn(e),fromWireType:t,argPackAdvance:8,readValueFromPointer:t},{V:!0})},l:function(n,r){var e="std::string"===(r=sn(r));hn(n,{name:r,fromWireType:function(n){var r=A[n>>2];if(e)for(var t=n+4,o=0;o<=r;++o){var a=n+4+o;if(o==r||0==m[a]){if(t){for(var i=t+(a-t),u=t;!(u>=i)&&m[u];)++u;t=P.decode(m.subarray(t,u))}else t="";if(void 0===f)var f=t;else f+=String.fromCharCode(0),f+=t;t=a+1}}else{for(f=Array(r),o=0;o<r;++o)f[o]=String.fromCharCode(m[n+4+o]);f=f.join("")}return zn(n),f},toWireType:function(n,r){r instanceof ArrayBuffer&&(r=new Uint8Array(r));var t="string"==typeof r;t||r instanceof Uint8Array||r instanceof Uint8ClampedArray||r instanceof Int8Array||pn("Cannot pass non-string to std::string");var o=(e&&t?function(){for(var n=0,e=0;e<r.length;++e){var t=r.charCodeAt(e);55296<=t&&57343>=t&&(t=65536+((1023&t)<<10)|1023&r.charCodeAt(++e)),127>=t?++n:n=2047>=t?n+2:65535>=t?n+3:n+4}return n}:function(){return r.length})(),a=Mn(4+o+1);if(A[a>>2]=o,e&&t)!function(n,r,e){var t=m;if(0<e){e=r+e-1;for(var o=0;o<n.length;++o){var a=n.charCodeAt(o);if(55296<=a&&57343>=a&&(a=65536+((1023&a)<<10)|1023&n.charCodeAt(++o)),127>=a){if(r>=e)break;t[r++]=a}else{if(2047>=a){if(r+1>=e)break;t[r++]=192|a>>6}else{if(65535>=a){if(r+2>=e)break;t[r++]=224|a>>12}else{if(r+3>=e)break;t[r++]=240|a>>18,t[r++]=128|a>>12&63}t[r++]=128|a>>6&63}t[r++]=128|63&a}}t[r]=0}}(r,a+4,o+1);else if(t)for(t=0;t<o;++t){var i=r.charCodeAt(t);255<i&&(zn(a),pn("String has UTF-16 code units that do not fit in 8 bits")),m[a+4+t]=i}else for(t=0;t<o;++t)m[a+4+t]=r[t];return null!==n&&n.push(zn,a),a},argPackAdvance:8,readValueFromPointer:$,K:function(n){zn(n)}})},f:function(n,r,e){if(e=sn(e),2===r)var t=W,o=k,a=R,i=function(){return w},u=1;else 4===r&&(t=I,o=F,a=U,i=function(){return A},u=2);hn(n,{name:e,fromWireType:function(n){for(var e,o=A[n>>2],a=i(),f=n+4,c=0;c<=o;++c){var s=n+4+c*r;c!=o&&0!=a[s>>u]||(f=t(f,s-f),void 0===e?e=f:(e+=String.fromCharCode(0),e+=f),f=s+r)}return zn(n),e},toWireType:function(n,t){"string"!=typeof t&&pn("Cannot pass non-string to C++ string type "+e);var i=a(t),f=Mn(4+i+r);return A[f>>2]=i>>u,o(t,f+4,i+r),null!==n&&n.push(zn,f),f},argPackAdvance:8,readValueFromPointer:$,K:function(n){zn(n)}})},o:function(n,r,e,t,o,a){Y[n]={name:sn(r),W:bn(e,t),X:bn(o,a),N:[]}},b:function(n,r,e,t,o,a,i,u,f,c){Y[n].N.push({P:sn(r),U:e,S:bn(t,o),T:a,Z:i,Y:bn(u,f),$:c})},z:function(n,r){hn(n,{aa:!0,name:r=sn(r),argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},h:dn,v:function(n){if(0===n)return mn(Pn());var r=En[n];return n=void 0===r?sn(n):r,mn(Pn()[n])},m:function(n){4<n&&(yn[n].M+=1)},p:function(n,e,t,o){n||pn("Cannot use deleted val. handle = "+n),n=yn[n].value;var a=Wn[e];if(!a){a="";for(var i=0;i<e;++i)a+=(0!==i?", ":"")+"arg"+i;var u="return function emval_allocator_"+e+"(constructor, argTypes, args) {\n";for(i=0;i<e;++i)u+="var argType"+i+" = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + "+i+'], "parameter '+i+'");\nvar arg'+i+" = argType"+i+".readValueFromPointer(args);\nargs += argType"+i+"['argPackAdvance'];\n";a=new Function("requireRegisteredType","Module","__emval_register",u+"var obj = new constructor("+a+");\nreturn __emval_register(obj);\n}\n")(Cn,r,mn),Wn[e]=a}return a(n,t,o)},i:function(){V()},s:function(n,r,e){m.copyWithin(n,r,r+e)},e:function(n){n>>>=0;var r=m.length;if(2147483648<n)return!1;for(var e=1;4>=e;e*=2){var t=r*(1+.2/e);t=Math.min(t,n+100663296),0<(t=Math.max(16777216,n,t))%65536&&(t+=65536-t%65536);n:{try{v.grow(Math.min(2147483648,t)-y.byteLength+65535>>>16),j(v.buffer);var o=1;break n}catch(n){}o=void 0}if(o)return!0}return!1},t:function(n,r){var e=0;return Rn().forEach((function(t,o){var a=r+e;for(o=b[n+4*o>>2]=a,a=0;a<t.length;++a)d[o++>>0]=t.charCodeAt(a);d[o>>0]=0,e+=t.length+1})),0},u:function(n,r){var e=Rn();b[n>>2]=e.length;var t=0;return e.forEach((function(n){t+=n.length+1})),b[r>>2]=t,0},A:function(n){l||(r.onExit&&r.onExit(n),E=!0),u(n,new Jn(n))},w:function(){return 0},q:function(){},j:function(n,r,e,t){for(var o=0,a=0;a<e;a++){for(var i=b[r+8*a>>2],u=b[r+(8*a+4)>>2],f=0;f<u;f++){var c=m[i+f],s=Fn[n];if(0===c||10===c){for(c=0;s[c]&&!(NaN<=c);)++c;c=P.decode(s.subarray?s.subarray(0,c):new Uint8Array(s.slice(0,c))),(1===n?p:h)(c),s.length=0}else s.push(c)}o+=u}return b[t>>2]=o,0},a:v,r:function(){}};!function(){function n(n){r.asm=n.exports,S=r.asm.C,N--,r.monitorRunDependencies&&r.monitorRunDependencies(N),0==N&&(null!==B&&(clearInterval(B),B=null),D&&(n=D,D=null,n()))}function e(r){n(r.instance)}function o(n){return(s||"function"!=typeof fetch?Promise.resolve().then(G):fetch(L,{credentials:"same-origin"}).then((function(n){if(!n.ok)throw"failed to load wasm binary file at '"+L+"'";return n.arrayBuffer()})).catch((function(){return G()}))).then((function(n){return WebAssembly.instantiate(n,a)})).then(n,(function(n){h("failed to asynchronously prepare wasm: "+n),V(n)}))}var a={a:On};if(N++,r.monitorRunDependencies&&r.monitorRunDependencies(N),r.instantiateWasm)try{return r.instantiateWasm(a,n)}catch(n){return h("Module.instantiateWasm callback failed with error: "+n),!1}(s||"function"!=typeof WebAssembly.instantiateStreaming||K()||"function"!=typeof fetch?o(e):fetch(L,{credentials:"same-origin"}).then((function(n){return WebAssembly.instantiateStreaming(n,a).then(e,(function(n){return h("wasm streaming compile failed: "+n),h("falling back to ArrayBuffer instantiation"),o(e)}))}))).catch(t)}();var Sn,xn=r.___wasm_call_ctors=function(){return(xn=r.___wasm_call_ctors=r.asm.D).apply(null,arguments)},Mn=r._malloc=function(){return(Mn=r._malloc=r.asm.E).apply(null,arguments)},zn=r._free=function(){return(zn=r._free=r.asm.F).apply(null,arguments)},Hn=r.___getTypeName=function(){return(Hn=r.___getTypeName=r.asm.G).apply(null,arguments)};function Jn(n){this.name="ExitStatus",this.message="Program terminated with exit("+n+")",this.status=n}function Nn(){function n(){if(!Sn&&(Sn=!0,r.calledRun=!0,!E)){if(X(M),X(z),e(r),r.onRuntimeInitialized&&r.onRuntimeInitialized(),r.postRun)for("function"==typeof r.postRun&&(r.postRun=[r.postRun]);r.postRun.length;){var n=r.postRun.shift();H.unshift(n)}X(H)}}if(!(0<N)){if(r.preRun)for("function"==typeof r.preRun&&(r.preRun=[r.preRun]);r.preRun.length;)J();X(x),0<N||(r.setStatus?(r.setStatus("Running..."),setTimeout((function(){setTimeout((function(){r.setStatus("")}),1),n()}),1)):n())}}if(r.___embind_register_native_and_builtin_types=function(){return(r.___embind_register_native_and_builtin_types=r.asm.H).apply(null,arguments)},r.dynCall_jiji=function(){return(r.dynCall_jiji=r.asm.I).apply(null,arguments)},D=function n(){Sn||Nn(),Sn||(D=n)},r.run=Nn,r.preInit)for("function"==typeof r.preInit&&(r.preInit=[r.preInit]);0<r.preInit.length;)r.preInit.pop()();return l=!0,Nn(),n.ready})}}]);
//# sourceMappingURL=85.js.map