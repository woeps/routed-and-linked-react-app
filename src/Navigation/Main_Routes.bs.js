'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Routes = require("@anuragsoni/routes/src/routes.bs.js");
var AreaA$RoutingExample = require("../AreaA/AreaA.bs.js");
var AreaB$RoutingExample = require("../AreaB/AreaB.bs.js");
var Welcome$RoutingExample = require("../Welcome.bs.js");
var Main_Targets$RoutingExample = require("./Main_Targets.bs.js");

function root(param) {
  return Routes.$at$neg$neg$great(Main_Targets$RoutingExample.root(undefined), React.createElement(Welcome$RoutingExample.make, {}));
}

function areaA(param) {
  return Routes.$at$neg$neg$great(Main_Targets$RoutingExample.areaA(undefined), (function (wildcard) {
                return React.createElement(AreaA$RoutingExample.make, {
                            matchedPath: Curry._1(Routes.sprintf(Main_Targets$RoutingExample.areaA(undefined)), ""),
                            unmatchedPath: wildcard
                          });
              }));
}

function areaB(param) {
  return Routes.$at$neg$neg$great(Main_Targets$RoutingExample.areaB(undefined), (function (wildcard) {
                return React.createElement(AreaB$RoutingExample.make, {
                            matchedPath: Curry._1(Routes.sprintf(Main_Targets$RoutingExample.areaB(undefined)), ""),
                            unmatchedPath: wildcard
                          });
              }));
}

var routes = Routes.one_of({
      hd: root(undefined),
      tl: {
        hd: areaA(undefined),
        tl: {
          hd: areaB(undefined),
          tl: /* [] */0
        }
      }
    });

var T;

exports.T = T;
exports.root = root;
exports.areaA = areaA;
exports.areaB = areaB;
exports.routes = routes;
/* routes Not a pure module */
