/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/now-playing/route";
exports.ids = ["app/api/now-playing/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "(rsc)/../../node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fnow-playing%2Froute&page=%2Fapi%2Fnow-playing%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fnow-playing%2Froute.ts&appDir=%2FUsers%2Fphilipgizzie%2FDownloads%2Funtitled%20folder%207%2Fhotmess-ultimate%2Fapps%2Fweb%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fphilipgizzie%2FDownloads%2Funtitled%20folder%207%2Fhotmess-ultimate%2Fapps%2Fweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fnow-playing%2Froute&page=%2Fapi%2Fnow-playing%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fnow-playing%2Froute.ts&appDir=%2FUsers%2Fphilipgizzie%2FDownloads%2Funtitled%20folder%207%2Fhotmess-ultimate%2Fapps%2Fweb%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fphilipgizzie%2FDownloads%2Funtitled%20folder%207%2Fhotmess-ultimate%2Fapps%2Fweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/../../node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/../../node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/../../node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_philipgizzie_Downloads_untitled_folder_7_hotmess_ultimate_apps_web_app_api_now_playing_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/now-playing/route.ts */ \"(rsc)/./app/api/now-playing/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/now-playing/route\",\n        pathname: \"/api/now-playing\",\n        filename: \"route\",\n        bundlePath: \"app/api/now-playing/route\"\n    },\n    resolvedPagePath: \"/Users/philipgizzie/Downloads/untitled folder 7/hotmess-ultimate/apps/web/app/api/now-playing/route.ts\",\n    nextConfigOutput,\n    userland: _Users_philipgizzie_Downloads_untitled_folder_7_hotmess_ultimate_apps_web_app_api_now_playing_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1hcHAtbG9hZGVyL2luZGV4LmpzP25hbWU9YXBwJTJGYXBpJTJGbm93LXBsYXlpbmclMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRm5vdy1wbGF5aW5nJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGbm93LXBsYXlpbmclMkZyb3V0ZS50cyZhcHBEaXI9JTJGVXNlcnMlMkZwaGlsaXBnaXp6aWUlMkZEb3dubG9hZHMlMkZ1bnRpdGxlZCUyMGZvbGRlciUyMDclMkZob3RtZXNzLXVsdGltYXRlJTJGYXBwcyUyRndlYiUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZwaGlsaXBnaXp6aWUlMkZEb3dubG9hZHMlMkZ1bnRpdGxlZCUyMGZvbGRlciUyMDclMkZob3RtZXNzLXVsdGltYXRlJTJGYXBwcyUyRndlYiZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDc0Q7QUFDbkk7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG90bWVzcy11bHRpbWF0ZS13ZWIvPzRiZDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9waGlsaXBnaXp6aWUvRG93bmxvYWRzL3VudGl0bGVkIGZvbGRlciA3L2hvdG1lc3MtdWx0aW1hdGUvYXBwcy93ZWIvYXBwL2FwaS9ub3ctcGxheWluZy9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvbm93LXBsYXlpbmcvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9ub3ctcGxheWluZ1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvbm93LXBsYXlpbmcvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvcGhpbGlwZ2l6emllL0Rvd25sb2Fkcy91bnRpdGxlZCBmb2xkZXIgNy9ob3RtZXNzLXVsdGltYXRlL2FwcHMvd2ViL2FwcC9hcGkvbm93LXBsYXlpbmcvcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/../../node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fnow-playing%2Froute&page=%2Fapi%2Fnow-playing%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fnow-playing%2Froute.ts&appDir=%2FUsers%2Fphilipgizzie%2FDownloads%2Funtitled%20folder%207%2Fhotmess-ultimate%2Fapps%2Fweb%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fphilipgizzie%2FDownloads%2Funtitled%20folder%207%2Fhotmess-ultimate%2Fapps%2Fweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(ssr)/../../node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!**********************************************************************************************************!*\
  !*** ../../node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \**********************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./app/api/now-playing/route.ts":
/*!**************************************!*\
  !*** ./app/api/now-playing/route.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/../../node_modules/next/dist/api/server.js\");\n\n// Configurable endpoints\nconst STATUS_URL = process.env.RADIOKING_STATUS_URL || 'https://listen.radioking.com/radio/736103/track/now';\nconst STREAM_URL = \"https://listen.radioking.com/radio/736103/stream/802454\" || 0;\nasync function GET() {\n    try {\n        const r = await fetch(STATUS_URL, {\n            cache: 'no-store'\n        });\n        const data = await r.json().catch(()=>null);\n        // Normalize common shapes\n        const title = data?.title || data?.now?.song?.title || 'Live Stream';\n        const artist = data?.artist || data?.now?.song?.artist || 'HOTMESS Radio';\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            title,\n            artist,\n            stream: STREAM_URL\n        });\n    } catch  {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            title: 'Live Stream',\n            artist: 'HOTMESS Radio',\n            stream: STREAM_URL\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL25vdy1wbGF5aW5nL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTBDO0FBRTFDLHlCQUF5QjtBQUN6QixNQUFNQyxhQUFhQyxRQUFRQyxHQUFHLENBQUNDLG9CQUFvQixJQUFJO0FBQ3ZELE1BQU1DLGFBQWFILHlEQUFvQyxJQUFJLENBQXlEO0FBRTdHLGVBQWVLO0lBQ3BCLElBQUc7UUFDRCxNQUFNQyxJQUFJLE1BQU1DLE1BQU1SLFlBQVk7WUFBRVMsT0FBTztRQUFXO1FBQ3RELE1BQU1DLE9BQU8sTUFBTUgsRUFBRUksSUFBSSxHQUFHQyxLQUFLLENBQUMsSUFBSTtRQUN0QywwQkFBMEI7UUFDMUIsTUFBTUMsUUFBUUgsTUFBTUcsU0FBU0gsTUFBTUksS0FBS0MsTUFBTUYsU0FBUztRQUN2RCxNQUFNRyxTQUFTTixNQUFNTSxVQUFVTixNQUFNSSxLQUFLQyxNQUFNQyxVQUFVO1FBQzFELE9BQU9qQixxREFBWUEsQ0FBQ1ksSUFBSSxDQUFDO1lBQUVFO1lBQU9HO1lBQVFDLFFBQVFiO1FBQVc7SUFDL0QsRUFBQyxPQUFLO1FBQ0osT0FBT0wscURBQVlBLENBQUNZLElBQUksQ0FBQztZQUFFRSxPQUFNO1lBQWVHLFFBQU87WUFBaUJDLFFBQVFiO1FBQVc7SUFDN0Y7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2hvdG1lc3MtdWx0aW1hdGUtd2ViLy4vYXBwL2FwaS9ub3ctcGxheWluZy9yb3V0ZS50cz9jMjlkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJ1xuXG4vLyBDb25maWd1cmFibGUgZW5kcG9pbnRzXG5jb25zdCBTVEFUVVNfVVJMID0gcHJvY2Vzcy5lbnYuUkFESU9LSU5HX1NUQVRVU19VUkwgfHwgJ2h0dHBzOi8vbGlzdGVuLnJhZGlva2luZy5jb20vcmFkaW8vNzM2MTAzL3RyYWNrL25vdydcbmNvbnN0IFNUUkVBTV9VUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19SQURJT19TVFJFQU0gfHwgJ2h0dHBzOi8vbGlzdGVuLnJhZGlva2luZy5jb20vcmFkaW8vNzM2MTAzL3N0cmVhbS84MDI0NTQnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKXtcbiAgdHJ5e1xuICAgIGNvbnN0IHIgPSBhd2FpdCBmZXRjaChTVEFUVVNfVVJMLCB7IGNhY2hlOiAnbm8tc3RvcmUnIH0pXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHIuanNvbigpLmNhdGNoKCgpPT5udWxsKVxuICAgIC8vIE5vcm1hbGl6ZSBjb21tb24gc2hhcGVzXG4gICAgY29uc3QgdGl0bGUgPSBkYXRhPy50aXRsZSB8fCBkYXRhPy5ub3c/LnNvbmc/LnRpdGxlIHx8ICdMaXZlIFN0cmVhbSdcbiAgICBjb25zdCBhcnRpc3QgPSBkYXRhPy5hcnRpc3QgfHwgZGF0YT8ubm93Py5zb25nPy5hcnRpc3QgfHwgJ0hPVE1FU1MgUmFkaW8nXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgdGl0bGUsIGFydGlzdCwgc3RyZWFtOiBTVFJFQU1fVVJMIH0pXG4gIH1jYXRjaHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyB0aXRsZTonTGl2ZSBTdHJlYW0nLCBhcnRpc3Q6J0hPVE1FU1MgUmFkaW8nLCBzdHJlYW06IFNUUkVBTV9VUkwgfSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIlNUQVRVU19VUkwiLCJwcm9jZXNzIiwiZW52IiwiUkFESU9LSU5HX1NUQVRVU19VUkwiLCJTVFJFQU1fVVJMIiwiTkVYVF9QVUJMSUNfUkFESU9fU1RSRUFNIiwiR0VUIiwiciIsImZldGNoIiwiY2FjaGUiLCJkYXRhIiwianNvbiIsImNhdGNoIiwidGl0bGUiLCJub3ciLCJzb25nIiwiYXJ0aXN0Iiwic3RyZWFtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/now-playing/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/../../node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fnow-playing%2Froute&page=%2Fapi%2Fnow-playing%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fnow-playing%2Froute.ts&appDir=%2FUsers%2Fphilipgizzie%2FDownloads%2Funtitled%20folder%207%2Fhotmess-ultimate%2Fapps%2Fweb%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fphilipgizzie%2FDownloads%2Funtitled%20folder%207%2Fhotmess-ultimate%2Fapps%2Fweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();