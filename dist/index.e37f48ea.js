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
        this
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
})({"iAkoQ":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
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
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
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
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
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
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
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
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
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
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
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
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
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
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
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
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"aenu9":[function(require,module,exports) {
// import icons from '../img/icons.svg';
// console.log(icons);
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _modelJs = require("../model.js");
var _resultViewJs = require("../views/resultView.js");
var _resultViewJsDefault = parcelHelpers.interopDefault(_resultViewJs);
var _recipeViewJs = require("../views/recipeView.js");
var _recipeViewJsDefault = parcelHelpers.interopDefault(_recipeViewJs);
var _searchViewJs = require("../views/searchView.js");
var _searchViewJsDefault = parcelHelpers.interopDefault(_searchViewJs);
var _bookMarkViewJs = require("../views/bookMarkView.js");
var _bookMarkViewJsDefault = parcelHelpers.interopDefault(_bookMarkViewJs);
var _paginationViewJs = require("../views/paginationView.js");
var _paginationViewJsDefault = parcelHelpers.interopDefault(_paginationViewJs);
//const recipeContainer = document.querySelector('.recipe');
// https://forkify-api.herokuapp.com/v2
///////////////////////////////////////
if (module.hot) module.hot.accept();
const controllerRecipe = async function() {
    try {
        const id = window.location.hash.slice(1);
        if (!id) return;
        (0, _recipeViewJsDefault.default).renderSpinner();
        (0, _resultViewJsDefault.default).update(_modelJs.getSearResult());
        await _modelJs.loadRecipe(id);
        (0, _recipeViewJsDefault.default).render(_modelJs.state.recipe);
    } catch (err) {
        (0, _recipeViewJsDefault.default).renderError();
    }
};
const constrolSearchResult = async function() {
    try {
        (0, _resultViewJsDefault.default).renderSpinner();
        const query = (0, _searchViewJsDefault.default).getQuery();
        if (!query) return;
        //2) loadSearche result
        await _modelJs.loadSearchResults(query);
        //3)
        (0, _resultViewJsDefault.default).render(_modelJs.getSearResult());
        (0, _paginationViewJsDefault.default).render(_modelJs.state.search);
    } catch (err) {
        throw err;
    }
};
const controlPageination = function(goToPage) {
    (0, _resultViewJsDefault.default).render(_modelJs.getSearResult(goToPage));
    (0, _paginationViewJsDefault.default).render(_modelJs.state.search);
};
//
///
const controllerServing = function(newServings) {
    //update the recipe serving (in state)
    _modelJs.updateServing(newServings);
    // update the reicpe  view
    // recipeView.render(model.state.recipe);
    (0, _recipeViewJsDefault.default).update(_modelJs.state.recipe);
};
//Add bookmark
const controlAddBookmark = function() {
    if (!_modelJs.state.recipe.bookmarked) _modelJs.addBookmark(_modelJs.state.recipe);
    else _modelJs.deleteBookmark(_modelJs.state.recipe);
    console.log(_modelJs.state.recipe);
    (0, _recipeViewJsDefault.default).update(_modelJs.state.recipe);
    // 3) rendering bookmakr
    (0, _bookMarkViewJsDefault.default).render(_modelJs.state.bookmarks);
};
////
const controlBookMark = function() {
    (0, _bookMarkViewJsDefault.default).render(_modelJs.state.bookmarks);
};
///
const init = function() {
    (0, _bookMarkViewJsDefault.default).addHandlerRender(controlBookMark);
    (0, _recipeViewJsDefault.default).addHandlerRender(controllerRecipe);
    (0, _recipeViewJsDefault.default).addHandlerUpdateServing(controllerServing);
    (0, _recipeViewJsDefault.default).addHanlerBookmak(controlAddBookmark);
    (0, _searchViewJsDefault.default).addHandlerSearch(constrolSearchResult);
    (0, _paginationViewJsDefault.default).addHandlerClick(controlPageination);
};
init(); // controllerRecipe();
 // ['hashchange', 'load'].forEach(ev =>
 //   window.addEventListener(ev, controllerRecipe)
 // );

},{"../model.js":"dEDha","../views/resultView.js":"9fChc","../views/recipeView.js":"h7mTR","../views/searchView.js":"kBGZg","../views/bookMarkView.js":"iy5KM","../views/paginationView.js":"l7gTM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dEDha":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "loadRecipe", ()=>loadRecipe);
parcelHelpers.export(exports, "loadSearchResults", ()=>loadSearchResults);
parcelHelpers.export(exports, "getSearResult", ()=>getSearResult);
parcelHelpers.export(exports, "updateServing", ()=>updateServing);
parcelHelpers.export(exports, "addBookmark", ()=>addBookmark);
parcelHelpers.export(exports, "deleteBookmark", ()=>deleteBookmark);
var _config = require("./js/config");
var _helper = require("./js/helper");
const state = {
    recipe: {},
    search: {
        query: "",
        result: [],
        resultPerpage: (0, _config.RESULT_PER_PAGE),
        page: 1
    },
    bookmarks: []
};
const loadRecipe = async function(id) {
    try {
        const data = await (0, _helper.getJSon)(`${(0, _config.API_URL)}${id}`);
        // console.log(data);
        // const response = await fetch(`${API_URL}/${id}`);
        // if (!response.ok) throw new Error(`${data.message} ${response.status}`);
        // const data = await response.json();
        const { recipe  } = data.data;
        //
        state.recipe = {
            id: recipe.id,
            title: recipe.title,
            image: recipe.image_url,
            publisher: recipe.publisher,
            surecUrl: recipe.source_url,
            cookingTime: recipe.cooking_time,
            serving: recipe.servings,
            ingredients: recipe.ingredients,
            description: recipe.description
        };
        if (state.bookmarks.some((boobmark)=>boobmark.id === id)) state.recipe.bookmarked = true;
        console.log(state.recipe);
    } catch (err) {
        console.error(`${err}🌋🌋`);
        throw err;
    }
};
const loadSearchResults = async function(query) {
    try {
        state.query = query;
        const data = await (0, _helper.getJSon)(`${(0, _config.API_URL)}?search=${query}`);
        state.search.result = data.data.recipes.map((rec)=>{
            return {
                id: rec.id,
                title: rec.title,
                image: rec.image_url,
                publisher: rec.publisher
            };
        });
        state.search.page = 1;
    //console.log(state.search.result);
    } catch (err) {
        throw err;
    }
};
// storing bookmarks into local storage
const presistBookmakrs = function() {
    localStorage.setItem("bookmarks", JSON.stringify(state.bookmarks));
};
const getSearResult = function(page = state.search.page) {
    state.search.page = page;
    const start = (page - 1) * state.search.resultPerpage;
    const end = page * state.search.resultPerpage;
    return state.search.result.slice(start, end);
};
const updateServing = function(newServings) {
    state.recipe.ingredients.forEach((ing)=>{
        ing.quantity = ing.quantity * newServings / state.recipe.serving;
    });
    state.recipe.serving = newServings;
};
const addBookmark = function(recipe) {
    state.bookmarks.push(recipe);
    ///
    //mark current recipe as bookmark
    if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;
    presistBookmakrs();
};
const deleteBookmark = function(id) {
    const index = state.bookmarks.findIndex((el)=>el.id === id);
    state.bookmarks.splice(index, 1);
    ///
    if (id === state.recipe.id) state.recipe.bookmarked = false;
    presistBookmakrs();
};
const init = function() {
    const storage = localStorage.getItem("bookmarks");
    if (storage) state.bookmarks = JSON.parse(storage);
};
init();
console.log(state.bookmarks);

},{"./js/config":"k5Hzs","./js/helper":"lVRAz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k5Hzs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_URL", ()=>API_URL);
parcelHelpers.export(exports, "TIME_OUT_SECOND", ()=>TIME_OUT_SECOND);
parcelHelpers.export(exports, "RESULT_PER_PAGE", ()=>RESULT_PER_PAGE);
const API_URL = "https://forkify-api.herokuapp.com/api/v2/recipes/";
const TIME_OUT_SECOND = 10;
const RESULT_PER_PAGE = 10;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"lVRAz":[function(require,module,exports) {
//
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getJSon", ()=>getJSon);
var _config = require("./config");
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
const getJSon = async function(url) {
    try {
        const fetchPromise = fetch(url);
        const res = await Promise.race([
            fetchPromise,
            timeout((0, _config.TIME_OUT_SECOND))
        ]);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} ${res.status}`);
        return data;
    } catch (err) {
        throw err;
    }
};

},{"./config":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9fChc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _iconsSvg = require("../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class ResultView extends (0, _viewDefault.default) {
    _errorMessage = "No recipes found for your entry! Please try again with a different entry";
    _message = "";
    _parentElement = document.querySelector(".results");
    _generateMarkup() {
        return this._data.map(this._generateMarkupPreview).join("");
    }
    _generateMarkupPreview(result) {
        const id = window.location.hash.slice(1);
        //
        return ` 
    <li class="preview">
    <a class="preview__link ${result.id === id ? "preview__link--active" : ""} " href="#${result.id}">
      <figure class="preview__fig">
        <img src="${result.image}" alt="${result.title}" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${result.title}</h4>
        <p class="preview__publisher">${result.publisher}</p>
       
      </div>
    </a>
  </li>`;
    }
}
exports.default = new ResultView(); // <div class="preview__user-generated">
 //   <svg>
 //     <use href="${icons}#icon-user"></use>
 //   </svg>
 // </div>

},{"./view":"ibqJr","../img/icons.svg":"cMpiy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ibqJr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class View {
    _parentElement = document.querySelector(".recipe");
    _data;
    _errorMessage = "we could not find that recipe. Please try another one!";
    message = "";
    // update UI
    update(data) {
        // if (!data || (Array.isArray(data) && data.length === 0))
        //   return this.renderError();
        this._data = data;
        const newMarkup = this._generateMarkup();
        //coping the entire DOM
        const newDOM = document.createRange().createContextualFragment(newMarkup);
        const newElement = Array.from(newDOM.querySelectorAll("*"));
        //console.log(newElement);
        const cureElements = Array.from(this._parentElement.querySelectorAll("*"));
        //console.log(cureElements);
        newElement.forEach((newEl, i)=>{
            const curEl = cureElements[i];
            //console.log(curEl, newEl.isEqualNode(curEl));
            if (!newEl.isEqualNode(curEl) && newEl.firstChild.nodeValue.trim() !== "") //console.log(`🏍🏍`, newEl.firstChild?.nodeValue.trim());
            curEl.textContent = newEl.textContent;
            if (!newEl.isEqualNode(curEl)) //console.log(Array.from(newEl.attributes));
            Array.from(newEl.attributes).forEach((attr)=>{
                curEl.setAttribute(attr.name, attr.value);
            });
        });
    }
    //renderMarkup
    render(data) {
        if (!data || Array.isArray(data) && data.length === 0) return this.renderError();
        this._data = data;
        const markup = this._generateMarkup();
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    renderError(message = this._errorMessage) {
        const markup = `
  <div class="error">
  <div>
    <svg>
      <use href="${(0, _iconsSvgDefault.default)}#icon-alert-triangle"></use>
    </svg>
  </div>
  <p>${message}</p>
</div>`;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    renderMessage(message = this.message) {
        const markup = `
  <div class="message">
  <div>
    <svg>
      <use href="${(0, _iconsSvgDefault.default)}#icon-smile"></use>
    </svg>
  </div>
  <p>${message}</p>
</div>`;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    ////
    ///
    _clear() {
        this._parentElement.innerHTML = "";
    }
    renderSpinner() {
        const markup = `
    <div class="spinner">
  <svg>
    <use href="${(0, _iconsSvgDefault.default)}#icon-loader"></use>
  </svg>
</div> 
  `;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
}
exports.default = View;

},{"../img/icons.svg":"cMpiy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cMpiy":[function(require,module,exports) {
module.exports = require("743ab9c502674589").getBundleURL("hWUTQ") + "icons.21bad73c.svg" + "?" + Date.now();

},{"743ab9c502674589":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"h7mTR":[function(require,module,exports) {
///
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _iconsSvg = require("../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
//import { Fraction } from 'fractional';
var _fracty = require("fracty");
var _fractyDefault = parcelHelpers.interopDefault(_fracty);
//console.log(Fraction);
class RecipeView extends (0, _viewDefault.default) {
    _parentElement = document.querySelector(".recipe");
    _data;
    _errorMessage = "we could not find that recipe. Please try another one!";
    _message = "";
    addHandlerRender(handler) {
        [
            "hashchange",
            "load"
        ].forEach((ev)=>window.addEventListener(ev, handler));
    }
    addHandlerUpdateServing(handler) {
        this._parentElement.addEventListener("click", function(e) {
            const btn = e.target.closest(".btn--update-servings");
            if (!btn) return;
            console.log(+btn.dataset.updateTo);
            const updateTo = +btn.dataset.updateTo;
            console.log(updateTo);
            if (updateTo > 0) {
                handler(updateTo);
                console.log(btn);
            }
        });
    }
    addHanlerBookmak(handler) {
        this._parentElement.addEventListener("click", function(e) {
            const btn = e.target.closest(".btn--bookmark");
            if (!btn) return;
            handler();
        });
    }
    _generateMarkup() {
        return `  
  <figure class="recipe__fig">
  <img src="${this._data.image}" alt="Tomato" class="recipe__img" />
  <h1 class="recipe__title">
    <span>${this._data.title}</span>
  </h1>
</figure>

<div class="recipe__details">
  <div class="recipe__info">
    <svg class="recipe__info-icon">
      <use href="${0, _iconsSvgDefault.default}#icon-clock"></use>
    </svg>
    <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
    <span class="recipe__info-text">minutes</span>
  </div>
  <div class="recipe__info">
    <svg class="recipe__info-icon">
      <use href="${0, _iconsSvgDefault.default}#icon-users"></use>
    </svg>
    <span class="recipe__info-data recipe__info-data--people">${this._data.serving}</span>
    <span class="recipe__info-text">servings</span>

    <div class="recipe__info-buttons">
      <button class="btn--tiny btn--update-servings" data-update-to="${this._data.serving - 1}">
        <svg>
          <use href="${0, _iconsSvgDefault.default}#icon-minus-circle"></use>
        </svg>
      </button>
      <button class="btn--tiny btn--update-servings"data-update-to="${this._data.serving + 1}">
        <svg>
          <use href="${0, _iconsSvgDefault.default}#icon-plus-circle"></use>
        </svg>
      </button>
    </div>
  </div>

  <div class="recipe__user-generated">
    <svg>
      <use href="${0, _iconsSvgDefault.default}#icon-user"></use>
    </svg>
  </div>
  <button class="btn--round btn--bookmark">
    <svg class="">
      <use href="${0, _iconsSvgDefault.default}#icon-bookmark-fill"></use>
    </svg>
  </button>
</div>

<div class="recipe__ingredients">
  <h2 class="heading--2">Recipe ingredients</h2>
  <ul class="recipe__ingredient-list">
  ${this._data.ingredients.map((ing)=>this._generateIngredientMarkup(ing)).join("")}
  
   </div>

<div class="recipe__directions">
  <h2 class="heading--2">How to cook it</h2>
  <p class="recipe__directions-text">
    This recipe was carefully designed and tested by
    <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
    directions at their website.
  </p>
  <a
    class="btn--small recipe__btn"
    href="http://thepioneerwoman.com/cooking/pasta-with-tomato-cream-sauce/"
    target="_blank"
  >
    <span>Directions</span>
    <svg class="search__icon">
      <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
    </svg>
  </a>
</div>
`;
    }
    _generateIngredientMarkup(ing) {
        return `  <li class="recipe__ingredient">
    <svg class="recipe__icon">
      <use href="${0, _iconsSvgDefault.default}#icon-check"></use>
    </svg>
    <div class="recipe__quantity">${ing.quantity ? (0, _fractyDefault.default)(ing.quantity).toString() : ""}</div>
    <div class="recipe__description">
      <span class="recipe__unit">${ing.unit}</span>
      ${ing.description}
    </div>
  </li>`;
    }
}
exports.default = new RecipeView();
class BB {
}

},{"./view":"ibqJr","../img/icons.svg":"cMpiy","fracty":"hJO4d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hJO4d":[function(require,module,exports) {
// FRACTY CONVERTS DECIMAL NUMBERS TO FRACTIONS BY ASSUMING THAT TRAILING PATTERNS FROM 10^-2 CONTINUE TO REPEAT
// The assumption is based on the most standard numbering conventions
// e.g. 3.51 will convert to 3 51/100 while 3.511 will convert to 3 23/45
// Throw any number up to 16 digits long at fracty and let fracy do the work.
// If number is beyond 16 digits fracty will truncate at 15 digits to compensate for roundoff errors created in IEEE 754 Floating Point conversion.
module.exports = function(number) {
    let type;
    if (number < 0) {
        number = Math.abs(number);
        type = "-";
    } else type = "";
    if (number === undefined) return `Your input was undefined.`;
    if (isNaN(number)) return `"${number}" is not a number.`;
    if (number == 9999999999999999) return `${type}9999999999999999`;
    if (number > 9999999999999999) return `Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.`;
    if (Number.isInteger(number)) return `${type}${number}`;
    if (number < .000001) return "0";
    const numberString = number.toString();
    const entry = numberString.split(".");
    let integer = entry[0];
    let decimal;
    if (decimal == "0" && integer !== "0") return integer;
    else if (decimal == "0" && integer == "0") return "0";
    else if (numberString.length >= 17) decimal = entry[1].slice(0, entry[1].length - 1);
    else decimal = entry[1];
    if (decimal == "99" && integer !== "0") return `${integer} 99/100`;
    else if (decimal == "99" && integer == "0") return `99/100`;
    else if (1 - parseFloat(`.${decimal}`) < .0011) decimal = "999";
    if (decimal == undefined) return integer;
    const decimalRev = decimal.split("").reverse().join(""); //Reverse the string to look for patterns.
    const patternSearch = /^(\d+)\1{1,2}/; //This greedy regex matches the biggest pattern that starts at the beginning of the string (at the end, in the case of the reversed string). A lazy regex doesn't work because it only identifies subpatterns in cases where subpatterns exist (e.g. '88' in '388388388388'), thus pattern capture must be greedy.
    let pattern = decimalRev.match(patternSearch); //If there's a pattern, it's full sequence is in [0] of this array and the single unit is in [1] but it may still need to be reduced further.
    if (pattern && decimal.length > 2) {
        let patternSequence = pattern[0].split("").reverse().join("");
        let endPattern = pattern[1].split("").reverse().join("");
        if (endPattern.length > 1) {
            let endPatternArray = endPattern.split("");
            let testSingleUnit = 1;
            for(let i = 0; i < endPatternArray.length; i++)testSingleUnit /= endPatternArray[0] / endPatternArray[i];
            if (testSingleUnit === 1) endPattern = endPatternArray[0];
        }
        if (endPattern.length > 1 && endPattern.length % 2 === 0) endPattern = parseInt(endPattern.slice(0, endPattern.length / 2), 10) - parseInt(endPattern.slice(endPattern.length / 2, endPattern.length), 10) === 0 ? endPattern.slice(0, endPattern.length / 2) : endPattern;
        return yesRepeat(decimal, endPattern, patternSequence, integer, type); //Begin calculating the numerator and denominator for decimals that have a pattern.
    } else return noRepeat(decimal, integer, type); //Begin calculating the numerator and denominator for decimals that don't have a pattern.
};
//IF THERE'S A TRAILING PATTERN FRACTY DIVIDES THE INPUT BY ONE SUBTRACTED FROM THE NEAREST BASE 10 NUMBER WITH NUMBER OF ZEROS EQUAL TO THE LENGTH OF THE REPEATED PATTERN (I.E. A SERIES OF 9'S) MULTIPLIED BY THE BASE 10 NUMBER GREATER THAN AND CLOSEST TO THE INPUT.
function yesRepeat(decimal, endPattern, patternSequence, integer, type) {
    const rep = true; //The numerator repeats.
    const nonPatternLength = decimal.length - patternSequence.length >= 1 ? decimal.length - patternSequence.length : 1; //Does the length of the non pattern segment of the input = 0? If it does, that's incorrect since we know it must equal at least 1, otherwise it's the length of the decimal input minus the length of the full pattern.
    const decimalMultiplier2 = Math.pow(10, nonPatternLength); //Second multiplier to use.
    const float = parseFloat(`0.${decimal}`); //Convert the decimal input to a floating point number.
    const decimalMultiplier1 = Math.pow(10, endPattern.length); //Find the right multiplier to use for both numerator and denominator, which will later have 1 subtracted from it in the case of the denominator.
    const numerator = Math.round((float * decimalMultiplier1 - float) * Math.pow(10, nonPatternLength)); //Find the numerator to be used in calculating the fraction that contains a repeating trailing sequence.
    const denominator = (decimalMultiplier1 - 1) * decimalMultiplier2; //Caluculate the denominator using the equation for repeating trailing sequences.
    return reduce(numerator, denominator, integer, type, rep); //Further reduce the numerator and denominator.
}
//IF THERE'S NO TRAILING PATTERN FRACTY DIVIDES THE INPUT BY THE NEAREST BASE 10 INTEGER GREATER THAN THE NUMERATOR.
function noRepeat(decimal, integer, type) {
    const rep = false; //The numerator doesn't repeat.
    const numerator = parseInt(decimal, 10); //Numerator begins as decimal input converted into an integer.
    const denominator = Math.pow(10, decimal.length); //Denominator begins as 10 to the power of the length of the numerator.
    return reduce(numerator, denominator, integer, type, rep); //Reduce the numerator and denominator.
}
//FRACTY REDUCES THE FRACTION.
function reduce(numerator, denominator, integer, type, rep) {
    const primeNumberArray = [
        2,
        3,
        5
    ]; //If the numerator isn't from a repeating decimal case, the initialized array of prime numbers will suffice to find the common denominators.
    if (rep === true) {
        for(let i = 3; i * i <= numerator; i += 2)if (numerator % i === 0) primeNumberArray.push(i);
    }
    let j = 0; //Initialize counter over the prime number array for the while loop.
    let comDenom = 1; //Initialize the common denominator.
    let num = numerator; //Initialize the numerator.
    let den = denominator; //Initialize the denominator.
    while(j <= primeNumberArray.length)if (num % primeNumberArray[j] === 0 && den % primeNumberArray[j] === 0) {
        comDenom = comDenom * primeNumberArray[j];
        num = num / primeNumberArray[j];
        den = den / primeNumberArray[j];
    } else j++;
    return returnStrings(den, num, integer, type);
}
//FRACTY RETURNS THE REDUCED FRACTION AS A STRING.
function returnStrings(den, num, integer, type) {
    if (den === 1 && num === 1) {
        integer = `${type}${(parseInt(integer) + 1).toString()}`; //Add 1 to the integer and return a string without a fraction.
        return `${integer}`;
    } else if (num === 0) return `${type}${integer}`;
    else if (integer == "0") return `${type}${num}/${den}`;
    else return `${type}${integer} ${num}/${den}`; //If there's an integer and a fraction return both.
}

},{}],"kBGZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class SearchView {
    _parentEl = document.querySelector(".search");
    getQuery() {
        const query = this._parentEl.querySelector(".search__field").value;
        this._clearInput();
        return query;
    }
    addHandlerSearch(handler) {
        this._parentEl.addEventListener("submit", function(e) {
            e.preventDefault();
            handler();
        });
    }
    _clearInput() {
        this._parentEl.querySelector(".search__field").value = "";
    }
}
exports.default = new SearchView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iy5KM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _iconsSvg = require("../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class BookMakrView extends (0, _viewDefault.default) {
    _errorMessage = "No bookmarks ye";
    _message = "";
    _parentElement = document.querySelector(".bookmarks__list");
    _generateMarkup() {
        return this._data.map(this._generateMarkupPreview).join("");
    }
    addHandlerRender(handler) {
        window.addEventListener("load", handler);
    }
    _generateMarkupPreview(result) {
        const id = window.location.hash.slice(1);
        //
        return ` 
    <li class="preview">
    <a class="preview__link ${result.id === id ? "preview__link--active" : ""} " href="#${result.id}">
      <figure class="preview__fig">
        <img src="${result.image}" alt="${result.title}" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${result.title}</h4>
        <p class="preview__publisher">${result.publisher}</p>
       
      </div>
    </a>
  </li>`;
    }
}
exports.default = new BookMakrView();

},{"./view":"ibqJr","../img/icons.svg":"cMpiy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l7gTM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _iconsSvg = require("../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class PaginationView extends (0, _viewDefault.default) {
    _errorMessage = "No recipes found for your entry! Please try again with a different entry";
    _message = "";
    _parentElement = document.querySelector(".pagination");
    addHandlerClick(handler) {
        this._parentElement.addEventListener("click", function(e) {
            const btn = e.target.closest(".btn--inline");
            console.log(btn);
            if (!btn) return;
            const goToPage = +btn.dataset.goto;
            console.log(goToPage);
            handler(goToPage);
        });
    }
    _generateMarkup() {
        const currentPage = this._data.page;
        //page1 there are athor pages
        const numPages = Math.ceil(this._data.result.length / this._data.resultPerpage);
        console.log(numPages);
        if (currentPage === 1 && numPages > 1) return `
       <button data-goto="${currentPage + 1}" class="btn--inline pagination__btn--next">
      <span>Page ${currentPage + 1}</span>
      <svg class="search__icon">
        <use href="${0, _iconsSvgDefault.default}g#icon-arrow-right"></use>
      </svg>
    </button>
    `;
        //
        //
        //
        if (currentPage === numPages && numPages > 1) return `
      <button data-goto="${currentPage - 1}" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${0, _iconsSvgDefault.default}#icon-arrow-left"></use>
      </svg>
      <span>Page ${currentPage - 1}</span>
    </button>`;
        ///
        ///
        if (currentPage < numPages) return ` 
      <button data-goto="${currentPage - 1}" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${0, _iconsSvgDefault.default}#icon-arrow-left"></use>
      </svg>
      <span>Page ${currentPage - 1}</span>
    </button>
    <button data-goto="${currentPage + 1}"  class="btn--inline pagination__btn--next">
    <span>Page ${currentPage + 1}</span>
    <svg class="search__icon">
      <use href="${0, _iconsSvgDefault.default}g#icon-arrow-right"></use>
    </svg>
  </button>
    `;
        // Page 1 , and there are no other pages
        return "";
    }
}
exports.default = new PaginationView();

},{"./view":"ibqJr","../img/icons.svg":"cMpiy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["iAkoQ","aenu9"], "aenu9", "parcelRequire7e89")

//# sourceMappingURL=index.e37f48ea.js.map
