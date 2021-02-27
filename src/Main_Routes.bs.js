'use strict';

var React = require("react");
var AreaA$RoutingExample = require("./AreaA/AreaA.bs.js");
var AreaB$RoutingExample = require("./AreaB/AreaB.bs.js");
var Welcome$RoutingExample = require("./Welcome.bs.js");
var MyRoutes$RoutingExample = require("./MyRoutes.bs.js");
var Main_Targets$RoutingExample = require("./Main_Targets.bs.js");

function root(param) {
  return MyRoutes$RoutingExample.handle(Main_Targets$RoutingExample.root(undefined), React.createElement(Welcome$RoutingExample.make, {}));
}

function areaA(param) {
  return MyRoutes$RoutingExample.handleSub(Main_Targets$RoutingExample.areaA(undefined), React.createElement(AreaA$RoutingExample.make, {}));
}

function areaB(param) {
  return MyRoutes$RoutingExample.handleSub(Main_Targets$RoutingExample.areaB(undefined), React.createElement(AreaB$RoutingExample.make, {}));
}

var routes = MyRoutes$RoutingExample.one_of([
      root(undefined),
      areaA(undefined),
      areaB(undefined)
    ]);

var T;

exports.T = T;
exports.root = root;
exports.areaA = areaA;
exports.areaB = areaB;
exports.routes = routes;
/* routes Not a pure module */
