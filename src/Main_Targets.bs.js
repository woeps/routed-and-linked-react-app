'use strict';

var MyRoutes$RoutingExample = require("./MyRoutes.bs.js");

function root(param) {
  return MyRoutes$RoutingExample.empty;
}

function areaA(param) {
  return MyRoutes$RoutingExample.finalSlash((function (param) {
                return MyRoutes$RoutingExample.s("a", param);
              }), MyRoutes$RoutingExample.wildcard);
}

function areaB(param) {
  return MyRoutes$RoutingExample.finalSlash((function (param) {
                return MyRoutes$RoutingExample.s("b", param);
              }), MyRoutes$RoutingExample.wildcard);
}

exports.root = root;
exports.areaA = areaA;
exports.areaB = areaB;
/* MyRoutes-RoutingExample Not a pure module */
