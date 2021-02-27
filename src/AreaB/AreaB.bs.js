'use strict';

var React = require("react");
var Routes = require("@anuragsoni/routes/src/routes.bs.js");
var Router$RoutingExample = require("../Router.bs.js");

function AreaB(Props) {
  return React.createElement(React.Fragment, undefined, React.createElement("h2", undefined, "Area B"), React.createElement(Router$RoutingExample.make, {
                  routes: Routes.one_of(/* [] */0)
                }));
}

var make = AreaB;

exports.make = make;
/* react Not a pure module */
