'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var R$RoutingExample = require("./R.bs.js");
var Router$RoutingExample = require("./Router.bs.js");
var Navigation$RoutingExample = require("./Navigation/Navigation.bs.js");
var Main_Routes$RoutingExample = require("./Navigation/Main_Routes.bs.js");
var Main_Targets$RoutingExample = require("./Navigation/Main_Targets.bs.js");

var links = [
  [
    R$RoutingExample.link(Main_Targets$RoutingExample.root(undefined)),
    "Home"
  ],
  [
    Curry._1(R$RoutingExample.link(Main_Targets$RoutingExample.areaA(undefined)), ""),
    "Area A"
  ],
  [
    Curry._1(R$RoutingExample.link(Main_Targets$RoutingExample.areaB(undefined)), ""),
    "Area B"
  ]
];

function App(Props) {
  return React.createElement(React.Fragment, undefined, React.createElement("h1", undefined, "Routing Experiment"), React.createElement(Navigation$RoutingExample.make, {
                  links: links
                }), React.createElement(Router$RoutingExample.make, {
                  routes: Main_Routes$RoutingExample.routes
                }));
}

var make = App;

exports.links = links;
exports.make = make;
/* links Not a pure module */
