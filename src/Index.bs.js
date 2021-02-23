'use strict';

var React = require("react");
var ReactDOMRe = require("reason-react/src/legacy/ReactDOMRe.bs.js");
var App$RoutingExample = require("./App.bs.js");

ReactDOMRe.renderToElementWithId(React.createElement(App$RoutingExample.make, {}), "root");

/*  Not a pure module */
