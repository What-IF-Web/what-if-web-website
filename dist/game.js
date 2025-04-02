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
})({"fFtu9":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "f1da0e86905f6534";
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

},{}],"5JiMD":[function(require,module,exports,__globalThis) {
// game.js (Modified)
console.log("game.js loaded");
function startGame() {
    console.log("start game started");
    // --- Game Constants ---
    // (Keep these as they are)
    const PADDLE_SPEED = 400;
    const BALL_START_SPEED = 300;
    // ... (other constants) ...
    const POWERUP_SPEED = 100;
    // --- Game Dimensions (MATCH YOUR MODAL/CANVAS SIZE) ---
    // !! IMPORTANT: Adjust these to the pixel dimensions you want the game canvas to have inside the modal !!
    const GAME_WIDTH = 800;
    const GAME_HEIGHT = 600;
    // Check if Kaboom is already initialized on this canvas to prevent errors on rapid open/close
    const canvas = document.getElementById("game-canvas");
    if (!canvas || canvas.dataset.kaboomInitialized === "true") {
        if (canvas) console.log("Kaboom already initialized on this canvas.");
        // Optionally refocus if re-opening without full re-init
        // if (canvas) canvas.focus();
        return; // Exit if no canvas or already initialized
    }
    if (window.kaboomInstance) // A simple way to try and reset if needed - might not be perfect
    // Ideally, Kaboom would offer a destroy() method.
    // For now, we rely on the MutationObserver setting the flag below.
    console.log("Attempting to reuse Kaboom context (may have issues).");
    // Initialize Kaboom on the specific canvas
    const k = kaboom({
        // global: true, // Keep global for simplicity unless you need fine-grained control/cleanup
        width: GAME_WIDTH,
        height: GAME_HEIGHT,
        canvas: canvas,
        background: [
            0,
            0,
            0
        ],
        debug: false
    });
    // Mark the canvas as having Kaboom initialized
    canvas.dataset.kaboomInitialized = "true";
    window.kaboomInstance = k; // Store instance globally if needed (e.g., for manual stop attempts)
    // --- Asset Loading (Placeholders) ---
    // (Keep these as they are or add your actual assets)
    // k.loadSprite(...)
    // k.loadSound(...)
    // --- Game Scene ---
    k.scene("game", ({ level, score, lives })=>{
        // --- Setup Layers ---
        k.layers([
            'bg',
            'obj',
            'ui'
        ], 'obj');
        // --- UI Elements ---
        // Use k.width() and k.height() which now refer to GAME_WIDTH/GAME_HEIGHT
        const scoreLabel = k.add([
            k.text(`Score: ${score}`),
            k.pos(10, 10),
            k.layer('ui'),
            {
                value: score
            },
            k.scale(2)
        ]);
        const levelLabel = k.add([
            k.text(`Level: ${level}`),
            k.pos(k.width() * 0.5, 10),
            k.origin('center'),
            k.layer('ui'),
            {
                value: level
            },
            k.scale(2)
        ]);
        const livesLabel = k.add([
            k.text(`Lives: ${lives}`),
            k.pos(k.width() - 10, 10),
            k.origin('topright'),
            k.layer('ui'),
            {
                value: lives
            },
            k.scale(2)
        ]);
        // --- Add Paddle ---
        const paddle = k.add([
            k.rect(PADDLE_WIDTH, PADDLE_HEIGHT),
            k.pos(k.width() / 2, k.height() - 40),
            k.origin('center'),
            k.area(),
            k.color(255, 255, 255),
            "paddle"
        ]);
        // --- Paddle Movement ---
        k.onKeyDown('left', ()=>{
            paddle.move(-PADDLE_SPEED, 0);
            if (paddle.pos.x < PADDLE_WIDTH / 2) paddle.pos.x = PADDLE_WIDTH / 2;
        });
        k.onKeyDown('right', ()=>{
            paddle.move(PADDLE_SPEED, 0);
            if (paddle.pos.x > k.width() - PADDLE_WIDTH / 2) paddle.pos.x = k.width() - PADDLE_WIDTH / 2;
        });
        // --- Function to Create a Ball ---
        function spawnBall(startPos) {
            const currentBallSpeed = BALL_START_SPEED + (level - 1) * 25;
            const ball = k.add([
                k.pos(startPos),
                k.circle(BALL_RADIUS),
                k.color(255, 255, 0),
                k.area({
                    width: BALL_RADIUS * 2,
                    height: BALL_RADIUS * 2
                }),
                k.origin('center'),
                {
                    dir: k.vec2(Math.random() < 0.5 ? 1 : -1, -1).normalize(),
                    speed: currentBallSpeed
                },
                "ball"
            ]);
            ball.onUpdate(()=>{
                ball.move(ball.dir.scale(ball.speed));
                // Bounce off left/right walls
                if (ball.pos.x < BALL_RADIUS || ball.pos.x > k.width() - BALL_RADIUS) ball.dir.x = -ball.dir.x;
                // Bounce off top wall
                if (ball.pos.y < BALL_RADIUS) ball.dir.y = -ball.dir.y;
                // Ball fell off bottom
                if (ball.pos.y > k.height()) {
                    k.destroy(ball);
                    // k.play("loseLife", { volume: 0.5 });
                    if (k.get("ball").length === 0) {
                        livesLabel.value--;
                        livesLabel.text = `Lives: ${livesLabel.value}`;
                        if (livesLabel.value <= 0) // Stop music maybe? music?.stop();
                        k.go("gameOver", {
                            score: scoreLabel.value
                        });
                        else {
                            paddle.pos = k.vec2(k.width() / 2, k.height() - 40);
                            spawnBall(paddle.pos.sub(0, PADDLE_HEIGHT / 2 + BALL_RADIUS + 5));
                        }
                    }
                }
            });
        }
        // Spawn initial ball
        spawnBall(paddle.pos.sub(0, PADDLE_HEIGHT / 2 + BALL_RADIUS + 5));
        // --- Brick Building ---
        const brickLayout = [
            "33333333",
            "22222222",
            "11111111"
        ]; // Example
        const totalBrickWidth = brickLayout[0].length * (BRICK_WIDTH + BRICK_PADDING) - BRICK_PADDING;
        const startX = (k.width() - totalBrickWidth) / 2;
        const startY = 60;
        let brickCount = 0;
        const levelConf = {
            width: BRICK_WIDTH + BRICK_PADDING,
            height: BRICK_HEIGHT + BRICK_PADDING,
            pos: k.vec2(startX, startY),
            "1": ()=>[
                    k.rect(BRICK_WIDTH, BRICK_HEIGHT),
                    k.color(0, 255, 0),
                    k.area(),
                    k.origin('topleft'),
                    {
                        strength: 1
                    },
                    "brick",
                    "brick-1"
                ],
            "2": ()=>[
                    k.rect(BRICK_WIDTH, BRICK_HEIGHT),
                    k.color(255, 165, 0),
                    k.area(),
                    k.origin('topleft'),
                    {
                        strength: 2
                    },
                    "brick",
                    "brick-2"
                ],
            "3": ()=>[
                    k.rect(BRICK_WIDTH, BRICK_HEIGHT),
                    k.color(255, 0, 0),
                    k.area(),
                    k.origin('topleft'),
                    {
                        strength: 3
                    },
                    "brick",
                    "brick-3"
                ]
        };
        k.addLevel(brickLayout, levelConf);
        brickCount = k.get("brick").length;
        // --- Collision Logic ---
        k.onCollide("ball", "paddle", (ball, paddle)=>{
            ball.dir.y = -Math.abs(ball.dir.y);
            let hitPos = (ball.pos.x - paddle.pos.x) / (PADDLE_WIDTH / 2);
            ball.dir.x = k.clamp(hitPos * 1.5, -1.5, 1.5); // Clamp extreme angles
            ball.dir = ball.dir.normalize();
        // k.play("bounce", { volume: 0.3 });
        });
        k.onCollide("ball", "brick", (ball, brick)=>{
            ball.dir.y = -ball.dir.y;
            brick.strength--;
            // k.play("bounce", { volume: 0.2 });
            // Update color visual feedback (example)
            if (brick.is("brick-3")) brick.color = brick.strength === 2 ? k.rgb(255, 165, 0) : k.rgb(0, 255, 0);
            else if (brick.is("brick-2")) brick.color = k.rgb(0, 255, 0);
            if (brick.strength <= 0) {
                k.destroy(brick);
                k.shake(3);
                // k.play("break", { volume: 0.5 });
                scoreLabel.value += 10 * level;
                scoreLabel.text = `Score: ${scoreLabel.value}`;
                brickCount--;
                if (k.rand() < 0.2) spawnPowerUp(brick.pos.add(BRICK_WIDTH / 2, BRICK_HEIGHT / 2)); // Pass center pos
                if (brickCount <= 0) // music?.stop();
                k.go("game", {
                    level: level + 1,
                    score: scoreLabel.value,
                    lives: livesLabel.value
                });
            }
        });
        // --- Power-up Logic ---
        function spawnPowerUp(spawnPos) {
            const powerUpType = k.choose([
                "extraLife",
                "extraBall"
            ]);
            let puColor = k.rgb(0, 150, 255);
            let puTag = "powerup";
            if (powerUpType === "extraLife") {
                puColor = k.rgb(0, 255, 150);
                puTag = "powerup-life";
            } else if (powerUpType === "extraBall") {
                puColor = k.rgb(255, 255, 100);
                puTag = "powerup-ball";
            }
            const powerup = k.add([
                k.rect(15, 15),
                k.pos(spawnPos),
                k.origin('center'),
                k.color(puColor),
                k.area(),
                k.move(k.DOWN, POWERUP_SPEED),
                k.cleanup(),
                puTag,
                powerUpType
            ]);
        }
        k.onCollide("paddle", "powerup-life", (paddle, powerup)=>{
            k.destroy(powerup);
            livesLabel.value++;
            livesLabel.text = `Lives: ${livesLabel.value}`;
        // k.play("powerup", { volume: 0.6 });
        });
        k.onCollide("paddle", "powerup-ball", (paddle, powerup)=>{
            k.destroy(powerup);
            spawnBall(paddle.pos.sub(0, PADDLE_HEIGHT / 2 + BALL_RADIUS + 5));
        // k.play("powerup", { volume: 0.6 });
        });
        // --- Start Music (if loaded) ---
        // const music = k.play("music", { loop: true, volume: 0.4 });
        // Focus the canvas when the game scene starts to capture keys
        canvas.focus();
    }); // End of "game" scene definition
    // --- Game Over Scene ---
    k.scene("gameOver", ({ score })=>{
        k.add([
            k.text(`Game Over!\nScore: ${score}\n\nPress SPACE to Restart`, {
                size: Math.min(30, k.width() / 15)
            }),
            k.pos(k.width() / 2, k.height() / 2),
            k.origin('center'),
            k.color(255, 255, 255)
        ]);
        k.onKeyPress("space", ()=>{
            // NOTE: This restarts the game scene but doesn't fully re-run startGame() unless the modal was closed/opened.
            k.go("game", {
                level: 1,
                score: 0,
                lives: 3
            });
        });
    // Optional: Attempt to unfocus canvas on game over
    // canvas.blur();
    });
    // --- Start the Game ---
    k.go("game", {
        level: 1,
        score: 0,
        lives: 3
    });
} // End of startGame() function

},{}]},["fFtu9","5JiMD"], "5JiMD", "parcelRequire94c2")

//# sourceMappingURL=game.js.map
