// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"fXRFu":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "d0c4119ac5ca3b32";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"3PNHe":[function(require,module,exports,__globalThis) {
//home page and general stuff
//morphing shape for the projects section
var morph1 = gsap.to(".shape-1", {
    duration: 3,
    morphSVG: ".shape-2",
    repeat: -1,
    yoyo: true,
    repeatDelay: 0
});
var morph2 = gsap.to(".shape-3", {
    duration: 3,
    morphSVG: ".shape-4",
    repeat: -1,
    yoyo: true,
    repeatDelay: 0
});
var morph3 = gsap.to(".shape-5", {
    duration: 3,
    morphSVG: ".shape-6",
    repeat: -1,
    yoyo: true,
    repeatDelay: 0
});
//cards scroll through animation for the services section
$(document).ready(function() {
    let cardsArray = [];
    // Select all .card.is-services elements inside .services_list
    $('.services_list .card.is-services').each(function() {
        let card = $(this);
        let linkTargetID = card.find('.card_link-target').attr('id');
        // Push the card element and ID into the array as an object
        cardsArray.push({
            cardElement: card,
            linkTargetID: linkTargetID
        });
    });
    cardsArray.forEach(function(item) {
        // GSAP ScrollTrigger animation for each card
        gsap.fromTo(item.cardElement, {
            opacity: 0,
            scale: 0.2,
            y: 0
        }, {
            opacity: 1,
            scale: 1,
            y: 0,
            ease: "power2.out",
            scrollTrigger: {
                trigger: `#${item.linkTargetID}`,
                start: "top 90%",
                end: "top 20%",
                scrub: true,
                markers: false
            }
        });
    });
});
//splitHeadingIntoLines
var heroSplit = new SplitText(".home-header_heading", {
    type: "lines"
});
//hero section animation
var heroLoad = gsap.timeline({
    scrollTrigger: {
        trigger: ".section_home-header"
    }
});
//content
heroLoad.from(heroSplit.lines, {
    duration: 1,
    opacity: 0,
    ease: "power4.out",
    y: 500,
    stagger: 0.125
}).from(".home-header_heading", {
    scale: 0.6,
    duration: 0.625,
    ease: "back.out(1.7)"
}, ">-0.5");
heroLoad.from(".home-header_subheading", {
    duration: .875,
    y: 300,
    opacity: 0,
    ease: "power4.out"
}, ">-0.25");
heroLoad.from(".home-header_component > a", {
    duration: .875,
    y: 200,
    opacity: 0,
    ease: "power3.out"
}, ">-0.25");
//critters
heroLoad.from(".home-header_lottie.is-dinkus", {
    y: 70,
    x: 180,
    duration: 0.5,
    scale: 0,
    ease: "power4.out"
}, ">-0.5");
heroLoad.from(".home-header_lottie.is-brazzo", {
    y: -200,
    x: 240,
    duration: 0.625,
    scale: 0,
    ease: "power4.out"
}, "<-0.25");
heroLoad.from(".home-header_lottie.is-slice", {
    y: -100,
    x: -200,
    duration: 0.75,
    scale: 0,
    ease: "power4.out"
}, "<-0.125");
//featured projects animation
var projectsLoad = gsap.timeline({
    scrollTrigger: {
        trigger: ".section_projects",
        start: "top+=100 center"
    }
});
var projectsSplit = new SplitText(".projects_heading-wrapper > h2", {
    type: "lines"
});
projectsLoad.from(projectsSplit.lines, {
    duration: 1,
    opacity: 0,
    y: 150,
    scale: 0.8,
    ease: "power3.out",
    stagger: 0.125
});
projectsLoad.from(".projects_content > .projects_item > .projects_card", {
    duration: 1.5,
    opacity: 0,
    y: 100,
    ease: "power3.out",
    stagger: 0.125
}, ">-0.5");
projectsLoad.from(".projects_component > a", {
    y: 100,
    opacity: 0,
    ease: "power3.out"
}, "<0.25");
projectsLoad.from("#projects-highlight", {
    color: "EB5B30",
    duration: 0
}, "<").to("#projects-highlight", {
    scale: 1.1,
    duration: 0.3,
    ease: "power2.in"
}, "<").to("#projects-highlight", {
    scale: 1,
    duration: 0.2,
    ease: "power2.out"
}, "<0.4");
projectsLoad.from("#projects-line > svg > path", {
    drawSVG: 0,
    duration: 0.6,
    ease: "power3.out"
}, "<");
//solutions/services section animation
var servicesLoad = gsap.timeline({
    scrollTrigger: {
        trigger: ".section_services",
        start: "top+=100 center"
    }
});
servicesLoad.from(".services_heading-wrapper > h2", {
    y: 200,
    scale: 0.8,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});
servicesLoad.from(".services_service-list > .services_service-item", {
    y: 100,
    opacity: 0,
    duration: .5,
    stagger: 0.25,
    ease: "power.4out"
}, "<0.5");
//CTA FORM ANIMATION
var ctaFormTrigger = gsap.timeline({
    scrollTrigger: {
        trigger: ".cta_form",
        start: "top+=100 center"
    }
});
//CTA FORM ELEMENTS POP IN
ctaFormTrigger.to("#cta-star-1", {
    duration: 0.4,
    scale: 1.6,
    ease: "power3.inOut",
    repeat: 1,
    yoyo: true
}, 0);
ctaFormTrigger.to("#cta-star-2", {
    duration: 0.3,
    scale: 1.4,
    ease: "power3.inOut",
    repeat: 1,
    yoyo: true
}, 0.25);
ctaFormTrigger.from(".cta_lottie", {
    duration: 0.75,
    scale: 0.8,
    y: 200,
    ease: "power3.out"
}, "<");
ctaFormTrigger.from(".cta_burst-lines > svg > path", {
    drawSVG: 0,
    opacity: 0,
    scale: 0.9,
    duration: .25,
    ease: "power2.in"
}, "<.25");
ctaFormTrigger.from("#cta-form-orange", {
    color: "#0f2756",
    duration: .125,
    ease: "power3.out"
}, "<.5");
ctaFormTrigger.to("#cta-form-orange", {
    scale: 1.1,
    repeat: 1,
    yoyo: true,
    ease: "power2.inOut",
    duration: 0.3
}, "<");
ctaFormTrigger.from(".cta_scribble > svg > path", {
    drawSVG: 0,
    duration: 0.75,
    ease: "power4.in"
}, "<0.125");
//process section animation
var processLoad = gsap.timeline({
    scrollTrigger: {
        trigger: ".process_component",
        scrub: true,
        start: "top bottom",
        end: "bottom bottom",
        markers: false
    }
});
//testimonials section animation
var testimonialsLoad = gsap.timeline({
    scrollTrigger: {
        trigger: ".section_testimonials",
        start: "top+=100 center"
    }
});
var testimonialSplit = new SplitText("#testimonial-heading", {
    type: "lines"
});
testimonialsLoad.from(".testimonials_star-wrapper > div", {
    opacity: 0,
    y: 75,
    duration: 0.75,
    ease: "power3.out"
}).from(testimonialSplit.lines, {
    opacity: 0,
    y: 100,
    duration: 1,
    scale: 0.8,
    stagger: 0.125,
    ease: "power4.out"
}, "<0.25");
//About Section Animation
var aboutLoad = gsap.timeline({
    scrollTrigger: {
        trigger: ".section_home-about",
        start: "top center"
    }
});
var aboutSplit = new SplitText(".home-about_content-left > h2", {
    type: "lines"
});
//text
aboutLoad.from(aboutSplit.lines, {
    y: 100,
    scale: 0.8,
    opacity: 0,
    stagger: 0.125,
    ease: "power3.out"
}, 0);
aboutLoad.from(".home-about_content-left > p, .home-about_content-left > a", {
    duration: 1,
    ease: "power3.out",
    opacity: 0,
    stagger: 0.125
}, "<0.5");
//images
aboutLoad.from(".home-about_background-shape", {
    scale: 0
}, -0.25);
aboutLoad.from(".home-about_card-wrapper.is-first", {
    x: 2500,
    rotation: 100,
    duration: 1.25,
    ease: "power4.out"
}, "<0.5");
aboutLoad.from(".home-about_card-wrapper.is-second", {
    x: 2500,
    rotation: 60,
    duration: 1.25,
    ease: "power4.out"
}, 0.25);
aboutLoad.from(".home-about_card-wrapper.is-third", {
    x: 2000,
    rotation: 130,
    duration: 1.5,
    ease: "power4.out"
}, 0.125);
aboutLoad.from(".home-about_lottie", {
    scale: 0,
    duration: 1,
    ease: "back.out(1.7)"
}, ">0.125").from(".home-about_lottie-2", {
    scale: 0,
    duration: 1,
    ease: "back.out(1.7)"
}, "<0.25");
//quote CTA animation
var ctaLoad = gsap.timeline({
    scrollTrigger: {
        trigger: ".section_quote-cta",
        start: "top+=100 center"
    }
});
//main elements
ctaLoad.from(".quote-cta_component", {
    scale: 0.7,
    y: 400,
    duration: 1.75,
    ease: "power4.out"
}).fromTo(".quote-cta_heading-wrapper", {
    opacity: 0,
    scale: 0,
    y: 300
}, {
    opacity: 1,
    scale: 1,
    y: 100,
    duration: 1,
    ease: "power4.out"
}, "<0.5");
ctaLoad.to(".quote-cta_heading > .text-color-alternate", {
    scale: 1.1,
    repeat: 1,
    yoyo: true,
    ease: "power2.inOut",
    duration: 0.3
}, 1);
ctaLoad.from(".quote-cta_heading > .text-color-alternate", {
    color: "#fff9f3",
    duration: .125,
    ease: "power3.out"
}, "<.125");
ctaLoad.from("#ctaScribble", {
    drawSVG: 0,
    duration: 1,
    ease: "power4.in"
}, "<");
//content
ctaLoad.fromTo(".quote-cta_heading-wrapper", {
    y: 100
}, {
    y: 0,
    duration: 1,
    ease: "power2.out"
}, "<.25");
ctaLoad.from(".quote-cta_subheading", {
    y: 150,
    duration: 0.875,
    ease: "power2.out",
    opacity: 0
}, "<0.5");
ctaLoad.from("#ctaButton", {
    y: 200,
    duration: 0.875,
    ease: "power2.out",
    opacity: 0
}, "<0.125");
//blog section
var blogLoad = gsap.timeline({
    scrollTrigger: {
        trigger: ".section_related-blog",
        start: "top+=100 center"
    }
});
blogLoad.from(".related-blog_heading-wrapper > div", {
    y: 100,
    scale: 0.8,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
}).from(".related-blog_list > .related-blog_item", {
    y: 180,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
    stagger: 0.125
}, "<0.5");
//footer animation
var footerLoad = gsap.timeline({
    scrollTrigger: {
        trigger: ".footer_component",
        start: "top+=100 center"
    }
});
var footerSplit = new SplitText(".footer_top-wrapper > h2", {
    type: "lines"
});
footerLoad.from(footerSplit.lines, {
    scale: 0.8,
    opacity: 0,
    y: 100,
    stagger: 0.125,
    ease: "power3.out",
    duration: 1
}, 0);
footerLoad.from(".footer_top-wrapper > p", {
    scale: 0.8,
    opacity: 0,
    y: 100,
    ease: "power3.out",
    duration: 1
}, "<0.25");
footerLoad.from(".footer_form_component", {
    scale: 0.8,
    opacity: 0,
    y: 100,
    ease: "power3.out",
    duration: 1
}, "<0.125");
footerLoad.from(".footer_links-wrapper > a", {
    opacity: 0,
    stagger: 0.125,
    ease: "power4.out",
    duration: 0.25
}, "<0.5");
footerLoad.from(".footer_contact-wrapper > .footer_contact-item", {
    y: 50,
    opacity: 0,
    stagger: 0.125,
    ease: "power4.out",
    duration: 1
}, "<0.5");
let mm = gsap.matchMedia();
// desktop
mm.add("(min-width: 991px)", ()=>{
    processLoad.fromTo("#process-heading", {
        lineHeight: "2"
    }, {
        lineHeight: "0.79"
    }, 0);
    processLoad.to("#process-heading", {
        y: -700,
        opacity: 0,
        ease: "power3.out"
    }, .5);
    processLoad.fromTo("#process-heading", {
        lineHeight: "0.79"
    }, {
        lineHeight: "1.5"
    }, "<");
    processLoad.to(".process_critter", {
        width: "100dvw",
        height: "50dvw",
        ease: "power4.out"
    }, ">-0.5");
    gsap.set(".process_card-wrapper > .card", {
        xPercent: -50,
        yPercent: -50,
        transformOrigin: "50%, 50%"
    });
    processLoad.to(".process_card-wrapper > .card", {
        stagger: 0.1,
        ease: "none",
        motionPath: {
            path: "#process-path",
            align: "#process-path",
            autoRotate: 180
        }
    }, ">");
    var ctaFormLoad = gsap.timeline({
        scrollTrigger: {
            trigger: ".cta_form-block",
            scrub: true,
            start: "top bottom",
            end: "bottom bottom",
            markers: false
        }
    });
    ctaFormLoad.from(".cta_graphic", {
        scale: 0.5,
        ease: "power3.out"
    }, 0);
    ctaFormLoad.from(".cta_form", {
        gap: 300,
        ease: "power3.out"
    }, 0.25);
    ctaFormLoad.to(".cta_form", {
        gap: 80,
        ease: "power3.out"
    }, ">");
    ctaFormLoad.to(".cta_form", {
        y: -300,
        ease: "power3.out"
    }, "<");
    ctaFormLoad.from("#cta-form-bottom", {
        opacity: "0",
        y: 700,
        ease: "power4.out"
    }, "<-0.125");
    ctaFormLoad.to(".cta_graphic", {
        y: -600,
        opacity: "0",
        ease: "power4.out"
    }, "<");
});
//mobile
mm.add("(max-width: 991px)", ()=>{
    processLoad.to("#process-heading", {
        y: -300,
        opacity: 0,
        ease: "power3.out"
    }, 1.15);
    processLoad.to(".process_critter", {
        y: -200,
        opacity: 0,
        ease: "power3.out"
    }, 1.2);
    processLoad.to(".process_card-container", {
        x: "-300rem",
        ease: "none",
        duration: 2
    }, ">-0.3");
});

},{}]},["fXRFu"], null, "parcelRequire94c2")

//# sourceMappingURL=home.c5ca3b32.js.map
