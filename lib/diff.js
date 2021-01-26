
var Module = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
  return (
function(Module) {
  Module = Module || {};


var g;g||(g=typeof Module !== 'undefined' ? Module : {});var ba,ca;g.ready=new Promise(function(a,b){ba=a;ca=b});var da={},q;for(q in g)g.hasOwnProperty(q)&&(da[q]=g[q]);var ea=!1,x=!1,fa=!1,ha=!1;ea="object"===typeof window;x="function"===typeof importScripts;fa="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;ha=!ea&&!fa&&!x;var y="",ia,ja,ka,la;
if(fa)y=x?require("path").dirname(y)+"/":__dirname+"/",ia=function(a,b){ka||(ka=require("fs"));la||(la=require("path"));a=la.normalize(a);return ka.readFileSync(a,b?null:"utf8")},ja=function(a){a=ia(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",function(a){throw a;}),process.on("unhandledRejection",A),g.inspect=function(){return"[Emscripten Module object]"};else if(ha)"undefined"!=
typeof read&&(ia=function(a){return read(a)}),ja=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!==typeof print&&("undefined"===typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(ea||x)x?y=self.location.href:"undefined"!==typeof document&&document.currentScript&&(y=document.currentScript.src),_scriptDir&&(y=_scriptDir),
0!==y.indexOf("blob:")?y=y.substr(0,y.lastIndexOf("/")+1):y="",ia=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},x&&(ja=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});var ma=g.print||console.log.bind(console),B=g.printErr||console.warn.bind(console);for(q in da)da.hasOwnProperty(q)&&(g[q]=da[q]);da=null;var na;g.wasmBinary&&(na=g.wasmBinary);var noExitRuntime;
g.noExitRuntime&&(noExitRuntime=g.noExitRuntime);"object"!==typeof WebAssembly&&A("no native wasm support detected");var oa,pa=!1;function assert(a,b){a||A("Assertion failed: "+b)}var qa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ra(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&qa)return qa.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var f=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|f);else{var k=a[b++]&63;e=224==(e&240)?(e&15)<<12|f<<6|k:(e&7)<<18|f<<12|k<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}
function sa(a,b,c){var d=C;if(0<c){c=b+c-1;for(var e=0;e<a.length;++e){var f=a.charCodeAt(e);if(55296<=f&&57343>=f){var k=a.charCodeAt(++e);f=65536+((f&1023)<<10)|k&1023}if(127>=f){if(b>=c)break;d[b++]=f}else{if(2047>=f){if(b+1>=c)break;d[b++]=192|f>>6}else{if(65535>=f){if(b+2>=c)break;d[b++]=224|f>>12}else{if(b+3>=c)break;d[b++]=240|f>>18;d[b++]=128|f>>12&63}d[b++]=128|f>>6&63}d[b++]=128|f&63}}d[b]=0}}var ta="undefined"!==typeof TextDecoder?new TextDecoder("utf-16le"):void 0;
function ua(a,b){var c=a>>1;for(var d=c+b/2;!(c>=d)&&va[c];)++c;c<<=1;if(32<c-a&&ta)return ta.decode(C.subarray(a,c));c="";for(d=0;!(d>=b/2);++d){var e=E[a+2*d>>1];if(0==e)break;c+=String.fromCharCode(e)}return c}function wa(a,b,c){void 0===c&&(c=2147483647);if(2>c)return 0;c-=2;var d=b;c=c<2*a.length?c/2:a.length;for(var e=0;e<c;++e)E[b>>1]=a.charCodeAt(e),b+=2;E[b>>1]=0;return b-d}function xa(a){return 2*a.length}
function ya(a,b){for(var c=0,d="";!(c>=b/4);){var e=F[a+4*c>>2];if(0==e)break;++c;65536<=e?(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023)):d+=String.fromCharCode(e)}return d}function za(a,b,c){void 0===c&&(c=2147483647);if(4>c)return 0;var d=b;c=d+c-4;for(var e=0;e<a.length;++e){var f=a.charCodeAt(e);if(55296<=f&&57343>=f){var k=a.charCodeAt(++e);f=65536+((f&1023)<<10)|k&1023}F[b>>2]=f;b+=4;if(b+4>c)break}F[b>>2]=0;return b-d}
function Aa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&++c;b+=4}return b}var Ba,Ca,C,E,va,F,G,Da,Ea;function Fa(){var a=oa.buffer;Ba=a;g.HEAP8=Ca=new Int8Array(a);g.HEAP16=E=new Int16Array(a);g.HEAP32=F=new Int32Array(a);g.HEAPU8=C=new Uint8Array(a);g.HEAPU16=va=new Uint16Array(a);g.HEAPU32=G=new Uint32Array(a);g.HEAPF32=Da=new Float32Array(a);g.HEAPF64=Ea=new Float64Array(a)}var Ga,Ha=[],Ia=[],Ja=[],Ka=[];function La(){var a=g.preRun.shift();Ha.unshift(a)}
var H=0,Ma=null,Na=null;g.preloadedImages={};g.preloadedAudios={};function A(a){if(g.onAbort)g.onAbort(a);B(a);pa=!0;a=new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");ca(a);throw a;}function Oa(a){var b=I;return String.prototype.startsWith?b.startsWith(a):0===b.indexOf(a)}function Pa(){return Oa("data:application/octet-stream;base64,")}var I="diff.wasm";if(!Pa()){var Qa=I;I=g.locateFile?g.locateFile(Qa,y):y+Qa}
function Ra(){var a=I;try{if(a==I&&na)return new Uint8Array(na);if(ja)return ja(a);throw"both async and sync fetching of the wasm failed";}catch(b){A(b)}}function Sa(){return na||!ea&&!x||"function"!==typeof fetch||Oa("file://")?Promise.resolve().then(function(){return Ra()}):fetch(I,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+I+"'";return a.arrayBuffer()}).catch(function(){return Ra()})}
function Ta(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(g);else{var c=b.qa;"number"===typeof c?void 0===b.ga?Ga.get(c)():Ga.get(c)(b.ga):c(void 0===b.ga?null:b.ga)}}}function Ua(a){this.O=a-16;this.Ga=function(b){F[this.O+8>>2]=b};this.Da=function(b){F[this.O+0>>2]=b};this.Ea=function(){F[this.O+4>>2]=0};this.Ca=function(){Ca[this.O+12>>0]=0};this.Fa=function(){Ca[this.O+13>>0]=0};this.xa=function(b,c){this.Ga(b);this.Da(c);this.Ea();this.Ca();this.Fa()}}var Va=0,Wa={};
function Xa(a){for(;a.length;){var b=a.pop();a.pop()(b)}}function Ya(a){return this.fromWireType(G[a>>2])}var J={},K={},Za={};function $a(a){if(void 0===a)return"_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var b=a.charCodeAt(0);return 48<=b&&57>=b?"_"+a:a}function ab(a,b){a=$a(a);return(new Function("body","return function "+a+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n'))(b)}
function bb(a){var b=Error,c=ab(a,function(d){this.name=a;this.message=d;d=Error(d).stack;void 0!==d&&(this.stack=this.toString()+"\n"+d.replace(/^Error(:[^\n]*)?\n/,""))});c.prototype=Object.create(b.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return c}var cb=void 0;function db(a){throw new cb(a);}
function L(a,b,c){function d(h){h=c(h);h.length!==a.length&&db("Mismatched type converter count");for(var l=0;l<a.length;++l)M(a[l],h[l])}a.forEach(function(h){Za[h]=b});var e=Array(b.length),f=[],k=0;b.forEach(function(h,l){K.hasOwnProperty(h)?e[l]=K[h]:(f.push(h),J.hasOwnProperty(h)||(J[h]=[]),J[h].push(function(){e[l]=K[h];++k;k===f.length&&d(e)}))});0===f.length&&d(e)}
function eb(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}var fb=void 0;function N(a){for(var b="";C[a];)b+=fb[C[a++]];return b}var O=void 0;function P(a){throw new O(a);}
function M(a,b,c){c=c||{};if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var d=b.name;a||P('type "'+d+'" must have a positive integer typeid pointer');if(K.hasOwnProperty(a)){if(c.wa)return;P("Cannot register type '"+d+"' twice")}K[a]=b;delete Za[a];J.hasOwnProperty(a)&&(b=J[a],delete J[a],b.forEach(function(e){e()}))}function gb(a){return{count:a.count,Z:a.Z,aa:a.aa,O:a.O,R:a.R,S:a.S,T:a.T}}
function hb(a){P(a.N.R.P.name+" instance already deleted")}var ib=!1;function jb(){}function kb(a){--a.count.value;0===a.count.value&&(a.S?a.T.X(a.S):a.R.P.X(a.O))}function lb(a){if("undefined"===typeof FinalizationGroup)return lb=function(b){return b},a;ib=new FinalizationGroup(function(b){for(var c=b.next();!c.done;c=b.next())c=c.value,c.O?kb(c):console.warn("object already deleted: "+c.O)});lb=function(b){ib.register(b,b.N,b.N);return b};jb=function(b){ib.unregister(b.N)};return lb(a)}
var mb=void 0,nb=[];function ob(){for(;nb.length;){var a=nb.pop();a.N.Z=!1;a["delete"]()}}function Q(){}var pb={};function qb(a,b,c){if(void 0===a[b].W){var d=a[b];a[b]=function(){a[b].W.hasOwnProperty(arguments.length)||P("Function '"+c+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+a[b].W+")!");return a[b].W[arguments.length].apply(this,arguments)};a[b].W=[];a[b].W[d.da]=d}}
function rb(a,b){g.hasOwnProperty(a)?(P("Cannot register public name '"+a+"' twice"),qb(g,a,a),g.hasOwnProperty(void 0)&&P("Cannot register multiple overloads of a function with the same number of arguments (undefined)!"),g[a].W[void 0]=b):g[a]=b}function sb(a,b,c,d,e,f,k,h){this.name=a;this.constructor=b;this.$=c;this.X=d;this.U=e;this.ra=f;this.ba=k;this.oa=h;this.Aa=[]}
function tb(a,b,c){for(;b!==c;)b.ba||P("Expected null or instance of "+c.name+", got an instance of "+b.name),a=b.ba(a),b=b.U;return a}function ub(a,b){if(null===b)return this.ha&&P("null is not a valid "+this.name),0;b.N||P('Cannot pass "'+T(b)+'" as a '+this.name);b.N.O||P("Cannot pass deleted object as a pointer of type "+this.name);return tb(b.N.O,b.N.R.P,this.P)}
function vb(a,b){if(null===b){this.ha&&P("null is not a valid "+this.name);if(this.fa){var c=this.ia();null!==a&&a.push(this.X,c);return c}return 0}b.N||P('Cannot pass "'+T(b)+'" as a '+this.name);b.N.O||P("Cannot pass deleted object as a pointer of type "+this.name);!this.ea&&b.N.R.ea&&P("Cannot convert argument of type "+(b.N.T?b.N.T.name:b.N.R.name)+" to parameter type "+this.name);c=tb(b.N.O,b.N.R.P,this.P);if(this.fa)switch(void 0===b.N.S&&P("Passing raw pointer to smart pointer is illegal"),
this.Ka){case 0:b.N.T===this?c=b.N.S:P("Cannot convert argument of type "+(b.N.T?b.N.T.name:b.N.R.name)+" to parameter type "+this.name);break;case 1:c=b.N.S;break;case 2:if(b.N.T===this)c=b.N.S;else{var d=b.clone();c=this.Ba(c,U(function(){d["delete"]()}));null!==a&&a.push(this.X,c)}break;default:P("Unsupporting sharing policy")}return c}
function wb(a,b){if(null===b)return this.ha&&P("null is not a valid "+this.name),0;b.N||P('Cannot pass "'+T(b)+'" as a '+this.name);b.N.O||P("Cannot pass deleted object as a pointer of type "+this.name);b.N.R.ea&&P("Cannot convert argument of type "+b.N.R.name+" to parameter type "+this.name);return tb(b.N.O,b.N.R.P,this.P)}function xb(a,b,c){if(b===c)return a;if(void 0===c.U)return null;a=xb(a,b,c.U);return null===a?null:c.oa(a)}var yb={};
function zb(a,b){for(void 0===b&&P("ptr should not be undefined");a.U;)b=a.ba(b),a=a.U;return yb[b]}function Ab(a,b){b.R&&b.O||db("makeClassHandle requires ptr and ptrType");!!b.T!==!!b.S&&db("Both smartPtrType and smartPtr must be specified");b.count={value:1};return lb(Object.create(a,{N:{value:b}}))}function V(a,b,c,d){this.name=a;this.P=b;this.ha=c;this.ea=d;this.fa=!1;this.X=this.Ba=this.ia=this.ma=this.Ka=this.za=void 0;void 0!==b.U?this.toWireType=vb:(this.toWireType=d?ub:wb,this.V=null)}
function Db(a,b){g.hasOwnProperty(a)||db("Replacing nonexistant public symbol");g[a]=b;g[a].da=void 0}function Eb(a,b){assert(0<=a.indexOf("j"),"getDynCaller should only be called with i64 sigs");var c=[];return function(){c.length=arguments.length;for(var d=0;d<arguments.length;d++)c[d]=arguments[d];var e;-1!=a.indexOf("j")?e=c&&c.length?g["dynCall_"+a].apply(null,[b].concat(c)):g["dynCall_"+a].call(null,b):e=Ga.get(b).apply(null,c);return e}}
function W(a,b){a=N(a);var c=-1!=a.indexOf("j")?Eb(a,b):Ga.get(b);"function"!==typeof c&&P("unknown function pointer with signature "+a+": "+b);return c}var Fb=void 0;function Gb(a){a=Hb(a);var b=N(a);X(a);return b}function Ib(a,b){function c(f){e[f]||K[f]||(Za[f]?Za[f].forEach(c):(d.push(f),e[f]=!0))}var d=[],e={};b.forEach(c);throw new Fb(a+": "+d.map(Gb).join([", "]));}function Jb(a,b){for(var c=[],d=0;d<a;d++)c.push(F[(b>>2)+d]);return c}
function Kb(a){var b=Function;if(!(b instanceof Function))throw new TypeError("new_ called with constructor type "+typeof b+" which is not a function");var c=ab(b.name||"unknownFunctionName",function(){});c.prototype=b.prototype;c=new c;a=b.apply(c,a);return a instanceof Object?a:c}var Lb=[],Y=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function Mb(a){4<a&&0===--Y[a].ja&&(Y[a]=void 0,Lb.push(a))}
function U(a){switch(a){case void 0:return 1;case null:return 2;case !0:return 3;case !1:return 4;default:var b=Lb.length?Lb.pop():Y.length;Y[b]={ja:1,value:a};return b}}function T(a){if(null===a)return"null";var b=typeof a;return"object"===b||"array"===b||"function"===b?a.toString():""+a}function Nb(a,b){switch(b){case 2:return function(c){return this.fromWireType(Da[c>>2])};case 3:return function(c){return this.fromWireType(Ea[c>>3])};default:throw new TypeError("Unknown float type: "+a);}}
function Ob(a,b,c){switch(b){case 0:return c?function(d){return Ca[d]}:function(d){return C[d]};case 1:return c?function(d){return E[d>>1]}:function(d){return va[d>>1]};case 2:return c?function(d){return F[d>>2]}:function(d){return G[d>>2]};default:throw new TypeError("Unknown integer type: "+a);}}var Pb={};function Qb(a){var b=Pb[a];return void 0===b?N(a):b}var Rb=[];function Sb(a){a||P("Cannot use deleted val. handle = "+a);return Y[a].value}
function Tb(){return"object"===typeof globalThis?globalThis:Function("return this")()}function Ub(a){var b=Rb.length;Rb.push(a);return b}function Vb(a,b){var c=K[a];void 0===c&&P(b+" has unknown type "+Gb(a));return c}function Wb(a,b){for(var c=Array(a),d=0;d<a;++d)c[d]=Vb(F[(b>>2)+d],"parameter "+d);return c}var Xb={},Yb=[null,[],[]];cb=g.InternalError=bb("InternalError");for(var Zb=Array(256),$b=0;256>$b;++$b)Zb[$b]=String.fromCharCode($b);fb=Zb;O=g.BindingError=bb("BindingError");
Q.prototype.isAliasOf=function(a){if(!(this instanceof Q&&a instanceof Q))return!1;var b=this.N.R.P,c=this.N.O,d=a.N.R.P;for(a=a.N.O;b.U;)c=b.ba(c),b=b.U;for(;d.U;)a=d.ba(a),d=d.U;return b===d&&c===a};Q.prototype.clone=function(){this.N.O||hb(this);if(this.N.aa)return this.N.count.value+=1,this;var a=lb(Object.create(Object.getPrototypeOf(this),{N:{value:gb(this.N)}}));a.N.count.value+=1;a.N.Z=!1;return a};
Q.prototype["delete"]=function(){this.N.O||hb(this);this.N.Z&&!this.N.aa&&P("Object already scheduled for deletion");jb(this);kb(this.N);this.N.aa||(this.N.S=void 0,this.N.O=void 0)};Q.prototype.isDeleted=function(){return!this.N.O};Q.prototype.deleteLater=function(){this.N.O||hb(this);this.N.Z&&!this.N.aa&&P("Object already scheduled for deletion");nb.push(this);1===nb.length&&mb&&mb(ob);this.N.Z=!0;return this};V.prototype.sa=function(a){this.ma&&(a=this.ma(a));return a};
V.prototype.ka=function(a){this.X&&this.X(a)};V.prototype.argPackAdvance=8;V.prototype.readValueFromPointer=Ya;V.prototype.deleteObject=function(a){if(null!==a)a["delete"]()};
V.prototype.fromWireType=function(a){function b(){return this.fa?Ab(this.P.$,{R:this.za,O:c,T:this,S:a}):Ab(this.P.$,{R:this,O:a})}var c=this.sa(a);if(!c)return this.ka(a),null;var d=zb(this.P,c);if(void 0!==d){if(0===d.N.count.value)return d.N.O=c,d.N.S=a,d.clone();d=d.clone();this.ka(a);return d}d=this.P.ra(c);d=pb[d];if(!d)return b.call(this);d=this.ea?d.na:d.pointerType;var e=xb(c,this.P,d.P);return null===e?b.call(this):this.fa?Ab(d.P.$,{R:d,O:e,T:this,S:a}):Ab(d.P.$,{R:d,O:e})};
g.getInheritedInstanceCount=function(){return Object.keys(yb).length};g.getLiveInheritedInstances=function(){var a=[],b;for(b in yb)yb.hasOwnProperty(b)&&a.push(yb[b]);return a};g.flushPendingDeletes=ob;g.setDelayFunction=function(a){mb=a;nb.length&&mb&&mb(ob)};Fb=g.UnboundTypeError=bb("UnboundTypeError");g.count_emval_handles=function(){for(var a=0,b=5;b<Y.length;++b)void 0!==Y[b]&&++a;return a};g.get_first_emval=function(){for(var a=5;a<Y.length;++a)if(void 0!==Y[a])return Y[a];return null};Ia.push({qa:function(){ac()}});
var cc={b:function(a,b,c,d){A("Assertion failed: "+(a?ra(C,a,void 0):"")+", at: "+[b?b?ra(C,b,void 0):"":"unknown filename",c,d?d?ra(C,d,void 0):"":"unknown function"])},B:function(a){return bc(a+16)+16},E:function(){},A:function(a,b,c){(new Ua(a)).xa(b,c);Va++;throw a;},i:function(a){var b=Wa[a];delete Wa[a];var c=b.ia,d=b.X,e=b.la,f=e.map(function(k){return k.va}).concat(e.map(function(k){return k.Ia}));L([a],f,function(k){var h={};e.forEach(function(l,m){var n=k[m],r=l.ta,u=l.ua,z=k[m+e.length],
t=l.Ha,w=l.Ja;h[l.pa]={read:function(p){return n.fromWireType(r(u,p))},write:function(p,D){var v=[];t(w,p,z.toWireType(v,D));Xa(v)}}});return[{name:b.name,fromWireType:function(l){var m={},n;for(n in h)m[n]=h[n].read(l);d(l);return m},toWireType:function(l,m){for(var n in h)if(!(n in m))throw new TypeError('Missing field:  "'+n+'"');var r=c();for(n in h)h[n].write(r,m[n]);null!==l&&l.push(d,r);return r},argPackAdvance:8,readValueFromPointer:Ya,V:d}]})},y:function(a,b,c,d,e){var f=eb(c);b=N(b);M(a,
{name:b,fromWireType:function(k){return!!k},toWireType:function(k,h){return h?d:e},argPackAdvance:8,readValueFromPointer:function(k){if(1===c)var h=Ca;else if(2===c)h=E;else if(4===c)h=F;else throw new TypeError("Unknown boolean type size: "+b);return this.fromWireType(h[k>>f])},V:null})},t:function(a,b,c,d,e,f,k,h,l,m,n,r,u){n=N(n);f=W(e,f);h&&(h=W(k,h));m&&(m=W(l,m));u=W(r,u);var z=$a(n);rb(z,function(){Ib("Cannot construct "+n+" due to unbound types",[d])});L([a,b,c],d?[d]:[],function(t){t=t[0];
if(d){var w=t.P;var p=w.$}else p=Q.prototype;t=ab(z,function(){if(Object.getPrototypeOf(this)!==D)throw new O("Use 'new' to construct "+n);if(void 0===v.Y)throw new O(n+" has no accessible constructor");var R=v.Y[arguments.length];if(void 0===R)throw new O("Tried to invoke ctor of "+n+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(v.Y).toString()+") parameters instead!");return R.apply(this,arguments)});var D=Object.create(p,{constructor:{value:t}});t.prototype=
D;var v=new sb(n,t,D,u,w,f,h,m);w=new V(n,v,!0,!1);p=new V(n+"*",v,!1,!1);var Z=new V(n+" const*",v,!1,!0);pb[a]={pointerType:p,na:Z};Db(z,t);return[w,p,Z]})},s:function(a,b,c,d,e,f){assert(0<b);var k=Jb(b,c);e=W(d,e);var h=[f],l=[];L([],[a],function(m){m=m[0];var n="constructor "+m.name;void 0===m.P.Y&&(m.P.Y=[]);if(void 0!==m.P.Y[b-1])throw new O("Cannot register multiple constructors with identical number of parameters ("+(b-1)+") for class '"+m.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");
m.P.Y[b-1]=function(){Ib("Cannot construct "+m.name+" due to unbound types",k)};L([],k,function(r){m.P.Y[b-1]=function(){arguments.length!==b-1&&P(n+" called with "+arguments.length+" arguments, expected "+(b-1));l.length=0;h.length=b;for(var u=1;u<b;++u)h[u]=r[u].toWireType(l,arguments[u-1]);u=e.apply(null,h);Xa(l);return r[0].fromWireType(u)};return[]});return[]})},r:function(a,b,c,d,e,f,k,h){var l=Jb(c,d);b=N(b);f=W(e,f);L([],[a],function(m){function n(){Ib("Cannot call "+r+" due to unbound types",
l)}m=m[0];var r=m.name+"."+b;h&&m.P.Aa.push(b);var u=m.P.$,z=u[b];void 0===z||void 0===z.W&&z.className!==m.name&&z.da===c-2?(n.da=c-2,n.className=m.name,u[b]=n):(qb(u,b,r),u[b].W[c-2]=n);L([],l,function(t){var w=r,p=m,D=f,v=t.length;2>v&&P("argTypes array size mismatch! Must at least get return value and 'this' types!");var Z=null!==t[1]&&null!==p,R=!1;for(p=1;p<t.length;++p)if(null!==t[p]&&void 0===t[p].V){R=!0;break}var Bb="void"!==t[0].name,S="",aa="";for(p=0;p<v-2;++p)S+=(0!==p?", ":"")+"arg"+
p,aa+=(0!==p?", ":"")+"arg"+p+"Wired";w="return function "+$a(w)+"("+S+") {\nif (arguments.length !== "+(v-2)+") {\nthrowBindingError('function "+w+" called with ' + arguments.length + ' arguments, expected "+(v-2)+" args!');\n}\n";R&&(w+="var destructors = [];\n");var Cb=R?"destructors":"null";S="throwBindingError invoker fn runDestructors retType classParam".split(" ");D=[P,D,k,Xa,t[0],t[1]];Z&&(w+="var thisWired = classParam.toWireType("+Cb+", this);\n");for(p=0;p<v-2;++p)w+="var arg"+p+"Wired = argType"+
p+".toWireType("+Cb+", arg"+p+"); // "+t[p+2].name+"\n",S.push("argType"+p),D.push(t[p+2]);Z&&(aa="thisWired"+(0<aa.length?", ":"")+aa);w+=(Bb?"var rv = ":"")+"invoker(fn"+(0<aa.length?", ":"")+aa+");\n";if(R)w+="runDestructors(destructors);\n";else for(p=Z?1:2;p<t.length;++p)v=1===p?"thisWired":"arg"+(p-2)+"Wired",null!==t[p].V&&(w+=v+"_dtor("+v+"); // "+t[p].name+"\n",S.push(v+"_dtor"),D.push(t[p].V));Bb&&(w+="var ret = retType.fromWireType(rv);\nreturn ret;\n");S.push(w+"}\n");t=Kb(S).apply(null,
D);void 0===u[b].W?(t.da=c-2,u[b]=t):u[b].W[c-2]=t;return[]});return[]})},x:function(a,b){b=N(b);M(a,{name:b,fromWireType:function(c){var d=Y[c].value;Mb(c);return d},toWireType:function(c,d){return U(d)},argPackAdvance:8,readValueFromPointer:Ya,V:null})},k:function(a,b,c){c=eb(c);b=N(b);M(a,{name:b,fromWireType:function(d){return d},toWireType:function(d,e){if("number"!==typeof e&&"boolean"!==typeof e)throw new TypeError('Cannot convert "'+T(e)+'" to '+this.name);return e},argPackAdvance:8,readValueFromPointer:Nb(b,
c),V:null})},d:function(a,b,c,d,e){function f(m){return m}b=N(b);-1===e&&(e=4294967295);var k=eb(c);if(0===d){var h=32-8*c;f=function(m){return m<<h>>>h}}var l=-1!=b.indexOf("unsigned");M(a,{name:b,fromWireType:f,toWireType:function(m,n){if("number"!==typeof n&&"boolean"!==typeof n)throw new TypeError('Cannot convert "'+T(n)+'" to '+this.name);if(n<d||n>e)throw new TypeError('Passing a number "'+T(n)+'" from JS side to C/C++ side to an argument of type "'+b+'", which is outside the valid range ['+
d+", "+e+"]!");return l?n>>>0:n|0},argPackAdvance:8,readValueFromPointer:Ob(b,k,0!==d),V:null})},c:function(a,b,c){function d(f){f>>=2;var k=G;return new e(Ba,k[f+1],k[f])}var e=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][b];c=N(c);M(a,{name:c,fromWireType:d,argPackAdvance:8,readValueFromPointer:d},{wa:!0})},l:function(a,b){b=N(b);var c="std::string"===b;M(a,{name:b,fromWireType:function(d){var e=G[d>>2];if(c)for(var f=d+4,k=0;k<=e;++k){var h=d+4+
k;if(k==e||0==C[h]){f=f?ra(C,f,h-f):"";if(void 0===l)var l=f;else l+=String.fromCharCode(0),l+=f;f=h+1}}else{l=Array(e);for(k=0;k<e;++k)l[k]=String.fromCharCode(C[d+4+k]);l=l.join("")}X(d);return l},toWireType:function(d,e){e instanceof ArrayBuffer&&(e=new Uint8Array(e));var f="string"===typeof e;f||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Int8Array||P("Cannot pass non-string to std::string");var k=(c&&f?function(){for(var m=0,n=0;n<e.length;++n){var r=e.charCodeAt(n);
55296<=r&&57343>=r&&(r=65536+((r&1023)<<10)|e.charCodeAt(++n)&1023);127>=r?++m:m=2047>=r?m+2:65535>=r?m+3:m+4}return m}:function(){return e.length})(),h=bc(4+k+1);G[h>>2]=k;if(c&&f)sa(e,h+4,k+1);else if(f)for(f=0;f<k;++f){var l=e.charCodeAt(f);255<l&&(X(h),P("String has UTF-16 code units that do not fit in 8 bits"));C[h+4+f]=l}else for(f=0;f<k;++f)C[h+4+f]=e[f];null!==d&&d.push(X,h);return h},argPackAdvance:8,readValueFromPointer:Ya,V:function(d){X(d)}})},g:function(a,b,c){c=N(c);if(2===b){var d=
ua;var e=wa;var f=xa;var k=function(){return va};var h=1}else 4===b&&(d=ya,e=za,f=Aa,k=function(){return G},h=2);M(a,{name:c,fromWireType:function(l){for(var m=G[l>>2],n=k(),r,u=l+4,z=0;z<=m;++z){var t=l+4+z*b;if(z==m||0==n[t>>h])u=d(u,t-u),void 0===r?r=u:(r+=String.fromCharCode(0),r+=u),u=t+b}X(l);return r},toWireType:function(l,m){"string"!==typeof m&&P("Cannot pass non-string to C++ string type "+c);var n=f(m),r=bc(4+n+b);G[r>>2]=n>>h;e(m,r+4,n+b);null!==l&&l.push(X,r);return r},argPackAdvance:8,
readValueFromPointer:Ya,V:function(l){X(l)}})},m:function(a,b,c,d,e,f){Wa[a]={name:N(b),ia:W(c,d),X:W(e,f),la:[]}},e:function(a,b,c,d,e,f,k,h,l,m){Wa[a].la.push({pa:N(b),va:c,ta:W(d,e),ua:f,Ia:k,Ha:W(h,l),Ja:m})},z:function(a,b){b=N(b);M(a,{ya:!0,name:b,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},n:function(a,b,c,d){a=Rb[a];b=Sb(b);c=Qb(c);a(b,c,null,d)},f:Mb,p:function(a){if(0===a)return U(Tb());a=Qb(a);return U(Tb()[a])},o:function(a,b){b=Wb(a,b);for(var c=b[0],d=c.name+
"_$"+b.slice(1).map(function(m){return m.name}).join("_")+"$",e=["retType"],f=[c],k="",h=0;h<a-1;++h)k+=(0!==h?", ":"")+"arg"+h,e.push("argType"+h),f.push(b[1+h]);d="return function "+$a("methodCaller_"+d)+"(handle, name, destructors, args) {\n";var l=0;for(h=0;h<a-1;++h)d+="    var arg"+h+" = argType"+h+".readValueFromPointer(args"+(l?"+"+l:"")+");\n",l+=b[h+1].argPackAdvance;d+="    var rv = handle[name]("+k+");\n";for(h=0;h<a-1;++h)b[h+1].deleteObject&&(d+="    argType"+h+".deleteObject(arg"+h+
");\n");c.ya||(d+="    return retType.toWireType(destructors, rv);\n");e.push(d+"};\n");a=Kb(e).apply(null,f);return Ub(a)},h:function(a){4<a&&(Y[a].ja+=1)},D:function(a,b,c,d){a=Sb(a);var e=Xb[b];if(!e){e="";for(var f=0;f<b;++f)e+=(0!==f?", ":"")+"arg"+f;var k="return function emval_allocator_"+b+"(constructor, argTypes, args) {\n";for(f=0;f<b;++f)k+="var argType"+f+" = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + "+f+'], "parameter '+f+'");\nvar arg'+f+" = argType"+f+".readValueFromPointer(args);\nargs += argType"+
f+"['argPackAdvance'];\n";e=(new Function("requireRegisteredType","Module","__emval_register",k+("var obj = new constructor("+e+");\nreturn __emval_register(obj);\n}\n")))(Vb,g,U);Xb[b]=e}return e(a,c,d)},C:function(){return U([])},q:function(a,b){a=Vb(a,"_emval_take_value");a=a.readValueFromPointer(b);return U(a)},a:function(){A()},v:function(a,b,c){C.copyWithin(a,b,b+c)},w:function(a){a>>>=0;var b=C.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);
d=Math.max(16777216,a,d);0<d%65536&&(d+=65536-d%65536);a:{try{oa.grow(Math.min(2147483648,d)-Ba.byteLength+65535>>>16);Fa();var e=1;break a}catch(f){}e=void 0}if(e)return!0}return!1},j:function(a,b,c,d){for(var e=0,f=0;f<c;f++){for(var k=F[b+8*f>>2],h=F[b+(8*f+4)>>2],l=0;l<h;l++){var m=C[k+l],n=Yb[a];0===m||10===m?((1===a?ma:B)(ra(n,0)),n.length=0):n.push(m)}e+=h}F[d>>2]=e;return 0},u:function(){}};
(function(){function a(e){g.asm=e.exports;oa=g.asm.F;Fa();Ga=g.asm.G;H--;g.monitorRunDependencies&&g.monitorRunDependencies(H);0==H&&(null!==Ma&&(clearInterval(Ma),Ma=null),Na&&(e=Na,Na=null,e()))}function b(e){a(e.instance)}function c(e){return Sa().then(function(f){return WebAssembly.instantiate(f,d)}).then(e,function(f){B("failed to asynchronously prepare wasm: "+f);A(f)})}var d={a:cc};H++;g.monitorRunDependencies&&g.monitorRunDependencies(H);if(g.instantiateWasm)try{return g.instantiateWasm(d,
a)}catch(e){return B("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return na||"function"!==typeof WebAssembly.instantiateStreaming||Pa()||Oa("file://")||"function"!==typeof fetch?c(b):fetch(I,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(f){B("wasm streaming compile failed: "+f);B("falling back to ArrayBuffer instantiation");return c(b)})})})().catch(ca);return{}})();
var ac=g.___wasm_call_ctors=function(){return(ac=g.___wasm_call_ctors=g.asm.H).apply(null,arguments)},bc=g._malloc=function(){return(bc=g._malloc=g.asm.I).apply(null,arguments)},X=g._free=function(){return(X=g._free=g.asm.J).apply(null,arguments)},Hb=g.___getTypeName=function(){return(Hb=g.___getTypeName=g.asm.K).apply(null,arguments)};g.___embind_register_native_and_builtin_types=function(){return(g.___embind_register_native_and_builtin_types=g.asm.L).apply(null,arguments)};
g.dynCall_jiji=function(){return(g.dynCall_jiji=g.asm.M).apply(null,arguments)};var dc;Na=function ec(){dc||fc();dc||(Na=ec)};
function fc(){function a(){if(!dc&&(dc=!0,g.calledRun=!0,!pa)){Ta(Ia);Ta(Ja);ba(g);if(g.onRuntimeInitialized)g.onRuntimeInitialized();if(g.postRun)for("function"==typeof g.postRun&&(g.postRun=[g.postRun]);g.postRun.length;){var b=g.postRun.shift();Ka.unshift(b)}Ta(Ka)}}if(!(0<H)){if(g.preRun)for("function"==typeof g.preRun&&(g.preRun=[g.preRun]);g.preRun.length;)La();Ta(Ha);0<H||(g.setStatus?(g.setStatus("Running..."),setTimeout(function(){setTimeout(function(){g.setStatus("")},1);a()},1)):a())}}
g.run=fc;if(g.preInit)for("function"==typeof g.preInit&&(g.preInit=[g.preInit]);0<g.preInit.length;)g.preInit.pop()();noExitRuntime=!0;fc();


  return Module.ready
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
  module.exports = Module;
else if (typeof define === 'function' && define['amd'])
  define([], function() { return Module; });
else if (typeof exports === 'object')
  exports["Module"] = Module;