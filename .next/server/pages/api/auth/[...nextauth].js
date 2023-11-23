"use strict";
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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@next-auth/upstash-redis-adapter":
/*!***************************************************!*\
  !*** external "@next-auth/upstash-redis-adapter" ***!
  \***************************************************/
/***/ ((module) => {

module.exports = require("@next-auth/upstash-redis-adapter");

/***/ }),

/***/ "@upstash/redis":
/*!*********************************!*\
  !*** external "@upstash/redis" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@upstash/redis");

/***/ }),

/***/ "dotenv/config":
/*!********************************!*\
  !*** external "dotenv/config" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("dotenv/config");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./src/helpers/redis.ts":
/*!******************************!*\
  !*** ./src/helpers/redis.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authToken\": () => (/* binding */ authToken),\n/* harmony export */   \"fetchRedis\": () => (/* binding */ fetchRedis),\n/* harmony export */   \"upstashRedisRestUrl\": () => (/* binding */ upstashRedisRestUrl)\n/* harmony export */ });\nconst upstashRedisRestUrl = process.env.UPSTASH_REDIS_REST_URL;\nconst authToken = process.env.UPSTASH_REDIS_REST_TOKEN;\nasync function fetchRedis(command, ...args) {\n    const commandUrl = `${upstashRedisRestUrl}/${command}/${args.join(\"/\")}`;\n    const response = await fetch(commandUrl, {\n        headers: {\n            Authorization: `Bearer ${authToken}`\n        },\n        cache: \"no-store\"\n    });\n    if (!response.ok) {\n        throw new Error(`Error executing Redis command: ${response.statusText}`);\n    }\n    const data = await response.json();\n    return data.result;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvaGVscGVycy9yZWRpcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTyxNQUFNQSxzQkFBc0JDLFFBQVFDLEdBQUcsQ0FBQ0Msc0JBQXNCLENBQUM7QUFDL0QsTUFBTUMsWUFBWUgsUUFBUUMsR0FBRyxDQUFDRyx3QkFBd0IsQ0FBQztBQUl2RCxlQUFlQyxXQUNwQkMsT0FBZ0IsRUFDaEIsR0FBR0MsSUFBeUIsRUFDNUI7SUFDQSxNQUFNQyxhQUFhLENBQUMsRUFBRVQsb0JBQW9CLENBQUMsRUFBRU8sUUFBUSxDQUFDLEVBQUVDLEtBQUtFLElBQUksQ0FBQyxLQUFLLENBQUM7SUFFeEUsTUFBTUMsV0FBVyxNQUFNQyxNQUFNSCxZQUFZO1FBQ3ZDSSxTQUFTO1lBQ1BDLGVBQWUsQ0FBQyxPQUFPLEVBQUVWLFVBQVUsQ0FBQztRQUN0QztRQUNBVyxPQUFPO0lBQ1Q7SUFFQSxJQUFJLENBQUNKLFNBQVNLLEVBQUUsRUFBRTtRQUNoQixNQUFNLElBQUlDLE1BQU0sQ0FBQywrQkFBK0IsRUFBRU4sU0FBU08sVUFBVSxDQUFDLENBQUMsRUFBRTtJQUMzRSxDQUFDO0lBRUQsTUFBTUMsT0FBTyxNQUFNUixTQUFTUyxJQUFJO0lBRWhDLE9BQU9ELEtBQUtFLE1BQU07QUFDcEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWx0aW1lLWNoYXQtYXBwLy4vc3JjL2hlbHBlcnMvcmVkaXMudHM/NTZhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgdXBzdGFzaFJlZGlzUmVzdFVybCA9IHByb2Nlc3MuZW52LlVQU1RBU0hfUkVESVNfUkVTVF9VUkw7XG5leHBvcnQgY29uc3QgYXV0aFRva2VuID0gcHJvY2Vzcy5lbnYuVVBTVEFTSF9SRURJU19SRVNUX1RPS0VOO1xuXG50eXBlIENvbW1hbmQgPSAnenJhbmdlJyB8ICdzaXNtZW1iZXInIHwgJ2dldCcgfCAnc21lbWJlcnMnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hSZWRpcyhcbiAgY29tbWFuZDogQ29tbWFuZCxcbiAgLi4uYXJnczogKHN0cmluZyB8IG51bWJlcilbXVxuKSB7XG4gIGNvbnN0IGNvbW1hbmRVcmwgPSBgJHt1cHN0YXNoUmVkaXNSZXN0VXJsfS8ke2NvbW1hbmR9LyR7YXJncy5qb2luKCcvJyl9YDtcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGNvbW1hbmRVcmwsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YXV0aFRva2VufWAsXG4gICAgfSxcbiAgICBjYWNoZTogJ25vLXN0b3JlJyxcbiAgfSk7XG5cbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IgZXhlY3V0aW5nIFJlZGlzIGNvbW1hbmQ6ICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gKTtcbiAgfVxuXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgcmV0dXJuIGRhdGEucmVzdWx0O1xufVxuIl0sIm5hbWVzIjpbInVwc3Rhc2hSZWRpc1Jlc3RVcmwiLCJwcm9jZXNzIiwiZW52IiwiVVBTVEFTSF9SRURJU19SRVNUX1VSTCIsImF1dGhUb2tlbiIsIlVQU1RBU0hfUkVESVNfUkVTVF9UT0tFTiIsImZldGNoUmVkaXMiLCJjb21tYW5kIiwiYXJncyIsImNvbW1hbmRVcmwiLCJqb2luIiwicmVzcG9uc2UiLCJmZXRjaCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiY2FjaGUiLCJvayIsIkVycm9yIiwic3RhdHVzVGV4dCIsImRhdGEiLCJqc29uIiwicmVzdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/helpers/redis.ts\n");

/***/ }),

/***/ "(api)/./src/lib/auth.ts":
/*!*************************!*\
  !*** ./src/lib/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var _next_auth_upstash_redis_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @next-auth/upstash-redis-adapter */ \"@next-auth/upstash-redis-adapter\");\n/* harmony import */ var _next_auth_upstash_redis_adapter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_next_auth_upstash_redis_adapter__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/db */ \"(api)/./src/lib/db.ts\");\n/* harmony import */ var _helpers_redis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/helpers/redis */ \"(api)/./src/helpers/redis.ts\");\n/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dotenv/config */ \"dotenv/config\");\n/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dotenv_config__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n/**\n * Write a function to gets values and log errors if we don't set them.\n * So we know what the errors is in PRODUCTION.\n */ function getGoogleCredentials() {\n    const clientId = process.env.GOOGLE_CLIENT_ID;\n    const clientSecret = process.env.GOOGLE_CLIENT_SECRET;\n    if (!clientId || clientId.length === 0) {\n        throw new Error(\"Missing GOOGLE_CLIENT_ID\");\n    }\n    if (!clientSecret || clientSecret.length === 0) {\n        throw new Error(\"Missing GOOGLE_CLIENT_SECRET\");\n    }\n    return {\n        clientId,\n        clientSecret\n    };\n}\nconst authOptions = {\n    adapter: (0,_next_auth_upstash_redis_adapter__WEBPACK_IMPORTED_MODULE_0__.UpstashRedisAdapter)(_lib_db__WEBPACK_IMPORTED_MODULE_2__.db),\n    session: {\n        strategy: \"jwt\"\n    },\n    pages: {\n        signIn: \"/login\"\n    },\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: getGoogleCredentials().clientId,\n            clientSecret: getGoogleCredentials().clientSecret\n        })\n    ],\n    callbacks: {\n        async jwt ({ token , user  }) {\n            const dbUserResult = await (0,_helpers_redis__WEBPACK_IMPORTED_MODULE_3__.fetchRedis)(\"get\", `user:${token.id}`);\n            if (!dbUserResult) {\n                token.id = user.id;\n                return token;\n            }\n            const dbUser = JSON.parse(dbUserResult);\n            return {\n                id: dbUser.id,\n                name: dbUser.name,\n                email: dbUser.email,\n                picture: dbUser.image\n            };\n        },\n        async session ({ session , token  }) {\n            if (token) {\n                session.user.id = token.id;\n                session.user.name = token.name;\n                session.user.email = token.email;\n                session.user.image = token.picture;\n            }\n            return session;\n        },\n        redirect () {\n            return \"/dashboard\";\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbGliL2F1dGgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXVFO0FBRWY7QUFHMUI7QUFDZTtBQUN0QjtBQUV2Qjs7O0NBR0MsR0FDRCxTQUFTSSx1QkFBdUI7SUFDOUIsTUFBTUMsV0FBV0MsUUFBUUMsR0FBRyxDQUFDQyxnQkFBZ0I7SUFDN0MsTUFBTUMsZUFBZUgsUUFBUUMsR0FBRyxDQUFDRyxvQkFBb0I7SUFFckQsSUFBSSxDQUFDTCxZQUFZQSxTQUFTTSxNQUFNLEtBQUssR0FBRztRQUN0QyxNQUFNLElBQUlDLE1BQU0sNEJBQTRCO0lBQzlDLENBQUM7SUFFRCxJQUFJLENBQUNILGdCQUFnQkEsYUFBYUUsTUFBTSxLQUFLLEdBQUc7UUFDOUMsTUFBTSxJQUFJQyxNQUFNLGdDQUFnQztJQUNsRCxDQUFDO0lBRUQsT0FBTztRQUNMUDtRQUNBSTtJQUNGO0FBQ0Y7QUFFTyxNQUFNSSxjQUErQjtJQUMxQ0MsU0FBU2QscUZBQW1CQSxDQUFDRSx1Q0FBRUE7SUFDL0JhLFNBQVM7UUFDUEMsVUFBVTtJQUNaO0lBQ0FDLE9BQU87UUFDTEMsUUFBUTtJQUNWO0lBQ0FDLFdBQVc7UUFDVGxCLGlFQUFjQSxDQUFDO1lBQ2JJLFVBQVVELHVCQUF1QkMsUUFBUTtZQUN6Q0ksY0FBY0wsdUJBQXVCSyxZQUFZO1FBQ25EO0tBQ0Q7SUFDRFcsV0FBVztRQUNULE1BQU1DLEtBQUksRUFBRUMsTUFBSyxFQUFFQyxLQUFJLEVBQUUsRUFBRTtZQUN6QixNQUFNQyxlQUFnQixNQUFNckIsMERBQVVBLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRW1CLE1BQU1HLEVBQUUsQ0FBQyxDQUFDO1lBSWhFLElBQUksQ0FBQ0QsY0FBYztnQkFDakJGLE1BQU1HLEVBQUUsR0FBR0YsS0FBTUUsRUFBRTtnQkFFbkIsT0FBT0g7WUFDVCxDQUFDO1lBRUQsTUFBTUksU0FBU0MsS0FBS0MsS0FBSyxDQUFDSjtZQUUxQixPQUFPO2dCQUNMQyxJQUFJQyxPQUFPRCxFQUFFO2dCQUNiSSxNQUFNSCxPQUFPRyxJQUFJO2dCQUNqQkMsT0FBT0osT0FBT0ksS0FBSztnQkFDbkJDLFNBQVNMLE9BQU9NLEtBQUs7WUFDdkI7UUFDRjtRQUVBLE1BQU1qQixTQUFRLEVBQUVBLFFBQU8sRUFBRU8sTUFBSyxFQUFFLEVBQUU7WUFDaEMsSUFBSUEsT0FBTztnQkFDVFAsUUFBUVEsSUFBSSxDQUFDRSxFQUFFLEdBQUdILE1BQU1HLEVBQUU7Z0JBQzFCVixRQUFRUSxJQUFJLENBQUNNLElBQUksR0FBR1AsTUFBTU8sSUFBSTtnQkFDOUJkLFFBQVFRLElBQUksQ0FBQ08sS0FBSyxHQUFHUixNQUFNUSxLQUFLO2dCQUNoQ2YsUUFBUVEsSUFBSSxDQUFDUyxLQUFLLEdBQUdWLE1BQU1TLE9BQU87WUFDcEMsQ0FBQztZQUVELE9BQU9oQjtRQUNUO1FBRUFrQixZQUFXO1lBQ1QsT0FBTztRQUNUO0lBQ0Y7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhbHRpbWUtY2hhdC1hcHAvLi9zcmMvbGliL2F1dGgudHM/NjY5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVcHN0YXNoUmVkaXNBZGFwdGVyIH0gZnJvbSAnQG5leHQtYXV0aC91cHN0YXNoLXJlZGlzLWFkYXB0ZXInO1xuaW1wb3J0IHsgTmV4dEF1dGhPcHRpb25zIH0gZnJvbSAnbmV4dC1hdXRoJztcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZSc7XG5cbmltcG9ydCB7IFVzZXIgfSBmcm9tICdAL3R5cGVzL2RiJztcbmltcG9ydCB7IGRiIH0gZnJvbSAnQC9saWIvZGInO1xuaW1wb3J0IHsgZmV0Y2hSZWRpcyB9IGZyb20gJ0AvaGVscGVycy9yZWRpcyc7XG5pbXBvcnQgJ2RvdGVudi9jb25maWcnO1xuXG4vKipcbiAqIFdyaXRlIGEgZnVuY3Rpb24gdG8gZ2V0cyB2YWx1ZXMgYW5kIGxvZyBlcnJvcnMgaWYgd2UgZG9uJ3Qgc2V0IHRoZW0uXG4gKiBTbyB3ZSBrbm93IHdoYXQgdGhlIGVycm9ycyBpcyBpbiBQUk9EVUNUSU9OLlxuICovXG5mdW5jdGlvbiBnZXRHb29nbGVDcmVkZW50aWFscygpIHtcbiAgY29uc3QgY2xpZW50SWQgPSBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lEO1xuICBjb25zdCBjbGllbnRTZWNyZXQgPSBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVDtcblxuICBpZiAoIWNsaWVudElkIHx8IGNsaWVudElkLmxlbmd0aCA9PT0gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBHT09HTEVfQ0xJRU5UX0lEJyk7XG4gIH1cblxuICBpZiAoIWNsaWVudFNlY3JldCB8fCBjbGllbnRTZWNyZXQubGVuZ3RoID09PSAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIEdPT0dMRV9DTElFTlRfU0VDUkVUJyk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNsaWVudElkLFxuICAgIGNsaWVudFNlY3JldCxcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zOiBOZXh0QXV0aE9wdGlvbnMgPSB7XG4gIGFkYXB0ZXI6IFVwc3Rhc2hSZWRpc0FkYXB0ZXIoZGIpLFxuICBzZXNzaW9uOiB7XG4gICAgc3RyYXRlZ3k6ICdqd3QnLFxuICB9LFxuICBwYWdlczoge1xuICAgIHNpZ25JbjogJy9sb2dpbicsXG4gIH0sXG4gIHByb3ZpZGVyczogW1xuICAgIEdvb2dsZVByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBnZXRHb29nbGVDcmVkZW50aWFscygpLmNsaWVudElkLFxuICAgICAgY2xpZW50U2VjcmV0OiBnZXRHb29nbGVDcmVkZW50aWFscygpLmNsaWVudFNlY3JldCxcbiAgICB9KSxcbiAgXSxcbiAgY2FsbGJhY2tzOiB7XG4gICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIgfSkge1xuICAgICAgY29uc3QgZGJVc2VyUmVzdWx0ID0gKGF3YWl0IGZldGNoUmVkaXMoJ2dldCcsIGB1c2VyOiR7dG9rZW4uaWR9YCkpIGFzXG4gICAgICAgIHwgc3RyaW5nXG4gICAgICAgIHwgbnVsbDtcblxuICAgICAgaWYgKCFkYlVzZXJSZXN1bHQpIHtcbiAgICAgICAgdG9rZW4uaWQgPSB1c2VyIS5pZDtcblxuICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRiVXNlciA9IEpTT04ucGFyc2UoZGJVc2VyUmVzdWx0KSBhcyBVc2VyO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZDogZGJVc2VyLmlkLFxuICAgICAgICBuYW1lOiBkYlVzZXIubmFtZSxcbiAgICAgICAgZW1haWw6IGRiVXNlci5lbWFpbCxcbiAgICAgICAgcGljdHVyZTogZGJVc2VyLmltYWdlLFxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcbiAgICAgIGlmICh0b2tlbikge1xuICAgICAgICBzZXNzaW9uLnVzZXIuaWQgPSB0b2tlbi5pZDtcbiAgICAgICAgc2Vzc2lvbi51c2VyLm5hbWUgPSB0b2tlbi5uYW1lO1xuICAgICAgICBzZXNzaW9uLnVzZXIuZW1haWwgPSB0b2tlbi5lbWFpbDtcbiAgICAgICAgc2Vzc2lvbi51c2VyLmltYWdlID0gdG9rZW4ucGljdHVyZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgfSxcblxuICAgIHJlZGlyZWN0KCkge1xuICAgICAgcmV0dXJuICcvZGFzaGJvYXJkJztcbiAgICB9LFxuICB9LFxufTtcbiJdLCJuYW1lcyI6WyJVcHN0YXNoUmVkaXNBZGFwdGVyIiwiR29vZ2xlUHJvdmlkZXIiLCJkYiIsImZldGNoUmVkaXMiLCJnZXRHb29nbGVDcmVkZW50aWFscyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdPT0dMRV9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsImxlbmd0aCIsIkVycm9yIiwiYXV0aE9wdGlvbnMiLCJhZGFwdGVyIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwicGFnZXMiLCJzaWduSW4iLCJwcm92aWRlcnMiLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsInVzZXIiLCJkYlVzZXJSZXN1bHQiLCJpZCIsImRiVXNlciIsIkpTT04iLCJwYXJzZSIsIm5hbWUiLCJlbWFpbCIsInBpY3R1cmUiLCJpbWFnZSIsInJlZGlyZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/lib/auth.ts\n");

/***/ }),

/***/ "(api)/./src/lib/db.ts":
/*!***********************!*\
  !*** ./src/lib/db.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"db\": () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var _upstash_redis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @upstash/redis */ \"@upstash/redis\");\n/* harmony import */ var _upstash_redis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_upstash_redis__WEBPACK_IMPORTED_MODULE_0__);\n\nconst db = new _upstash_redis__WEBPACK_IMPORTED_MODULE_0__.Redis({\n    url: process.env.UPSTASH_REDIS_REST_URL,\n    token: process.env.UPSTASH_REDIS_REST_TOKEN\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbGliL2RiLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF1QztBQUVoQyxNQUFNQyxLQUFLLElBQUlELGlEQUFLQSxDQUFDO0lBQzFCRSxLQUFLQyxRQUFRQyxHQUFHLENBQUNDLHNCQUFzQjtJQUN2Q0MsT0FBT0gsUUFBUUMsR0FBRyxDQUFDRyx3QkFBd0I7QUFDN0MsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWx0aW1lLWNoYXQtYXBwLy4vc3JjL2xpYi9kYi50cz85ZTRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlZGlzIH0gZnJvbSAnQHVwc3Rhc2gvcmVkaXMnO1xuXG5leHBvcnQgY29uc3QgZGIgPSBuZXcgUmVkaXMoe1xuICB1cmw6IHByb2Nlc3MuZW52LlVQU1RBU0hfUkVESVNfUkVTVF9VUkwsXG4gIHRva2VuOiBwcm9jZXNzLmVudi5VUFNUQVNIX1JFRElTX1JFU1RfVE9LRU4sXG59KTtcbiJdLCJuYW1lcyI6WyJSZWRpcyIsImRiIiwidXJsIiwicHJvY2VzcyIsImVudiIsIlVQU1RBU0hfUkVESVNfUkVTVF9VUkwiLCJ0b2tlbiIsIlVQU1RBU0hfUkVESVNfUkVTVF9UT0tFTiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/lib/db.ts\n");

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].ts":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/auth */ \"(api)/./src/lib/auth.ts\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(_lib_auth__WEBPACK_IMPORTED_MODULE_1__.authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWlDO0FBRVE7QUFFekMsaUVBQWVBLGdEQUFRQSxDQUFDQyxrREFBV0EsQ0FBQ0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWx0aW1lLWNoYXQtYXBwLy4vc3JjL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0udHM/NTBhMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSAnbmV4dC1hdXRoJztcblxuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tICdAL2xpYi9hdXRoJztcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiYXV0aE9wdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();