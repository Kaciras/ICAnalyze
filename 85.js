(self.webpackChunkic_analyzer=self.webpackChunkic_analyzer||[]).push([[85],{3085:(n,r,e)=>{"use strict";e.r(r),e.d(r,{default:()=>t});const t=("file:///home/runner/work/ICAnalyzer/ICAnalyzer/deps/squoosh/codecs/mozjpeg/enc/mozjpeg_enc.js",function(n){var r,t;(n=void 0!==(n=n||{})?n:{}).ready=new Promise((function(n,e){r=n,t=e}));var o,a={};for(o in n)n.hasOwnProperty(o)&&(a[o]=n[o]);var i,u=[],c="./this.program",f=function(n,r){throw r},s="";s=self.location.href,s=0!==(s="file:///home/runner/work/ICAnalyzer/ICAnalyzer/deps/squoosh/codecs/mozjpeg/enc/mozjpeg_enc.js").indexOf("blob:")?s.substr(0,s.lastIndexOf("/")+1):"",i=function(n){var r=new XMLHttpRequest;return r.open("GET",n,!1),r.responseType="arraybuffer",r.send(null),new Uint8Array(r.response)};var l,p=n.print||console.log.bind(console),v=n.printErr||console.warn.bind(console);for(o in a)a.hasOwnProperty(o)&&(n[o]=a[o]);a=null,n.arguments&&(u=n.arguments),n.thisProgram&&(c=n.thisProgram),n.quit&&(f=n.quit),n.wasmBinary&&(l=n.wasmBinary);var d,h=n.noExitRuntime||!0;"object"!=typeof WebAssembly&&q("no native wasm support detected");var g=!1,y=new TextDecoder("utf8");function m(n,r){if(!n)return"";for(var e=n+r,t=n;!(t>=e)&&A[t];)++t;return y.decode(A.subarray(n,t))}var w,b,A,T,_,C,E,P,W,k=new TextDecoder("utf-16le");function F(n,r){for(var e=n,t=e>>1,o=t+r/2;!(t>=o)&&_[t];)++t;return e=t<<1,k.decode(A.subarray(n,e))}function R(n,r,e){if(void 0===e&&(e=2147483647),e<2)return 0;for(var t=r,o=(e-=2)<2*n.length?e/2:n.length,a=0;a<o;++a){var i=n.charCodeAt(a);T[r>>1]=i,r+=2}return T[r>>1]=0,r-t}function I(n){return 2*n.length}function j(n,r){for(var e=0,t="";!(e>=r/4);){var o=C[n+4*e>>2];if(0==o)break;if(++e,o>=65536){var a=o-65536;t+=String.fromCharCode(55296|a>>10,56320|1023&a)}else t+=String.fromCharCode(o)}return t}function U(n,r,e){if(void 0===e&&(e=2147483647),e<4)return 0;for(var t=r,o=t+e-4,a=0;a<n.length;++a){var i=n.charCodeAt(a);if(i>=55296&&i<=57343&&(i=65536+((1023&i)<<10)|1023&n.charCodeAt(++a)),C[r>>2]=i,(r+=4)+4>o)break}return C[r>>2]=0,r-t}function S(n){for(var r=0,e=0;e<n.length;++e){var t=n.charCodeAt(e);t>=55296&&t<=57343&&++e,r+=4}return r}function x(r){w=r,n.HEAP8=b=new Int8Array(r),n.HEAP16=T=new Int16Array(r),n.HEAP32=C=new Int32Array(r),n.HEAPU8=A=new Uint8Array(r),n.HEAPU16=_=new Uint16Array(r),n.HEAPU32=E=new Uint32Array(r),n.HEAPF32=P=new Float32Array(r),n.HEAPF64=W=new Float64Array(r)}n.INITIAL_MEMORY;var z,O,D=[],M=[],H=[],B=0,N=null,V=null;function q(r){n.onAbort&&n.onAbort(r),v(r+=""),g=!0,r="abort("+r+"). Build with -s ASSERTIONS=1 for more info.";var e=new WebAssembly.RuntimeError(r);throw t(e),e}function L(n){return n.startsWith("data:application/octet-stream;base64,")}if(n.preloadedImages={},n.preloadedAudios={},n.locateFile)L(G="mozjpeg_enc.wasm")||(O=G,G=n.locateFile?n.locateFile(O,s):s+O);else var G=new URL(e(3678),e.b).toString();function J(n){try{if(n==G&&l)return new Uint8Array(l);if(i)return i(n);throw"both async and sync fetching of the wasm failed"}catch(n){q(n)}}function X(r){for(;r.length>0;){var e=r.shift();if("function"!=typeof e){var t=e.func;"number"==typeof t?void 0===e.arg?z.get(t)():z.get(t)(e.arg):t(void 0===e.arg?null:e.arg)}else e(n)}}function Y(){return h||!1}var Z={};function $(n){for(;n.length;){var r=n.pop();n.pop()(r)}}function K(n){return this.fromWireType(E[n>>2])}var Q={},nn={},rn={};function en(n){if(void 0===n)return"_unknown";var r=(n=n.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return r>=48&&r<=57?"_"+n:n}function tn(n,r){return n=en(n),new Function("body","return function "+n+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(r)}function on(n,r){var e=tn(r,(function(n){this.name=r,this.message=n;var e=new Error(n).stack;void 0!==e&&(this.stack=this.toString()+"\n"+e.replace(/^Error(:[^\n]*)?\n/,""))}));return e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},e}var an=void 0;function un(n){throw new an(n)}function cn(n,r,e){function t(r){var t=e(r);t.length!==n.length&&un("Mismatched type converter count");for(var o=0;o<n.length;++o)dn(n[o],t[o])}n.forEach((function(n){rn[n]=r}));var o=new Array(r.length),a=[],i=0;r.forEach((function(n,r){nn.hasOwnProperty(n)?o[r]=nn[n]:(a.push(n),Q.hasOwnProperty(n)||(Q[n]=[]),Q[n].push((function(){o[r]=nn[n],++i===a.length&&t(o)})))})),0===a.length&&t(o)}function fn(n){switch(n){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+n)}}var sn=void 0;function ln(n){for(var r="",e=n;A[e];)r+=sn[A[e++]];return r}var pn=void 0;function vn(n){throw new pn(n)}function dn(n,r,e){if(e=e||{},!("argPackAdvance"in r))throw new TypeError("registerType registeredInstance requires argPackAdvance");var t=r.name;if(n||vn('type "'+t+'" must have a positive integer typeid pointer'),nn.hasOwnProperty(n)){if(e.ignoreDuplicateRegistrations)return;vn("Cannot register type '"+t+"' twice")}if(nn[n]=r,delete rn[n],Q.hasOwnProperty(n)){var o=Q[n];delete Q[n],o.forEach((function(n){n()}))}}var hn=[],gn=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function yn(n){n>4&&0==--gn[n].refcount&&(gn[n]=void 0,hn.push(n))}function mn(n){switch(n){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var r=hn.length?hn.pop():gn.length;return gn[r]={refcount:1,value:n},r}}function wn(n){if(null===n)return"null";var r=typeof n;return"object"===r||"array"===r||"function"===r?n.toString():""+n}function bn(n,r){switch(r){case 2:return function(n){return this.fromWireType(P[n>>2])};case 3:return function(n){return this.fromWireType(W[n>>3])};default:throw new TypeError("Unknown float type: "+n)}}function An(r,e,t){return r.includes("j")?function(r,e,t){var o=n["dynCall_"+r];return t&&t.length?o.apply(null,[e].concat(t)):o.call(null,e)}(r,e,t):z.get(e).apply(null,t)}function Tn(n,r){var e,t,o,a=(n=ln(n)).includes("j")?(e=n,t=r,o=[],function(){o.length=arguments.length;for(var n=0;n<arguments.length;n++)o[n]=arguments[n];return An(e,t,o)}):z.get(r);return"function"!=typeof a&&vn("unknown function pointer with signature "+n+": "+r),a}var _n=void 0;function Cn(n){var r=Dn(n),e=ln(r);return On(r),e}function En(n,r,e){switch(r){case 0:return e?function(n){return b[n]}:function(n){return A[n]};case 1:return e?function(n){return T[n>>1]}:function(n){return _[n>>1]};case 2:return e?function(n){return C[n>>2]}:function(n){return E[n>>2]};default:throw new TypeError("Unknown integer type: "+n)}}var Pn={};function Wn(){return"object"==typeof globalThis?globalThis:Function("return this")()}function kn(n,r){var e=nn[n];return void 0===e&&vn(r+" has unknown type "+Cn(n)),e}var Fn={};function Rn(n){try{return d.grow(n-w.byteLength+65535>>>16),x(d.buffer),1}catch(n){}}var In={};function jn(){if(!jn.strings){var n={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:c||"./this.program"};for(var r in In)n[r]=In[r];var e=[];for(var r in n)e.push(r+"="+n[r]);jn.strings=e}return jn.strings}var Un={mappings:{},buffers:[null,[],[]],printChar:function(n,r){var e=Un.buffers[n];0===r||10===r?((1===n?p:v)(function(n,r,e){for(var t=0;n[t]&&!(t>=NaN);)++t;return y.decode(n.subarray?n.subarray(0,t):new Uint8Array(n.slice(0,t)))}(e)),e.length=0):e.push(r)},varargs:void 0,get:function(){return Un.varargs+=4,C[Un.varargs-4>>2]},getStr:function(n){return m(n)},get64:function(n,r){return n}};an=n.InternalError=on(Error,"InternalError"),function(){for(var n=new Array(256),r=0;r<256;++r)n[r]=String.fromCharCode(r);sn=n}(),pn=n.BindingError=on(Error,"BindingError"),n.count_emval_handles=function(){for(var n=0,r=5;r<gn.length;++r)void 0!==gn[r]&&++n;return n},n.get_first_emval=function(){for(var n=5;n<gn.length;++n)if(void 0!==gn[n])return gn[n];return null},_n=n.UnboundTypeError=on(Error,"UnboundTypeError");var Sn,xn={B:function(n,r){},l:function(n){var r=Z[n];delete Z[n];var e=r.rawConstructor,t=r.rawDestructor,o=r.fields;cn([n],o.map((function(n){return n.getterReturnType})).concat(o.map((function(n){return n.setterArgumentType}))),(function(n){var a={};return o.forEach((function(r,e){var t=r.fieldName,i=n[e],u=r.getter,c=r.getterContext,f=n[e+o.length],s=r.setter,l=r.setterContext;a[t]={read:function(n){return i.fromWireType(u(c,n))},write:function(n,r){var e=[];s(l,n,f.toWireType(e,r)),$(e)}}})),[{name:r.name,fromWireType:function(n){var r={};for(var e in a)r[e]=a[e].read(n);return t(n),r},toWireType:function(n,r){for(var o in a)if(!(o in r))throw new TypeError('Missing field:  "'+o+'"');var i=e();for(o in a)a[o].write(i,r[o]);return null!==n&&n.push(t,i),i},argPackAdvance:8,readValueFromPointer:K,destructorFunction:t}]}))},p:function(n,r,e,t,o){},y:function(n,r,e,t,o){var a=fn(e);dn(n,{name:r=ln(r),fromWireType:function(n){return!!n},toWireType:function(n,r){return r?t:o},argPackAdvance:8,readValueFromPointer:function(n){var t;if(1===e)t=b;else if(2===e)t=T;else{if(4!==e)throw new TypeError("Unknown boolean type size: "+r);t=C}return this.fromWireType(t[n>>a])},destructorFunction:null})},x:function(n,r){dn(n,{name:r=ln(r),fromWireType:function(n){var r=gn[n].value;return yn(n),r},toWireType:function(n,r){return mn(r)},argPackAdvance:8,readValueFromPointer:K,destructorFunction:null})},i:function(n,r,e){var t=fn(e);dn(n,{name:r=ln(r),fromWireType:function(n){return n},toWireType:function(n,r){if("number"!=typeof r&&"boolean"!=typeof r)throw new TypeError('Cannot convert "'+wn(r)+'" to '+this.name);return r},argPackAdvance:8,readValueFromPointer:bn(r,t),destructorFunction:null})},f:function(r,e,t,o,a,i){var u=function(n,r){for(var e=[],t=0;t<n;t++)e.push(C[(r>>2)+t]);return e}(e,t);r=ln(r),a=Tn(o,a),function(r,e,t){n.hasOwnProperty(r)?((void 0===t||void 0!==n[r].overloadTable&&void 0!==n[r].overloadTable[t])&&vn("Cannot register public name '"+r+"' twice"),function(n,r,e){if(void 0===n[r].overloadTable){var t=n[r];n[r]=function(){return n[r].overloadTable.hasOwnProperty(arguments.length)||vn("Function '"+e+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+n[r].overloadTable+")!"),n[r].overloadTable[arguments.length].apply(this,arguments)},n[r].overloadTable=[],n[r].overloadTable[t.argCount]=t}}(n,r,r),n.hasOwnProperty(t)&&vn("Cannot register multiple overloads of a function with the same number of arguments ("+t+")!"),n[r].overloadTable[t]=e):(n[r]=e,void 0!==t&&(n[r].numArguments=t))}(r,(function(){!function(n,r){var e=[],t={};throw r.forEach((function n(r){t[r]||nn[r]||(rn[r]?rn[r].forEach(n):(e.push(r),t[r]=!0))})),new _n(n+": "+e.map(Cn).join([", "]))}("Cannot call "+r+" due to unbound types",u)}),e-1),cn([],u,(function(t){var o=[t[0],null].concat(t.slice(1));return function(r,e,t){n.hasOwnProperty(r)||un("Replacing nonexistant public symbol"),void 0!==n[r].overloadTable&&void 0!==t?n[r].overloadTable[t]=e:(n[r]=e,n[r].argCount=t)}(r,function(n,r,e,t,o){var a=r.length;a<2&&vn("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var i=null!==r[1]&&null!==e,u=!1,c=1;c<r.length;++c)if(null!==r[c]&&void 0===r[c].destructorFunction){u=!0;break}var f="void"!==r[0].name,s="",l="";for(c=0;c<a-2;++c)s+=(0!==c?", ":"")+"arg"+c,l+=(0!==c?", ":"")+"arg"+c+"Wired";var p="return function "+en(n)+"("+s+") {\nif (arguments.length !== "+(a-2)+") {\nthrowBindingError('function "+n+" called with ' + arguments.length + ' arguments, expected "+(a-2)+" args!');\n}\n";u&&(p+="var destructors = [];\n");var v=u?"destructors":"null",d=["throwBindingError","invoker","fn","runDestructors","retType","classParam"],h=[vn,t,o,$,r[0],r[1]];for(i&&(p+="var thisWired = classParam.toWireType("+v+", this);\n"),c=0;c<a-2;++c)p+="var arg"+c+"Wired = argType"+c+".toWireType("+v+", arg"+c+"); // "+r[c+2].name+"\n",d.push("argType"+c),h.push(r[c+2]);if(i&&(l="thisWired"+(l.length>0?", ":"")+l),p+=(f?"var rv = ":"")+"invoker(fn"+(l.length>0?", ":"")+l+");\n",u)p+="runDestructors(destructors);\n";else for(c=i?1:2;c<r.length;++c){var g=1===c?"thisWired":"arg"+(c-2)+"Wired";null!==r[c].destructorFunction&&(p+=g+"_dtor("+g+"); // "+r[c].name+"\n",d.push(g+"_dtor"),h.push(r[c].destructorFunction))}return f&&(p+="var ret = retType.fromWireType(rv);\nreturn ret;\n"),p+="}\n",d.push(p),function(n,r){if(!(n instanceof Function))throw new TypeError("new_ called with constructor type "+typeof n+" which is not a function");var e=tn(n.name||"unknownFunctionName",(function(){}));e.prototype=n.prototype;var t=new e,o=n.apply(t,r);return o instanceof Object?o:t}(Function,d).apply(null,h)}(r,o,null,a,i),e-1),[]}))},c:function(n,r,e,t,o){r=ln(r),-1===o&&(o=4294967295);var a=fn(e),i=function(n){return n};if(0===t){var u=32-8*e;i=function(n){return n<<u>>>u}}var c=r.includes("unsigned");dn(n,{name:r,fromWireType:i,toWireType:function(n,e){if("number"!=typeof e&&"boolean"!=typeof e)throw new TypeError('Cannot convert "'+wn(e)+'" to '+this.name);if(e<t||e>o)throw new TypeError('Passing a number "'+wn(e)+'" from JS side to C/C++ side to an argument of type "'+r+'", which is outside the valid range ['+t+", "+o+"]!");return c?e>>>0:0|e},argPackAdvance:8,readValueFromPointer:En(r,a,0!==t),destructorFunction:null})},b:function(n,r,e){var t=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][r];function o(n){var r=E,e=r[n>>=2],o=r[n+1];return new t(w,o,e)}dn(n,{name:e=ln(e),fromWireType:o,argPackAdvance:8,readValueFromPointer:o},{ignoreDuplicateRegistrations:!0})},j:function(n,r){var e="std::string"===(r=ln(r));dn(n,{name:r,fromWireType:function(n){var r,t=E[n>>2];if(e)for(var o=n+4,a=0;a<=t;++a){var i=n+4+a;if(a==t||0==A[i]){var u=m(o,i-o);void 0===r?r=u:(r+=String.fromCharCode(0),r+=u),o=i+1}}else{var c=new Array(t);for(a=0;a<t;++a)c[a]=String.fromCharCode(A[n+4+a]);r=c.join("")}return On(n),r},toWireType:function(n,r){r instanceof ArrayBuffer&&(r=new Uint8Array(r));var t="string"==typeof r;t||r instanceof Uint8Array||r instanceof Uint8ClampedArray||r instanceof Int8Array||vn("Cannot pass non-string to std::string");var o=(e&&t?function(){return function(n){for(var r=0,e=0;e<n.length;++e){var t=n.charCodeAt(e);t>=55296&&t<=57343&&(t=65536+((1023&t)<<10)|1023&n.charCodeAt(++e)),t<=127?++r:r+=t<=2047?2:t<=65535?3:4}return r}(r)}:function(){return r.length})(),a=zn(4+o+1);if(E[a>>2]=o,e&&t)!function(n,r,e,t){if(!(t>0))return 0;for(var o=e+t-1,a=0;a<n.length;++a){var i=n.charCodeAt(a);if(i>=55296&&i<=57343&&(i=65536+((1023&i)<<10)|1023&n.charCodeAt(++a)),i<=127){if(e>=o)break;r[e++]=i}else if(i<=2047){if(e+1>=o)break;r[e++]=192|i>>6,r[e++]=128|63&i}else if(i<=65535){if(e+2>=o)break;r[e++]=224|i>>12,r[e++]=128|i>>6&63,r[e++]=128|63&i}else{if(e+3>=o)break;r[e++]=240|i>>18,r[e++]=128|i>>12&63,r[e++]=128|i>>6&63,r[e++]=128|63&i}}r[e]=0}(r,A,a+4,o+1);else if(t)for(var i=0;i<o;++i){var u=r.charCodeAt(i);u>255&&(On(a),vn("String has UTF-16 code units that do not fit in 8 bits")),A[a+4+i]=u}else for(i=0;i<o;++i)A[a+4+i]=r[i];return null!==n&&n.push(On,a),a},argPackAdvance:8,readValueFromPointer:K,destructorFunction:function(n){On(n)}})},e:function(n,r,e){var t,o,a,i,u;e=ln(e),2===r?(t=F,o=R,i=I,a=function(){return _},u=1):4===r&&(t=j,o=U,i=S,a=function(){return E},u=2),dn(n,{name:e,fromWireType:function(n){for(var e,o=E[n>>2],i=a(),c=n+4,f=0;f<=o;++f){var s=n+4+f*r;if(f==o||0==i[s>>u]){var l=t(c,s-c);void 0===e?e=l:(e+=String.fromCharCode(0),e+=l),c=s+r}}return On(n),e},toWireType:function(n,t){"string"!=typeof t&&vn("Cannot pass non-string to C++ string type "+e);var a=i(t),c=zn(4+a+r);return E[c>>2]=a>>u,o(t,c+4,a+r),null!==n&&n.push(On,c),c},argPackAdvance:8,readValueFromPointer:K,destructorFunction:function(n){On(n)}})},m:function(n,r,e,t,o,a){Z[n]={name:ln(r),rawConstructor:Tn(e,t),rawDestructor:Tn(o,a),fields:[]}},a:function(n,r,e,t,o,a,i,u,c,f){Z[n].fields.push({fieldName:ln(r),getterReturnType:e,getter:Tn(t,o),getterContext:a,setterArgumentType:i,setter:Tn(u,c),setterContext:f})},z:function(n,r){dn(n,{isVoid:!0,name:r=ln(r),argPackAdvance:0,fromWireType:function(){},toWireType:function(n,r){}})},g:yn,u:function(n){return 0===n?mn(Wn()):(n=void 0===(e=Pn[r=n])?ln(r):e,mn(Wn()[n]));var r,e},k:function(n){n>4&&(gn[n].refcount+=1)},n:function(r,e,t,o){r=function(n){return n||vn("Cannot use deleted val. handle = "+n),gn[n].value}(r);var a=Fn[e];return a||(a=function(r){for(var e="",t=0;t<r;++t)e+=(0!==t?", ":"")+"arg"+t;var o="return function emval_allocator_"+r+"(constructor, argTypes, args) {\n";for(t=0;t<r;++t)o+="var argType"+t+" = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + "+t+'], "parameter '+t+'");\nvar arg'+t+" = argType"+t+".readValueFromPointer(args);\nargs += argType"+t+"['argPackAdvance'];\n";return o+="var obj = new constructor("+e+");\nreturn __emval_register(obj);\n}\n",new Function("requireRegisteredType","Module","__emval_register",o)(kn,n,mn)}(e),Fn[e]=a),a(r,t,o)},h:function(){q()},r:function(n,r,e){A.copyWithin(n,r,r+e)},d:function(n){var r,e=A.length,t=2147483648;if((n>>>=0)>t)return!1;for(var o=1;o<=4;o*=2){var a=e*(1+.2/o);if(a=Math.min(a,n+100663296),Rn(Math.min(t,((r=Math.max(n,a))%65536>0&&(r+=65536-r%65536),r))))return!0}return!1},s:function(n,r){var e=0;return jn().forEach((function(t,o){var a=r+e;C[n+4*o>>2]=a,function(n,r,e){for(var t=0;t<n.length;++t)b[r++>>0]=n.charCodeAt(t);b[r>>0]=0}(t,a),e+=t.length+1})),0},t:function(n,r){var e=jn();C[n>>2]=e.length;var t=0;return e.forEach((function(n){t+=n.length+1})),C[r>>2]=t,0},A:function(r){!function(r,e){Y()||(n.onExit&&n.onExit(r),g=!0),f(r,new Mn(r))}(r)},w:function(n){return 0},o:function(n,r,e,t,o){},v:function(n,r,e,t){for(var o=0,a=0;a<e;a++){for(var i=C[r+8*a>>2],u=C[r+(8*a+4)>>2],c=0;c<u;c++)Un.printChar(n,A[i+c]);o+=u}return C[t>>2]=o,0},q:function(n){}},zn=(function(){var r={a:xn};function e(r,e){var t,o=r.exports;n.asm=o,x((d=n.asm.C).buffer),z=n.asm.I,t=n.asm.D,M.unshift(t),function(r){if(B--,n.monitorRunDependencies&&n.monitorRunDependencies(B),0==B&&(null!==N&&(clearInterval(N),N=null),V)){var e=V;V=null,e()}}()}function o(n){e(n.instance)}function a(n){return(l||"function"!=typeof fetch?Promise.resolve().then((function(){return J(G)})):fetch(G,{credentials:"same-origin"}).then((function(n){if(!n.ok)throw"failed to load wasm binary file at '"+G+"'";return n.arrayBuffer()})).catch((function(){return J(G)}))).then((function(n){return WebAssembly.instantiate(n,r)})).then(n,(function(n){v("failed to asynchronously prepare wasm: "+n),q(n)}))}if(B++,n.monitorRunDependencies&&n.monitorRunDependencies(B),n.instantiateWasm)try{return n.instantiateWasm(r,e)}catch(n){return v("Module.instantiateWasm callback failed with error: "+n),!1}(l||"function"!=typeof WebAssembly.instantiateStreaming||L(G)||"function"!=typeof fetch?a(o):fetch(G,{credentials:"same-origin"}).then((function(n){return WebAssembly.instantiateStreaming(n,r).then(o,(function(n){return v("wasm streaming compile failed: "+n),v("falling back to ArrayBuffer instantiation"),a(o)}))}))).catch(t)}(),n.___wasm_call_ctors=function(){return(n.___wasm_call_ctors=n.asm.D).apply(null,arguments)},n._malloc=function(){return(zn=n._malloc=n.asm.E).apply(null,arguments)}),On=n._free=function(){return(On=n._free=n.asm.F).apply(null,arguments)},Dn=n.___getTypeName=function(){return(Dn=n.___getTypeName=n.asm.G).apply(null,arguments)};function Mn(n){this.name="ExitStatus",this.message="Program terminated with exit("+n+")",this.status=n}function Hn(e){function t(){Sn||(Sn=!0,n.calledRun=!0,g||(X(M),r(n),n.onRuntimeInitialized&&n.onRuntimeInitialized(),function(){if(n.postRun)for("function"==typeof n.postRun&&(n.postRun=[n.postRun]);n.postRun.length;)r=n.postRun.shift(),H.unshift(r);var r;X(H)}()))}e=e||u,B>0||(function(){if(n.preRun)for("function"==typeof n.preRun&&(n.preRun=[n.preRun]);n.preRun.length;)r=n.preRun.shift(),D.unshift(r);var r;X(D)}(),B>0||(n.setStatus?(n.setStatus("Running..."),setTimeout((function(){setTimeout((function(){n.setStatus("")}),1),t()}),1)):t()))}if(n.___embind_register_native_and_builtin_types=function(){return(n.___embind_register_native_and_builtin_types=n.asm.H).apply(null,arguments)},n.dynCall_jiji=function(){return(n.dynCall_jiji=n.asm.J).apply(null,arguments)},V=function n(){Sn||Hn(),Sn||(V=n)},n.run=Hn,n.preInit)for("function"==typeof n.preInit&&(n.preInit=[n.preInit]);n.preInit.length>0;)n.preInit.pop()();return Hn(),n.ready})},3678:(n,r,e)=>{"use strict";n.exports=e.p+"mozjpeg_enc.513ba.wasm"}}]);
//# sourceMappingURL=85.js.map