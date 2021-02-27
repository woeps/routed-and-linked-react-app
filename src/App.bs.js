'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Routes = require("@anuragsoni/routes/src/routes.bs.js");
var Router$RoutingExample = require("./Router.bs.js");
var MyRoutes$RoutingExample = require("./MyRoutes.bs.js");
var Navigation$RoutingExample = require("./Navigation/Navigation.bs.js");
var Main_Routes$RoutingExample = require("./Main_Routes.bs.js");
var Main_Targets$RoutingExample = require("./Main_Targets.bs.js");

var links = [
  [
    MyRoutes$RoutingExample.link(Main_Targets$RoutingExample.root(undefined)),
    "Home"
  ],
  [
    Curry._1(MyRoutes$RoutingExample.link(Main_Targets$RoutingExample.areaA(undefined)), Routes.Parts.of_parts("")),
    "Area A"
  ],
  [
    Curry._1(MyRoutes$RoutingExample.link(Main_Targets$RoutingExample.areaB(undefined)), Routes.Parts.of_parts("")),
    "Area B"
  ]
];

function App(Props) {
  return React.createElement(React.Fragment, undefined, React.createElement("h1", undefined, "Routing Experiment - Detailed Wildcard"), React.createElement(Navigation$RoutingExample.make, {
                  links: links
                }), React.createElement(Router$RoutingExample.make, {
                  routes: Main_Routes$RoutingExample.routes
                }));
}

var make = App;

exports.links = links;
exports.make = make;
/* links Not a pure module */
