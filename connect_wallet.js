/*! For license information please see connect_wallet.js.LICENSE.txt */
(()=>{var t={463:()=>{var t=location.pathname.match(/\/([^\/]+)\.html$/);document.querySelectorAll(".".concat(t[1])).forEach((function(t){return t.addEventListener("click",(function(t){console.log("клік по логотипу"),t.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})}))}))},897:(t,e,r)=>{var n=r(633);t.exports=(n.default||n).template({compiler:[8,">= 4.3.0"],main:function(t,e,r,n,o){return'\r\n<footer>\r\n        <div class="column1">\r\n            <div class="column_heading img-wrapper index"><img src="./img/header/Logo.svg" alt="Логотип компанії"></div>\r\n            <p>NFT marketplace UI created with Anima for Figma.</p>\r\n            <p>Join our community</p>\r\n            <div class="social_medias">\r\n                <div class="img-wrapper social_media_icon"><img src="./img/footer/DiscordLogo.png" alt="Discord"></div>\r\n                <div class="img-wrapper social_media_icon"><img src="./img/footer/YoutubeLogo.png" alt="Youtube"></div>\r\n                <div class="img-wrapper social_media_icon"><img src="./img/footer/InstagramLogo.png" alt="Instagram"></div>\r\n                <div class="img-wrapper social_media_icon"><img src="./img/footer/TwitterLogo.png" alt="Twitter"></div>\r\n            </div>\r\n        </div>\r\n        <div class="column2">\r\n            <h2 class="column_heading">\r\n                Explore\r\n            </h2>\r\n            <a href="" class="\r\n            marketplace\r\n            ">\r\n                <p>Marketplace</p>\r\n            </a>\r\n            <a href="" class="rankings">\r\n                <p>Rankings</p>\r\n            </a>\r\n            <a href="" class="connect_wallet">\r\n                <p>Connect a wallet</p>\r\n            </a>\r\n        </div>\r\n        <div class="column3">\r\n            <div class="text-wrapper footer_weekly_digest">\r\n                <h2>Join our weekly digest</h2>\r\n                <p>Get exclusive promotions & updates straight to your inbox.</p>\r\n  \r\n                <div class="email_and_btn">\r\n                  <div class="email_input">\r\n                      <input type="email" placeholder="Enter your email here"/>\r\n                    </div>\r\n                    <a>\r\n                        <img src="./img/create_account/EnvelopeSimple.png" alt="">\r\n                        <span>\r\n                            Subscribe\r\n                        </span>\r\n                    </a>\r\n                </div>\r\n                \r\n              </div>\r\n        </div>\r\n    </footer>'},useData:!0})},791:(t,e,r)=>{var n=r(633);t.exports=(n.default||n).template({1:function(t,e,r,n,o){return'            <a id="logout_btn_js"class="logout_button">\r\n              <img src="./img/header/User.svg" alt="Користувач" />\r\n              <span>Logout</span>\r\n            </a>\r\n'},3:function(t,e,r,n,o){return'            <a id="login_btn_js" href="./create_account.html" class="login_button">\r\n              <img src="./img/header/User.svg" alt="Користувач" />\r\n              <span>Login</span>\r\n            </a>\r\n'},compiler:[8,">= 4.3.0"],main:function(t,e,r,n,o){var a,i=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return'\r\n<header>\r\n    <a href="./index.html">\r\n<div class="logo index">\r\n          <img src="./img/header/Logo.svg" alt="логотип" />\r\n        </div>\r\n</a>\r\n        \r\n        <ul>\r\n            <li class="burger_menu">\r\n                <span class="line"></span> \r\n                <span class="line"></span>\r\n                <span class="line"></span>\r\n              </li>\r\n          <li><a rel="preload" href="./marketplace.html">Marketplace</a></li>\r\n          <li><a rel="preload" href="./rankings.html">Rankings</a></li>\r\n          <li><a rel="preload" href="./connect_wallet.html">Connect a wallet</a></li>\r\n          <li>\r\n            \r\n'+(null!=(a=i(r,"if").call(null!=e?e:t.nullContext||{},null!=e?i(e,"status"):e,{name:"if",hash:{},fn:t.program(1,o,0),inverse:t.program(3,o,0),data:o,loc:{start:{line:20,column:12},end:{line:30,column:19}}}))?a:"")+"           \r\n          </li>\r\n          \r\n        </ul>\r\n</header>\r\n\r\n"},useData:!0})},261:(t,e,r)=>{"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function o(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}e.__esModule=!0;var a=o(r(871)),i=n(r(613)),l=n(r(769)),u=o(r(849)),c=o(r(624)),s=n(r(148));function f(){var t=new a.HandlebarsEnvironment;return u.extend(t,a),t.SafeString=i.default,t.Exception=l.default,t.Utils=u,t.escapeExpression=u.escapeExpression,t.VM=c,t.template=function(e){return c.template(e,t)},t}var p=f();p.create=f,s.default(p),p.default=p,e.default=p,t.exports=e.default},871:(t,e,r)=>{"use strict";function n(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.HandlebarsEnvironment=f;var o=r(849),a=n(r(769)),i=r(277),l=r(940),u=n(r(566)),c=r(865);e.VERSION="4.7.8",e.COMPILER_REVISION=8,e.LAST_COMPATIBLE_COMPILER_REVISION=7,e.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};var s="[object Object]";function f(t,e,r){this.helpers=t||{},this.partials=e||{},this.decorators=r||{},i.registerDefaultHelpers(this),l.registerDefaultDecorators(this)}f.prototype={constructor:f,logger:u.default,log:u.default.log,registerHelper:function(t,e){if(o.toString.call(t)===s){if(e)throw new a.default("Arg not supported with multiple helpers");o.extend(this.helpers,t)}else this.helpers[t]=e},unregisterHelper:function(t){delete this.helpers[t]},registerPartial:function(t,e){if(o.toString.call(t)===s)o.extend(this.partials,t);else{if(void 0===e)throw new a.default('Attempting to register a partial called "'+t+'" as undefined');this.partials[t]=e}},unregisterPartial:function(t){delete this.partials[t]},registerDecorator:function(t,e){if(o.toString.call(t)===s){if(e)throw new a.default("Arg not supported with multiple decorators");o.extend(this.decorators,t)}else this.decorators[t]=e},unregisterDecorator:function(t){delete this.decorators[t]},resetLoggedPropertyAccesses:function(){c.resetLoggedProperties()}};var p=u.default.log;e.log=p,e.createFrame=o.createFrame,e.logger=u.default},940:(t,e,r)=>{"use strict";e.__esModule=!0,e.registerDefaultDecorators=function(t){o.default(t)};var n,o=(n=r(430))&&n.__esModule?n:{default:n}},430:(t,e,r)=>{"use strict";e.__esModule=!0;var n=r(849);e.default=function(t){t.registerDecorator("inline",(function(t,e,r,o){var a=t;return e.partials||(e.partials={},a=function(o,a){var i=r.partials;r.partials=n.extend({},i,e.partials);var l=t(o,a);return r.partials=i,l}),e.partials[o.args[0]]=o.fn,a}))},t.exports=e.default},769:(t,e)=>{"use strict";e.__esModule=!0;var r=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];function n(t,e){var o=e&&e.loc,a=void 0,i=void 0,l=void 0,u=void 0;o&&(a=o.start.line,i=o.end.line,l=o.start.column,u=o.end.column,t+=" - "+a+":"+l);for(var c=Error.prototype.constructor.call(this,t),s=0;s<r.length;s++)this[r[s]]=c[r[s]];Error.captureStackTrace&&Error.captureStackTrace(this,n);try{o&&(this.lineNumber=a,this.endLineNumber=i,Object.defineProperty?(Object.defineProperty(this,"column",{value:l,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:u,enumerable:!0})):(this.column=l,this.endColumn=u))}catch(t){}}n.prototype=new Error,e.default=n,t.exports=e.default},277:(t,e,r)=>{"use strict";function n(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.registerDefaultHelpers=function(t){o.default(t),a.default(t),i.default(t),l.default(t),u.default(t),c.default(t),s.default(t)},e.moveHelperToHooks=function(t,e,r){t.helpers[e]&&(t.hooks[e]=t.helpers[e],r||delete t.helpers[e])};var o=n(r(97)),a=n(r(785)),i=n(r(353)),l=n(r(355)),u=n(r(300)),c=n(r(466)),s=n(r(908))},97:(t,e,r)=>{"use strict";e.__esModule=!0;var n=r(849);e.default=function(t){t.registerHelper("blockHelperMissing",(function(e,r){var o=r.inverse,a=r.fn;if(!0===e)return a(this);if(!1===e||null==e)return o(this);if(n.isArray(e))return e.length>0?(r.ids&&(r.ids=[r.name]),t.helpers.each(e,r)):o(this);if(r.data&&r.ids){var i=n.createFrame(r.data);i.contextPath=n.appendContextPath(r.data.contextPath,r.name),r={data:i}}return a(e,r)}))},t.exports=e.default},785:(t,e,r)=>{"use strict";e.__esModule=!0;var n,o=r(849),a=(n=r(769))&&n.__esModule?n:{default:n};e.default=function(t){t.registerHelper("each",(function(t,e){if(!e)throw new a.default("Must pass iterator to #each");var r,n=e.fn,i=e.inverse,l=0,u="",c=void 0,s=void 0;function f(e,r,a){c&&(c.key=e,c.index=r,c.first=0===r,c.last=!!a,s&&(c.contextPath=s+e)),u+=n(t[e],{data:c,blockParams:o.blockParams([t[e],e],[s+e,null])})}if(e.data&&e.ids&&(s=o.appendContextPath(e.data.contextPath,e.ids[0])+"."),o.isFunction(t)&&(t=t.call(this)),e.data&&(c=o.createFrame(e.data)),t&&"object"==typeof t)if(o.isArray(t))for(var p=t.length;l<p;l++)l in t&&f(l,l,l===t.length-1);else if("function"==typeof Symbol&&t[Symbol.iterator]){for(var h=[],d=t[Symbol.iterator](),v=d.next();!v.done;v=d.next())h.push(v.value);for(p=(t=h).length;l<p;l++)f(l,l,l===t.length-1)}else r=void 0,Object.keys(t).forEach((function(t){void 0!==r&&f(r,l-1),r=t,l++})),void 0!==r&&f(r,l-1,!0);return 0===l&&(u=i(this)),u}))},t.exports=e.default},353:(t,e,r)=>{"use strict";e.__esModule=!0;var n,o=(n=r(769))&&n.__esModule?n:{default:n};e.default=function(t){t.registerHelper("helperMissing",(function(){if(1!==arguments.length)throw new o.default('Missing helper: "'+arguments[arguments.length-1].name+'"')}))},t.exports=e.default},355:(t,e,r)=>{"use strict";e.__esModule=!0;var n,o=r(849),a=(n=r(769))&&n.__esModule?n:{default:n};e.default=function(t){t.registerHelper("if",(function(t,e){if(2!=arguments.length)throw new a.default("#if requires exactly one argument");return o.isFunction(t)&&(t=t.call(this)),!e.hash.includeZero&&!t||o.isEmpty(t)?e.inverse(this):e.fn(this)})),t.registerHelper("unless",(function(e,r){if(2!=arguments.length)throw new a.default("#unless requires exactly one argument");return t.helpers.if.call(this,e,{fn:r.inverse,inverse:r.fn,hash:r.hash})}))},t.exports=e.default},300:(t,e)=>{"use strict";e.__esModule=!0,e.default=function(t){t.registerHelper("log",(function(){for(var e=[void 0],r=arguments[arguments.length-1],n=0;n<arguments.length-1;n++)e.push(arguments[n]);var o=1;null!=r.hash.level?o=r.hash.level:r.data&&null!=r.data.level&&(o=r.data.level),e[0]=o,t.log.apply(t,e)}))},t.exports=e.default},466:(t,e)=>{"use strict";e.__esModule=!0,e.default=function(t){t.registerHelper("lookup",(function(t,e,r){return t?r.lookupProperty(t,e):t}))},t.exports=e.default},908:(t,e,r)=>{"use strict";e.__esModule=!0;var n,o=r(849),a=(n=r(769))&&n.__esModule?n:{default:n};e.default=function(t){t.registerHelper("with",(function(t,e){if(2!=arguments.length)throw new a.default("#with requires exactly one argument");o.isFunction(t)&&(t=t.call(this));var r=e.fn;if(o.isEmpty(t))return e.inverse(this);var n=e.data;return e.data&&e.ids&&((n=o.createFrame(e.data)).contextPath=o.appendContextPath(e.data.contextPath,e.ids[0])),r(t,{data:n,blockParams:o.blockParams([t],[n&&n.contextPath])})}))},t.exports=e.default},726:(t,e,r)=>{"use strict";e.__esModule=!0,e.createNewLookupObject=function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return n.extend.apply(void 0,[Object.create(null)].concat(e))};var n=r(849)},865:(t,e,r)=>{"use strict";e.__esModule=!0,e.createProtoAccessControl=function(t){var e=Object.create(null);e.constructor=!1,e.__defineGetter__=!1,e.__defineSetter__=!1,e.__lookupGetter__=!1;var r=Object.create(null);return r.__proto__=!1,{properties:{whitelist:o.createNewLookupObject(r,t.allowedProtoProperties),defaultValue:t.allowProtoPropertiesByDefault},methods:{whitelist:o.createNewLookupObject(e,t.allowedProtoMethods),defaultValue:t.allowProtoMethodsByDefault}}},e.resultIsAllowed=function(t,e,r){return function(t,e){return void 0!==t.whitelist[e]?!0===t.whitelist[e]:void 0!==t.defaultValue?t.defaultValue:(function(t){!0!==i[t]&&(i[t]=!0,a.default.log("error",'Handlebars: Access has been denied to resolve the property "'+t+'" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details'))}(e),!1)}("function"==typeof t?e.methods:e.properties,r)},e.resetLoggedProperties=function(){Object.keys(i).forEach((function(t){delete i[t]}))};var n,o=r(726),a=(n=r(566))&&n.__esModule?n:{default:n},i=Object.create(null)},614:(t,e)=>{"use strict";e.__esModule=!0,e.wrapHelper=function(t,e){return"function"!=typeof t?t:function(){return arguments[arguments.length-1]=e(arguments[arguments.length-1]),t.apply(this,arguments)}}},566:(t,e,r)=>{"use strict";e.__esModule=!0;var n=r(849),o={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(t){if("string"==typeof t){var e=n.indexOf(o.methodMap,t.toLowerCase());t=e>=0?e:parseInt(t,10)}return t},log:function(t){if(t=o.lookupLevel(t),"undefined"!=typeof console&&o.lookupLevel(o.level)<=t){var e=o.methodMap[t];console[e]||(e="log");for(var r=arguments.length,n=Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];console[e].apply(console,n)}}};e.default=o,t.exports=e.default},148:(t,e)=>{"use strict";e.__esModule=!0,e.default=function(t){"object"!=typeof globalThis&&(Object.prototype.__defineGetter__("__magic__",(function(){return this})),__magic__.globalThis=__magic__,delete Object.prototype.__magic__);var e=globalThis.Handlebars;t.noConflict=function(){return globalThis.Handlebars===t&&(globalThis.Handlebars=e),t}},t.exports=e.default},624:(t,e,r)=>{"use strict";e.__esModule=!0,e.checkRevision=function(t){var e=t&&t[0]||1,r=i.COMPILER_REVISION;if(!(e>=i.LAST_COMPATIBLE_COMPILER_REVISION&&e<=i.COMPILER_REVISION)){if(e<i.LAST_COMPATIBLE_COMPILER_REVISION){var n=i.REVISION_CHANGES[r],o=i.REVISION_CHANGES[e];throw new a.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+n+") or downgrade your runtime to an older version ("+o+").")}throw new a.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+t[1]+").")}},e.template=function(t,e){if(!e)throw new a.default("No environment passed to template");if(!t||!t.main)throw new a.default("Unknown template object: "+typeof t);t.main.decorator=t.main_d,e.VM.checkRevision(t.compiler);var r=t.compiler&&7===t.compiler[0],n={strict:function(t,e,r){if(!t||!(e in t))throw new a.default('"'+e+'" not defined in '+t,{loc:r});return n.lookupProperty(t,e)},lookupProperty:function(t,e){var r=t[e];return null==r||Object.prototype.hasOwnProperty.call(t,e)||c.resultIsAllowed(r,n.protoAccessControl,e)?r:void 0},lookup:function(t,e){for(var r=t.length,o=0;o<r;o++)if(null!=(t[o]&&n.lookupProperty(t[o],e)))return t[o][e]},lambda:function(t,e){return"function"==typeof t?t.call(e):t},escapeExpression:o.escapeExpression,invokePartial:function(r,n,i){i.hash&&(n=o.extend({},n,i.hash),i.ids&&(i.ids[0]=!0)),r=e.VM.resolvePartial.call(this,r,n,i);var l=o.extend({},i,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),u=e.VM.invokePartial.call(this,r,n,l);if(null==u&&e.compile&&(i.partials[i.name]=e.compile(r,t.compilerOptions,e),u=i.partials[i.name](n,l)),null!=u){if(i.indent){for(var c=u.split("\n"),s=0,f=c.length;s<f&&(c[s]||s+1!==f);s++)c[s]=i.indent+c[s];u=c.join("\n")}return u}throw new a.default("The partial "+i.name+" could not be compiled when running in runtime-only mode")},fn:function(e){var r=t[e];return r.decorator=t[e+"_d"],r},programs:[],program:function(t,e,r,n,o){var a=this.programs[t],i=this.fn(t);return e||o||n||r?a=s(this,t,i,e,r,n,o):a||(a=this.programs[t]=s(this,t,i)),a},data:function(t,e){for(;t&&e--;)t=t._parent;return t},mergeIfNeeded:function(t,e){var r=t||e;return t&&e&&t!==e&&(r=o.extend({},e,t)),r},nullContext:Object.seal({}),noop:e.VM.noop,compilerInfo:t.compiler};function f(e){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],o=r.data;f._setup(r),!r.partial&&t.useData&&(o=function(t,e){return e&&"root"in e||((e=e?i.createFrame(e):{}).root=t),e}(e,o));var a=void 0,l=t.useBlockParams?[]:void 0;function u(e){return""+t.main(n,e,n.helpers,n.partials,o,l,a)}return t.useDepths&&(a=r.depths?e!=r.depths[0]?[e].concat(r.depths):r.depths:[e]),(u=p(t.main,u,n,r.depths||[],o,l))(e,r)}return f.isTop=!0,f._setup=function(a){if(a.partial)n.protoAccessControl=a.protoAccessControl,n.helpers=a.helpers,n.partials=a.partials,n.decorators=a.decorators,n.hooks=a.hooks;else{var i=o.extend({},e.helpers,a.helpers);!function(t,e){Object.keys(t).forEach((function(r){var n=t[r];t[r]=function(t,e){var r=e.lookupProperty;return u.wrapHelper(t,(function(t){return o.extend({lookupProperty:r},t)}))}(n,e)}))}(i,n),n.helpers=i,t.usePartial&&(n.partials=n.mergeIfNeeded(a.partials,e.partials)),(t.usePartial||t.useDecorators)&&(n.decorators=o.extend({},e.decorators,a.decorators)),n.hooks={},n.protoAccessControl=c.createProtoAccessControl(a);var s=a.allowCallsToHelperMissing||r;l.moveHelperToHooks(n,"helperMissing",s),l.moveHelperToHooks(n,"blockHelperMissing",s)}},f._child=function(e,r,o,i){if(t.useBlockParams&&!o)throw new a.default("must pass block params");if(t.useDepths&&!i)throw new a.default("must pass parent depths");return s(n,e,t[e],r,0,o,i)},f},e.wrapProgram=s,e.resolvePartial=function(t,e,r){return t?t.call||r.name||(r.name=t,t=r.partials[t]):t="@partial-block"===r.name?r.data["partial-block"]:r.partials[r.name],t},e.invokePartial=function(t,e,r){var n=r.data&&r.data["partial-block"];r.partial=!0,r.ids&&(r.data.contextPath=r.ids[0]||r.data.contextPath);var l=void 0;if(r.fn&&r.fn!==f&&function(){r.data=i.createFrame(r.data);var t=r.fn;l=r.data["partial-block"]=function(e){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return r.data=i.createFrame(r.data),r.data["partial-block"]=n,t(e,r)},t.partials&&(r.partials=o.extend({},r.partials,t.partials))}(),void 0===t&&l&&(t=l),void 0===t)throw new a.default("The partial "+r.name+" could not be found");if(t instanceof Function)return t(e,r)},e.noop=f;var n,o=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(r(849)),a=(n=r(769))&&n.__esModule?n:{default:n},i=r(871),l=r(277),u=r(614),c=r(865);function s(t,e,r,n,o,a,i){function l(e){var o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],l=i;return!i||e==i[0]||e===t.nullContext&&null===i[0]||(l=[e].concat(i)),r(t,e,t.helpers,t.partials,o.data||n,a&&[o.blockParams].concat(a),l)}return(l=p(r,l,t,i,n,a)).program=e,l.depth=i?i.length:0,l.blockParams=o||0,l}function f(){return""}function p(t,e,r,n,a,i){if(t.decorator){var l={};e=t.decorator(e,l,r,n&&n[0],a,i,n),o.extend(e,l)}return e}},613:(t,e)=>{"use strict";function r(t){this.string=t}e.__esModule=!0,r.prototype.toString=r.prototype.toHTML=function(){return""+this.string},e.default=r,t.exports=e.default},849:(t,e)=>{"use strict";e.__esModule=!0,e.extend=i,e.indexOf=function(t,e){for(var r=0,n=t.length;r<n;r++)if(t[r]===e)return r;return-1},e.escapeExpression=function(t){if("string"!=typeof t){if(t&&t.toHTML)return t.toHTML();if(null==t)return"";if(!t)return t+"";t=""+t}return o.test(t)?t.replace(n,a):t},e.isEmpty=function(t){return!t&&0!==t||!(!c(t)||0!==t.length)},e.createFrame=function(t){var e=i({},t);return e._parent=t,e},e.blockParams=function(t,e){return t.path=e,t},e.appendContextPath=function(t,e){return(t?t+".":"")+e};var r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},n=/[&<>"'`=]/g,o=/[&<>"'`=]/;function a(t){return r[t]}function i(t){for(var e=1;e<arguments.length;e++)for(var r in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],r)&&(t[r]=arguments[e][r]);return t}var l=Object.prototype.toString;e.toString=l;var u=function(t){return"function"==typeof t};u(/x/)&&(e.isFunction=u=function(t){return"function"==typeof t&&"[object Function]"===l.call(t)}),e.isFunction=u;var c=Array.isArray||function(t){return!(!t||"object"!=typeof t)&&"[object Array]"===l.call(t)};e.isArray=c},633:(t,e,r)=>{t.exports=r(261).default}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t=r(791),e=r.n(t);function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(){o=function(){return e};var t,e={},r=Object.prototype,a=r.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},l="function"==typeof Symbol?Symbol:{},u=l.iterator||"@@iterator",c=l.asyncIterator||"@@asyncIterator",s=l.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var o=e&&e.prototype instanceof w?e:w,a=Object.create(o.prototype),l=new N(n||[]);return i(a,"_invoke",{value:M(t,r,l)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=p;var d="suspendedStart",v="suspendedYield",m="executing",g="completed",y={};function w(){}function _(){}function b(){}var x={};f(x,u,(function(){return this}));var L=Object.getPrototypeOf,E=L&&L(L(T([])));E&&E!==r&&a.call(E,u)&&(x=E);var k=b.prototype=w.prototype=Object.create(x);function P(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(o,i,l,u){var c=h(t[o],t,i);if("throw"!==c.type){var s=c.arg,f=s.value;return f&&"object"==n(f)&&a.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,l,u)}),(function(t){r("throw",t,l,u)})):e.resolve(f).then((function(t){s.value=t,l(s)}),(function(t){return r("throw",t,l,u)}))}u(c.arg)}var o;i(this,"_invoke",{value:function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}})}function M(e,r,n){var o=d;return function(a,i){if(o===m)throw Error("Generator is already running");if(o===g){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var l=n.delegate;if(l){var u=S(l,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=m;var c=h(e,r,n);if("normal"===c.type){if(o=n.done?g:v,c.arg===y)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(o=g,n.method="throw",n.arg=c.arg)}}}function S(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,S(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var a=h(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,y;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function T(e){if(e||""===e){var r=e[u];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(a.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(n(e)+" is not iterable")}return _.prototype=b,i(k,"constructor",{value:b,configurable:!0}),i(b,"constructor",{value:_,configurable:!0}),_.displayName=f(b,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,f(t,s,"GeneratorFunction")),t.prototype=Object.create(k),t},e.awrap=function(t){return{__await:t}},P(O.prototype),f(O.prototype,c,(function(){return this})),e.AsyncIterator=O,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new O(p(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},P(k),f(k,s,"Generator"),f(k,u,(function(){return this})),f(k,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=T,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(I),!e)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return l.type="throw",l.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],l=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=a.call(i,"catchLoc"),c=a.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),I(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;I(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function a(t,e,r,n,o,a,i){try{var l=t[a](i),u=l.value}catch(t){return void r(t)}l.done?e(u):Promise.resolve(u).then(n,o)}function i(){var t;return t=o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(document.querySelector("header")){t.next=5;break}return t.next=3,new Promise((function(t){console.log(localStorage.getItem("status")),document.querySelector("main").insertAdjacentHTML("afterbegin",e()({status:JSON.parse(localStorage.getItem("status"))})),t()}));case 3:t.next=6;break;case 5:console.warn("шаблон вже доданий");case 6:document.querySelector(".burger_menu").addEventListener("click",(function(t){var e=document.querySelector(".burger_menu"),r=e.parentNode.children;e.classList.toggle("open");for(var n=1;n<r.length;n++)r[n].classList.toggle("db")}));case 7:case"end":return t.stop()}}),t)})),i=function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function l(t){a(i,n,o,l,u,"next",t)}function u(t){a(i,n,o,l,u,"throw",t)}l(void 0)}))},i.apply(this,arguments)}!function(){i.apply(this,arguments)}();var l=r(897),u=r.n(l);function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function s(){s=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",l=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var a=e&&e.prototype instanceof w?e:w,i=Object.create(a.prototype),l=new N(n||[]);return o(i,"_invoke",{value:M(t,r,l)}),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=p;var d="suspendedStart",v="suspendedYield",m="executing",g="completed",y={};function w(){}function _(){}function b(){}var x={};f(x,i,(function(){return this}));var L=Object.getPrototypeOf,E=L&&L(L(T([])));E&&E!==r&&n.call(E,i)&&(x=E);var k=b.prototype=w.prototype=Object.create(x);function P(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(o,a,i,l){var u=h(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==c(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,l)}),(function(t){r("throw",t,i,l)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,l)}))}l(u.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function M(e,r,n){var o=d;return function(a,i){if(o===m)throw Error("Generator is already running");if(o===g){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var l=n.delegate;if(l){var u=S(l,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=m;var c=h(e,r,n);if("normal"===c.type){if(o=n.done?g:v,c.arg===y)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(o=g,n.method="throw",n.arg=c.arg)}}}function S(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,S(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var a=h(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,y;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function T(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(c(e)+" is not iterable")}return _.prototype=b,o(k,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:_,configurable:!0}),_.displayName=f(b,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,f(t,u,"GeneratorFunction")),t.prototype=Object.create(k),t},e.awrap=function(t){return{__await:t}},P(O.prototype),f(O.prototype,l,(function(){return this})),e.AsyncIterator=O,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new O(p(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},P(k),f(k,u,"Generator"),f(k,i,(function(){return this})),f(k,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=T,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(I),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return l.type="throw",l.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],l=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),I(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;I(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function f(t,e,r,n,o,a,i){try{var l=t[a](i),u=l.value}catch(t){return void r(t)}l.done?e(u):Promise.resolve(u).then(n,o)}function p(){var t;return t=s().mark((function t(){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(document.querySelector("footer")){t.next=5;break}return t.next=3,new Promise((function(t){document.querySelector("main").insertAdjacentHTML("beforeend",u()()),t()}));case 3:t.next=6;break;case 5:console.warn("шаблон вже доданий");case 6:case"end":return t.stop()}}),t)})),p=function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){f(a,n,o,i,l,"next",t)}function l(t){f(a,n,o,i,l,"throw",t)}i(void 0)}))},p.apply(this,arguments)}!function(){p.apply(this,arguments)}(),r(463)})()})();
//# sourceMappingURL=connect_wallet.js.map