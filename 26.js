(self.webpackChunkic_analyzer=self.webpackChunkic_analyzer||[]).push([[26],{8026:(n,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>e});const e=("file:///home/runner/work/ICAnalyzer/ICAnalyzer/deps/squoosh/codecs/wp2/dec/wp2_dec.js",function(n){var r,e;(n=void 0!==(n=n||{})?n:{}).ready=new Promise((function(n,t){r=n,e=t}));var o,i={};for(o in n)n.hasOwnProperty(o)&&(i[o]=n[o]);var a,u=[],c="";c=self.location.href,c=0!==(c="file:///home/runner/work/ICAnalyzer/ICAnalyzer/deps/squoosh/codecs/wp2/dec/wp2_dec.js").indexOf("blob:")?c.substr(0,c.lastIndexOf("/")+1):"",a=function(n){var r=new XMLHttpRequest;return r.open("GET",n,!1),r.responseType="arraybuffer",r.send(null),new Uint8Array(r.response)};var f,s,l=n.print||console.log.bind(console),p=n.printErr||console.warn.bind(console);for(o in i)i.hasOwnProperty(o)&&(n[o]=i[o]);i=null,n.arguments&&(u=n.arguments),n.thisProgram&&n.thisProgram,n.quit&&n.quit,n.wasmBinary&&(f=n.wasmBinary),n.noExitRuntime,"object"!=typeof WebAssembly&&H("no native wasm support detected");var h=!1,d=new TextDecoder("utf8");function v(n,r){if(!n)return"";for(var t=n+r,e=n;!(e>=t)&&m[e];)++e;return d.decode(m.subarray(n,e))}var y,g,m,w,b,_,A,T,C,P=new TextDecoder("utf-16le");function E(n,r){for(var t=n,e=t>>1,o=e+r/2;!(e>=o)&&b[e];)++e;return t=e<<1,P.decode(m.subarray(n,t))}function k(n,r,t){if(void 0===t&&(t=2147483647),t<2)return 0;for(var e=r,o=(t-=2)<2*n.length?t/2:n.length,i=0;i<o;++i){var a=n.charCodeAt(i);w[r>>1]=a,r+=2}return w[r>>1]=0,r-e}function W(n){return 2*n.length}function F(n,r){for(var t=0,e="";!(t>=r/4);){var o=_[n+4*t>>2];if(0==o)break;if(++t,o>=65536){var i=o-65536;e+=String.fromCharCode(55296|i>>10,56320|1023&i)}else e+=String.fromCharCode(o)}return e}function R(n,r,t){if(void 0===t&&(t=2147483647),t<4)return 0;for(var e=r,o=e+t-4,i=0;i<n.length;++i){var a=n.charCodeAt(i);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&n.charCodeAt(++i)),_[r>>2]=a,(r+=4)+4>o)break}return _[r>>2]=0,r-e}function I(n){for(var r=0,t=0;t<n.length;++t){var e=n.charCodeAt(t);e>=55296&&e<=57343&&++t,r+=4}return r}function U(r){y=r,n.HEAP8=g=new Int8Array(r),n.HEAP16=w=new Int16Array(r),n.HEAP32=_=new Int32Array(r),n.HEAPU8=m=new Uint8Array(r),n.HEAPU16=b=new Uint16Array(r),n.HEAPU32=A=new Uint32Array(r),n.HEAPF32=T=new Float32Array(r),n.HEAPF64=C=new Float64Array(r)}n.INITIAL_MEMORY;var S,j,O=[],x=[],z=[],B=0,D=null,M=null;function H(r){n.onAbort&&n.onAbort(r),p(r+=""),h=!0,r="abort("+r+"). Build with -s ASSERTIONS=1 for more info.";var t=new WebAssembly.RuntimeError(r);throw e(t),t}function q(n){return n.startsWith("data:application/octet-stream;base64,")}if(n.preloadedImages={},n.preloadedAudios={},n.locateFile)q(V="wp2_dec.wasm")||(j=V,V=n.locateFile?n.locateFile(j,c):c+j);else var V=new URL(t(6206),t.b).toString();function N(n){try{if(n==V&&f)return new Uint8Array(f);if(a)return a(n);throw"both async and sync fetching of the wasm failed"}catch(n){H(n)}}function L(r){for(;r.length>0;){var t=r.shift();if("function"!=typeof t){var e=t.func;"number"==typeof e?void 0===t.arg?S.get(e)():S.get(e)(t.arg):e(void 0===t.arg?null:t.arg)}else t(n)}}function G(n){this.excPtr=n,this.ptr=n-16,this.set_type=function(n){_[this.ptr+8>>2]=n},this.get_type=function(){return _[this.ptr+8>>2]},this.set_destructor=function(n){_[this.ptr+0>>2]=n},this.get_destructor=function(){return _[this.ptr+0>>2]},this.set_refcount=function(n){_[this.ptr+4>>2]=n},this.set_caught=function(n){n=n?1:0,g[this.ptr+12>>0]=n},this.get_caught=function(){return 0!=g[this.ptr+12>>0]},this.set_rethrown=function(n){n=n?1:0,g[this.ptr+13>>0]=n},this.get_rethrown=function(){return 0!=g[this.ptr+13>>0]},this.init=function(n,r){this.set_type(n),this.set_destructor(r),this.set_refcount(0),this.set_caught(!1),this.set_rethrown(!1)},this.add_ref=function(){var n=_[this.ptr+4>>2];_[this.ptr+4>>2]=n+1},this.release_ref=function(){var n=_[this.ptr+4>>2];return _[this.ptr+4>>2]=n-1,1===n}}function J(n){switch(n){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+n)}}var X=void 0;function Y(n){for(var r="",t=n;m[t];)r+=X[m[t++]];return r}var Z={},$={},K={};function Q(n){if(void 0===n)return"_unknown";var r=(n=n.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return r>=48&&r<=57?"_"+n:n}function nn(n,r){return n=Q(n),new Function("body","return function "+n+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(r)}function rn(n,r){var t=nn(r,(function(n){this.name=r,this.message=n;var t=new Error(n).stack;void 0!==t&&(this.stack=this.toString()+"\n"+t.replace(/^Error(:[^\n]*)?\n/,""))}));return t.prototype=Object.create(n.prototype),t.prototype.constructor=t,t.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},t}var tn=void 0;function en(n){throw new tn(n)}var on=void 0;function an(n){throw new on(n)}function un(n,r,t){if(t=t||{},!("argPackAdvance"in r))throw new TypeError("registerType registeredInstance requires argPackAdvance");var e=r.name;if(n||en('type "'+e+'" must have a positive integer typeid pointer'),$.hasOwnProperty(n)){if(t.ignoreDuplicateRegistrations)return;en("Cannot register type '"+e+"' twice")}if($[n]=r,delete K[n],Z.hasOwnProperty(n)){var o=Z[n];delete Z[n],o.forEach((function(n){n()}))}}var cn=[],fn=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function sn(n){n>4&&0==--fn[n].refcount&&(fn[n]=void 0,cn.push(n))}function ln(n){switch(n){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var r=cn.length?cn.pop():fn.length;return fn[r]={refcount:1,value:n},r}}function pn(n){return this.fromWireType(A[n>>2])}function hn(n){if(null===n)return"null";var r=typeof n;return"object"===r||"array"===r||"function"===r?n.toString():""+n}function dn(n,r){switch(r){case 2:return function(n){return this.fromWireType(T[n>>2])};case 3:return function(n){return this.fromWireType(C[n>>3])};default:throw new TypeError("Unknown float type: "+n)}}function vn(n){for(;n.length;){var r=n.pop();n.pop()(r)}}function yn(r,t,e){return r.includes("j")?function(r,t,e){var o=n["dynCall_"+r];return e&&e.length?o.apply(null,[t].concat(e)):o.call(null,t)}(r,t,e):S.get(t).apply(null,e)}var gn=void 0;function mn(n){var r=Rn(n),t=Y(r);return Wn(r),t}function wn(n,r,t){switch(r){case 0:return t?function(n){return g[n]}:function(n){return m[n]};case 1:return t?function(n){return w[n>>1]}:function(n){return b[n>>1]};case 2:return t?function(n){return _[n>>2]}:function(n){return A[n>>2]};default:throw new TypeError("Unknown integer type: "+n)}}var bn={};function _n(){return"object"==typeof globalThis?globalThis:Function("return this")()}function An(n,r){var t=$[n];return void 0===t&&en(r+" has unknown type "+mn(n)),t}var Tn={};function Cn(n){try{return s.grow(n-y.byteLength+65535>>>16),U(s.buffer),1}catch(n){}}var Pn={mappings:{},buffers:[null,[],[]],printChar:function(n,r){var t=Pn.buffers[n];0===r||10===r?((1===n?l:p)(function(n,r,t){for(var e=0;n[e]&&!(e>=NaN);)++e;return d.decode(n.subarray?n.subarray(0,e):new Uint8Array(n.slice(0,e)))}(t)),t.length=0):t.push(r)},varargs:void 0,get:function(){return Pn.varargs+=4,_[Pn.varargs-4>>2]},getStr:function(n){return v(n)},get64:function(n,r){return n}};!function(){for(var n=new Array(256),r=0;r<256;++r)n[r]=String.fromCharCode(r);X=n}(),tn=n.BindingError=rn(Error,"BindingError"),on=n.InternalError=rn(Error,"InternalError"),n.count_emval_handles=function(){for(var n=0,r=5;r<fn.length;++r)void 0!==fn[r]&&++n;return n},n.get_first_emval=function(){for(var n=5;n<fn.length;++n)if(void 0!==fn[n])return fn[n];return null},gn=n.UnboundTypeError=rn(Error,"UnboundTypeError");var En,kn={p:function(n){return Fn(n+16)+16},e:function(n,r){},o:function(n,r,t){throw new G(n).init(r,t),n},r:function(n,r,t,e,o){},m:function(n,r,t,e,o){var i=J(t);un(n,{name:r=Y(r),fromWireType:function(n){return!!n},toWireType:function(n,r){return r?e:o},argPackAdvance:8,readValueFromPointer:function(n){var e;if(1===t)e=g;else if(2===t)e=w;else{if(4!==t)throw new TypeError("Unknown boolean type size: "+r);e=_}return this.fromWireType(e[n>>i])},destructorFunction:null})},v:function(n,r){un(n,{name:r=Y(r),fromWireType:function(n){var r=fn[n].value;return sn(n),r},toWireType:function(n,r){return ln(r)},argPackAdvance:8,readValueFromPointer:pn,destructorFunction:null})},k:function(n,r,t){var e=J(t);un(n,{name:r=Y(r),fromWireType:function(n){return n},toWireType:function(n,r){if("number"!=typeof r&&"boolean"!=typeof r)throw new TypeError('Cannot convert "'+hn(r)+'" to '+this.name);return r},argPackAdvance:8,readValueFromPointer:dn(r,e),destructorFunction:null})},q:function(r,t,e,o,i,a){var u=function(n,r){for(var t=[],e=0;e<n;e++)t.push(_[(r>>2)+e]);return t}(t,e);r=Y(r),i=function(n,r){var t,e,o,i=(n=Y(n)).includes("j")?(t=n,e=r,o=[],function(){o.length=arguments.length;for(var n=0;n<arguments.length;n++)o[n]=arguments[n];return yn(t,e,o)}):S.get(r);return"function"!=typeof i&&en("unknown function pointer with signature "+n+": "+r),i}(o,i),function(r,t,e){n.hasOwnProperty(r)?((void 0===e||void 0!==n[r].overloadTable&&void 0!==n[r].overloadTable[e])&&en("Cannot register public name '"+r+"' twice"),function(n,r,t){if(void 0===n[r].overloadTable){var e=n[r];n[r]=function(){return n[r].overloadTable.hasOwnProperty(arguments.length)||en("Function '"+t+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+n[r].overloadTable+")!"),n[r].overloadTable[arguments.length].apply(this,arguments)},n[r].overloadTable=[],n[r].overloadTable[e.argCount]=e}}(n,r,r),n.hasOwnProperty(e)&&en("Cannot register multiple overloads of a function with the same number of arguments ("+e+")!"),n[r].overloadTable[e]=t):(n[r]=t,void 0!==e&&(n[r].numArguments=e))}(r,(function(){!function(n,r){var t=[],e={};throw r.forEach((function n(r){e[r]||$[r]||(K[r]?K[r].forEach(n):(t.push(r),e[r]=!0))})),new gn(n+": "+t.map(mn).join([", "]))}("Cannot call "+r+" due to unbound types",u)}),t-1),function(e,o,u){function c(o){var u=function(e){var o=[e[0],null].concat(e.slice(1));return function(r,t,e){n.hasOwnProperty(r)||an("Replacing nonexistant public symbol"),void 0!==n[r].overloadTable&&void 0!==e?n[r].overloadTable[e]=t:(n[r]=t,n[r].argCount=e)}(r,function(n,r,t,e,o){var i=r.length;i<2&&en("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var a=null!==r[1]&&null!==t,u=!1,c=1;c<r.length;++c)if(null!==r[c]&&void 0===r[c].destructorFunction){u=!0;break}var f="void"!==r[0].name,s="",l="";for(c=0;c<i-2;++c)s+=(0!==c?", ":"")+"arg"+c,l+=(0!==c?", ":"")+"arg"+c+"Wired";var p="return function "+Q(n)+"("+s+") {\nif (arguments.length !== "+(i-2)+") {\nthrowBindingError('function "+n+" called with ' + arguments.length + ' arguments, expected "+(i-2)+" args!');\n}\n";u&&(p+="var destructors = [];\n");var h=u?"destructors":"null",d=["throwBindingError","invoker","fn","runDestructors","retType","classParam"],v=[en,e,o,vn,r[0],r[1]];for(a&&(p+="var thisWired = classParam.toWireType("+h+", this);\n"),c=0;c<i-2;++c)p+="var arg"+c+"Wired = argType"+c+".toWireType("+h+", arg"+c+"); // "+r[c+2].name+"\n",d.push("argType"+c),v.push(r[c+2]);if(a&&(l="thisWired"+(l.length>0?", ":"")+l),p+=(f?"var rv = ":"")+"invoker(fn"+(l.length>0?", ":"")+l+");\n",u)p+="runDestructors(destructors);\n";else for(c=a?1:2;c<r.length;++c){var y=1===c?"thisWired":"arg"+(c-2)+"Wired";null!==r[c].destructorFunction&&(p+=y+"_dtor("+y+"); // "+r[c].name+"\n",d.push(y+"_dtor"),v.push(r[c].destructorFunction))}return f&&(p+="var ret = retType.fromWireType(rv);\nreturn ret;\n"),p+="}\n",d.push(p),function(n,r){if(!(n instanceof Function))throw new TypeError("new_ called with constructor type "+typeof n+" which is not a function");var t=nn(n.name||"unknownFunctionName",(function(){}));t.prototype=n.prototype;var e=new t,o=n.apply(e,r);return o instanceof Object?o:e}(Function,d).apply(null,v)}(r,o,null,i,a),t-1),[]}(o);u.length!==e.length&&an("Mismatched type converter count");for(var c=0;c<e.length;++c)un(e[c],u[c])}e.forEach((function(n){K[n]=o}));var f=new Array(o.length),s=[],l=0;o.forEach((function(n,r){$.hasOwnProperty(n)?f[r]=$[n]:(s.push(n),Z.hasOwnProperty(n)||(Z[n]=[]),Z[n].push((function(){f[r]=$[n],++l===s.length&&c(f)})))})),0===s.length&&c(f)}([],u)},b:function(n,r,t,e,o){r=Y(r),-1===o&&(o=4294967295);var i=J(t),a=function(n){return n};if(0===e){var u=32-8*t;a=function(n){return n<<u>>>u}}var c=r.includes("unsigned");un(n,{name:r,fromWireType:a,toWireType:function(n,t){if("number"!=typeof t&&"boolean"!=typeof t)throw new TypeError('Cannot convert "'+hn(t)+'" to '+this.name);if(t<e||t>o)throw new TypeError('Passing a number "'+hn(t)+'" from JS side to C/C++ side to an argument of type "'+r+'", which is outside the valid range ['+e+", "+o+"]!");return c?t>>>0:0|t},argPackAdvance:8,readValueFromPointer:wn(r,i,0!==e),destructorFunction:null})},a:function(n,r,t){var e=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][r];function o(n){var r=A,t=r[n>>=2],o=r[n+1];return new e(y,o,t)}un(n,{name:t=Y(t),fromWireType:o,argPackAdvance:8,readValueFromPointer:o},{ignoreDuplicateRegistrations:!0})},l:function(n,r){var t="std::string"===(r=Y(r));un(n,{name:r,fromWireType:function(n){var r,e=A[n>>2];if(t)for(var o=n+4,i=0;i<=e;++i){var a=n+4+i;if(i==e||0==m[a]){var u=v(o,a-o);void 0===r?r=u:(r+=String.fromCharCode(0),r+=u),o=a+1}}else{var c=new Array(e);for(i=0;i<e;++i)c[i]=String.fromCharCode(m[n+4+i]);r=c.join("")}return Wn(n),r},toWireType:function(n,r){r instanceof ArrayBuffer&&(r=new Uint8Array(r));var e="string"==typeof r;e||r instanceof Uint8Array||r instanceof Uint8ClampedArray||r instanceof Int8Array||en("Cannot pass non-string to std::string");var o=(t&&e?function(){return function(n){for(var r=0,t=0;t<n.length;++t){var e=n.charCodeAt(t);e>=55296&&e<=57343&&(e=65536+((1023&e)<<10)|1023&n.charCodeAt(++t)),e<=127?++r:r+=e<=2047?2:e<=65535?3:4}return r}(r)}:function(){return r.length})(),i=Fn(4+o+1);if(A[i>>2]=o,t&&e)!function(n,r,t,e){if(!(e>0))return 0;for(var o=t+e-1,i=0;i<n.length;++i){var a=n.charCodeAt(i);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&n.charCodeAt(++i)),a<=127){if(t>=o)break;r[t++]=a}else if(a<=2047){if(t+1>=o)break;r[t++]=192|a>>6,r[t++]=128|63&a}else if(a<=65535){if(t+2>=o)break;r[t++]=224|a>>12,r[t++]=128|a>>6&63,r[t++]=128|63&a}else{if(t+3>=o)break;r[t++]=240|a>>18,r[t++]=128|a>>12&63,r[t++]=128|a>>6&63,r[t++]=128|63&a}}r[t]=0}(r,m,i+4,o+1);else if(e)for(var a=0;a<o;++a){var u=r.charCodeAt(a);u>255&&(Wn(i),en("String has UTF-16 code units that do not fit in 8 bits")),m[i+4+a]=u}else for(a=0;a<o;++a)m[i+4+a]=r[a];return null!==n&&n.push(Wn,i),i},argPackAdvance:8,readValueFromPointer:pn,destructorFunction:function(n){Wn(n)}})},g:function(n,r,t){var e,o,i,a,u;t=Y(t),2===r?(e=E,o=k,a=W,i=function(){return b},u=1):4===r&&(e=F,o=R,a=I,i=function(){return A},u=2),un(n,{name:t,fromWireType:function(n){for(var t,o=A[n>>2],a=i(),c=n+4,f=0;f<=o;++f){var s=n+4+f*r;if(f==o||0==a[s>>u]){var l=e(c,s-c);void 0===t?t=l:(t+=String.fromCharCode(0),t+=l),c=s+r}}return Wn(n),t},toWireType:function(n,e){"string"!=typeof e&&en("Cannot pass non-string to C++ string type "+t);var i=a(e),c=Fn(4+i+r);return A[c>>2]=i>>u,o(e,c+4,i+r),null!==n&&n.push(Wn,c),c},argPackAdvance:8,readValueFromPointer:pn,destructorFunction:function(n){Wn(n)}})},n:function(n,r){un(n,{isVoid:!0,name:r=Y(r),argPackAdvance:0,fromWireType:function(){},toWireType:function(n,r){}})},c:sn,d:function(n){return 0===n?ln(_n()):(n=void 0===(t=bn[r=n])?Y(r):t,ln(_n()[n]));var r,t},h:function(n){n>4&&(fn[n].refcount+=1)},i:function(r,t,e,o){r=function(n){return n||en("Cannot use deleted val. handle = "+n),fn[n].value}(r);var i=Tn[t];return i||(i=function(r){for(var t="",e=0;e<r;++e)t+=(0!==e?", ":"")+"arg"+e;var o="return function emval_allocator_"+r+"(constructor, argTypes, args) {\n";for(e=0;e<r;++e)o+="var argType"+e+" = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + "+e+'], "parameter '+e+'");\nvar arg'+e+" = argType"+e+".readValueFromPointer(args);\nargs += argType"+e+"['argPackAdvance'];\n";return o+="var obj = new constructor("+t+");\nreturn __emval_register(obj);\n}\n",new Function("requireRegisteredType","Module","__emval_register",o)(An,n,ln)}(t),Tn[t]=i),i(r,e,o)},j:function(){H()},t:function(n,r,t){m.copyWithin(n,r,r+t)},f:function(n){var r,t=m.length,e=2147483648;if((n>>>=0)>e)return!1;for(var o=1;o<=4;o*=2){var i=t*(1+.2/o);if(i=Math.min(i,n+100663296),Cn(Math.min(e,((r=Math.max(n,i))%65536>0&&(r+=65536-r%65536),r))))return!0}return!1},u:function(n,r,t,e){for(var o=0,i=0;i<t;i++){for(var a=_[r+8*i>>2],u=_[r+(8*i+4)>>2],c=0;c<u;c++)Pn.printChar(n,m[a+c]);o+=u}return _[e>>2]=o,0},s:function(n){}},Wn=(function(){var r={a:kn};function t(r,t){var e,o=r.exports;n.asm=o,U((s=n.asm.w).buffer),S=n.asm.C,e=n.asm.x,x.unshift(e),function(r){if(B--,n.monitorRunDependencies&&n.monitorRunDependencies(B),0==B&&(null!==D&&(clearInterval(D),D=null),M)){var t=M;M=null,t()}}()}function o(n){t(n.instance)}function i(n){return(f||"function"!=typeof fetch?Promise.resolve().then((function(){return N(V)})):fetch(V,{credentials:"same-origin"}).then((function(n){if(!n.ok)throw"failed to load wasm binary file at '"+V+"'";return n.arrayBuffer()})).catch((function(){return N(V)}))).then((function(n){return WebAssembly.instantiate(n,r)})).then(n,(function(n){p("failed to asynchronously prepare wasm: "+n),H(n)}))}if(B++,n.monitorRunDependencies&&n.monitorRunDependencies(B),n.instantiateWasm)try{return n.instantiateWasm(r,t)}catch(n){return p("Module.instantiateWasm callback failed with error: "+n),!1}(f||"function"!=typeof WebAssembly.instantiateStreaming||q(V)||"function"!=typeof fetch?i(o):fetch(V,{credentials:"same-origin"}).then((function(n){return WebAssembly.instantiateStreaming(n,r).then(o,(function(n){return p("wasm streaming compile failed: "+n),p("falling back to ArrayBuffer instantiation"),i(o)}))}))).catch(e)}(),n.___wasm_call_ctors=function(){return(n.___wasm_call_ctors=n.asm.x).apply(null,arguments)},n._free=function(){return(Wn=n._free=n.asm.y).apply(null,arguments)}),Fn=n._malloc=function(){return(Fn=n._malloc=n.asm.z).apply(null,arguments)},Rn=n.___getTypeName=function(){return(Rn=n.___getTypeName=n.asm.A).apply(null,arguments)};function In(t){function e(){En||(En=!0,n.calledRun=!0,h||(L(x),r(n),n.onRuntimeInitialized&&n.onRuntimeInitialized(),function(){if(n.postRun)for("function"==typeof n.postRun&&(n.postRun=[n.postRun]);n.postRun.length;)r=n.postRun.shift(),z.unshift(r);var r;L(z)}()))}t=t||u,B>0||(function(){if(n.preRun)for("function"==typeof n.preRun&&(n.preRun=[n.preRun]);n.preRun.length;)r=n.preRun.shift(),O.unshift(r);var r;L(O)}(),B>0||(n.setStatus?(n.setStatus("Running..."),setTimeout((function(){setTimeout((function(){n.setStatus("")}),1),e()}),1)):e()))}if(n.___embind_register_native_and_builtin_types=function(){return(n.___embind_register_native_and_builtin_types=n.asm.B).apply(null,arguments)},n.dynCall_jiji=function(){return(n.dynCall_jiji=n.asm.D).apply(null,arguments)},M=function n(){En||In(),En||(M=n)},n.run=In,n.preInit)for("function"==typeof n.preInit&&(n.preInit=[n.preInit]);n.preInit.length>0;)n.preInit.pop()();return In(),n.ready})},6206:(n,r,t)=>{"use strict";n.exports=t.p+"wp2_dec.2b3cb.wasm"}}]);
//# sourceMappingURL=26.js.map