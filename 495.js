(self.webpackChunkic_analyze=self.webpackChunkic_analyze||[]).push([[495],{9832:(n,r,e)=>{var t,i=(t=(t="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0)||"/index.js",function(n){var r,i,a;n=n||{},r||(r=void 0!==n?n:{}),r.ready=new Promise((function(n,r){i=n,a=r}));var o,u,l,f,c,s={};for(o in r)r.hasOwnProperty(o)&&(s[o]=r[o]);u="object"==typeof window,l="function"==typeof importScripts,f="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,c=!u&&!f&&!l;var p,d,y,v,h="";f?(h=l?e(1386).dirname(h)+"/":"//",p=function(n,r){return y||(y=e(2993)),v||(v=e(1386)),n=v.normalize(n),y.readFileSync(n,r?null:"utf8")},d=function(n){return(n=p(n,!0)).buffer||(n=new Uint8Array(n)),n.buffer||Q("Assertion failed: undefined"),n},1<process.argv.length&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",(function(n){throw n})),process.on("unhandledRejection",Q),r.inspect=function(){return"[Emscripten Module object]"}):c?("undefined"!=typeof read&&(p=function(n){return read(n)}),d=function(n){return"function"==typeof readbuffer?new Uint8Array(readbuffer(n)):("object"==typeof(n=read(n,"binary"))||Q("Assertion failed: undefined"),n)},"undefined"!=typeof print&&("undefined"==typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!=typeof printErr?printErr:print)):(u||l)&&(l?h=self.location.href:document.currentScript&&(h=document.currentScript.src),t&&(h=t),h=0!==h.indexOf("blob:")?h.substr(0,h.lastIndexOf("/")+1):"",p=function(n){var r=new XMLHttpRequest;return r.open("GET",n,!1),r.send(null),r.responseText},l&&(d=function(n){var r=new XMLHttpRequest;return r.open("GET",n,!1),r.responseType="arraybuffer",r.send(null),new Uint8Array(r.response)}));var m=r.print||console.log.bind(console),g=r.printErr||console.warn.bind(console);for(o in s)s.hasOwnProperty(o)&&(r[o]=s[o]);s=null;var w,_=0;r.wasmBinary&&(w=r.wasmBinary),r.noExitRuntime&&r.noExitRuntime,"object"!=typeof WebAssembly&&Q("no native wasm support detected");var C,b=new WebAssembly.Table({initial:675,maximum:675,element:"anyfunc"}),A=!1,T="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function E(n,r,e){var t=r+e;for(e=r;n[e]&&!(e>=t);)++e;if(16<e-r&&n.subarray&&T)return T.decode(n.subarray(r,e));for(t="";r<e;){var i=n[r++];if(128&i){var a=63&n[r++];if(192==(224&i))t+=String.fromCharCode((31&i)<<6|a);else{var o=63&n[r++];65536>(i=224==(240&i)?(15&i)<<12|a<<6|o:(7&i)<<18|a<<12|o<<6|63&n[r++])?t+=String.fromCharCode(i):(i-=65536,t+=String.fromCharCode(55296|i>>10,56320|1023&i))}}else t+=String.fromCharCode(i)}return t}var k,P,W,R,S,j,F,I,x,U="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function O(n,r){for(var e=n>>1,t=e+r/2;!(e>=t)&&S[e];)++e;if(32<(e<<=1)-n&&U)return U.decode(W.subarray(n,e));for(e=0,t="";;){var i=R[n+2*e>>1];if(0==i||e==r/2)return t;++e,t+=String.fromCharCode(i)}}function M(n,r,e){if(void 0===e&&(e=2147483647),2>e)return 0;var t=r;e=(e-=2)<2*n.length?e/2:n.length;for(var i=0;i<e;++i)R[r>>1]=n.charCodeAt(i),r+=2;return R[r>>1]=0,r-t}function D(n){return 2*n.length}function H(n,r){for(var e=0,t="";!(e>=r/4);){var i=j[n+4*e>>2];if(0==i)break;++e,65536<=i?(i-=65536,t+=String.fromCharCode(55296|i>>10,56320|1023&i)):t+=String.fromCharCode(i)}return t}function z(n,r,e){if(void 0===e&&(e=2147483647),4>e)return 0;var t=r;e=t+e-4;for(var i=0;i<n.length;++i){var a=n.charCodeAt(i);if(55296<=a&&57343>=a&&(a=65536+((1023&a)<<10)|1023&n.charCodeAt(++i)),j[r>>2]=a,(r+=4)+4>e)break}return j[r>>2]=0,r-t}function B(n){for(var r=0,e=0;e<n.length;++e){var t=n.charCodeAt(e);55296<=t&&57343>=t&&++e,r+=4}return r}function V(n){k=n,r.HEAP8=P=new Int8Array(n),r.HEAP16=R=new Int16Array(n),r.HEAP32=j=new Int32Array(n),r.HEAPU8=W=new Uint8Array(n),r.HEAPU16=S=new Uint16Array(n),r.HEAPU32=F=new Uint32Array(n),r.HEAPF32=I=new Float32Array(n),r.HEAPF64=x=new Float64Array(n)}var q=r.INITIAL_MEMORY||16777216;function L(n){for(;0<n.length;){var e=n.shift();if("function"==typeof e)e(r);else{var t=e.ma;"number"==typeof t?void 0===e.ia?r.dynCall_v(t):r.dynCall_vi(t,e.ia):t(void 0===e.ia?null:e.ia)}}}(C=r.wasmMemory?r.wasmMemory:new WebAssembly.Memory({initial:q/65536,maximum:32768}))&&(k=C.buffer),q=k.byteLength,V(k),j[153976]=5858944;var N=[],G=[],X=[],J=[];function Y(){var n=r.preRun.shift();N.unshift(n)}var Z=0,$=null,K=null;function Q(n){throw r.onAbort&&r.onAbort(n),g(n),A=!0,n=new WebAssembly.RuntimeError("abort("+n+"). Build with -s ASSERTIONS=1 for more info."),a(n),n}function nn(n){var r=en;return String.prototype.startsWith?r.startsWith(n):0===r.indexOf(n)}function rn(){return nn("data:application/octet-stream;base64,")}r.preloadedImages={},r.preloadedAudios={};var en="avif_dec.wasm";if(!rn()){var tn=en;en=r.locateFile?r.locateFile(tn,h):h+tn}function an(){try{if(w)return new Uint8Array(w);if(d)return d(en);throw"both async and sync fetching of the wasm failed"}catch(n){Q(n)}}function on(){return 0<on.ka}function un(n){switch(n){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+n)}}G.push({ma:function(){Hn()}});var ln=void 0;function fn(n){for(var r="";W[n];)r+=ln[W[n++]];return r}var cn={},sn={},pn={};function dn(n){if(void 0===n)return"_unknown";var r=(n=n.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return 48<=r&&57>=r?"_"+n:n}function yn(n,r){return n=dn(n),new Function("body","return function "+n+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(r)}function vn(n){var r=Error,e=yn(n,(function(r){this.name=n,this.message=r,void 0!==(r=Error(r).stack)&&(this.stack=this.toString()+"\n"+r.replace(/^Error(:[^\n]*)?\n/,""))}));return e.prototype=Object.create(r.prototype),e.prototype.constructor=e,e.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},e}var hn=void 0;function mn(n){throw new hn(n)}var gn=void 0;function wn(n,r,e){if(e=e||{},!("argPackAdvance"in r))throw new TypeError("registerType registeredInstance requires argPackAdvance");var t=r.name;if(n||mn('type "'+t+'" must have a positive integer typeid pointer'),sn.hasOwnProperty(n)){if(e.na)return;mn("Cannot register type '"+t+"' twice")}sn[n]=r,delete pn[n],cn.hasOwnProperty(n)&&(r=cn[n],delete cn[n],r.forEach((function(n){n()})))}var _n=[],Cn=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function bn(n){4<n&&0==--Cn[n].ja&&(Cn[n]=void 0,_n.push(n))}function An(n){switch(n){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var r=_n.length?_n.pop():Cn.length;return Cn[r]={ja:1,value:n},r}}function Tn(n){return this.fromWireType(F[n>>2])}function En(n){if(null===n)return"null";var r=typeof n;return"object"===r||"array"===r||"function"===r?n.toString():""+n}function kn(n,r){switch(r){case 2:return function(n){return this.fromWireType(I[n>>2])};case 3:return function(n){return this.fromWireType(x[n>>3])};default:throw new TypeError("Unknown float type: "+n)}}function Pn(n){for(;n.length;){var r=n.pop();n.pop()(r)}}var Wn=void 0;function Rn(n){var r=fn(n=Vn(n));return Bn(n),r}function Sn(n,r,e){switch(r){case 0:return e?function(n){return P[n]}:function(n){return W[n]};case 1:return e?function(n){return R[n>>1]}:function(n){return S[n>>1]};case 2:return e?function(n){return j[n>>2]}:function(n){return F[n>>2]};default:throw new TypeError("Unknown integer type: "+n)}}var jn={};function Fn(){return"object"==typeof globalThis?globalThis:Function("return this")()}function In(n,r){var e=sn[n];return void 0===e&&mn(r+" has unknown type "+Rn(n)),e}for(var xn={},Un=[null,[],[]],On=Array(256),Mn=0;256>Mn;++Mn)On[Mn]=String.fromCharCode(Mn);ln=On,hn=r.BindingError=vn("BindingError"),gn=r.InternalError=vn("InternalError"),r.count_emval_handles=function(){for(var n=0,r=5;r<Cn.length;++r)void 0!==Cn[r]&&++n;return n},r.get_first_emval=function(){for(var n=5;n<Cn.length;++n)if(void 0!==Cn[n])return Cn[n];return null},Wn=r.UnboundTypeError=vn("UnboundTypeError");var Dn={u:function(n){return zn(n)},r:function(){},t:function(n){throw"uncaught_exception"in on?on.ka++:on.ka=1,n},D:function(n,r,e,t,i){var a=un(e);wn(n,{name:r=fn(r),fromWireType:function(n){return!!n},toWireType:function(n,r){return r?t:i},argPackAdvance:8,readValueFromPointer:function(n){if(1===e)var t=P;else if(2===e)t=R;else{if(4!==e)throw new TypeError("Unknown boolean type size: "+r);t=j}return this.fromWireType(t[n>>a])},ha:null})},C:function(n,r){wn(n,{name:r=fn(r),fromWireType:function(n){var r=Cn[n].value;return bn(n),r},toWireType:function(n,r){return An(r)},argPackAdvance:8,readValueFromPointer:Tn,ha:null})},p:function(n,r,e){e=un(e),wn(n,{name:r=fn(r),fromWireType:function(n){return n},toWireType:function(n,r){if("number"!=typeof r&&"boolean"!=typeof r)throw new TypeError('Cannot convert "'+En(r)+'" to '+this.name);return r},argPackAdvance:8,readValueFromPointer:kn(r,e),ha:null})},v:function(n,e,t,i,a,o){var u=function(n,r){for(var e=[],t=0;t<n;t++)e.push(j[(r>>2)+t]);return e}(e,t);n=fn(n),a=function(n,e){n=fn(n);for(var t=r["dynCall_"+n],i=[],a=1;a<n.length;++a)i.push("a"+a);return a="return function dynCall_"+n+"_"+e+"("+i.join(", ")+") {\n",a+="    return dynCall(rawFunction"+(i.length?", ":"")+i.join(", ")+");\n","function"!=typeof(t=new Function("dynCall","rawFunction",a+"};\n")(t,e))&&mn("unknown function pointer with signature "+n+": "+e),t}(i,a),function(n,e,t){r.hasOwnProperty(n)?((void 0===t||void 0!==r[n].ga&&void 0!==r[n].ga[t])&&mn("Cannot register public name '"+n+"' twice"),function(n,e){var t=r;if(void 0===t[n].ga){var i=t[n];t[n]=function(){return t[n].ga.hasOwnProperty(arguments.length)||mn("Function '"+e+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+t[n].ga+")!"),t[n].ga[arguments.length].apply(this,arguments)},t[n].ga=[],t[n].ga[i.la]=i}}(n,n),r.hasOwnProperty(t)&&mn("Cannot register multiple overloads of a function with the same number of arguments ("+t+")!"),r[n].ga[t]=e):(r[n]=e,void 0!==t&&(r[n].pa=t))}(n,(function(){!function(n,r){var e=[],t={};throw r.forEach((function n(r){t[r]||sn[r]||(pn[r]?pn[r].forEach(n):(e.push(r),t[r]=!0))})),new Wn(n+": "+e.map(Rn).join([", "]))}("Cannot call "+n+" due to unbound types",u)}),e-1),function(n,r){function e(n){if((n=r(n)).length!==t.length)throw new gn("Mismatched type converter count");for(var e=0;e<t.length;++e)wn(t[e],n[e])}var t=[];t.forEach((function(r){pn[r]=n}));var i=Array(n.length),a=[],o=0;n.forEach((function(n,r){sn.hasOwnProperty(n)?i[r]=sn[n]:(a.push(n),cn.hasOwnProperty(n)||(cn[n]=[]),cn[n].push((function(){i[r]=sn[n],++o===a.length&&e(i)})))})),0===a.length&&e(i)}(u,(function(t){var i=[t[0],null].concat(t.slice(1)),u=t=n,l=a,f=i.length;2>f&&mn("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var c=null!==i[1]&&!1,s=!1,p=1;p<i.length;++p)if(null!==i[p]&&void 0===i[p].ha){s=!0;break}var d="void"!==i[0].name,y="",v="";for(p=0;p<f-2;++p)y+=(0!==p?", ":"")+"arg"+p,v+=(0!==p?", ":"")+"arg"+p+"Wired";u="return function "+dn(u)+"("+y+") {\nif (arguments.length !== "+(f-2)+") {\nthrowBindingError('function "+u+" called with ' + arguments.length + ' arguments, expected "+(f-2)+" args!');\n}\n",s&&(u+="var destructors = [];\n");var h=s?"destructors":"null";for(y="throwBindingError invoker fn runDestructors retType classParam".split(" "),l=[mn,l,o,Pn,i[0],i[1]],c&&(u+="var thisWired = classParam.toWireType("+h+", this);\n"),p=0;p<f-2;++p)u+="var arg"+p+"Wired = argType"+p+".toWireType("+h+", arg"+p+"); // "+i[p+2].name+"\n",y.push("argType"+p),l.push(i[p+2]);if(c&&(v="thisWired"+(0<v.length?", ":"")+v),u+=(d?"var rv = ":"")+"invoker(fn"+(0<v.length?", ":"")+v+");\n",s)u+="runDestructors(destructors);\n";else for(p=c?1:2;p<i.length;++p)f=1===p?"thisWired":"arg"+(p-2)+"Wired",null!==i[p].ha&&(u+=f+"_dtor("+f+"); // "+i[p].name+"\n",y.push(f+"_dtor"),l.push(i[p].ha));if(d&&(u+="var ret = retType.fromWireType(rv);\nreturn ret;\n"),y.push(u+"}\n"),i=function(n){var r=Function;if(!(r instanceof Function))throw new TypeError("new_ called with constructor type "+typeof r+" which is not a function");var e=yn(r.name||"unknownFunctionName",(function(){}));return e.prototype=r.prototype,e=new e,(n=r.apply(e,n))instanceof Object?n:e}(y).apply(null,l),p=e-1,!r.hasOwnProperty(t))throw new gn("Replacing nonexistant public symbol");return void 0!==r[t].ga&&void 0!==p?r[t].ga[p]=i:(r[t]=i,r[t].la=p),[]}))},d:function(n,r,e,t,i){function a(n){return n}r=fn(r),-1===i&&(i=4294967295);var o=un(e);if(0===t){var u=32-8*e;a=function(n){return n<<u>>>u}}var l=-1!=r.indexOf("unsigned");wn(n,{name:r,fromWireType:a,toWireType:function(n,e){if("number"!=typeof e&&"boolean"!=typeof e)throw new TypeError('Cannot convert "'+En(e)+'" to '+this.name);if(e<t||e>i)throw new TypeError('Passing a number "'+En(e)+'" from JS side to C/C++ side to an argument of type "'+r+'", which is outside the valid range ['+t+", "+i+"]!");return l?e>>>0:0|e},argPackAdvance:8,readValueFromPointer:Sn(r,o,0!==t),ha:null})},c:function(n,r,e){function t(n){var r=F;return new i(k,r[1+(n>>=2)],r[n])}var i=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][r];wn(n,{name:e=fn(e),fromWireType:t,argPackAdvance:8,readValueFromPointer:t},{na:!0})},q:function(n,r){var e="std::string"===(r=fn(r));wn(n,{name:r,fromWireType:function(n){var r=F[n>>2];if(e)for(var t=n+4,i=0;i<=r;++i){var a=n+4+i;if(i==r||0==W[a]){if(t=t?E(W,t,a-t):"",void 0===o)var o=t;else o+=String.fromCharCode(0),o+=t;t=a+1}}else{for(o=Array(r),i=0;i<r;++i)o[i]=String.fromCharCode(W[n+4+i]);o=o.join("")}return Bn(n),o},toWireType:function(n,r){r instanceof ArrayBuffer&&(r=new Uint8Array(r));var t="string"==typeof r;t||r instanceof Uint8Array||r instanceof Uint8ClampedArray||r instanceof Int8Array||mn("Cannot pass non-string to std::string");var i=(e&&t?function(){for(var n=0,e=0;e<r.length;++e){var t=r.charCodeAt(e);55296<=t&&57343>=t&&(t=65536+((1023&t)<<10)|1023&r.charCodeAt(++e)),127>=t?++n:n=2047>=t?n+2:65535>=t?n+3:n+4}return n}:function(){return r.length})(),a=zn(4+i+1);if(F[a>>2]=i,e&&t)!function(n,r,e){var t=W;if(0<e){e=r+e-1;for(var i=0;i<n.length;++i){var a=n.charCodeAt(i);if(55296<=a&&57343>=a&&(a=65536+((1023&a)<<10)|1023&n.charCodeAt(++i)),127>=a){if(r>=e)break;t[r++]=a}else{if(2047>=a){if(r+1>=e)break;t[r++]=192|a>>6}else{if(65535>=a){if(r+2>=e)break;t[r++]=224|a>>12}else{if(r+3>=e)break;t[r++]=240|a>>18,t[r++]=128|a>>12&63}t[r++]=128|a>>6&63}t[r++]=128|63&a}}t[r]=0}}(r,a+4,i+1);else if(t)for(t=0;t<i;++t){var o=r.charCodeAt(t);255<o&&(Bn(a),mn("String has UTF-16 code units that do not fit in 8 bits")),W[a+4+t]=o}else for(t=0;t<i;++t)W[a+4+t]=r[t];return null!==n&&n.push(Bn,a),a},argPackAdvance:8,readValueFromPointer:Tn,ha:function(n){Bn(n)}})},j:function(n,r,e){if(e=fn(e),2===r)var t=O,i=M,a=D,o=function(){return S},u=1;else 4===r&&(t=H,i=z,a=B,o=function(){return F},u=2);wn(n,{name:e,fromWireType:function(n){for(var e,i=F[n>>2],a=o(),l=n+4,f=0;f<=i;++f){var c=n+4+f*r;f!=i&&0!=a[c>>u]||(l=t(l,c-l),void 0===e?e=l:(e+=String.fromCharCode(0),e+=l),l=c+r)}return Bn(n),e},toWireType:function(n,t){"string"!=typeof t&&mn("Cannot pass non-string to C++ string type "+e);var o=a(t),l=zn(4+o+r);return F[l>>2]=o>>u,i(t,l+4,o+r),null!==n&&n.push(Bn,l),l},argPackAdvance:8,readValueFromPointer:Tn,ha:function(n){Bn(n)}})},E:function(n,r){wn(n,{oa:!0,name:r=fn(r),argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},n:bn,F:function(n){if(0===n)return An(Fn());var r=jn[n];return n=void 0===r?fn(n):r,An(Fn()[n])},w:function(n){4<n&&(Cn[n].ja+=1)},l:function(n,e,t,i){n||mn("Cannot use deleted val. handle = "+n),n=Cn[n].value;var a=xn[e];if(!a){a="";for(var o=0;o<e;++o)a+=(0!==o?", ":"")+"arg"+o;var u="return function emval_allocator_"+e+"(constructor, argTypes, args) {\n";for(o=0;o<e;++o)u+="var argType"+o+" = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + "+o+'], "parameter '+o+'");\nvar arg'+o+" = argType"+o+".readValueFromPointer(args);\nargs += argType"+o+"['argPackAdvance'];\n";a=new Function("requireRegisteredType","Module","__emval_register",u+"var obj = new constructor("+a+");\nreturn __emval_register(obj);\n}\n")(In,r,An),xn[e]=a}return a(n,t,i)},k:function(){Q()},s:function(){g("missing function: aom_codec_av1_cx"),Q(-1)},e:function(n,r){throw qn(n,r||1),"longjmp"},A:function(n,r,e){W.copyWithin(n,r,r+e)},f:function(n){n>>>=0;var r=W.length;if(2147483648<n)return!1;for(var e=1;4>=e;e*=2){var t=r*(1+.2/e);t=Math.min(t,n+100663296),0<(t=Math.max(16777216,n,t))%65536&&(t+=65536-t%65536);n:{try{C.grow(Math.min(2147483648,t)-k.byteLength+65535>>>16),V(C.buffer);var i=1;break n}catch(n){}i=void 0}if(i)return!0}return!1},B:function(){return 0},x:function(){},o:function(n,r,e,t){for(var i=0,a=0;a<e;a++){for(var o=j[r+8*a>>2],u=j[r+(8*a+4)>>2],l=0;l<u;l++){var f=W[o+l],c=Un[n];0===f||10===f?((1===n?m:g)(E(c,0)),c.length=0):c.push(f)}i+=u}return j[t>>2]=i,0},a:function(){return 0|_},h:function(n,r,e){var t=Ln();try{return Zn(n,r,e)}catch(n){if(Nn(t),n!==n+0&&"longjmp"!==n)throw n;qn(1,0)}},y:function(n,r,e,t,i){var a=Ln();try{return Kn(n,r,e,t,i)}catch(n){if(Nn(a),n!==n+0&&"longjmp"!==n)throw n;qn(1,0)}},z:function(n){var r=Ln();try{Gn(n)}catch(n){if(Nn(r),n!==n+0&&"longjmp"!==n)throw n;qn(1,0)}},g:function(n,r){var e=Ln();try{Xn(n,r)}catch(n){if(Nn(e),n!==n+0&&"longjmp"!==n)throw n;qn(1,0)}},m:function(n,r,e){var t=Ln();try{Jn(n,r,e)}catch(n){if(Nn(t),n!==n+0&&"longjmp"!==n)throw n;qn(1,0)}},i:function(n,r,e,t,i){var a=Ln();try{Yn(n,r,e,t,i)}catch(n){if(Nn(a),n!==n+0&&"longjmp"!==n)throw n;qn(1,0)}},memory:C,b:function(n){_=0|n},table:b};!function(){function n(n){r.asm=n.exports,Z--,r.monitorRunDependencies&&r.monitorRunDependencies(Z),0==Z&&(null!==$&&(clearInterval($),$=null),K&&(n=K,K=null,n()))}function e(r){n(r.instance)}function t(n){return(w||!u&&!l||"function"!=typeof fetch||nn("file://")?new Promise((function(n){n(an())})):fetch(en,{credentials:"same-origin"}).then((function(n){if(!n.ok)throw"failed to load wasm binary file at '"+en+"'";return n.arrayBuffer()})).catch((function(){return an()}))).then((function(n){return WebAssembly.instantiate(n,i)})).then(n,(function(n){g("failed to asynchronously prepare wasm: "+n),Q(n)}))}var i={a:Dn};if(Z++,r.monitorRunDependencies&&r.monitorRunDependencies(Z),r.instantiateWasm)try{return r.instantiateWasm(i,n)}catch(n){return g("Module.instantiateWasm callback failed with error: "+n),!1}!function(){if(w||"function"!=typeof WebAssembly.instantiateStreaming||rn()||nn("file://")||"function"!=typeof fetch)return t(e);fetch(en,{credentials:"same-origin"}).then((function(n){return WebAssembly.instantiateStreaming(n,i).then(e,(function(n){return g("wasm streaming compile failed: "+n),g("falling back to ArrayBuffer instantiation"),t(e)}))}))}()}();var Hn=r.___wasm_call_ctors=function(){return(Hn=r.___wasm_call_ctors=r.asm.G).apply(null,arguments)},zn=r._malloc=function(){return(zn=r._malloc=r.asm.H).apply(null,arguments)},Bn=r._free=function(){return(Bn=r._free=r.asm.I).apply(null,arguments)},Vn=r.___getTypeName=function(){return(Vn=r.___getTypeName=r.asm.J).apply(null,arguments)};r.___embind_register_native_and_builtin_types=function(){return(r.___embind_register_native_and_builtin_types=r.asm.K).apply(null,arguments)};var qn=r._setThrew=function(){return(qn=r._setThrew=r.asm.L).apply(null,arguments)},Ln=r.stackSave=function(){return(Ln=r.stackSave=r.asm.M).apply(null,arguments)},Nn=r.stackRestore=function(){return(Nn=r.stackRestore=r.asm.N).apply(null,arguments)},Gn=r.dynCall_v=function(){return(Gn=r.dynCall_v=r.asm.O).apply(null,arguments)},Xn=r.dynCall_vi=function(){return(Xn=r.dynCall_vi=r.asm.P).apply(null,arguments)},Jn=r.dynCall_vii=function(){return(Jn=r.dynCall_vii=r.asm.Q).apply(null,arguments)},Yn=r.dynCall_viiii=function(){return(Yn=r.dynCall_viiii=r.asm.R).apply(null,arguments)};r.dynCall_ii=function(){return(r.dynCall_ii=r.asm.S).apply(null,arguments)};var Zn=r.dynCall_iii=function(){return(Zn=r.dynCall_iii=r.asm.T).apply(null,arguments)};r.dynCall_iiii=function(){return(r.dynCall_iiii=r.asm.U).apply(null,arguments)};var $n,Kn=r.dynCall_iiiii=function(){return(Kn=r.dynCall_iiiii=r.asm.V).apply(null,arguments)};function Qn(){function n(){if(!$n&&($n=!0,r.calledRun=!0,!A)){if(L(G),L(X),i(r),r.onRuntimeInitialized&&r.onRuntimeInitialized(),r.postRun)for("function"==typeof r.postRun&&(r.postRun=[r.postRun]);r.postRun.length;){var n=r.postRun.shift();J.unshift(n)}L(J)}}if(!(0<Z)){if(r.preRun)for("function"==typeof r.preRun&&(r.preRun=[r.preRun]);r.preRun.length;)Y();L(N),0<Z||(r.setStatus?(r.setStatus("Running..."),setTimeout((function(){setTimeout((function(){r.setStatus("")}),1),n()}),1)):n())}}if(r.dynCall_viiiiii=function(){return(r.dynCall_viiiiii=r.asm.W).apply(null,arguments)},r.dynCall_viiiii=function(){return(r.dynCall_viiiii=r.asm.X).apply(null,arguments)},r.dynCall_viiiiiiii=function(){return(r.dynCall_viiiiiiii=r.asm.Y).apply(null,arguments)},r.dynCall_viiiiiiiiiii=function(){return(r.dynCall_viiiiiiiiiii=r.asm.Z).apply(null,arguments)},r.dynCall_viiiiiiiiiiii=function(){return(r.dynCall_viiiiiiiiiiii=r.asm._).apply(null,arguments)},r.dynCall_viii=function(){return(r.dynCall_viii=r.asm.$).apply(null,arguments)},r.dynCall_viiiiiii=function(){return(r.dynCall_viiiiiii=r.asm.aa).apply(null,arguments)},r.dynCall_iiiiiii=function(){return(r.dynCall_iiiiiii=r.asm.ba).apply(null,arguments)},r.dynCall_iidiiii=function(){return(r.dynCall_iidiiii=r.asm.ca).apply(null,arguments)},r.dynCall_i=function(){return(r.dynCall_i=r.asm.da).apply(null,arguments)},r.dynCall_viiiiiiiiii=function(){return(r.dynCall_viiiiiiiiii=r.asm.ea).apply(null,arguments)},r.dynCall_jiji=function(){return(r.dynCall_jiji=r.asm.fa).apply(null,arguments)},K=function n(){$n||Qn(),$n||(K=n)},r.run=Qn,r.preInit)for("function"==typeof r.preInit&&(r.preInit=[r.preInit]);0<r.preInit.length;)r.preInit.pop()();return Qn(),n.ready});n.exports=i},7654:(n,r,e)=>{"use strict";n.exports=e.p+"avif_dec.9648f.wasm"},495:(n,r,e)=>{"use strict";e.r(r),e.d(r,{decode:()=>l});var t=e(9832),i=e.n(t),a=e(7654),o=e(1244);let u;async function l(n){u||(u=(0,o.e)(i(),a));const r=(await u).decode(n);if(!r)throw new Error("Decoding error");return r}},1244:(n,r,e)=>{"use strict";function t(n,r){return new Promise((e=>{const t=n({noInitialRun:!0,locateFile:n=>n.endsWith(".wasm")?r:n,onRuntimeInitialized(){delete t.then,e(t)}})}))}e.d(r,{e:()=>t})}}]);
//# sourceMappingURL=495.js.map