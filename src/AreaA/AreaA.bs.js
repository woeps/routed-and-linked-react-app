'use strict';

var React = require("react");
var Router$RoutingExample = require("../Router.bs.js");
var MyRoutes$RoutingExample = require("../MyRoutes.bs.js");
var Navigation$RoutingExample = require("../Navigation/Navigation.bs.js");
var AreaA_Routes$RoutingExample = require("./AreaA_Routes.bs.js");
var AreaA_Targets$RoutingExample = require("./AreaA_Targets.bs.js");

var links = [[
    MyRoutes$RoutingExample.link(AreaA_Targets$RoutingExample.section1Overview(undefined)),
    "Section 1"
  ]];

function AreaA(Props) {
  return React.createElement(React.Fragment, undefined, React.createElement("h2", undefined, "Area A"), React.createElement(Navigation$RoutingExample.make, {
                  links: links
                }), React.createElement(Router$RoutingExample.make, {
                  notFound: "Please select a section in the menu.",
                  routes: AreaA_Routes$RoutingExample.routes
                }));
}

var make = AreaA;

exports.links = links;
exports.make = make;
/* links Not a pure module */
