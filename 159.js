(()=>{var n,e,t={7654:(n,e,t)=>{"use strict";n.exports=t.p+"avif_dec.3630a.wasm"},1944:(n,e,t)=>{"use strict";n.exports=t.p+"avif_enc.4c7a0.wasm"},9633:(n,e,t)=>{"use strict";n.exports=t.p+"jxl_dec.9a0fa.wasm"},9739:(n,e,t)=>{"use strict";n.exports=t.p+"jxl_enc.6721d.wasm"},3678:(n,e,t)=>{"use strict";n.exports=t.p+"mozjpeg_enc.4abe6.wasm"},8140:(n,e,t)=>{"use strict";n.exports=t.p+"webp_dec.01aff.wasm"},3106:(n,e,t)=>{"use strict";n.exports=t.p+"webp_enc.effd1.wasm"},9415:(n,e,t)=>{"use strict";n.exports=t.p+"webp_enc_simd.e7f86.wasm"},6206:(n,e,t)=>{"use strict";n.exports=t.p+"wp2_dec.780b6.wasm"},386:(n,e,t)=>{"use strict";n.exports=t.p+"wp2_enc.4a941.wasm"},9650:(n,e,t)=>{var r,o=(r=(r="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0)||"/index.js",function(n){var e,o,a;n=n||{},e||(e=void 0!==n?n:{}),e.ready=new Promise((function(n,e){o=n,a=e}));var i,u,s,c,f,l={};for(i in e)e.hasOwnProperty(i)&&(l[i]=e[i]);u="object"==typeof window,s="function"==typeof importScripts,c="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,f=!u&&!c&&!s;var p,h,d,v,y,m="";c?(m=s?t(5783).dirname(m)+"/":"//",p=function(n,e){return v||(v=t(2203)),y||(y=t(5783)),n=y.normalize(n),v.readFileSync(n,e?null:"utf8")},d=function(n){return(n=p(n,!0)).buffer||(n=new Uint8Array(n)),A(n.buffer),n},1<process.argv.length&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",(function(n){throw n})),process.on("unhandledRejection",J),e.inspect=function(){return"[Emscripten Module object]"}):f?("undefined"!=typeof read&&(p=function(n){return read(n)}),d=function(n){return"function"==typeof readbuffer?new Uint8Array(readbuffer(n)):(A("object"==typeof(n=read(n,"binary"))),n)},"undefined"!=typeof print&&("undefined"==typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!=typeof printErr?printErr:print)):(u||s)&&(s?m=self.location.href:"undefined"!=typeof document&&document.currentScript&&(m=document.currentScript.src),r&&(m=r),m=0!==m.indexOf("blob:")?m.substr(0,m.lastIndexOf("/")+1):"",p=function(n){var e=new XMLHttpRequest;return e.open("GET",n,!1),e.send(null),e.responseText},s&&(d=function(n){var e=new XMLHttpRequest;return e.open("GET",n,!1),e.responseType="arraybuffer",e.send(null),new Uint8Array(e.response)}),h=function(n,e,t){var r=new XMLHttpRequest;r.open("GET",n,!0),r.responseType="arraybuffer",r.onload=function(){200==r.status||0==r.status&&r.response?e(r.response):t()},r.onerror=t,r.send(null)});var g,w=e.print||console.log.bind(console),b=e.printErr||console.warn.bind(console);for(i in l)l.hasOwnProperty(i)&&(e[i]=l[i]);l=null,e.wasmBinary&&(g=e.wasmBinary),e.noExitRuntime,"object"!=typeof WebAssembly&&J("no native wasm support detected");var T,P=!1;function A(n,e){n||J("Assertion failed: "+e)}var _="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function O(n,e,t){var r=e+t;for(t=e;n[t]&&!(t>=r);)++t;if(16<t-e&&n.subarray&&_)return _.decode(n.subarray(e,t));for(r="";e<t;){var o=n[e++];if(128&o){var a=63&n[e++];if(192==(224&o))r+=String.fromCharCode((31&o)<<6|a);else{var i=63&n[e++];65536>(o=224==(240&o)?(15&o)<<12|a<<6|i:(7&o)<<18|a<<12|i<<6|63&n[e++])?r+=String.fromCharCode(o):(o-=65536,r+=String.fromCharCode(55296|o>>10,56320|1023&o))}}else r+=String.fromCharCode(o)}return r}var E,C,k,N,S,W,j,R,x,F="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function U(n,e){for(var t=n>>1,r=t+e/2;!(t>=r)&&S[t];)++t;if(32<(t<<=1)-n&&F)return F.decode(k.subarray(n,t));for(t="",r=0;!(r>=e/2);++r){var o=N[n+2*r>>1];if(0==o)break;t+=String.fromCharCode(o)}return t}function I(n,e,t){if(void 0===t&&(t=2147483647),2>t)return 0;var r=e;t=(t-=2)<2*n.length?t/2:n.length;for(var o=0;o<t;++o)N[e>>1]=n.charCodeAt(o),e+=2;return N[e>>1]=0,e-r}function D(n){return 2*n.length}function V(n,e){for(var t=0,r="";!(t>=e/4);){var o=W[n+4*t>>2];if(0==o)break;++t,65536<=o?(o-=65536,r+=String.fromCharCode(55296|o>>10,56320|1023&o)):r+=String.fromCharCode(o)}return r}function M(n,e,t){if(void 0===t&&(t=2147483647),4>t)return 0;var r=e;t=r+t-4;for(var o=0;o<n.length;++o){var a=n.charCodeAt(o);if(55296<=a&&57343>=a&&(a=65536+((1023&a)<<10)|1023&n.charCodeAt(++o)),W[e>>2]=a,(e+=4)+4>t)break}return W[e>>2]=0,e-r}function B(n){for(var e=0,t=0;t<n.length;++t){var r=n.charCodeAt(t);55296<=r&&57343>=r&&++t,e+=4}return e}function $(){var n=T.buffer;E=n,e.HEAP8=C=new Int8Array(n),e.HEAP16=N=new Int16Array(n),e.HEAP32=W=new Int32Array(n),e.HEAPU8=k=new Uint8Array(n),e.HEAPU16=S=new Uint16Array(n),e.HEAPU32=j=new Uint32Array(n),e.HEAPF32=R=new Float32Array(n),e.HEAPF64=x=new Float64Array(n)}var z,H=[],X=[],G=[],q=[];function L(){var n=e.preRun.shift();H.unshift(n)}var Q=0,Y=null,Z=null;function J(n){throw e.onAbort&&e.onAbort(n),b(n),P=!0,n=new WebAssembly.RuntimeError("abort("+n+"). Build with -s ASSERTIONS=1 for more info."),a(n),n}function K(n){var e=en;return String.prototype.startsWith?e.startsWith(n):0===e.indexOf(n)}function nn(){return K("data:application/octet-stream;base64,")}e.preloadedImages={},e.preloadedAudios={};var en="diff.wasm";if(!nn()){var tn=en;en=e.locateFile?e.locateFile(tn,m):m+tn}function rn(){var n=en;try{if(n==en&&g)return new Uint8Array(g);if(d)return d(n);throw"both async and sync fetching of the wasm failed"}catch(n){J(n)}}function on(n){for(;0<n.length;){var t=n.shift();if("function"==typeof t)t(e);else{var r=t.Ka;"number"==typeof r?void 0===t.ga?z.get(r)():z.get(r)(t.ga):r(void 0===t.ga?null:t.ga)}}}function an(n){this.O=n-16,this.Fa=function(n){W[this.O+8>>2]=n},this.Ca=function(n){W[this.O+0>>2]=n},this.Da=function(){W[this.O+4>>2]=0},this.Ba=function(){C[this.O+12>>0]=0},this.Ea=function(){C[this.O+13>>0]=0},this.wa=function(n,e){this.Fa(n),this.Ca(e),this.Da(),this.Ba(),this.Ea()}}var un={};function sn(n){for(;n.length;){var e=n.pop();n.pop()(e)}}function cn(n){return this.fromWireType(j[n>>2])}var fn={},ln={},pn={};function hn(n){if(void 0===n)return"_unknown";var e=(n=n.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return 48<=e&&57>=e?"_"+n:n}function dn(n,e){return n=hn(n),new Function("body","return function "+n+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(e)}function vn(n){var e=Error,t=dn(n,(function(e){this.name=n,this.message=e,void 0!==(e=Error(e).stack)&&(this.stack=this.toString()+"\n"+e.replace(/^Error(:[^\n]*)?\n/,""))}));return t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},t}var yn=void 0;function mn(n){throw new yn(n)}function gn(n,e,t){function r(e){(e=t(e)).length!==n.length&&mn("Mismatched type converter count");for(var r=0;r<n.length;++r)_n(n[r],e[r])}n.forEach((function(n){pn[n]=e}));var o=Array(e.length),a=[],i=0;e.forEach((function(n,e){ln.hasOwnProperty(n)?o[e]=ln[n]:(a.push(n),fn.hasOwnProperty(n)||(fn[n]=[]),fn[n].push((function(){o[e]=ln[n],++i===a.length&&r(o)})))})),0===a.length&&r(o)}function wn(n){switch(n){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+n)}}var bn=void 0;function Tn(n){for(var e="";k[n];)e+=bn[k[n++]];return e}var Pn=void 0;function An(n){throw new Pn(n)}function _n(n,e,t){if(t=t||{},!("argPackAdvance"in e))throw new TypeError("registerType registeredInstance requires argPackAdvance");var r=e.name;if(n||An('type "'+r+'" must have a positive integer typeid pointer'),ln.hasOwnProperty(n)){if(t.va)return;An("Cannot register type '"+r+"' twice")}ln[n]=e,delete pn[n],fn.hasOwnProperty(n)&&(e=fn[n],delete fn[n],e.forEach((function(n){n()})))}function On(n){An(n.N.R.P.name+" instance already deleted")}var En=!1;function Cn(){}function kn(n){--n.count.value,0===n.count.value&&(n.S?n.T.X(n.S):n.R.P.X(n.O))}function Nn(n){return"undefined"==typeof FinalizationGroup?(Nn=function(n){return n},n):(En=new FinalizationGroup((function(n){for(var e=n.next();!e.done;e=n.next())(e=e.value).O?kn(e):console.warn("object already deleted: "+e.O)})),Cn=function(n){En.unregister(n.N)},(Nn=function(n){return En.register(n,n.N,n.N),n})(n))}var Sn=void 0,Wn=[];function jn(){for(;Wn.length;){var n=Wn.pop();n.N.Z=!1,n.delete()}}function Rn(){}var xn={};function Fn(n,e,t){if(void 0===n[e].W){var r=n[e];n[e]=function(){return n[e].W.hasOwnProperty(arguments.length)||An("Function '"+t+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+n[e].W+")!"),n[e].W[arguments.length].apply(this,arguments)},n[e].W=[],n[e].W[r.da]=r}}function Un(n,e,t,r,o,a,i,u){this.name=n,this.constructor=e,this.$=t,this.X=r,this.U=o,this.qa=a,this.ba=i,this.oa=u,this.za=[]}function In(n,e,t){for(;e!==t;)e.ba||An("Expected null or instance of "+t.name+", got an instance of "+e.name),n=e.ba(n),e=e.U;return n}function Dn(n,e){return null===e?(this.ha&&An("null is not a valid "+this.name),0):(e.N||An('Cannot pass "'+ee(e)+'" as a '+this.name),e.N.O||An("Cannot pass deleted object as a pointer of type "+this.name),In(e.N.O,e.N.R.P,this.P))}function Vn(n,e){if(null===e){if(this.ha&&An("null is not a valid "+this.name),this.fa){var t=this.ia();return null!==n&&n.push(this.X,t),t}return 0}if(e.N||An('Cannot pass "'+ee(e)+'" as a '+this.name),e.N.O||An("Cannot pass deleted object as a pointer of type "+this.name),!this.ea&&e.N.R.ea&&An("Cannot convert argument of type "+(e.N.T?e.N.T.name:e.N.R.name)+" to parameter type "+this.name),t=In(e.N.O,e.N.R.P,this.P),this.fa)switch(void 0===e.N.S&&An("Passing raw pointer to smart pointer is illegal"),this.Ja){case 0:e.N.T===this?t=e.N.S:An("Cannot convert argument of type "+(e.N.T?e.N.T.name:e.N.R.name)+" to parameter type "+this.name);break;case 1:t=e.N.S;break;case 2:if(e.N.T===this)t=e.N.S;else{var r=e.clone();t=this.Aa(t,ne((function(){r.delete()}))),null!==n&&n.push(this.X,t)}break;default:An("Unsupporting sharing policy")}return t}function Mn(n,e){return null===e?(this.ha&&An("null is not a valid "+this.name),0):(e.N||An('Cannot pass "'+ee(e)+'" as a '+this.name),e.N.O||An("Cannot pass deleted object as a pointer of type "+this.name),e.N.R.ea&&An("Cannot convert argument of type "+e.N.R.name+" to parameter type "+this.name),In(e.N.O,e.N.R.P,this.P))}function Bn(n,e,t){return e===t?n:void 0===t.U||null===(n=Bn(n,e,t.U))?null:t.oa(n)}var $n={};function zn(n,e){return e.R&&e.O||mn("makeClassHandle requires ptr and ptrType"),!!e.T!=!!e.S&&mn("Both smartPtrType and smartPtr must be specified"),e.count={value:1},Nn(Object.create(n,{N:{value:e}}))}function Hn(n,e,t,r){this.name=n,this.P=e,this.ha=t,this.ea=r,this.fa=!1,this.X=this.Aa=this.ia=this.ma=this.Ja=this.ya=void 0,void 0!==e.U?this.toWireType=Vn:(this.toWireType=r?Dn:Mn,this.V=null)}function Xn(n,t){var r=-1!=(n=Tn(n)).indexOf("j")?function(n,t){var r=[];return function(){r.length=arguments.length;for(var o=0;o<arguments.length;o++)r[o]=arguments[o];return-1!=n.indexOf("j")?(o=e["dynCall_"+n],o=r&&r.length?o.apply(null,[t].concat(r)):o.call(null,t)):o=z.get(t).apply(null,r),o}}(n,t):z.get(t);return"function"!=typeof r&&An("unknown function pointer with signature "+n+": "+t),r}var Gn=void 0;function qn(n){var e=Tn(n=ge(n));return me(n),e}function Ln(n,e){var t=[],r={};throw e.forEach((function n(e){r[e]||ln[e]||(pn[e]?pn[e].forEach(n):(t.push(e),r[e]=!0))})),new Gn(n+": "+t.map(qn).join([", "]))}function Qn(n,e){for(var t=[],r=0;r<n;r++)t.push(W[(e>>2)+r]);return t}function Yn(n){var e=Function;if(!(e instanceof Function))throw new TypeError("new_ called with constructor type "+typeof e+" which is not a function");var t=dn(e.name||"unknownFunctionName",(function(){}));return t.prototype=e.prototype,t=new t,(n=e.apply(t,n))instanceof Object?n:t}var Zn=[],Jn=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function Kn(n){4<n&&0==--Jn[n].ja&&(Jn[n]=void 0,Zn.push(n))}function ne(n){switch(n){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var e=Zn.length?Zn.pop():Jn.length;return Jn[e]={ja:1,value:n},e}}function ee(n){if(null===n)return"null";var e=typeof n;return"object"===e||"array"===e||"function"===e?n.toString():""+n}function te(n,e){switch(e){case 2:return function(n){return this.fromWireType(R[n>>2])};case 3:return function(n){return this.fromWireType(x[n>>3])};default:throw new TypeError("Unknown float type: "+n)}}function re(n,e,t){switch(e){case 0:return t?function(n){return C[n]}:function(n){return k[n]};case 1:return t?function(n){return N[n>>1]}:function(n){return S[n>>1]};case 2:return t?function(n){return W[n>>2]}:function(n){return j[n>>2]};default:throw new TypeError("Unknown integer type: "+n)}}var oe={};function ae(n){var e=oe[n];return void 0===e?Tn(n):e}var ie=[];function ue(n){return n||An("Cannot use deleted val. handle = "+n),Jn[n].value}function se(){return"object"==typeof globalThis?globalThis:Function("return this")()}function ce(n,e){var t=ln[n];return void 0===t&&An(e+" has unknown type "+qn(n)),t}var fe={},le=[null,[],[]];yn=e.InternalError=vn("InternalError");for(var pe=Array(256),he=0;256>he;++he)pe[he]=String.fromCharCode(he);bn=pe,Pn=e.BindingError=vn("BindingError"),Rn.prototype.isAliasOf=function(n){if(!(this instanceof Rn&&n instanceof Rn))return!1;var e=this.N.R.P,t=this.N.O,r=n.N.R.P;for(n=n.N.O;e.U;)t=e.ba(t),e=e.U;for(;r.U;)n=r.ba(n),r=r.U;return e===r&&t===n},Rn.prototype.clone=function(){if(this.N.O||On(this),this.N.aa)return this.N.count.value+=1,this;var n=Nn,e=Object,t=e.create,r=Object.getPrototypeOf(this),o=this.N;return(n=n(t.call(e,r,{N:{value:{count:o.count,Z:o.Z,aa:o.aa,O:o.O,R:o.R,S:o.S,T:o.T}}}))).N.count.value+=1,n.N.Z=!1,n},Rn.prototype.delete=function(){this.N.O||On(this),this.N.Z&&!this.N.aa&&An("Object already scheduled for deletion"),Cn(this),kn(this.N),this.N.aa||(this.N.S=void 0,this.N.O=void 0)},Rn.prototype.isDeleted=function(){return!this.N.O},Rn.prototype.deleteLater=function(){return this.N.O||On(this),this.N.Z&&!this.N.aa&&An("Object already scheduled for deletion"),Wn.push(this),1===Wn.length&&Sn&&Sn(jn),this.N.Z=!0,this},Hn.prototype.ra=function(n){return this.ma&&(n=this.ma(n)),n},Hn.prototype.ka=function(n){this.X&&this.X(n)},Hn.prototype.argPackAdvance=8,Hn.prototype.readValueFromPointer=cn,Hn.prototype.deleteObject=function(n){null!==n&&n.delete()},Hn.prototype.fromWireType=function(n){function e(){return this.fa?zn(this.P.$,{R:this.ya,O:t,T:this,S:n}):zn(this.P.$,{R:this,O:n})}var t=this.ra(n);if(!t)return this.ka(n),null;var r=function(n,e){for(void 0===e&&An("ptr should not be undefined");n.U;)e=n.ba(e),n=n.U;return $n[e]}(this.P,t);if(void 0!==r)return 0===r.N.count.value?(r.N.O=t,r.N.S=n,r.clone()):(r=r.clone(),this.ka(n),r);if(r=this.P.qa(t),!(r=xn[r]))return e.call(this);r=this.ea?r.na:r.pointerType;var o=Bn(t,this.P,r.P);return null===o?e.call(this):this.fa?zn(r.P.$,{R:r,O:o,T:this,S:n}):zn(r.P.$,{R:r,O:o})},e.getInheritedInstanceCount=function(){return Object.keys($n).length},e.getLiveInheritedInstances=function(){var n,e=[];for(n in $n)$n.hasOwnProperty(n)&&e.push($n[n]);return e},e.flushPendingDeletes=jn,e.setDelayFunction=function(n){Sn=n,Wn.length&&Sn&&Sn(jn)},Gn=e.UnboundTypeError=vn("UnboundTypeError"),e.count_emval_handles=function(){for(var n=0,e=5;e<Jn.length;++e)void 0!==Jn[e]&&++n;return n},e.get_first_emval=function(){for(var n=5;n<Jn.length;++n)if(void 0!==Jn[n])return Jn[n];return null};var de={b:function(n,e,t,r){J("Assertion failed: "+(n?O(k,n,void 0):"")+", at: "+[e?e?O(k,e,void 0):"":"unknown filename",t,r?r?O(k,r,void 0):"":"unknown function"])},B:function(n){return ye(n+16)+16},E:function(){},A:function(n,e,t){throw new an(n).wa(e,t),n},i:function(n){var e=un[n];delete un[n];var t=e.ia,r=e.X,o=e.la;gn([n],o.map((function(n){return n.ua})).concat(o.map((function(n){return n.Ha}))),(function(n){var a={};return o.forEach((function(e,t){var r=n[t],i=e.sa,u=e.ta,s=n[t+o.length],c=e.Ga,f=e.Ia;a[e.pa]={read:function(n){return r.fromWireType(i(u,n))},write:function(n,e){var t=[];c(f,n,s.toWireType(t,e)),sn(t)}}})),[{name:e.name,fromWireType:function(n){var e,t={};for(e in a)t[e]=a[e].read(n);return r(n),t},toWireType:function(n,e){for(var o in a)if(!(o in e))throw new TypeError('Missing field:  "'+o+'"');var i=t();for(o in a)a[o].write(i,e[o]);return null!==n&&n.push(r,i),i},argPackAdvance:8,readValueFromPointer:cn,V:r}]}))},y:function(n,e,t,r,o){var a=wn(t);_n(n,{name:e=Tn(e),fromWireType:function(n){return!!n},toWireType:function(n,e){return e?r:o},argPackAdvance:8,readValueFromPointer:function(n){if(1===t)var r=C;else if(2===t)r=N;else{if(4!==t)throw new TypeError("Unknown boolean type size: "+e);r=W}return this.fromWireType(r[n>>a])},V:null})},t:function(n,t,r,o,a,i,u,s,c,f,l,p,h){l=Tn(l),i=Xn(a,i),s&&(s=Xn(u,s)),f&&(f=Xn(c,f)),h=Xn(p,h);var d=hn(l);!function(n,t){e.hasOwnProperty(n)?(An("Cannot register public name '"+n+"' twice"),Fn(e,n,n),e.hasOwnProperty(void 0)&&An("Cannot register multiple overloads of a function with the same number of arguments (undefined)!"),e[n].W[void 0]=t):e[n]=t}(d,(function(){Ln("Cannot construct "+l+" due to unbound types",[o])})),gn([n,t,r],o?[o]:[],(function(t){if(t=t[0],o)var r=t.P,a=r.$;else a=Rn.prototype;t=dn(d,(function(){if(Object.getPrototypeOf(this)!==u)throw new Pn("Use 'new' to construct "+l);if(void 0===c.Y)throw new Pn(l+" has no accessible constructor");var n=c.Y[arguments.length];if(void 0===n)throw new Pn("Tried to invoke ctor of "+l+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(c.Y).toString()+") parameters instead!");return n.apply(this,arguments)}));var u=Object.create(a,{constructor:{value:t}});t.prototype=u;var c=new Un(l,t,u,h,r,i,s,f);r=new Hn(l,c,!0,!1),a=new Hn(l+"*",c,!1,!1);var p=new Hn(l+" const*",c,!1,!0);return xn[n]={pointerType:a,na:p},function(n,t){e.hasOwnProperty(n)||mn("Replacing nonexistant public symbol"),e[n]=t,e[n].da=void 0}(d,t),[r,a,p]}))},s:function(n,e,t,r,o,a){A(0<e);var i=Qn(e,t);o=Xn(r,o);var u=[a],s=[];gn([],[n],(function(n){var t="constructor "+(n=n[0]).name;if(void 0===n.P.Y&&(n.P.Y=[]),void 0!==n.P.Y[e-1])throw new Pn("Cannot register multiple constructors with identical number of parameters ("+(e-1)+") for class '"+n.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return n.P.Y[e-1]=function(){Ln("Cannot construct "+n.name+" due to unbound types",i)},gn([],i,(function(r){return n.P.Y[e-1]=function(){arguments.length!==e-1&&An(t+" called with "+arguments.length+" arguments, expected "+(e-1)),s.length=0,u.length=e;for(var n=1;n<e;++n)u[n]=r[n].toWireType(s,arguments[n-1]);return n=o.apply(null,u),sn(s),r[0].fromWireType(n)},[]})),[]}))},r:function(n,e,t,r,o,a,i,u){var s=Qn(t,r);e=Tn(e),a=Xn(o,a),gn([],[n],(function(n){function r(){Ln("Cannot call "+o+" due to unbound types",s)}var o=(n=n[0]).name+"."+e;u&&n.P.za.push(e);var c=n.P.$,f=c[e];return void 0===f||void 0===f.W&&f.className!==n.name&&f.da===t-2?(r.da=t-2,r.className=n.name,c[e]=r):(Fn(c,e,o),c[e].W[t-2]=r),gn([],s,(function(r){var u=o,s=n,f=a,l=r.length;2>l&&An("argTypes array size mismatch! Must at least get return value and 'this' types!");var p=null!==r[1]&&null!==s,h=!1;for(s=1;s<r.length;++s)if(null!==r[s]&&void 0===r[s].V){h=!0;break}var d="void"!==r[0].name,v="",y="";for(s=0;s<l-2;++s)v+=(0!==s?", ":"")+"arg"+s,y+=(0!==s?", ":"")+"arg"+s+"Wired";u="return function "+hn(u)+"("+v+") {\nif (arguments.length !== "+(l-2)+") {\nthrowBindingError('function "+u+" called with ' + arguments.length + ' arguments, expected "+(l-2)+" args!');\n}\n",h&&(u+="var destructors = [];\n");var m=h?"destructors":"null";for(v="throwBindingError invoker fn runDestructors retType classParam".split(" "),f=[An,f,i,sn,r[0],r[1]],p&&(u+="var thisWired = classParam.toWireType("+m+", this);\n"),s=0;s<l-2;++s)u+="var arg"+s+"Wired = argType"+s+".toWireType("+m+", arg"+s+"); // "+r[s+2].name+"\n",v.push("argType"+s),f.push(r[s+2]);if(p&&(y="thisWired"+(0<y.length?", ":"")+y),u+=(d?"var rv = ":"")+"invoker(fn"+(0<y.length?", ":"")+y+");\n",h)u+="runDestructors(destructors);\n";else for(s=p?1:2;s<r.length;++s)l=1===s?"thisWired":"arg"+(s-2)+"Wired",null!==r[s].V&&(u+=l+"_dtor("+l+"); // "+r[s].name+"\n",v.push(l+"_dtor"),f.push(r[s].V));return d&&(u+="var ret = retType.fromWireType(rv);\nreturn ret;\n"),v.push(u+"}\n"),r=Yn(v).apply(null,f),void 0===c[e].W?(r.da=t-2,c[e]=r):c[e].W[t-2]=r,[]})),[]}))},x:function(n,e){_n(n,{name:e=Tn(e),fromWireType:function(n){var e=Jn[n].value;return Kn(n),e},toWireType:function(n,e){return ne(e)},argPackAdvance:8,readValueFromPointer:cn,V:null})},k:function(n,e,t){t=wn(t),_n(n,{name:e=Tn(e),fromWireType:function(n){return n},toWireType:function(n,e){if("number"!=typeof e&&"boolean"!=typeof e)throw new TypeError('Cannot convert "'+ee(e)+'" to '+this.name);return e},argPackAdvance:8,readValueFromPointer:te(e,t),V:null})},d:function(n,e,t,r,o){function a(n){return n}e=Tn(e),-1===o&&(o=4294967295);var i=wn(t);if(0===r){var u=32-8*t;a=function(n){return n<<u>>>u}}var s=-1!=e.indexOf("unsigned");_n(n,{name:e,fromWireType:a,toWireType:function(n,t){if("number"!=typeof t&&"boolean"!=typeof t)throw new TypeError('Cannot convert "'+ee(t)+'" to '+this.name);if(t<r||t>o)throw new TypeError('Passing a number "'+ee(t)+'" from JS side to C/C++ side to an argument of type "'+e+'", which is outside the valid range ['+r+", "+o+"]!");return s?t>>>0:0|t},argPackAdvance:8,readValueFromPointer:re(e,i,0!==r),V:null})},c:function(n,e,t){function r(n){var e=j;return new o(E,e[1+(n>>=2)],e[n])}var o=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][e];_n(n,{name:t=Tn(t),fromWireType:r,argPackAdvance:8,readValueFromPointer:r},{va:!0})},l:function(n,e){var t="std::string"===(e=Tn(e));_n(n,{name:e,fromWireType:function(n){var e=j[n>>2];if(t)for(var r=n+4,o=0;o<=e;++o){var a=n+4+o;if(o==e||0==k[a]){if(r=r?O(k,r,a-r):"",void 0===i)var i=r;else i+=String.fromCharCode(0),i+=r;r=a+1}}else{for(i=Array(e),o=0;o<e;++o)i[o]=String.fromCharCode(k[n+4+o]);i=i.join("")}return me(n),i},toWireType:function(n,e){e instanceof ArrayBuffer&&(e=new Uint8Array(e));var r="string"==typeof e;r||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Int8Array||An("Cannot pass non-string to std::string");var o=(t&&r?function(){for(var n=0,t=0;t<e.length;++t){var r=e.charCodeAt(t);55296<=r&&57343>=r&&(r=65536+((1023&r)<<10)|1023&e.charCodeAt(++t)),127>=r?++n:n=2047>=r?n+2:65535>=r?n+3:n+4}return n}:function(){return e.length})(),a=ye(4+o+1);if(j[a>>2]=o,t&&r)!function(n,e,t){var r=k;if(0<t){t=e+t-1;for(var o=0;o<n.length;++o){var a=n.charCodeAt(o);if(55296<=a&&57343>=a&&(a=65536+((1023&a)<<10)|1023&n.charCodeAt(++o)),127>=a){if(e>=t)break;r[e++]=a}else{if(2047>=a){if(e+1>=t)break;r[e++]=192|a>>6}else{if(65535>=a){if(e+2>=t)break;r[e++]=224|a>>12}else{if(e+3>=t)break;r[e++]=240|a>>18,r[e++]=128|a>>12&63}r[e++]=128|a>>6&63}r[e++]=128|63&a}}r[e]=0}}(e,a+4,o+1);else if(r)for(r=0;r<o;++r){var i=e.charCodeAt(r);255<i&&(me(a),An("String has UTF-16 code units that do not fit in 8 bits")),k[a+4+r]=i}else for(r=0;r<o;++r)k[a+4+r]=e[r];return null!==n&&n.push(me,a),a},argPackAdvance:8,readValueFromPointer:cn,V:function(n){me(n)}})},g:function(n,e,t){if(t=Tn(t),2===e)var r=U,o=I,a=D,i=function(){return S},u=1;else 4===e&&(r=V,o=M,a=B,i=function(){return j},u=2);_n(n,{name:t,fromWireType:function(n){for(var t,o=j[n>>2],a=i(),s=n+4,c=0;c<=o;++c){var f=n+4+c*e;c!=o&&0!=a[f>>u]||(s=r(s,f-s),void 0===t?t=s:(t+=String.fromCharCode(0),t+=s),s=f+e)}return me(n),t},toWireType:function(n,r){"string"!=typeof r&&An("Cannot pass non-string to C++ string type "+t);var i=a(r),s=ye(4+i+e);return j[s>>2]=i>>u,o(r,s+4,i+e),null!==n&&n.push(me,s),s},argPackAdvance:8,readValueFromPointer:cn,V:function(n){me(n)}})},m:function(n,e,t,r,o,a){un[n]={name:Tn(e),ia:Xn(t,r),X:Xn(o,a),la:[]}},e:function(n,e,t,r,o,a,i,u,s,c){un[n].la.push({pa:Tn(e),ua:t,sa:Xn(r,o),ta:a,Ha:i,Ga:Xn(u,s),Ia:c})},z:function(n,e){_n(n,{xa:!0,name:e=Tn(e),argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},n:function(n,e,t,r){(n=ie[n])(e=ue(e),t=ae(t),null,r)},f:Kn,p:function(n){return 0===n?ne(se()):(n=ae(n),ne(se()[n]))},o:function(n,e){for(var t=(e=function(n,e){for(var t=Array(n),r=0;r<n;++r)t[r]=ce(W[(e>>2)+r],"parameter "+r);return t}(n,e))[0],r=t.name+"_$"+e.slice(1).map((function(n){return n.name})).join("_")+"$",o=["retType"],a=[t],i="",u=0;u<n-1;++u)i+=(0!==u?", ":"")+"arg"+u,o.push("argType"+u),a.push(e[1+u]);r="return function "+hn("methodCaller_"+r)+"(handle, name, destructors, args) {\n";var s=0;for(u=0;u<n-1;++u)r+="    var arg"+u+" = argType"+u+".readValueFromPointer(args"+(s?"+"+s:"")+");\n",s+=e[u+1].argPackAdvance;for(r+="    var rv = handle[name]("+i+");\n",u=0;u<n-1;++u)e[u+1].deleteObject&&(r+="    argType"+u+".deleteObject(arg"+u+");\n");return t.xa||(r+="    return retType.toWireType(destructors, rv);\n"),o.push(r+"};\n"),function(n){var e=ie.length;return ie.push(n),e}(n=Yn(o).apply(null,a))},h:function(n){4<n&&(Jn[n].ja+=1)},D:function(n,t,r,o){n=ue(n);var a=fe[t];if(!a){a="";for(var i=0;i<t;++i)a+=(0!==i?", ":"")+"arg"+i;var u="return function emval_allocator_"+t+"(constructor, argTypes, args) {\n";for(i=0;i<t;++i)u+="var argType"+i+" = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + "+i+'], "parameter '+i+'");\nvar arg'+i+" = argType"+i+".readValueFromPointer(args);\nargs += argType"+i+"['argPackAdvance'];\n";a=new Function("requireRegisteredType","Module","__emval_register",u+"var obj = new constructor("+a+");\nreturn __emval_register(obj);\n}\n")(ce,e,ne),fe[t]=a}return a(n,r,o)},C:function(){return ne([])},q:function(n,e){return ne(n=(n=ce(n,"_emval_take_value")).readValueFromPointer(e))},a:function(){J()},v:function(n,e,t){k.copyWithin(n,e,e+t)},w:function(n){var e=k.length;if(2147483648<(n>>>=0))return!1;for(var t=1;4>=t;t*=2){var r=e*(1+.2/t);r=Math.min(r,n+100663296),0<(r=Math.max(n,r))%65536&&(r+=65536-r%65536);n:{try{T.grow(Math.min(2147483648,r)-E.byteLength+65535>>>16),$();var o=1;break n}catch(n){}o=void 0}if(o)return!0}return!1},j:function(n,e,t,r){for(var o=0,a=0;a<t;a++){for(var i=W[e+8*a>>2],u=W[e+(8*a+4)>>2],s=0;s<u;s++){var c=k[i+s],f=le[n];0===c||10===c?((1===n?w:b)(O(f,0)),f.length=0):f.push(c)}o+=u}return W[r>>2]=o,0},u:function(){}};!function(){function n(n){e.asm=n.exports,T=e.asm.F,$(),z=e.asm.I,X.unshift(e.asm.G),Q--,e.monitorRunDependencies&&e.monitorRunDependencies(Q),0==Q&&(null!==Y&&(clearInterval(Y),Y=null),Z&&(n=Z,Z=null,n()))}function t(e){n(e.instance)}function r(n){return function(){if(!g&&(u||s)){if("function"==typeof fetch&&!K("file://"))return fetch(en,{credentials:"same-origin"}).then((function(n){if(!n.ok)throw"failed to load wasm binary file at '"+en+"'";return n.arrayBuffer()})).catch((function(){return rn()}));if(h)return new Promise((function(n,e){h(en,(function(e){n(new Uint8Array(e))}),e)}))}return Promise.resolve().then((function(){return rn()}))}().then((function(n){return WebAssembly.instantiate(n,o)})).then(n,(function(n){b("failed to asynchronously prepare wasm: "+n),J(n)}))}var o={a:de};if(Q++,e.monitorRunDependencies&&e.monitorRunDependencies(Q),e.instantiateWasm)try{return e.instantiateWasm(o,n)}catch(n){return b("Module.instantiateWasm callback failed with error: "+n),!1}(g||"function"!=typeof WebAssembly.instantiateStreaming||nn()||K("file://")||"function"!=typeof fetch?r(t):fetch(en,{credentials:"same-origin"}).then((function(n){return WebAssembly.instantiateStreaming(n,o).then(t,(function(n){return b("wasm streaming compile failed: "+n),b("falling back to ArrayBuffer instantiation"),r(t)}))}))).catch(a)}(),e.___wasm_call_ctors=function(){return(e.___wasm_call_ctors=e.asm.G).apply(null,arguments)};var ve,ye=e._malloc=function(){return(ye=e._malloc=e.asm.H).apply(null,arguments)},me=e._free=function(){return(me=e._free=e.asm.J).apply(null,arguments)},ge=e.___getTypeName=function(){return(ge=e.___getTypeName=e.asm.K).apply(null,arguments)};function we(){function n(){if(!ve&&(ve=!0,e.calledRun=!0,!P)){if(on(X),on(G),o(e),e.onRuntimeInitialized&&e.onRuntimeInitialized(),e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;){var n=e.postRun.shift();q.unshift(n)}on(q)}}if(!(0<Q)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)L();on(H),0<Q||(e.setStatus?(e.setStatus("Running..."),setTimeout((function(){setTimeout((function(){e.setStatus("")}),1),n()}),1)):n())}}if(e.___embind_register_native_and_builtin_types=function(){return(e.___embind_register_native_and_builtin_types=e.asm.L).apply(null,arguments)},e.dynCall_jiji=function(){return(e.dynCall_jiji=e.asm.M).apply(null,arguments)},Z=function n(){ve||we(),ve||(Z=n)},e.run=we,e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();return we(),n.ready});n.exports=o},3219:(n,e,t)=>{"use strict";n.exports=t.p+"diff.9895d.wasm"},9159:(n,e,t)=>{"use strict";var r={};t.r(r),t.d(r,{encode:()=>_});var o={};t.r(o),t.d(o,{decode:()=>k,encode:()=>C});var a={};t.r(a),t.d(a,{decode:()=>x,encode:()=>R});var i={};t.r(i),t.d(i,{decode:()=>D,encode:()=>I});var u={};t.r(u),t.d(u,{decode:()=>$,encode:()=>B});var s=t(4279),c=t(9650),f=t.n(c),l=t(8059),p=t.n(l);const h={hfAsymmetry:1,goodQualitySeek:1.5,badQualitySeek:.5};let d,v;function y(n){if(d)return d;const e=n?f()({locateFile:()=>n}):f()();return d=e.then((n=>{v=n}))}function m(n,e){const t=n.data.byteLength,r=e.data.byteLength;if(t!==r)throw new Error(`Image data have different length ${t} vs. ${r}`);const o=t/n.width/n.height;if(3!==o&&4!==o)throw new Error("Image must be RGB or RGBA in colors");if(n.width!==e.width)throw new Error(`Image have different width ${n.width} vs. ${e.width}`);if(n.height!==e.height)throw new Error(`Image have different width ${n.height} vs. ${e.height}`)}class g{constructor(n){this.reference=n,this.native=new v.ButteraugliDiff(n)}close(){this.native.delete()}diff(n,e){if(!d)throw new Error("Wasm module not load");m(this.reference,n);const t={...h,...e};if(t.badQualitySeek<0||t.badQualitySeek>=2)throw new Error("badQualitySeek must between 0, 2");if(t.goodQualitySeek<0||t.goodQualitySeek>=2)throw new Error("goodQualitySeek must between 0, 2");return this.native.Diff(n.data,t)}}var w=t(3219),b=t(3678);function T(n,e,t){return n({noInitialRun:!0,locateFile:n=>{if(n.endsWith(".wasm"))return e;if(n.endsWith(".worker.js"))return t;throw Error("Unknown url in locateFile "+n)}})}function P(n){let e;return async(t,r)=>{const{data:o,width:a,height:i}=t;e||(e=n());const u=(await e).encode(o,a,i,r);if(!u)throw new Error("Encoding error");return s.re(u.buffer,[u.buffer])}}function A(n){let e;return async t=>{e||(e=n());const r=(await e).decode(t);if(!r)throw new Error("Decoding error");return s.re(r,[r.data.buffer])}}t(4637);const _=P((async()=>T((await t.e(85).then(t.bind(t,3085))).default,b)));var O=t(9739),E=t(9633);const C=P((async()=>T((await t.e(135).then(t.bind(t,8135))).default,O))),k=A((async()=>T((await t.e(267).then(t.bind(t,8267))).default,E)));var N=t(2265),S=t(3106),W=t(9415),j=t(8140);const R=P((async()=>await(0,N.h4)()?T((await t.e(894).then(t.bind(t,3894))).default,W):T((await t.e(59).then(t.bind(t,9059))).default,S))),x=A((async()=>T((await t.e(3).then(t.bind(t,2003))).default,j)));var F=t(1944),U=t(7654);const I=P((async()=>T((await t.e(762).then(t.bind(t,8762))).default,F))),D=A((async()=>T((await t.e(832).then(t.bind(t,9832))).default,U)));var V=t(386),M=t(6206);const B=P((async()=>T((await t.e(939).then(t.bind(t,3939))).default,V))),$=A((async()=>T((await t.e(26).then(t.bind(t,8026))).default,M)));let z,H;function X(n){return async e=>{const t=performance.now();return{buffer:await n.encode(z,e),time:(performance.now()-t)/1e3}}}const G={setImageToEncode(n){z=n},mozjpegEncode:X(r),jxlEncode:X(o),webpEncode:X(a),avifEncode:X(i),webp2Encode:X(u),jxlDecode:k,webpDecode:x,avifDecode:D,webp2Decode:$,calcSSIM:async(n,e)=>(await y(w),function(n,e,t){return p()(n,e,t).mssim}(z,n,e)),calcPSNR:async n=>(await y(w),function(n,e){if(!v)throw new Error("Wasm module not loaded");m(n,e);const t=n.data,r=e.data,{length:o}=t;let a=0;for(let n=0;n<o;n++){const e=t[n]-r[n];a+=e*e}return 10*Math.log10(65025/a*o)}(z,n)),async calcButteraugli(n,e){await y(w),H||(H=new g(z));const[t,r]=H.diff(n,e);return{score:t,heatMap:s.re(r,[r.buffer])}}};s.Jj(G)},2203:()=>{},5783:()=>{}},r={};function o(n){var e=r[n];if(void 0!==e)return e.exports;var a=r[n]={exports:{}};return t[n](a,a.exports,o),a.exports}o.m=t,o.x=()=>{var n=o.O(void 0,[780],(()=>o(9159)));return o.O(n)},n=[],o.O=(e,t,r,a)=>{if(!t){var i=1/0;for(c=0;c<n.length;c++){for(var[t,r,a]=n[c],u=!0,s=0;s<t.length;s++)(!1&a||i>=a)&&Object.keys(o.O).every((n=>o.O[n](t[s])))?t.splice(s--,1):(u=!1,a<i&&(i=a));u&&(n.splice(c--,1),e=r())}return e}a=a||0;for(var c=n.length;c>0&&n[c-1][2]>a;c--)n[c]=n[c-1];n[c]=[t,r,a]},o.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return o.d(e,{a:e}),e},o.d=(n,e)=>{for(var t in e)o.o(e,t)&&!o.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},o.f={},o.e=n=>Promise.all(Object.keys(o.f).reduce(((e,t)=>(o.f[t](n,e),e)),[])),o.u=n=>n+".js",o.miniCssF=n=>{},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),o.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),o.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},(()=>{var n;o.g.importScripts&&(n=o.g.location+"");var e=o.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=n})(),(()=>{var n={159:1};o.f.i=(e,t)=>{n[e]||importScripts(o.p+o.u(e))};var e=self.webpackChunkic_analyzer=self.webpackChunkic_analyzer||[],t=e.push.bind(e);e.push=e=>{var[r,a,i]=e;for(var u in a)o.o(a,u)&&(o.m[u]=a[u]);for(i&&i(o);r.length;)n[r.pop()]=1;t(e)}})(),e=o.x,o.x=()=>o.e(780).then(e),o.x()})();
//# sourceMappingURL=159.js.map