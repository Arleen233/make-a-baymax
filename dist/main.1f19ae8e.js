// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"main.js":[function(require,module,exports) {
var string = "/*\u9001\u4F60\u4E00\u53EA\u5927\u767D\uFF0C\u4ED6\u4F1A\u8BF4:balalala*/\n#baymax{\n    position: absolute;\n    left: 75%;\n    top: 20%;\n}\n\n#baymax .head{\n    position: relative;\n    z-index: 10;\n    transform:translateZ(50px);\n    width: 90px;\n    height: 60px;\n    border-radius: 50%;\n    margin: auto;\n    background: white;\n    box-shadow: 0 -15px 30px rgba(23, 34, 45, 0.2) inset, \n                0 5px 15px rgba(23, 34, 45, 0.2);\n}\n#baymax .eye{\n    position: absolute;\n    margin-top: -4px;\n    top: 40%;\n    left: 50%;\n    width: 8px;\n    height: 9px;\n    border-radius: 50%;\n    background: #202b36;\n    animation: blink 5s ease-in-out infinite\n}\n@keyframes blink{\n  0%{\n    transform: scale( 1 , 1 )\n  }\n  49%{\n    transform: scale( 1 , 1 )\n  }\n  50%{\n    transform: scale( 1 , 0.1 )\n  }\n  51%{\n    transform: scale( 1 , 1 )\n  }\n  60%{\n    transform: scale( 1 , 1 )\n  }\n  61%{\n    transform: scale( 1 , 0.1 )\n  }\n  62%{\n    transform: scale( 1 , 1 )\n  }\n  100%{\n    transform: scale( 1 , 1 )\n  }\n}\n\n#baymax .left{\n    margin-left: -27px;\n}\n#baymax .right{\n    margin-left: 19px;\n}\n#baymax .mouth{\n    position: absolute;\n    width: 38px;\n    height: 1px;\n    background: #202b36;\n    top: 40%;\n    left: 50%;\n    margin-left: -19px;\n}\n\n.body{\n    position: relative;\n}\n.body .chest{\n    position: absolute;\n    width: 190px;\n    height: 260px;\n    left: 50%;\n    margin-left: -95px;\n    background: rgba(255,255,255);\n    border-radius: 50%;\n    margin-top: -20px;\n    z-index: 3;\n}\n.body .chest > i{\n    position: absolute;\n    width: 21px;\n    height: 21px;\n    border-radius: 50%;\n    right: 30px;\n    top: 62px;\n    background: rgb(255,255,255);\n    box-shadow: 0 -5px 8px rgba(23, 34, 45, 0.15) inset, 2px 3px 2px rgba(23, 34, 45, 0.05);\n}\n.body .chest > i:before{\n    position:absolute;\n    content: \"\";\n    width: 75%;\n    height: 65%;\n    top: 15%;\n    left: 13%;\n    background-color: transparent;\n    border-radius: 50%;\n    box-shadow: 0 5px 8px rgba(23, 34, 45, 0.08) inset;\n\n}\n.body .belly{\n    z-index: 1;\n    position: absolute;\n    width: 240px;\n    height: 310px;\n    left: 50%;\n    margin-left: -120px;\n    border-radius: 50%;\n    background: rgba(255,255,255);\n    margin-top: -7px;\n    box-shadow: 0 -15px 30px rgba(23, 34, 45, 0.2) inset, \n                0 5px 15px rgba(23, 34, 45, 0.2);\n}\n.body .arm{\n    position:absolute;\n}\n.body .arm:before,\n.body .arm:after{\n    content: \"\";\n    position: absolute;\n}\n.body .arm:before{\n    border-radius: 50%;\n    width: 90px;\n    height: 200px;\n    background: rgba(255,255,255);\n}\n.body .arm.left:before{\n    left: 50%;\n    margin-left: -17px;\n    margin-top: 18px;\n    transform-origin: top center;\n    transform: rotate(27deg);\n}\n.body .arm.right:before{\n    left: 50%;\n    margin-left: 20px;\n    margin-top: 15px;\n    transform-origin: top center;\n    transform: rotate(-27deg);\n}\n.body .arm:after{\n    width: 80px;\n    height: 150px;\n    background: rgba(255,255,255);\n    border-radius: 50%;\n    box-shadow: 0 -15px 30px rgba(23, 34, 45, 0.2) inset, \n                0 5px 15px rgba(23, 34, 45, 0.2);\n}\n.body .left.arm:after{\n    margin-left: -86px;\n    margin-top: 97px;\n    transform: rotate(-7deg);\n    transform-origin: top center;\n}\n.body .right.arm:after{\n    margin-left: 101px;\n    margin-top: 97px;\n    transform: rotate(7deg);\n    transform-origin: top center;\n}\n\n.body .arm .fingers{\n    position: absolute;\n}\n.body .arm .fingers:before,\n.body .arm .fingers:after{\n    content: \"\";\n    position: absolute;\n    background: rgba(255,255,255);\n    box-shadow: 0 -15px 30px rgba(23, 34, 45, 0.2) inset, \n                0 5px 15px rgba(23, 34, 45, 0.2);\n    border-radius: 50%;\n    width: 18px;\n    height: 40px;\n    transform-origin: top center;\n}\n.body .arm.left .fingers:before{  \n    margin-left: -58px;\n    margin-top: 222px;\n    transform: rotate(-27deg);\n    z-index: 2;\n}\n.body .arm.right .fingers:before{\n    margin-left: 138px;\n    margin-top: 220px;\n    transform: rotate(22deg);\n    z-index: 2;\n}\n.body .arm.left .fingers:after{\n    margin-left: -25px;\n    margin-top: 218px;\n    transform: rotate(4deg);\n}\n.body .arm.right .fingers:after{\n    margin-left: 107px;\n    margin-top: 218px;\n    transform: rotate(-4deg);\n}\n#baymax .leg{\n    position: absolute;\n    width: 50px;\n    height: 160px;\n    background: rgba(255,255,255);\n    top: 250px;\n}\n#baymax .leg.left{\n    margin-left: 0;\n    border-bottom-right-radius: 15px;\n    box-shadow: -7px -6px 7px rgba(23, 34, 45, 0.1) inset;\n}\n#baymax .leg.right{\n    margin-left: 50px;\n    border-bottom-left-radius: 15px;\n    box-shadow: 7px -6px 7px rgba(23, 34, 45, 0.1) inset;\n}\n#baymax .leg:before{\n    content: \"\";\n    position: absolute;\n    width: 25px;\n    height: 100%;\n    background-color: white;\n}\n#baymax .leg.left:before{\n    border-bottom-left-radius: 103%;\n    margin-left: -25px;\n    box-shadow: 7px 15px 7px rgba(23, 34, 45, 0.4) inset;\n}\n#baymax .leg.right:before{\n    border-bottom-right-radius: 103%;\n    margin-left: 50px;\n    box-shadow: -7px 15px 7px rgba(23, 34, 45, 0.4) inset;\n}\n/*\u753B\u5B8C\u4E86\uFF0C\u8BA9\u4ED6\u4FDD\u62A4\u4F60\u5427\u2764*/\n";
var player = {
  id: undefined,
  time: 100,
  ui: {
    code: document.querySelector('#code'),
    writeStyle: document.querySelector('#writeStyle')
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  n: 1,
  init: function init() {
    player.ui.code.innerText = string.substr(0, player.n);
    player.ui.writeStyle.innerHTML = string.substr(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > string.length) {
      window.clearInterval(player.id);
      return;
    }

    player.ui.code.innerText = string.substr(0, player.n);
    player.ui.code.scrollTop = player.ui.code.scrollHeight;
    player.ui.writeStyle.innerHTML = string.substr(0, player.n);
  },
  play: function play() {
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 300;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 100;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();
},{}],"C:/Users/lenovo/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59202" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/lenovo/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map