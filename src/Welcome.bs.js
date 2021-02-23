'use strict';

var React = require("react");

function Welcome(Props) {
  return React.createElement("h3", undefined, "Please, select an individual ui in the navigation.");
}

var make = Welcome;

exports.make = make;
/* react Not a pure module */
