'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var R$RoutingExample = require("../R.bs.js");
var MyLink$RoutingExample = require("../MyLink.bs.js");
var AreaA_Targets$RoutingExample = require("./AreaA_Targets.bs.js");

var route = Curry._1(R$RoutingExample.link(AreaA_Targets$RoutingExample.section1Details(undefined)), "someId");

function AreaA_Section1_Overview(Props) {
  return React.createElement(React.Fragment, undefined, React.createElement("h3", undefined, "AreaA:Section1:Overview"), React.createElement("p", undefined, "This would usually show a list of many items"), React.createElement(MyLink$RoutingExample.make, {
                  route: route,
                  children: "Link to view a single entry in the list."
                }));
}

var make = AreaA_Section1_Overview;

exports.route = route;
exports.make = make;
/* route Not a pure module */
