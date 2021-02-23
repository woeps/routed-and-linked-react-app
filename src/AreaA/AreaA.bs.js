'use strict';

var React = require("react");
var R$RoutingExample = require("../R.bs.js");
var Router$RoutingExample = require("../Router.bs.js");
var Navigation$RoutingExample = require("../Navigation/Navigation.bs.js");
var AreaA_Routes$RoutingExample = require("./AreaA_Routes.bs.js");
var AreaA_Targets$RoutingExample = require("./AreaA_Targets.bs.js");

var links = [[
    R$RoutingExample.link(AreaA_Targets$RoutingExample.section1Overview(undefined)),
    "Section 1"
  ]];

function AreaA(Props) {
  var matchedPath = Props.matchedPath;
  var unmatchedPath = Props.unmatchedPath;
  return React.createElement(React.Fragment, undefined, React.createElement("h2", undefined, "Area A[matchedPath=" + matchedPath + " | unmatchedPath=" + unmatchedPath + "]"), React.createElement(Navigation$RoutingExample.make, {
                  links: links,
                  routerPrefixHack: matchedPath
                }), React.createElement(Router$RoutingExample.make, {
                  pathPrefix: matchedPath,
                  path: unmatchedPath,
                  notFound: "Please select a section in the menu.",
                  routes: AreaA_Routes$RoutingExample.routes
                }));
}

var make = AreaA;

exports.links = links;
exports.make = make;
/* links Not a pure module */
