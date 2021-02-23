'use strict';

var Routes = require("@anuragsoni/routes/src/routes.bs.js");

function root(param) {
  return Routes.empty;
}

function areaA(param) {
  return Routes.$slash$question((function (param) {
                return Routes.s("a", param);
              }), Routes.wildcard);
}

function areaB(param) {
  return Routes.$slash$question((function (param) {
                return Routes.s("b", param);
              }), Routes.wildcard);
}

exports.root = root;
exports.areaA = areaA;
exports.areaB = areaB;
/* Routes Not a pure module */
